const express = require('express');
const async = require('async');

router = express.Router();

router.get('/mostRecentItemsInCategories/:searchTerm/:numberOfMostRecentItems', (req, res) => {
    const categorySql = `select distinct cat.*
                            from Category cat
                            inner join Item it on cat.id = it.categoryId 
                            where it.name like '%${req.params.searchTerm}%' 
                                or it.desc like '%${req.params.searchTerm}%'                            
                        `;

    db.query(categorySql, function(err, categories, fields) {
        if (err) throw err;

        const mostRecentItemsInCategories = [];

          async.each(categories, (category, callback) => {
            const itemSql = `select *
                                from Item it
                                where it.categoryId = ${category.id} and (it.name like '%${req.params.searchTerm}%' 
                                    or it.desc like '%${req.params.searchTerm}%')
                                order by createdDate desc
                                limit ${ req.params.numberOfMostRecentItems }`


            db.query(itemSql, (err, items, fields) => {
                mostRecentItemsInCategories.push({
                    category: category,
                    mostRecentItems: items
                });

                callback();
            });
        }, err => {
            if (err) throw err;

            res.send({
                status: 200,
                data: mostRecentItemsInCategories, 
                message: 'Most recent items in categories retrieved successfully'
            }); 
        });
    });
});

module.exports = router;