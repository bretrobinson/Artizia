const sql = require("./db.js");
const async = require('async');

var ItemModel = function(item){

}

ItemModel.findMostRecentItemsByCategoryMatchingSearchTerm=function(searchTerm, numberOfMostRecentItems, result){    
    const categorySql = `select distinct cat.*
                            from Category cat
                            inner join Item it on cat.id = it.categoryId 
                            where it.name like '%${searchTerm}%' 
                                or it.desc like '%${searchTerm}%'                            
                            `;
    sql.query(categorySql, function(err, categories, fields) {
        if (err) return result(err,null);

        const mostRecentItemsByCategoryMatchingSearchTerm = [];

            async.each(categories, (category, callback) => {
            const itemSql = `select *
                                from Item it
                                where it.categoryId = ${category.id} and (it.name like '%${searchTerm}%' 
                                    or it.desc like '%${searchTerm}%')
                                order by createdDate desc
                                limit ${ numberOfMostRecentItems }`


            sql.query(itemSql, (err, items, fields) => {
                mostRecentItemsByCategoryMatchingSearchTerm.push({
                    category: category,
                    mostRecentItems: items
                });

                callback();
            });
        }, err => {
            if (err) return result(err,null);

            return result(null, mostRecentItemsByCategoryMatchingSearchTerm);
        });
    });
}

module.exports=ItemModel;