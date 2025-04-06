export const runtime = "edge"

import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.redirect(new URL("/thanks", "https://你的-vercel-网址.vercel.app"))
}
