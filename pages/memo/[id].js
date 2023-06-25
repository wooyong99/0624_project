import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Memo = () => {
  const router = useRouter();
  const { id } = router.query;
  const [memo, setMemo] = useState({})
  useEffect(() => {
    if (id) {
      getMemo()
    }
  }, [id])
  const getMemo = async () => {
    const response = await fetch(`/api/getMemo?id=${id}`)
    const jsonResponse = await response.json()
    console.log(jsonResponse)
    if (jsonResponse.error) {
      alert("Not Found Memo "+id)
      router.push("/memoList")
    }else{
      setMemo(jsonResponse)
    }
    return response
  }
  const modify = () => {
    router.push("/memo/modify/"+id)
  }
  return (
    <div className='container'>
      <h1 className='m-5'>Memo {memo.id}</h1>
      <hr />
      <div className='card'>
        <div className='card-body'>
          <div className="row">
            <label className="col-sm-2 col-form-label col-form-label-lg">Title</label>
            <div className="col">
              <label className="col col-form-label col-form-label-lg">{memo.title}</label>
            </div>
          </div>
          <div className="row">
            <label className="col-sm-2 col-form-label col-form-label-lg">Body</label>
            <div className="col">
              <label className="col col-form-label col-form-label-lg">{memo.body}</label>
            </div>
          </div>
          <div className="row">
            <label className="col-sm-2 col-form-label col-form-label-lg">CreatedAt</label>
            <div className="col">
              <label className="col col-form-label col-form-label-lg">{memo.createdAt}</label>
            </div>
          </div>
        </div>
      </div>
      <div className='text-end p-3'>
        <button className='btn btn-info text-light' onClick={modify}>Modify</button>
      </div>
    </div>
  );
};


export default Memo
