import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse(`
    <html>
      <head><title>Simulated PHP</title></head>
      <body>
        <h1>This is a simulated PHP page</h1>
        <p>It works on Vercel using Next.js App Router.</p>
      </body>
    </html>
  `, {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
