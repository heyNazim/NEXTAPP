import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { MONGO_URL } from "@/config/db";
import { Product } from "@/config/model";

export async function GET() {
    try {
        const conn = await mongoose.connect(MONGO_URL)
        if (conn) {
const result = await Product.find()
            return NextResponse.json(result)
        } else {
            return NextResponse.json({ message: "False" })
        }
    } catch (error) {
        console.log(error, "nazim saifi")
    }

}

export async function POST(req){
    try {
        const conn = await mongoose.connect(MONGO_URL)
if(conn){
    const payload = await req.json()
   let product =  new Product(payload);
    const result = await product.save()
    return NextResponse.json({result, success:true})
}else{
    return NextResponse.json({message:"false"})
}
    } catch (error) {
        console.log(error)
    }
}