const express = require('express')
const app= express()
const session = require('express-session')
const mongoose = require('mongoose')
const passport = require('passport')
const localStratergy = require('passport-local')
const User = require('./models/user')
const Blog = require('./models/Blogsections')
const cors = require('cors')
const flash = require('connect-flash')
const cookieParser = require('cookie-parser')

mongoose.connect('mongodb+srv://members:9582533456@cluster0.03rdy.mongodb.net/Mental_Wellness',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connection Done");
});
mongoose.set('useFindAndModify', false);


const sessionConfig ={
    secret:'secret',
    resave:false,
    saveUninitialized:true,
    cookie:{
        httpOnly:false,
        expires:Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        domain: undefined,
        sameSite: false
    }
}
app.use(cors())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(session(sessionConfig));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStratergy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/test',(req,res)=>{
    res.send("Working")
})

app.post('/login',passport.authenticate('local',({failureFlash:true,failureRedirect:'/login'})),async(req,res)=>{
    try{
        res.json(req.session);
    }catch(e){
        res.json("Invalid username or password")
    }
})

app.post('/signup',async(req,res)=>{
    try{
        const {email , username , password}=req.body;
        const user = new User({email,username});
        const newUser = await User.register(user,password);
        req.login(newUser, err=>{
            if(err)
                return next(err);
                res.status(200).send("User created");
         })
    }catch(e){
        console.log(e.message);
    }   
})

app.get('/logout',(req,res)=>{
    req.logout();
    res.json(req.session);
})

app.get('/blog/:section', async(req,res)=>{
    const {section} = req.params;
    const data = await Blog.findOne({title: section}) ;
    res.send(data);
})

app.listen(3000,()=>{
    console.log('Server started')
})