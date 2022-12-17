const express=require('express')
var mongoose = require('mongoose')
// const functions=require("firebase-functions")
const { addblog } = require('./controller/blogcontroller')
const app=express()
const BodyParser=require('body-parser')
const Router=express.Router()
const Blog=require('./model/model')
const path=require("path")
var cors = require('cors')
// const app = express();
require("dotenv").config({ path: "./config.env" });

console.log(process.env.LOCALPORT)
const corsOpts = {
    // origin: 'http://localhost:3000',
    origin: process.env.LOCALPORT,
    credentials: true,
    methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
    allowedHeaders: ['Content-Type'],
    exposedHeaders: ['Content-Type']
};
app.use(cors(corsOpts));
// require("dotenv").config({ path: "./config.env" });
const port=process.env.PORT
app.listen(port,()=>{
    
    console.log(`server started on ${port}`)
    
})
app.use(BodyParser.urlencoded({ extended: true }));
app.use(express.json());
require('./db/Db')
// require('./model/model')
// require('./controller/blogcontroller')


// Router.route('/new/addblog').post(addblog)

// router.get('/new/addblog', (req, res)=>{
    // const {title,text}=req.body
    // console.log(req.body)
    // const blog= await Blog.create({
    //     title,
    //     text
    // })

    // console.log(blog)
    // console.log('blog')


    // res.send({
    //     message:"blog Added Successfully",
    //     blog
    // })

    // res.send('POST route on things.');
//  });




// if(process.env.NODE_ENV==="PRODUCTION"){

//     require("dotenv").config({ path: "./config.env" });
// }

// const db=process.env.DB
// console.log(db)






app.post('/new/addblog', async(req, res)=>{
    

      const {title,text}=req.body
    console.log(req.body)
    const blog= await Blog.create({
        title,
        text
    })

    console.log(blog)
    console.log('blog')


    res.send({
        message:"blog Added Successfully",
        blog
    })
});


 
app.get('/getblog', async(req, res)=>{
    
const blog=await Blog.find()
  res.send({
      message:"blog fetched Successfully",
      blog
  })
});



app.post('/viewblog:id', async(req, res)=>{
    const id=req.params.id
    
    
    console.log(id)
    
    const blog=await Blog.findById(id)
      res.send({
          message:"blog viewed Successfully",
          blog
      })
    });
    

    
    
    
    // if (process.env.NODE_ENV === "PRODUCTION") {
    //     // app.use(express.static('frontend/build'))
    //     app.use(express.static(path.join(__dirname, 'frontend/build')))
    //     // app.get('*', (req, res) => {
    //     //   res.sendFile(path.join(__dirname + 'frontend/build/index.html'));
    //     //   });
    //     app.get('*', (req, res) => {
    //         res.sendFile(path.resolve(__dirname, 'frontend/build/index.html'))
    //     })
    //   }

      