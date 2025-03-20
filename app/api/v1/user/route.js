import dbConfig from "@/app/config/db.config";
import User from "@/app/models/user.model";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConfig();
  return NextResponse.json(
    { Message: "User Fetched Successfully!!", data: user },
    { status: 200 }
  );
  // User.find()
}
// explore how to avoid connecting multiple times

export async function POST(request) {
  await dbConfig();
  let body = await request.json();
  User.create(body)
    .then(() => {})
    .catch((err) => {});
  // User.create()
  // body json (request.json()) - > promise
  // parse the request in json ( bodyParser, express.json())

  if (!body.name || !body.age) {
    return NextResponse.json({ Message: "name or age is missing" });
  }
  return NextResponse.json({ Message: "Post!!" });
}

// simple get and post using the mongodb

// express json , send , status

// api/v1/hello -> server js ( yes or no)
// express.Router()
//  app.use("/api/v1/hello", helloRouter)
// MVC

// next js (last import alias)
//
