// /app/api/contact/page.tsx
export default function ContactAPIPage() {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
  
        {/* POST Form */}
        <div className="border p-4 mb-6 rounded shadow">
          <h2 className="font-semibold mb-2">Submit with POST</h2>
          <form method="POST" action="/api/contact">
            <input
              name="name"
              placeholder="Monkey"
              className="block w-full border p-2 mb-2"
            />
            <input
              name="email"
              placeholder="monkey@test.com"
              className="block w-full border p-2 mb-2"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Submit POST
            </button>
          </form>
        </div>
  
        {/* GET Form */}
        <div className="border p-4 rounded shadow">
          <h2 className="font-semibold mb-2">Submit with GET</h2>
          <form method="GET" action="/api/contact">
            <input
              name="email"
              placeholder="banana@eat.com"
              className="block w-full border p-2 mb-2"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Submit GET
            </button>
          </form>
        </div>
      </div>
    );
  }
  