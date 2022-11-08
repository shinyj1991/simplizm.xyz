import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'

const handler = nextConnect<NextApiRequest, NextApiResponse>()

handler.get(async (req, res) => {
  res.status(200).json({ test: 'test' })
})

handler.post((req, res) => {
  // POST 요청 처리
})

export default handler
