/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    create: function(req,res){
        var data = req.body || {};
        data.rando = Math.floor(Math.random()*9999);
        Post.create(data).exec(function(err,post){
            if(err) return res.send(err);
            res.send(post);
        });
    },

	mine: function(req,res){
        Post.find().exec(function(err,posts){
            res.send(posts);
            // res.render('about');
        });
    }
};

