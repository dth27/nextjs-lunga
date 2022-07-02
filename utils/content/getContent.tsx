// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs'
import matter from 'gray-matter'

export const getContent = (lang: string, path: string) => {
 
  const files = fs.readdirSync(`posts/${path}/${lang}`)
  const posts = files.map((fileName) => {
    const readFile = fs.readFileSync(`posts/${path}/${lang}/${fileName}`, 'utf-8')
    const { data: frontmatter } = matter(readFile)
    return {
      frontmatter,
    }
  })
  if(posts){
   return posts
  }

}
export default getContent