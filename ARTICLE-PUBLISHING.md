# Published article collection

Only publish content after Harris approves the exact website and Facebook versions.

For each approved website publication:
1. Add the article HTML and approved image reference.
2. Prepend a published entry to /articles.json (id, title, date YYYY-MM-DD, category, excerpt, url, image, imageAlt).
3. Update the static fallback cards on index.html and articles/index.html to include published entries (for crawlers and JavaScript-disabled readers), and update sitemap.xml.
4. Commit all related files together. Both the homepage carousel and archive read the same articles.json, sorted newest first. Never add unapproved drafts to it.
5. Verify Cloudflare success and actual public URLs. Coordinate Facebook publication using the approved package; report each channel separately.

Carousel: one published article stays still; two or more cycle every 6 seconds, with previous/next and pause. Hover, keyboard focus, hidden tabs and reduced-motion preferences stop autoplay.

Website WhatsApp attribution: private enquiry buttons on website pages must use https://wa.me/85293331444?text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E5%96%BA%E7%B6%B2%E7%AB%99%E8%A6%8B%E5%88%B0%E8%BB%8A%E4%BF%9D%E8%B3%87%E8%A8%8A%EF%BC%8C%E6%83%B3%E6%9F%A5%E8%A9%A2%E3%80%82. Keep group invitation links unchanged. Do not reuse this website-labelled URL in Facebook or advertising: each needs an explicitly reviewed channel-specific message. Prefill is editable and only sent when the visitor confirms; no click/message analytics or automated CRM ingestion is implemented. Do not equate taps with enquiries, membership or sales.
