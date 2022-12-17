const Blog=require("../model/model")
exports.addblog=async(req,res)=>{
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




}

