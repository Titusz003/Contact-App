import multer from "multer";

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "contactImages");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const imageFileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
    req.fileValidationError = "You can upload only image files";
    return cb(null, false, req.fileValidationError);
  }
  cb(null, true);
};
export const upload = multer({ storage: storage, fileFilter: imageFileFilter });

export default upload;
