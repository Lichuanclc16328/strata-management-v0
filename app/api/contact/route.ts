// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const name = formData.get("name")
  const email = formData.get("email")

  console.log("POST received:", name, email)

  // 重定向
  return NextResponse.redirect(new URL("/thanks", req.url), 302)
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const email = searchParams.get("email")

  console.log("GET received:", email)

  return NextResponse.json({ message: `You searched for: ${email}` })
}
