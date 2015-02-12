/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    create:function(req,res){
        var postData = {
            title:req.body.title,
            body:req.body.body,
            owner:req.session.user.id
        };
        Post.create(postData).exec(function(err,post){
            if(err) res.send(400,err);
            res.send(post);
        });
    }

};

