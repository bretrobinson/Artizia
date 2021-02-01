const sql = require("./db.js");
const async = require('async');


const ItemModel=function(itemmodel){
    this.id=itemmodel.id;
    this.name=itemmodel.name;
    this.categoryId=itemmodel.categoryId;
    this.createdDate=itemmodel.createdDate;
    this.desc=itemmodel.desc;
    this.imageUrl=itemmodel.imageUrl;
    this.price=itemmodel.price;
    this.userId-itemmodel.userId;
}

    //Get user item 
    ItemModel.findByUserId=(userId,result)=>{
        console.log("sql find ByUserId>>>>>>" + userId);
        sql.query(`select id, name, categoryId, createdDate, price, userId FROM Item WHERE userId =${userId}`, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
              }
          
              if (res.length) {
                console.log("found item: ", res[0]);
                result(null, res[0]);
                return;
              }
          
              // not found Customer with the id
              result({ kind: "not_found" }, null);
            });
          };    // Delete user item
    ItemModel.delete = (userid,itemid, result) => {
 
    sql.query(`DELETE FROM Item WHERE id =${itemid} AND userid=${userid}`, (err, res) => {
     
        if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found Item with the id
        result({ kind: "not_found" }, null);
        return;
      }
       result(null, res);
    });
  };
  

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