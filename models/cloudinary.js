const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'dbnxcirvs', 
    api_key: '364559396152663', 
    api_secret: 'YSlgLfy2GSYArlYRm0PBmSEQO1k'     
  });

module.exports = cloudinary;


