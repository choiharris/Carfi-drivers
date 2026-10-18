# Published article collection

Only publish content after Harris approves the exact website and Facebook versions.

For each approved website publication:
1. Add the article HTML and approved image reference.
2. Prepend a published entry to /articles.json (id, title, date YYYY-MM-DD, category, excerpt, url, image, imageAlt).
3. Update the static fallback cards on index.html and articles/index.html to include published entries (for crawlers and JavaScript-disabled readers), and update sitemap.xml.
4. Commit all related files together. Both the homepage carousel and archive read the same articles.json, sorted newest first. Never add unapproved drafts to it.
5. Verify Cloudflare success and actual public URLs. Coordinate Facebook publication using the approved package; report each channel separately.

Carousel: one published article stays still; two or more cycle every 6 seconds, with previous/next and pause. Hover, keyboard focus, hidden tabs and reduced-motion preferences stop autoplay.
