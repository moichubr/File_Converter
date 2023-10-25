const multer = require("multer")

function uploadFile () {
    const storage = multer.diskStorage({
        destination:'../../frontend/public/files',
        filename: function (_req, file, cb) {
          var extention = file.originalname.slice((file.originalname.lastIndexOf('.'))) //saco la extension del archivo para el nombre
          cb(null, Date.now() + extention) //date.now ayuda a generar un nombre único ya que toma la hora exacta con miliseg en que fue cargado el archivo
        }
      })
      
      const upload = multer({ storage: storage }).single('file')
      return upload
}

module.exports = uploadFile