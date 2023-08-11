import { NextRequest, NextResponse } from "next/server";
import { db, user, getData } from "@/drizzle";
import { sql } from "@vercel/postgres";
import { Data } from "@/app/Data";
import toast, { Toaster } from 'react-hot-toast';
import bcryptjs from "bcryptjs"

export async function GET(request: NextRequest) {
    // const req = await request.json();

    const userExist = await sql`SELECT id,email, password FROM userData`
    const userExistData = userExist.rows;
    const available = userExistData.some((item:any)=>item.email === "taharizwan2k@gmail.com");
    // const {email} = available;
    // const isEmail =  email === "taharizwan2k@gmail.com"? true:false;
    // console.log("User: " + userExist);
    
    // await db.select().from(user);


    try { 

        return NextResponse.json(userExistData);

        // if()
        
    } catch (error) {
        return NextResponse.json({data:"No value"})
    }

}


export async function POST(request: NextRequest) {
    const req = await request.json();

    const userExist = await sql`SELECT email,password FROM userData`
    const userExistData = userExist.rows;
    const available = userExistData.some((item:any)=>item.email === req.email);


    try {

        // return NextResponse.json({userExist});

        if(available)
        {
            // toast.error("User already registered!");
           return NextResponse.json({message:"Email is already registered!",status:"alreadyExist"});

        }
        else {

            
        // password hash
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(req.password,salt);

           const res = await db.insert(user).values({
            email: req.email as string,
            password: hashedPassword as string
           }).returning();  
           return NextResponse.json({message:"data submitted successfully!"})
        }
        
    } catch (error) {
        return NextResponse.json({message:"data not submitted! Error! "+ error + "available: " + available})
    }

}