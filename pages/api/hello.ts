// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import i18next from 'i18next'
import matter from 'gray-matter'
import { getI18n } from 'react-i18next'
type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
		lang, path
  } = req.body
  
  const files = fs.readdirSync(`lib/content/${path}/${lang}`)
  const posts = files.map((fileName) => {
    const readFile = fs.readFileSync(`lib/content/${path}/${lang}/${fileName}`, 'utf-8')
    const { data: frontmatter } = matter(readFile)
    return {
      frontmatter,
    }
  })
  if(posts){
   return  res.status(200).json(posts)
  }

}
