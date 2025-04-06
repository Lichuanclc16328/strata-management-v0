export const runtime = "edge"

import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const body = await req.json()
  const token = body.token

  if (token === "banana123") {
    return NextResponse.json({ status: "valid", message: "Token is correct!" })
  } else {
    return NextResponse.json({ status: "invalid", message: "Invalid token." }, { status: 401 })
  }
}
