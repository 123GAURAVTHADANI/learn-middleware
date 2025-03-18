import { user } from "@/app/util/db";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(
    { Message: "User Fetched Successfully!!", data: user },
    { status: 200 }
  );
}
// express json , send , status

// api/v1/hello -> server js ( yes or no)
// express.Router()
//  app.use("/api/v1/hello", helloRouter)
// MVC

// next js (last import alias)
//
