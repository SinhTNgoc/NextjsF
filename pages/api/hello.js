// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { delBasePath } from "next/dist/shared/lib/router/router";

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
 
// add data to database

function handler(req, res) {
  if(req.method === 'POST') {
    const data = req.body;
    const {id,name,avatar,description} = data;
    // db.connect(....)
    // db.save(data)
  }
}
export default handler;