import { useState, useEffect } from "react"
import { useRouter } from "next/router"

export default function memoList() {
  const router = useRouter();
  const [memoList, setMemoList] = useState({})
  useEffect(() => {
    getMemos()
  }, [])
  const getMemos = async () => {
    const response = await fetch('/api/getMemos')
    const jsonResponse = await response.json()
    console.log(jsonResponse)
  }
  return (
    <main>
      <h1 className="m-5">memoList</h1>
    </main>
  )
}
