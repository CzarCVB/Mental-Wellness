const mongoose = require('mongoose');
const sectionData = require('./sectionData')
const Blog = require('../models/Blogsections')

mongoose.connect('mongodb+srv://members:9582533456@cluster0.03rdy.mongodb.net/Mental_Wellness', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true
});

const seedDB = async () => {
    const db = await mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
      console.log("Connection Done");
    });
    await Blog.deleteMany({});
    for(let i=0;i<5;i++){
        const blog = new Blog(sectionData[i])
        await blog.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
  })