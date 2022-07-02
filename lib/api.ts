import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  

  return items
}

export const getIcelandicPosts = (path: string) =>{
  const files = fs.readdirSync(`posts/${path}/is`)
  const posts = files.map((fileName) => {
    const readFile = fs.readFileSync(`posts/${path}/is/${fileName}`, 'utf-8')
    const { data: frontmatter } = matter(readFile)
    return {
      frontmatter,
    }
  })
  if(posts){
   return  posts
  }

}
export const getEnglishPosts = ( path: string) => {
  const files = fs.readdirSync(`posts/${path}/en`)
  const posts = files.map((fileName) => {
    const readFile = fs.readFileSync(`posts/${path}/en/${fileName}`, 'utf-8')
    const { data: frontmatter } = matter(readFile)
    return {
      frontmatter,
    }
  })
  if(posts){
   return  posts
  }

}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
  return posts
}