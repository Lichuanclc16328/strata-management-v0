import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({ message: "Ping successful from cron job!" })
}
