import { readFileSync } from 'fs';
import { marked } from 'marked';

export default function(eleventyConfig) {

  // ============================================
  // PASSTHROUGH COPY
  // ============================================
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy({ "HP_vault/Images": "assets/img" });

  // ============================================
  // MARKDOWN FILTER
  // ============================================
  eleventyConfig.addFilter("markdown", (content) => marked.parse(content));

  // ============================================
  // 1. OBSIDIAN IMAGE & PDF TRANSFORM
  // ============================================
  eleventyConfig.addTransform("obsidian-images", function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      content = content.replace(
        /!\[\[([^\]]+\.(jpe?g|png|gif|webp|svg))\]\]/gi,
        (match, filename) => `<img src="/assets/img/${filename}" alt="${filename}" />`
      );
      content = content.replace(
        /!\[\[([^\]]+\.pdf)\]\]/gi,
        (match, filename) => `<iframe src="/assets/img/${filename}" class="pdf-embed" style="border:none;"></iframe>`
      );
      return content;
    }
    return content;
  });

  // ============================================
  // 2. IMAGE CAROUSEL TRANSFORM
  // ============================================
  eleventyConfig.addTransform("image-carousel", function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      return content.replace(
        /:::carousel([\s\S]*?):::/g,
        (match) => {
          const imgs = [...match.matchAll(/<img[^>]+\/?>/g)];
          const slides = imgs.map((m, i) =>
            `<div class="content-slide ${i === 0 ? 'active' : ''}">
    ${m[0]}
  </div>`
          ).join('\n');
          const dots = imgs.map((_, i) =>
            `<div class="content-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`
          ).join('');
          return `<div class="content-slideshow">
  ${slides}
  <a class="content-prev">&#10094;</a>
  <a class="content-next">&#10095;</a>
  <div class="content-dots">${dots}</div>
</div>`;
        }
      );
    }
    return content;
  });

  // ============================================
  // 3. COLLABORATOR LINK TRANSFORM
  // ============================================
  const collaborators = JSON.parse(readFileSync('./assets/data/collaborators.json', 'utf8'))
  .sort((a, b) => b.name.length - a.name.length);

eleventyConfig.addTransform("collaborator-links", function(content, outputPath) {
  if (outputPath && outputPath.endsWith(".html")) {
    collaborators.forEach(({ name, website }) => {
      const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(?<![">])\\b${escaped}\\b(?![^<]*<\\/a>)`, 'g');
      content = content.replace(
        regex,
        `<a href="${website}" target="_blank" rel="noopener noreferrer">${name}</a>`
      );
    });
  }
  return content;
});

  // ============================================
  // COLLECTIONS
  // ============================================
  eleventyConfig.addCollection("spotlight", function(collectionApi) {
    return collectionApi.getFilteredByTag("spotlight");
  });

  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByTag("projects")
      .sort((a, b) => parseInt(b.data.date) - parseInt(a.data.date));
  });

  eleventyConfig.addCollection("design strategy", function(collectionApi) {
    return collectionApi.getFilteredByTag("design strategy");
  });

  eleventyConfig.addCollection("futures thinking", function(collectionApi) {
    return collectionApi.getFilteredByTag("futures thinking");
  });

  eleventyConfig.addCollection("creative technology", function(collectionApi) {
    return collectionApi.getFilteredByTag("creative technology");
  });

  eleventyConfig.addCollection("writing", function(collectionApi) {
    return collectionApi.getFilteredByTag("writing")
      .sort((a, b) => parseInt(b.data.year) - parseInt(a.data.year));
  });

  // ============================================
  // ERROR REPORTING
  // ============================================
  eleventyConfig.configureErrorReporting({ allowMissingExtensions: true });

  const isProduction = process.env.NODE_ENV === 'production';

  return {
    pathPrefix: isProduction ? "/HP_site/" : "/"
  };
}