const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const stream = require("stream");
const path = require("path");
const { google } = require("googleapis");

/*
const Post = require('./models/Post')
routes.post('/posts', multer(multerConfig).single('file'), async (req, res) => {
    const { originalname: name, size, filename: key } = req.file;

    const post = Post.create({
        name,
        size,
        key,
        url:'',
    })

    return res.json(post);
});

routes.post('/upload', multer(multerConfig).single('file'), async (req, res) => {
    const { originalname: name, size, filename: key } = req.file;

    const post2 = Post.create({
        name,
        size,
        key,
        url:'',
    })

    return res.json(post2);
});*/

//Google API inicio

const upload = multer();

const KEYFILEPATH = path.join(__dirname, "credentials.json");
const SCOPES = ["https://www.googleapis.com/auth/drive"];

const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES,
});

routes.post("/upload", upload.any(), async (req, res) => {
    try {
      console.log(req.body);
      console.log(req.files);
      const { body, files } = req;
  
      for (let f = 0; f < files.length; f += 1) {
        await uploadFile(files[f]);
      }
  
      console.log(body);
      res.status(200).send("Form Submitted");
    } catch (f) {
      res.send(f.message);
    }
  });

  const uploadFile = async (fileObject) => {
    const bufferStream = new stream.PassThrough();
    bufferStream.end(fileObject.buffer);
    const { data } = await google.drive({ version: "v3", auth }).files.create({
      media: {
        mimeType: fileObject.mimeType,
        body: bufferStream,
      },
      requestBody: {
        name: fileObject.originalname,
        parents: ["1ziT3fdswicbGlbZO0ShSbjf35pH0ALAi"],
      },
      fields: "id,name",
    });
    console.log(`Uploaded file ${data.name} ${data.id}`);
  };

  //Google API fim

module.exports = routes;