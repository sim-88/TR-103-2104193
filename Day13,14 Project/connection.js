const mongoose=require('mongoose');

async function connectToMongoDB(url){
    try{
        await mongoose.connect(url,{
        });
        console.log('Connected to mongodb');
    }catch(err){
        console.error('Error connecting to mongodb');
        console.error(err);
    }
}  

module.exports={
    connectToMongoDB
}