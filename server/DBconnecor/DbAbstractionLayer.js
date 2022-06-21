// import mongodb from 'mongodb';
// import mongoose from 'mongoose';

// const connected = false;
// const db = null; 

// mongoose.connect('mongodb://localhost:27017/mezmurs', {useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.connection.once('open', ()=>console.log('Connected to the MongoDB database'));
// mongoose.connection.on('error', ()=>console.log('Error Connecting to the MongoDB database'));

//connected = true;
    //db = connection.db('mezmur');
    //console.log("DB Connection successful");
//}).catch(error=>{
  //  console.log("Error in connection to DB");
//});

// async function queryDealsCollection(){
//     if (connected){
//         let jsonResponse = {
//             "handsetCards": [],
//             "webCards": []
//         };
//         const dealsCollectionArray = await db.collection('mezmur').find().toArray();
//         dealsCollectionArray.array.forEach(element => {
//             let handsetElement = {}
//             handsetElement['title'] = element ['title'];
//             handsetElement['textarena'] = element ['textarena'];
//             jsonResponse.handsetCards.push(handsetElement);
//             let webElement = {};
//             handsetElement['title'] = element ['title'];
//             handsetElement['textarena'] = element ['textarena'];

//         });
//         return jsonResponse;
//     }else{
//         return null;
//     }
// };


// export default queryDealsCollection;