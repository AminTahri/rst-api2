const mongoose=require("mongoose");



module.exports=connectDb=async()=>{
    try {
        await mongoose.connect(process.env.db)
        console.log("data base is successfuly connected")
    } catch (error) {
        console.log(error.message)
    }
}