module.exports = app => {
    const announcementWrite = require("../controllers/announcementWriteController");
// Create a new Announcement
app.post("/announcement", announcementWrite.create);
}; 