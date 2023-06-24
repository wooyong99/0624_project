import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Memo = () => {
  const router = useRouter();
  const { id } = router.query;
  const [memo, setMemo] = useState({})
  console.log(id)
  useEffect(() => {
    if (id) {
      getMemo()
    }
  }, [id])
  const getMemo = async () => {
    const response = await fetch(`/api/getMemo?id=${id}`)
    const jsonResponse = await response.json()
    console.log(jsonResponse)
    if (jsonResponse) {
      setMemo(jsonResponse)
    }
    return response
  }
  return (
    <div className='container'>
      <h1 className='m-5'>Memo {memo.id}</h1>
      <hr />
      <div className='card'>
        <div className='card-body'>
          <div className="row">
            <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Title</label>
            <div class="col">
            <label for="colFormLabelLg" className="col col-form-label col-form-label-lg">{memo.title}</label>
            </div>
          </div>
          <div className="row">
            <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Body</label>
            <div className="col">
            <label for="colFormLabelLg" className="col col-form-label col-form-label-lg">{memo.body}</label>
            </div>
          </div>
          <div className="row">
            <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">CreatedAt</label>
            <div className="col">
            <label for="colFormLabelLg" className="col col-form-label col-form-label-lg">{memo.createdAt}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memo;
