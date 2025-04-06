import { NextResponse } from "next/server"

export async function GET() {
  console.log("Ping cron job triggered!")
  return NextResponse.json({ message: "Ping successful from cron job!" })
}