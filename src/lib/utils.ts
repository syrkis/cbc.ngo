// src/lib/utils.ts
import fs from 'fs';
import path from 'path';
import frontMatter from 'front-matter';
import type { Post } from './types'; // Note: this assumes that you have defined Post in types.ts

export async function getPost(dirName: string, slug: string): Promise<Post | null> {
    console.log('dirName: ', dirName); 
  const dirPath = path.join(process.cwd(), 'src', 'lib', 'posts', dirName);
  const filePath = path.join(dirPath, `${slug}.md`);
  
  if (fs.existsSync(filePath)) {
    const postFile = fs.readFileSync(filePath, 'utf-8');
    const post = frontMatter<Post>(postFile);
    
    return post.attributes; // Return the Post data
  }

  return null; // Return null if post not found
 }

// Get All Posts
export async function getPosts(dirName: string): Promise<Post[]> {
    console.log('dirName: ', dirName); 
 
    const dirPath = path.join(process.cwd(), 'src', 'lib', 'posts', dirName);
  
    const files = fs.readdirSync(dirPath);
    const posts: Post[] = files.map((file) => {
      const postFile = fs.readFileSync(path.join(dirPath, file), 'utf-8');
      const post = frontMatter<Post>(postFile);
      
      return post.attributes;
    });
  
    return posts;
  }