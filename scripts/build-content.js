// /**
//  * Build script to parse markdown content into JSON data files.
//  * Replaces Gatsby's GraphQL data layer.
//  *
//  * Usage: node scripts/build-content.js
//  */

// const fs = require('fs');
// const path = require('path');
// const matter = require('gray-matter');
// const { marked } = require('marked');

// const CONTENT_DIR = path.resolve(__dirname, '..', 'content');
// const DATA_DIR = path.resolve(__dirname, '..', 'src', 'data');

// // Ensure output directory exists
// if (!fs.existsSync(DATA_DIR)) {
//   fs.mkdirSync(DATA_DIR, { recursive: true });
// }

// /**
//  * Parse a single markdown file and return frontmatter + HTML.
//  */
// function parseMarkdownFile(filePath) {
//   const raw = fs.readFileSync(filePath, 'utf-8');
//   const { data: frontmatter, content } = matter(raw);
//   const html = marked(content);
//   return { frontmatter, html };
// }


// function buildJobs() {
//   const jobsDir = path.join(CONTENT_DIR, 'jobs');
//   const companies = fs.readdirSync(jobsDir).filter(f =>
//     fs.statSync(path.join(jobsDir, f)).isDirectory()
//   );

//   const jobs = companies.map(company => {
//     const filePath = path.join(jobsDir, company, 'index.md');
//     if (!fs.existsSync(filePath)) return null;
//     const { frontmatter, html } = parseMarkdownFile(filePath);
//     return { ...frontmatter, html };
//   }).filter(Boolean);

//   // Sort by date descending
//   jobs.sort((a, b) => new Date(b.date) - new Date(a.date));

//   fs.writeFileSync(path.join(DATA_DIR, 'jobs.json'), JSON.stringify(jobs, null, 2));
//   console.log(`✓ Built ${jobs.length} jobs`);
// }

// /**
//  * Parse featured projects from content/featured/*/index.md
//  * Sort by date ASC (the "date" field is just a sort order number like '1', '2', '3')
//  */
// function buildFeatured() {
//   const featuredDir = path.join(CONTENT_DIR, 'featured');
//   const projects = fs.readdirSync(featuredDir).filter(f =>
//     fs.statSync(path.join(featuredDir, f)).isDirectory()
//   );

//   const featured = projects.map(project => {
//     const filePath = path.join(featuredDir, project, 'index.md');
//     if (!fs.existsSync(filePath)) return null;
//     const { frontmatter, html } = parseMarkdownFile(filePath);

//     // Resolve cover image path — copy to public/images/featured/
//     let coverPath = null;
//     if (frontmatter.cover) {
//       const coverSrc = path.join(featuredDir, project, frontmatter.cover.replace('./', ''));
//       if (fs.existsSync(coverSrc)) {
//         const destDir = path.resolve(__dirname, '..', 'public', 'images', 'featured');
//         if (!fs.existsSync(destDir)) {
//           fs.mkdirSync(destDir, { recursive: true });
//         }
//         const coverFilename = `${project}-${path.basename(coverSrc)}`;
//         fs.copyFileSync(coverSrc, path.join(destDir, coverFilename));
//         coverPath = `/images/featured/${coverFilename}`;
//       }
//     }

//     return { ...frontmatter, cover: coverPath, html };
//   }).filter(Boolean);

//   // Sort by date ASC
//   featured.sort((a, b) => String(a.date).localeCompare(String(b.date)));

//   fs.writeFileSync(path.join(DATA_DIR, 'featured.json'), JSON.stringify(featured, null, 2));
//   console.log(`✓ Built ${featured.length} featured projects`);
// }

// /**
//  * Parse other projects from content/projects/*.md
//  * Sort by date DESC
//  */
// function buildProjects() {
//   const projectsDir = path.join(CONTENT_DIR, 'projects');
//   const files = fs.readdirSync(projectsDir).filter(f => f.endsWith('.md'));

//   const projects = files.map(file => {
//     const filePath = path.join(projectsDir, file);
//     const { frontmatter, html } = parseMarkdownFile(filePath);
//     return { ...frontmatter, html };
//   }).filter(Boolean);

//   // Sort by date DESC
//   projects.sort((a, b) => new Date(b.date) - new Date(a.date));

//   fs.writeFileSync(path.join(DATA_DIR, 'projects.json'), JSON.stringify(projects, null, 2));
//   console.log(`✓ Built ${projects.length} projects`);
// }

// /**
//  * Parse blog posts from content/posts/*/index.md
//  * Sort by date DESC, filter out drafts
//  */
// function buildPosts() {
//   const postsDir = path.join(CONTENT_DIR, 'posts');
//   const dirs = fs.readdirSync(postsDir).filter(f =>
//     fs.statSync(path.join(postsDir, f)).isDirectory()
//   );

//   const posts = dirs.map(dir => {
//     const filePath = path.join(postsDir, dir, 'index.md');
//     if (!fs.existsSync(filePath)) return null;
//     const { frontmatter, html } = parseMarkdownFile(filePath);
//     return { ...frontmatter, html };
//   }).filter(Boolean);

//   // Sort by date DESC
//   posts.sort((a, b) => new Date(b.date) - new Date(a.date));

//   fs.writeFileSync(path.join(DATA_DIR, 'posts.json'), JSON.stringify(posts, null, 2));
//   console.log(`✓ Built ${posts.length} posts`);
// }

// // Run all builders
// console.log('Building content data...\n');
// buildJobs();
// buildFeatured();
// buildProjects();
// buildPosts();
// console.log('\n✓ All content built successfully!');
