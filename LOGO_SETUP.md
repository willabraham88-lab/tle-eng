# TLE Website - Logo Setup Guide

## Quick Start

### Step 1: Add Your Logo File

Place your logo file in the `/public` folder:

```
/public/tle-logo.svg    ← Your logo here!
```

**Supported formats:**
- ✅ **SVG** (Recommended - scales perfectly at any size)
- ✅ PNG (Good, but may look pixelated when scaled)
- ✅ JPG (Works, but not recommended for logos)

---

## Option 1: Single Logo (Works for Light & Dark)

**Best for:** Logos that look good on any background (e.g., colorful logos, logos with backgrounds)

1. Save your logo as `/public/tle-logo.svg`
2. The code already references this file - you're done! ✅
3. Run `npm run build` to rebuild

---

## Option 2: Separate Logos for Light & Dark Mode

**Best for:** Logos that need different colors for light/dark backgrounds

### Step A: Add Both Logo Files

```
/public/tle-logo-light.svg   ← Logo for light mode (dark colors)
/public/tle-logo-dark.svg    ← Logo for dark mode (light colors)
```

### Step B: Update the Code

You'll need to modify two files to use theme-aware logos:

#### 1. Update `/src/app/components/Header.tsx`

Replace this section (around line 68):

```tsx
<img 
  src="/tle-logo.svg"
  alt="TLE Logo"
  // ... rest stays the same
/>
```

With this:

```tsx
<img 
  src={isDarkMode ? "/tle-logo-dark.svg" : "/tle-logo-light.svg"}
  alt="TLE Logo"
  loading="eager"
  style={{ 
    width: '60px', 
    height: '60px',
    objectFit: 'contain',
    transition: 'transform 0.3s ease'
  }}
  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
/>
```

#### 2. Update `/src/app/components/Footer.tsx`

First, add the `isDarkMode` state at the top of the component (after line 10):

```tsx
export const Footer = memo(function Footer({ onNavigate }: FooterProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const currentTheme = document.documentElement.getAttribute('data-bs-theme');
      setIsDarkMode(currentTheme === 'dark');
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-bs-theme']
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (page: Page) => {
    // ... existing code
```

Then add the imports at the top of the file:

```tsx
import { memo, useState, useEffect } from 'react';
```

Finally, update the logo image tag (around line 26):

```tsx
<img 
  src={isDarkMode ? "/tle-logo-dark.svg" : "/tle-logo-light.svg"}
  alt="TLE Logo"
  loading="lazy"
  style={{ 
    width: '48px', 
    height: '48px',
    objectFit: 'contain'
  }}
/>
```

---

## Logo Size Recommendations

### File Dimensions:
- **Minimum:** 200x200 pixels
- **Recommended:** 500x500 pixels (or larger for PNG)
- **SVG:** Any size (it scales perfectly!)

### Display Sizes:
- **Header:** 60x60 pixels
- **Footer:** 48x48 pixels

---

## Troubleshooting

### ❓ Logo not showing after adding the file?

1. Make sure the file is named exactly: `tle-logo.svg` (case-sensitive)
2. Make sure it's in `/public` folder, not `/src`
3. Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
4. Run `npm run build` again

### ❓ Logo looks blurry?

- Use SVG format for crisp, sharp logos at any size
- If using PNG, make sure it's at least 500x500 pixels

### ❓ Logo has wrong colors in dark mode?

- Use Option 2 above to create separate light/dark logos
- Make sure your dark mode logo uses light colors

### ❓ Logo is too big or too small?

Adjust the `width` and `height` in the code:

**Header logo** (line ~73 in Header.tsx):
```tsx
style={{ 
  width: '60px',   // ← Change this
  height: '60px',  // ← Change this
  objectFit: 'contain',
  // ...
}}
```

**Footer logo** (line ~30 in Footer.tsx):
```tsx
style={{ 
  width: '48px',   // ← Change this
  height: '48px',  // ← Change this
  objectFit: 'contain'
}}
```

---

## Creating SVG Logos

### From a design tool:
1. **Figma:** Select logo → Export → SVG
2. **Adobe Illustrator:** File → Export → Export As → SVG
3. **Inkscape:** File → Save As → SVG

### From PNG/JPG:
- Use online converter: https://convertio.co/png-svg/
- Or use Adobe Illustrator Image Trace feature

### Tips for great SVG logos:
- Keep file size under 50KB
- Remove unnecessary metadata
- Use simple shapes when possible
- Test in both light and dark modes

---

## Current Logo Path

The code currently expects your logo at:

```
/public/tle-logo.svg
```

Just replace this file with your own logo and rebuild! ✅

---

## Need Help?

📧 Contact: contact@tle-eng.co.uk

---

© 2026 Telemetry & Logic Engineering Ltd.
