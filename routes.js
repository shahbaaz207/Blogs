const express = require('express');
const Post = require('./models/schema')
const Post2=require('./models/schema')
const routes = express.Router();

// routes
routes.get('/', (req, res) => {
    Post.find({}, (err, posts) => {
        res.render('home', { posts: posts })
    })

})
routes.get('/', (req, res) => {
    Post.find({}, (err, posts) => {
        res.render('home', { posts: posts })
    })

})
routes.get('/create_blog', (req, res) => {
    res.render('create_blog')

})
routes.get('/blogs', (req, res) => {
    Post.find({}, (err, posts) => {
        res.render('blogs', { posts: posts })
    })

})


routes.post('/post', (req, res) => {

    var data = new Post({
        author: req.body.author,
        description: req.body.description,
        title: req.body.title,
        blog: req.body.blog
    })

    data.save().then(result => {
        res.redirect('/')
    }).catch(err => {
        res.status(404).send("unable to send data")
    })

})
routes.get('/blog/:postid', (req, res) => {
    const reqPid = req.params.postid;

    Post.findOne({ _id: reqPid }, (err, post) => {
        res.render('oneblog', {
            author: post.author,
            description: post.description,
            title: post.title,
            blog: post.blog

        })

    })
})
routes.post('/comments',(req,res)=>{
var data2=Post2({
    user: req.body.user,
    email: req.body.email,
    comment: req.body.comment,
})
console.log(data2)
data2.save().then(result2=>{

   res.redirect('/posts')
    }).catch(err=>{throw err})

})
routes.get('/posts',(req,res)=>{
    Post.find({}, (err, posts) => {
        res.render('comments', { posts: posts })
    })
})

routes.get('/about',(req,res)=>{
  res.render('about')
})

module.exports = routes;
