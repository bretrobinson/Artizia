const ItemModel= require("../models/item.model.js");


// Delete a Myitem with the specified userId and itemId in the request
exports.deleteMyitem = (req, res) => {
  ItemModel.delete(req.params.itemid,req.params.userid, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Item with id ${req.params.itemid}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete My item with id " + req.params.itemid
        });
      }
    } else res.send({ message: `My item was deleted successfully!` });
  });
};

exports.findMostRecentItemsByCategoryMatchingSearchTerm = (req, res) => {
   
  // Validate request
//   if (!req.params.searchTerm) {
    
//     res.status(400).send({
//       message: "Need search term!"
//     });
//   }
  // Create a category model
//   const categoryModel = new  CategoryModel ({
//     id:req.params.id,
//     name:req.params.name,
//   });

   // Find most recent items matching search term
   ItemModel.findMostRecentItemsByCategoryMatchingSearchTerm(req.params.searchTerm, req.params.numberOfMostRecentItems, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while finding most recent items by category matching search term."
      });
    else res.send(data);
  });
};