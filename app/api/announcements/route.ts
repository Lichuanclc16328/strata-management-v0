export const runtime = "edge"

import { NextResponse } from "next/server"

export async function GET() {
  const announcements = [
    { id: 1, title: "Water Outage", date: "2025-04-06" },
    { id: 2, title: "Fire Drill on Thursday", date: "2025-04-08" },
  ]

  return NextResponse.json({ announcements })
}
