import { useRouter } from "next/router"
import { useEffect, useState } from 'react';

export default function MemoList() {
  const router = useRouter();
  const [list, setList] = useState([])
  useEffect(() => {
    getMemoList()
  }, [])
  const getMemoList = async () => {
    const response = await fetch('/api/getMemos')
    const jsonResponse = await response.json()
    setList(jsonResponse)
  }
  console.log(list)
  const navigateToMemo = (id) => {

    router.push("/memo/" + id)
  }
  return (
    <main>
      <h1 className="m-5">memoList</h1>
      <hr />
      <div className="row g-3">
        {list.map((memo, index) => (
          <div className="col-4">
          <div key={index} onClick={e => navigateToMemo(memo.id)} className="card">
            <div className="card-body">
              <span className="badge bg-info mb-3">{memo.id}</span>
              <div className="mb-1">제목 : {memo.title}</div>
              <div className="mb-2">내용 : {memo.body}</div>
              <div className="text-md-end"><span className="badge bg-info py-2">{memo.createdAt}</span></div>
            </div>
          </div>
          </div>
        ))}
      </div>
    </main>
  )
}
