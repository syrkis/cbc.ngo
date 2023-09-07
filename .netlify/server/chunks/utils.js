import fs from "fs";
import path from "path";
import frontMatter from "front-matter";
async function getPost(dirName, slug) {
  console.log("dirName: ", dirName);
  const dirPath = path.join(process.cwd(), "src", "lib", "posts", dirName);
  const filePath = path.join(dirPath, `${slug}.md`);
  if (fs.existsSync(filePath)) {
    const postFile = fs.readFileSync(filePath, "utf-8");
    const post = frontMatter(postFile);
    return post.attributes;
  }
  return null;
}
async function getPosts(dirName) {
  console.log("dirName: ", dirName);
  const dirPath = path.join(process.cwd(), "src", "lib", "posts", dirName);
  const files = fs.readdirSync(dirPath);
  const posts = files.map((file) => {
    const postFile = fs.readFileSync(path.join(dirPath, file), "utf-8");
    const post = frontMatter(postFile);
    return post.attributes;
  });
  return posts;
}
export {
  getPost as a,
  getPosts as g
};
