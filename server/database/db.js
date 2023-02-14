import mongoose from "mongoose";

const Connection = async() => {
    const URL = `mongodb+srv://user:password1288@dbcrudbasicapplearn.osy0gls.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology : true, useNewUrlParser : true })
        console.log("Database Connected")
    } catch (error) {
        console.log("Error while onnecting database", error)
    }
}

export default Connection;