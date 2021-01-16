module.exports = app => {
    const item = require("../controllers/item.controller.js");

    // Find items that match search term
    app.get("/api/mostRecentItemsByCategoryMatchingSearchTerm/:searchTerm/:numberOfMostRecentItems", item.findMostRecentItemsByCategoryMatchingSearchTerm);
}; 