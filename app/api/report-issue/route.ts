import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const data = await req.json()
  const { username, description } = data

  return NextResponse.json({
    status: "received",
    message: `Issue reported by ${username}`,
    received: { username, description }
  })
}
