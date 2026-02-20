# Quick Start Guide

Welcome to your new portfolio website! Follow these steps to get started.

## ✅ Step 1: Install Dependencies (Already Done!)

Dependencies have been installed. If you need to reinstall:
```bash
npm install
```

## 🎨 Step 2: Customize Your Content

### Update Profile Information
Edit `src/data/profile.js`:
- Change name, tagline, and bio
- Update email and location
- Add your social media links
- Update experience and education

### Add Your Projects
Edit `src/data/projects.js`:
- Add your own projects
- Include descriptions, tech stacks, and links
- Add screenshots to `public/projects/`

### Update Skills
Edit `src/data/skills.js`:
- Add or remove skills
- Adjust skill levels
- Categorize appropriately

### Write Blog Posts
Edit `src/data/blog.js`:
- Add your blog posts
- Use Markdown formatting in content
- Tag posts appropriately

### Add Testimonials
Edit `src/data/testimonials.js`:
- Add testimonials from clients/colleagues
- Include photos in `public/testimonials/`

### Update Resume
Edit `src/data/resume.js`:
- Update experience details
- Add certifications
- Update skills summary

## 📧 Step 3: Configure Contact Form

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your credentials:
   - Service ID
   - Template ID
   - Public Key
5. Update `src/pages/Contact.jsx` lines 29-31

## 🖼️ Step 4: Add Your Assets

### Required Assets:
- `public/avatar.jpg` - Your profile picture (400x400px)
- `public/resume.pdf` - Your resume PDF
- `public/projects/` - Screenshot images for projects
- `public/testimonials/` - Photos for testimonials

### Optional:
- Replace `public/vite.svg` with your favicon
- Add any other images you need

## 🎨 Step 5: Customize Colors (Optional)

Edit `tailwind.config.js` to change the primary color:
```javascript
colors: {
  primary: {
    light: '#3b82f6',    // Light blue
    DEFAULT: '#2563eb',  // Default blue
    dark: '#1d4ed8',     // Dark blue
  },
}
```

Popular color options:
- Blue (current): `#2563eb`
- Purple: `#7c3aed`
- Green: `#059669`
- Red: `#dc2626`
- Orange: `#ea580c`

## 🚀 Step 6: Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

## 🏗️ Step 7: Build for Production

When ready to deploy:
```bash
npm run build
```

The optimized build will be in the `dist` folder.

## 📤 Step 8: Deploy

### Vercel (Recommended)
1. Push code to GitHub
2. Import repository on [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify
1. Push code to GitHub
2. Import repository on [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### GitHub Pages
1. Install: `npm install gh-pages --save-dev`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 🎯 Next Steps

- [ ] Update all data files with your information
- [ ] Add your profile picture and resume PDF
- [ ] Configure EmailJS for contact form
- [ ] Test all pages and links
- [ ] Customize colors if desired
- [ ] Add project screenshots
- [ ] Write blog posts
- [ ] Deploy to your hosting platform

## 💡 Tips

1. **SEO**: Update `index.html` title and meta tags
2. **Analytics**: Add Google Analytics to `index.html`
3. **Domain**: Configure custom domain in your hosting platform
4. **Performance**: Images should be optimized (WebP format recommended)
5. **Testing**: Test on mobile devices and different browsers

## 🆘 Need Help?

- Check the main `README.md` for detailed documentation
- Review component files for examples
- All data structures are documented in data files

---

**You're all set! Start customizing and make this portfolio your own! 🚀**
