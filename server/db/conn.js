const mongoose = require("mongoose");

const DB = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.s6xjypa.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;


module.exports = async function connection (){
  try{
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(DB,connectionParams).then(() => {
      console.log("Connection Successful.");
    })
  }catch(e){
    console.log("Connection UnSuccessful.");
    console.log(e);
  }
}

