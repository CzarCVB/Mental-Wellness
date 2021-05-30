const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title:String,
    about:String,
    blog:[
        {
            name:String,
            date:String,
            para1:String,
            para2:String,            
            para3:String,
            subheading1:String,
            subpara1:String,
            subpara2:String,
        }
    ]
})

module.exports= mongoose.model('Blog',blogSchema);