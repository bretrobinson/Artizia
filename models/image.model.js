const sql = require("./db.js");
const cloudinary = require('./cloudinary.js');
const streamifier = require('streamifier');
const { image } = require("./cloudinary.js");

const ImageModel=function(imageModel){
    this.createdDate=imagemodel.createdDate;
    this.imageUrl=imagemodel.imageUrl;
    this.itemId=imageModel.itemId;
}

ImageModel.uploadImageToItem = (req, result) => {

    let streamUpload = (req) => {
        return new Promise((resolve, reject) => {

            let stream = cloudinary.uploader.upload_stream(
              (err, res) => {
                if (res) {            
                  resolve(res);
                } else {
                  reject(err);
                }
              }
            );
    
           streamifier.createReadStream(req.file.buffer).pipe(stream);
        });
    };
    
    async function upload(req) {
        let result = await streamUpload(req);
        return result;
    }
    
    upload(req)
    .then((imageResult) => {
        const newImage = {
            createdDate:new Date().toISOString().slice(0, 19).replace('T', ' '),
            url:imageResult.url,
            itemId:req.params.itemid,
        };

        sql.query("INSERT INTO Image SET ?", newImage, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
        
            console.log("created image: ", { id: res.insertId, ...newImage });
            result(null, { id: res.insertId, ...newImage });           
        })
    })
    .catch(err => {
        result(err, null);
    })

    // sql.query("INSERT INTO reviewItem SET ?", newItemReview, (err, res) => {
    //     if (err) {
    //       console.log("error: ", err);
    //       result(err, null);
    //       return;
    //     }
    
    //     console.log("created item review: ", { id: res.insertId, ...newItemReview});
    //     result(null, { id: res.insertId, ...newItemReview });
    // });
};

module.exports = ImageModel;