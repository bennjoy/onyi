# Onyinye Otti - Professional Portfolio Website

A modern, responsive website built with **Next.js** and **Tailwind CSS** for Onyinye Otti's professional portfolio and lifestyle brand.

## 🎯 Project Setup Complete!

Your website has been successfully configured with:
- ✅ **Next.js 16** with App Router
- ✅ **Tailwind CSS 4** for styling
- ✅ **TypeScript** for type safety
- ✅ **ESLint** for code quality
- ✅ Responsive navigation menu
- ✅ Mobile-friendly hamburger menu
- ✅ Full-screen hero section

## 📝 Important: Adding Your Background Image

1. The website references `bg.jpg` in the hero section
2. **You need to place the background image at:** `/public/bg.jpg`
3. The image should be the same one from the Canva design (the portrait photo)

## 🚀 Getting Started

The development server is already running! Access it at:
- **Local:** http://localhost:3001
- **Network:** http://192.168.0.188:3001

### Running Commands

**Start development server:**
```bash
npm run dev
```

**Build for production:**
```bash
npm run build
npm run start
```

**Run ESLint:**
```bash
npm run lint
```

## 📁 Project Structure

```
onyi/
├── app/
│   ├── page.tsx          # Homepage with navigation and hero
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Tailwind CSS styles
├── public/
│   └── bg.jpg            # ← Add your background image here!
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── next.config.ts        # Next.js config
└── README.md             # This file
```

## 🎨 Navigation Menu

The homepage includes links to:
- Home
- About Me
- Brands I Have Worked With
- Beauty Brands
- Lifestyle
- Work With Me

You can customize these links by editing `/app/page.tsx`.

## 🔧 Customization

### Edit the Homepage
File: `/app/page.tsx`

Key areas to customize:
- Navigation brand name (currently "Onyinye")
- Hero section title
- Navigation links and destinations
- Styling and colors

### Update Metadata
File: `/app/layout.tsx`

Current metadata:
- Title: "Onyinye Otti"
- Description: "Professional portfolio and lifestyle brand"

### Add More Pages
Create new files in the `/app` directory:
```
app/about/page.tsx       → /about
app/brands/page.tsx      → /brands
app/contact/page.tsx     → /contact
```

## 📚 Technologies Used

- **Next.js 16.0.4** - React framework with server-side rendering
- **Tailwind CSS 4** - Utility-first CSS framework
- **TypeScript 5** - Type-safe JavaScript
- **React 19.2** - UI library
- **ESLint 9** - Code quality tool

## 🌐 Deployment

When ready to deploy:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Options
- GitHub Pages
- Netlify
- Railway
- Docker container

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## 💡 Tips

1. **Hot Reload** - Changes to files automatically refresh the browser
2. **Responsive Design** - Uses `md:` breakpoints for mobile/desktop
3. **Fonts** - Currently using system fonts; you can add Google Fonts in `layout.tsx`
4. **Images** - Optimize images by using Next.js `Image` component

## 🎬 Next Steps

1. ✅ Add `bg.jpg` to `/public` folder
2. Update navigation links to actual pages
3. Create additional pages (About, Brands, etc.)
4. Customize colors and styling as needed
5. Deploy to your hosting platform

Enjoy building your website! 🎉
