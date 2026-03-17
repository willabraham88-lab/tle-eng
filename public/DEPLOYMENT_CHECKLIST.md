# TLE Ltd Website - Deployment Checklist

## 🔒 Current Status: BLOCKED FROM INDEXING

Your website is currently configured to **prevent search engine crawling and indexing**.

### Active Protections:
✅ `robots.txt` - Blocking all crawlers  
✅ `<meta name="robots" content="noindex, nofollow">` - Preventing indexing  
✅ `<meta name="googlebot" content="noindex, nofollow">` - Specifically blocking Google  

---

## 📋 Pre-Launch Checklist

### ✅ Completed:
- [x] All 8 pages with comprehensive content
- [x] Contact form functional (FormSubmit.co)
- [x] Theme toggle (dark/light mode)
- [x] Responsive design with glassmorphism
- [x] SEO meta tags and structured data
- [x] Company branding updated
- [x] SVG favicon created
- [x] Crawling/indexing blocked

### ⚠️ Before Going Live:

1. **Favicon Files** (Optional but recommended)
   - [ ] Export and add PNG favicon files (see `/public/FAVICON_INSTRUCTIONS.md`)
   - [ ] Add `logo.png` (512x512px)
   - [ ] Add `og-image.jpg` (1200x630px) for social sharing

2. **FormSubmit Activation**
   - [ ] Submit a test form
   - [ ] Click confirmation link in email sent to contact@tle-eng.co.uk
   - [ ] Form will be activated and ready to receive real enquiries

3. **Content Review**
   - [ ] Review all pages for accuracy
   - [ ] Verify contact information is correct
   - [ ] Check all links work properly
   - [ ] Test on desktop and mobile devices

4. **Testing**
   - [ ] Test contact form submission
   - [ ] Test theme toggle
   - [ ] Check responsiveness on different screen sizes
   - [ ] Test navigation between pages
   - [ ] Verify all images load properly

---

## 🚀 When Ready to Launch

### Enable Search Engine Indexing:

#### 1. Update `/public/robots.txt`
Replace the contents with:
```txt
# robots.txt for TLE Ltd (www.tle-eng.co.uk)

User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /*.json$

# Sitemap location
Sitemap: https://www.tle-eng.co.uk/sitemap.xml

# Crawl-delay (optional - helps prevent server overload)
Crawl-delay: 1

# Specific user agents
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /
```

#### 2. Update `/index.html`
Remove or comment out these lines (around line 7-9):
```html
<!-- PREVENT INDEXING - SITE NOT READY FOR PUBLIC SEARCH -->
<meta name="robots" content="noindex, nofollow" />
<meta name="googlebot" content="noindex, nofollow" />
```

And restore the original robots meta tag:
```html
<meta name="robots" content="index, follow" />
```

#### 3. Submit to Search Engines
- Submit sitemap to Google Search Console: https://search.google.com/search-console
- Submit sitemap to Bing Webmaster Tools: https://www.bing.com/webmasters
- Your sitemap is already at: `https://www.tle-eng.co.uk/sitemap.xml`

---

## 📊 Post-Launch

### Monitoring:
- Set up Google Analytics (optional)
- Monitor Google Search Console for indexing status
- Check contact form submissions regularly

### SEO:
- Wait 1-2 weeks for search engines to index
- Monitor keyword rankings for:
  - SCADA systems Scotland
  - Industrial automation Aberdeenshire
  - Pipeline monitoring UK
  - Control systems engineering

---

## 📝 Notes

- Sitemap is already configured at `/public/sitemap.xml`
- All SEO meta tags are in place
- Structured data (JSON-LD) is configured
- Local SEO optimized for Westhill, Aberdeenshire

**Ready to deploy when you are!** 🎉
