
const express = require('express')
const path = require('path')
const multer  = require('multer')
const {mergePdf} = require('./mergepdf')
const upload = multer({ dest: 'uploads/' }) // uploaded files's destination is 'uploads' folder
const port = 3000
const app = express()
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  // res.send('Hello World!');
  res.sendFile(path.join(__dirname , "./templates/index.html"));
})

app.post('/merge', upload.array('pdfs', 2), async (req, res, next) =>{ // without async , we were getting redirected to http://localhost:3000/static/merged.pdf
  // console.log(req) ;
  // console.log(req.files);
  let d = await mergePdf(path.join(__dirname , req.files[0].path),path.join(__dirname , req.files[1].path)) ;
  // res.send({data:req.files})
  res.redirect(`http://localhost:3000/static/${d}.pdf`) ;
})

app.listen(port, () => {
  console.log(`Example app listening on port on http://localhost:${port}`)
})