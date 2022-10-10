const multer = require('koa-multer')

const storage = multer.diskStorage({
    destination: function (ctx, file, cb) {
        cb(null, "public/images")
    },
    filename: function (ctx, file, cb) {
        let fileFormat = (file.originalname).split('.');
        cb(null, 'img-' + Date.now() + '.' + fileFormat[fileFormat.length - 1])
    }
})

let upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024
    }
    
}).single('pic')

module.exports = upload


