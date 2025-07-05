// read the data
const mongoose = require('mongoose')

const db_name= 'new_database'
const connectionString = `mongodb://localhost:27017/${db_name}`

mongoose.connect(connectionString).then(()=>{
  console.log('connection established !')
}).catch((err)=>{
  console.log(err)
})

const adminModel= mongoose.model('admin')