export const runtime = "edge"

import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const unit = searchParams.get("unit")

  const mockDatabase: Record<string, boolean> = {
    "101": true,
    "102": false,
    "203": true,
  }

  const paid = mockDatabase[unit || ""] ?? null

  if (paid === null) {
    return NextResponse.json({ error: "Unit not found" }, { status: 404 })
  }

  return NextResponse.json({
    unit,
    paid,
    message: paid ? "Fee is paid ✅" : "Fee is unpaid ❌",
  })
}
