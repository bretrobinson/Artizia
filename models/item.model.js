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

    ItemModel.delete = (userid,itemid, result) => {
        console.log("Delete sql item_id>>>oooo" + itemid  );
        console.log("Delete sql user_id>>>oooo" + userid  );
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
  
      console.log("deleted item with id: ", itemid);
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
                const itemSql = `select it.*, im.url as imageUrl
                from Item it
                inner join Image im on it.id = im.itemId
                where it.categoryId = ${category.id} 
                    and (it.name like '%${searchTerm}%' or it.desc like '%${searchTerm}%')
                    and im.id = (
                        select min(minCreateDate.id)
                        from    (
                                    select min(firstImage.createdDate), firstImage.id
                                    from Image firstImage
                                    where it.id = firstImage.itemId
                                ) as minCreateDate
                        )
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