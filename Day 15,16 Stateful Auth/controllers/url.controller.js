const { model } = require('mongoose');
const URL=require('../models/url.models');
const shortid=require('shortid');
const { handle } = require('express/lib/application');
async function handlegenerateNewShortUrl(req, res) {
    const body=req.body;
    if(!body.redirectUrl){
        return res.status(400).json({message:'redirectUrl is required'});
    }
    const shortID=shortid.generate();
    await URL.create({
        shortId:shortID,
        redirectUrl:body.redirectUrl,
        visitHistory:[],
        createdBy:req.user._id,
    });
    return res.render('home',{
        id:shortID,
    });
    // return res.status(201).json({shortId:shortID});
}


async function handlegetRedirecturl(req, res) {
    const shortId=req.params.shortId;
    const url=await URL.findOneAndUpdate({shortId},
      {
        $inc:{clickCount:1},
        $push:{visitHistory:{timestamp:Date.now()}},
      });
  
      res.redirect(url.redirectUrl);
    }

    async function handlegetAnalytics (req,res) {
      const shortId=req.params.shortId;
      const reult=await URL.findOne({shortId});
      return res.json({
        shortId:reult.shortId,
        redirectUrl:reult.redirectUrl,
        clickCount:reult.clickCount,
        visitHistory:reult.visitHistory,
      });
}
    
module.exports={
    handlegenerateNewShortUrl,
    handlegetRedirecturl,
handlegetAnalytics}