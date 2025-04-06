import { NextRequest, NextResponse } from "next/server"

// 处理 POST 请求，接收报修内容
export async function POST(req: NextRequest) {
  const data = await req.json()
  const { username, description } = data

  if (!username || !description) {
    return NextResponse.json(
      { error: "Missing username or description" },
      { status: 400 }
    )
  }

  return NextResponse.json({
    status: "received",
    message: `Issue reported by ${username}`,
    received: { username, description },
  })
}

// 处理 GET 请求，返回提示信息
export async function GET() {
  return NextResponse.json({
    message: "Use POST to submit a maintenance issue. Include username and description in JSON body.",
  })
}



