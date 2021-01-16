const ItemModel= require("../models/item.model.js");

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