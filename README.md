# TLE Ltd. Website - Pure HTML/CSS/JS Version

This is a pure HTML/CSS/JavaScript website for Telemetry & Logic Engineering (TLE) Ltd. No build process required!

## Features

- ✅ Pure HTML/CSS/JavaScript (no frameworks)
- ✅ Client-side routing with vanilla JS
- ✅ Dark/Light theme toggle (respects system preference)
- ✅ Glassmorphism design (Apple-style liquid glass effects)
- ✅ Responsive Bootstrap 5 layout
- ✅ Cookie consent management
- ✅ SEO optimized with dynamic meta tags
- ✅ Fast loading and performance optimized
- ✅ All pages included: Home, About, Services, Expertise, Industries, Contact, Privacy, Cookies

## File Structure

```
/
├── index.html          # Main HTML file
├── .htaccess          # Apache server configuration
├── css/
│   └── styles.css     # All custom styles
├── js/
│   └── app.js         # All JavaScript functionality
└── media/             # Images and logos
    ├── tle-logo-light.svg
    ├── tle-logo-dark.svg
    ├── hero-image.jpg
    ├── about-image.jpg
    └── og-image.jpg
```

## Installation

### Option 1: Traditional Web Hosting (cPanel, FTP, etc.)

1. **Upload all files** to your web hosting directory (usually `public_html` or `www`)
2. **Add your images** to the `/media` folder:
   - `tle-logo-light.svg` - Logo for light theme
   - `tle-logo-dark.svg` - Logo for dark theme
   - `hero-image.jpg` - Hero section background
   - `about-image.jpg` - About page image
   - `og-image.jpg` - Social media preview image
3. **Ensure .htaccess is uploaded** for proper routing
4. **Visit your website** - it should work immediately!

### Option 2: Local Testing

1. You can open `index.html` directly in a browser, but routing won't work properly
2. For proper testing, use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using PHP
   php -S localhost:8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```
3. Visit `http://localhost:8000`

## Adding Your Images

The website references these images that you need to provide:

1. **TLE Logos**:
   - `media/tle-logo-light.svg` - Used when in light mode
   - `media/tle-logo-dark.svg` - Used when in dark mode
   - Recommended size: 200px wide, transparent background

2. **Hero Image** (`media/hero-image.jpg`):
   - Main homepage background/image
   - Recommended size: 1200x800px minimum

3. **About Image** (`media/about-image.jpg`):
   - About page illustration
   - Recommended size: 800x600px minimum

4. **OG Image** (`media/og-image.jpg`):
   - Social media preview image (Facebook, Twitter, etc.)
   - Recommended size: 1200x630px

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Server Requirements

- **Apache** (recommended) with mod_rewrite enabled
- **Nginx** - requires similar configuration to .htaccess
- **Any static file hosting** (Netlify, Vercel, GitHub Pages, etc.)

### Nginx Configuration (if not using Apache)

Add this to your nginx config:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

## Customization

### Changing Colors

Edit `/css/styles.css` and modify the CSS variables:

```css
:root {
    --bs-primary: #0066cc;  /* Change primary color */
    --bs-secondary: #6c757d;
    /* ... etc */
}
```

### Adding New Pages

1. Add a new route to `/js/app.js`:
   ```javascript
   const routes = {
       '/': 'home',
       '/your-new-page': 'newpage'
   };
   ```

2. Create a function to generate the page content:
   ```javascript
   function getNewPage() {
       return `<section>Your HTML here</section>`;
   }
   ```

3. Add it to the `loadPage()` switch statement:
   ```javascript
   case 'newpage':
       mainContent.innerHTML = getNewPage();
       break;
   ```

## Performance

This website is optimized for fast loading:
- Minimal external dependencies (only Bootstrap CSS/JS from CDN)
- All custom code is concatenated (no multiple file requests)
- Images use lazy loading
- CSS and JavaScript are cached by browsers
- Glassmorphism effects are pure CSS (no images)

## SEO

The website includes:
- Dynamic meta tags that update per page
- Open Graph tags for social media
- Twitter Card tags
- Structured data (JSON-LD)
- Semantic HTML
- Canonical URLs

## Support

For questions or issues, contact: info@tle-ltd.com

## License

© 2026 Telemetry & Logic Engineering Ltd. All rights reserved.
