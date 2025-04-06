// app/contact/page.tsx
"use client"

export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto py-20 px-4">
      <h1 className="text-2xl font-bold mb-6">Contact Us</h1>

      {/* POST 表单 */}
      <form method="POST" action="/api/contact" className="mb-10 space-y-4 border p-4 rounded">
        <h2 className="text-lg font-semibold">Submit with POST</h2>
        <input name="name" type="text" placeholder="Your Name" className="w-full border p-2" required />
        <input name="email" type="email" placeholder="Your Email" className="w-full border p-2" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit POST</button>
      </form>

      {/* GET 表单 */}
      <form method="GET" action="/api/contact" className="space-y-4 border p-4 rounded">
        <h2 className="text-lg font-semibold">Submit with GET</h2>
        <input name="email" type="email" placeholder="Search by Email" className="w-full border p-2" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit GET</button>
      </form>
    </div>
  )
}
