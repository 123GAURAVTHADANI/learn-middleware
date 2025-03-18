import { user } from "@/app/util/db";
import { NextResponse } from "next/server";

export async function GET(_, context) {
  let param = await context.params;
  let userById = user.filter((item) => item.id == param.id);
  if (userById.length) {
    return NextResponse.json(
      { Message: "Hello! Welcome User", user: userById },
      { status: 200 }
    );
  }
  return NextResponse.json({ Message: "User Does not exists" });
}
// express json , send , status

// api/v1/hello -> server js ( yes or no)
// express.Router()
//  app.use("/api/v1/hello", helloRouter)
// MVC

// http : res.write, res.writeHead .
