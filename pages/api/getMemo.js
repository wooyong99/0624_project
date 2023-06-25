const fs = require('fs');
const path = require('path');

const getMemo = (id) => {
  const filePath = path.join(process.cwd(), 'data.json');

  const jsonDataRead = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonDataRead);
  for (const el of data.memos) {
    if (el.id == id) {
      const obj = {
        id: el.id,
        title: el.title,
        body: el.body,
        createdAt: el.createdAt,
        updatedAt: el.updatedAt
      }
      return obj
    }
  }
  return {}
};

export default function handler(req, res) {
  if (req.method === 'GET') {
    const id = req.query.id;
    const rs = getMemo(id);
    res.status(200).json(rs);
  }else{
    res.status(405).json({ message : "Method not allowed."})
  }

}
