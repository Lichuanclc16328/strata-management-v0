"use client"
import { useState } from "react"

export default function FeesPage() {
  const [unit, setUnit] = useState("")
  const [result, setResult] = useState(null)

  const handleCheck = async () => {
    const res = await fetch(`/api/check-fee-status?unit=${unit}`)
    const data = await res.json()
    setResult(data)
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Check Fee Status</h1>
      <input type="text" placeholder="Enter Unit Number" value={unit} onChange={e => setUnit(e.target.value)} className="border p-2 mr-2" />
      <button onClick={handleCheck} className="bg-green-600 text-white px-4 py-2">Check</button>
      {result && (
        <div className="mt-4 border p-4 rounded bg-gray-100">
          {result.error ? (
            <p className="text-red-600">{result.error}</p>
          ) : (
            <>
              <p><strong>Unit:</strong> {result.unit}</p>
              <p><strong>Status:</strong> {result.message}</p>
            </>
          )}
        </div>
      )}
    </main>
  )
}