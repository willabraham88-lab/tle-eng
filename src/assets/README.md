# Media Assets Folder

This folder contains all media resources and asset configurations for the TLE Ltd. website.

## Complete Project Structure

```
TLE Ltd. Website
├── /src/
│   ├── /app/
│   │   ├── App.tsx
│   │   └── /components/
│   │       ├── Header.tsx          → Uses mediaAssets.branding
│   │       ├── Hero.tsx            → Uses mediaAssets.hero
│   │       ├── Services.tsx        → Uses mediaAssets.services
│   │       ├── About.tsx           → Uses mediaAssets.about
│   │       ├── Contact.tsx
│   │       ├── Expertise.tsx
│   │       ├── Footer.tsx
│   │       └── ThemeToggle.tsx
│   ├── /assets/                    ← YOU ARE HERE
│   │   ├── media.js               ← Central media configuration
│   │   └── README.md              ← Documentation
│   └── /styles/
│       ├── bootstrap-custom.css
│       ├── fonts.css
│       ├── index.css
│       ├── tailwind.css
│       └── theme.css
```

## Structure

```
/src/assets/
├── media.js          # Centralized media configuration file
└── README.md         # This file
```

## Usage

All media assets (images, icons, branding) are managed through the `media.js` configuration file. This approach provides:

### Benefits

1. **Centralized Management**: All media URLs and references in one location
2. **Easy Updates**: Change an image across the entire site by updating one line
3. **Type Safety**: TypeScript types ensure correct usage throughout the application
4. **Organization**: Clear categorization of assets by section (hero, services, about, etc.)
5. **Documentation**: Self-documenting structure with descriptive property names

### How to Use

Import the media assets in any component:

```typescript
import { mediaAssets } from '../../assets/media.js';

// Use in JSX
<img src={mediaAssets.hero.background} alt={mediaAssets.hero.backgroundAlt} />
```

### Categories

- **hero**: Hero section background images
- **services**: Service-related images (communication, automation, pipeline)
- **about**: About section images (team, facilities)
- **branding**: Company branding elements (logo text, company name, tagline)

### Adding New Media

To add new media assets:

1. Open `/src/assets/media.js`
2. Add your asset to the appropriate category or create a new one
3. Include both the URL and descriptive alt text
4. Import and use in your component

Example:

```javascript
// In media.js
export const mediaAssets = {
  // ... existing assets
  newSection: {
    image1: {
      url: 'https://example.com/image.jpg',
      alt: 'Description of image',
    },
  },
} as const;
```

### Future Enhancements

For production deployments, consider:

- Downloading Unsplash images to local `/public` folder for better performance
- Adding WebP versions for optimized loading
- Implementing responsive image sources (srcset)
- Adding SVG logos and icons to this folder
- Creating subfolder structure: `/src/assets/images/`, `/src/assets/icons/`, etc.

## Current Image Sources

All images are currently sourced from Unsplash and are used under the Unsplash License.

- Communication tower: https://unsplash.com/
- Automation control room: https://unsplash.com/
- Industrial pipeline: https://unsplash.com/
- Engineering team: https://unsplash.com/