import mongoose from "mongoose";

const MONODB_URI = process.env.MONGO_URI!;

if (!MONODB_URI) {
  throw new Error("Please define the MONGO_URI environment variable inside .env.local");
}

let cached=global.mongoose;


if(!cached){
    cached=global.mongoose={conn:null,promise:null};
}

export async function connectToDatabase(){
    if(cached.conn){
        return cached.conn;
    }

    if(!cached.promise){
        const opts={
            bufferCommands:true,
            maxPoolSize:10,
        };

        cached.promise=mongoose.connect(MONODB_URI,opts).then(()=>mongoose.connection).catch((err)=>{
            console.log(err);
            throw new Error("Failed to connect to database");
        });
    }

    try {
        cached.conn=await cached.promise;
    } catch (error) {
        cached.promise=null;
        throw error;
    }

    return cached.conn;


}