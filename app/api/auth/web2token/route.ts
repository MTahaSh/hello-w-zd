import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextResponse, NextRequest } from "next/server";
import { db, user, getData } from "@/drizzle";
import { sql } from "@vercel/postgres";

export async function GET(request:NextRequest)
{
    try {
        const userExist = await sql`SELECT id,email FROM userData`
        const userExistData = userExist.rows;
        const userId = await getDataFromToken(request)
        const user = userExistData.find((item)=>item.id === userId)
        
        return NextResponse.json({"id":user?.id, message:"Id found!"})
    } catch (error:any) {
        return NextResponse.json({error:error.message})
    }


}
