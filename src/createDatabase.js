// require('dotenv').config();
const mongoose = require('mongoose')
const SubscribersModel = require('./models/subscribers')
const data = require('./data')

// Connect to DATABASE 
const DATABASE_URL = "mongodb+srv://naresh:KASWOqEP62nIkKv9@subscribers.yvnrgfd.mongodb.net/subscribers?retryWrites=true&w=majority";
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
   try{ await SubscribersModel.deleteMany({})
    // console.log(connection)
    
    await SubscribersModel.insertMany(data)
   
    }catch(err){
    
        console.log("error refreshing data",err);
   
    }finally{
    
        await mongoose.disconnect();
   }
}
refreshAll()
