/**
* Post.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {


  attributes: {
    title:{
        type:'string',
        required:true
    },
    body:{
        type:'text',
        required:true
    },

    ////// associations

    comments:{
        collection:'Comment',
        via:'post'
    },
    owner:{
        model:'User'
    },

    bodySize:function(){
        return this.body.length;
    }

  },
  findByTitle:function(title,cb){
    this.find({where:{title:{contains:title}}}).exec(cb);
  }
};

