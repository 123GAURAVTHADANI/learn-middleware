import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(
    { Message: "Hello! Welcome batck to Earth!!1" },
    { status: 200 }
  );
}
// express json , send , status

// api/v1/hello -> server js ( yes or no)
// express.Router()
//  app.use("/api/v1/hello", helloRouter)
// MVC
