    import { sql } from "@vercel/postgres";
    import { NextRequest, NextResponse } from "next/server";
    // import { useRouter } from "next/navigation";
    import bcryptjs from "bcryptjs"
    import jwt from "jsonwebtoken"


    // const router = useRouter();

    export async function POST(request: NextRequest){
        const req = await request.json();

        const data = await sql`SELECT id,email,password FROM userdata`
        const dataObj = data.rows;
        const alreadyExist = dataObj.some((item:any)=> req.email === item.email)
        const specificUser = dataObj.find((item:any)=> req.email === item.email)
        

        

        try {

            if(alreadyExist && specificUser)
            {
                // router.push("/Profile");
                const hashedPassword = specificUser.password;
                const checkPass = await bcryptjs.compare(req.password,hashedPassword)
                if(checkPass)
                {
                    //Create Token Data
                    const tokenData = {
                        id: specificUser.id,
                        email: specificUser.email
                    }

                    //Create Token

                    const token = await jwt.sign(tokenData,process.env.JWT_SECRET_KEY!,{expiresIn:"1d"})

                    const response = NextResponse.json({
                        message:"Login Successfull",
                        success:true,
                    })

                    response.cookies.set("token",token, {
                        httpOnly:true,
                    })

                    return response;


                    // return NextResponse.json({specificUser})
                }
                else {
                    return NextResponse.json({message:"Incorrect Password!" + hashedPassword + "entered pass: " + req.password})
                }
                

            }
            else {  
                return NextResponse.json({message:"Sorry not such user is found"})
            }

            
        } catch (error) {
            return NextResponse.json({message:"Some Error" + error })

        }
    }