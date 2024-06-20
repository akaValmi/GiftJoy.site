// transformMarkdown.js

import fs from "fs";
import matter from "gray-matter";

const postsDirectory = "./src/pages/posts"; // Ajusta la ruta según la ubicación real de tus archivos Markdown

function getAllPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const postsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = `${postsDirectory}/${fileName}`;
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      slug,
      ...data,
      content,
    };
  });
  return postsData;
}

const postsData = getAllPostsData();

const outputFilePath = "./src/blogData.js"; // Ruta de salida para blogData.js, relativa al script

const outputContent = `const blogData = ${JSON.stringify(
  postsData
)};\n\nexport default blogData;\n`;

fs.writeFileSync(outputFilePath, outputContent);

console.log("Generated blogData.js successfully!");
