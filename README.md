# Portfolio Website

A modern, fully responsive personal portfolio website built with React, Vite, React Router, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Built with React 18, Vite, and Tailwind CSS
- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **Dark/Light Mode**: Toggle between themes with persistent localStorage
- **Dynamic Routing**: React Router for smooth navigation
- **Contact Form**: EmailJS integration for contact form functionality
- **Blog System**: Built-in blog with posts stored in local data files
- **Project Showcase**: Display your projects with detailed pages
- **Resume Section**: Professional resume with download functionality
- **SEO Friendly**: Optimized for search engines

## 📁 Project Structure

```
src/
├── assets/          # Images, icons, resume PDF
├── components/      # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProjectCard.jsx
│   ├── BlogCard.jsx
│   ├── SkillBadge.jsx
│   ├── SectionHeader.jsx
│   └── TestimonialCard.jsx
├── data/            # Local data files (no backend needed)
│   ├── projects.js
│   ├── skills.js
│   ├── blog.js
│   ├── testimonials.js
│   ├── profile.js
│   └── resume.js
├── pages/           # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── ProjectDetail.jsx
│   ├── Blog.jsx
│   ├── BlogPost.jsx
│   ├── Contact.jsx
│   └── Resume.jsx
├── styles/          # Global styles
│   └── index.css
├── App.jsx          # Main app with routing
└── main.jsx         # Entry point
```

## 🛠️ Installation

1. **Clone the repository** (or use this template)

```bash
git clone <your-repo-url>
cd portfolio-project
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## ⚙️ Configuration

### 1. Update Your Information

Edit the data files in `src/data/` to customize with your information:

- **`profile.js`**: Your name, bio, social links, experience, education
- **`projects.js`**: Your projects with descriptions, screenshots, links
- **`skills.js`**: Your technical skills categorized by type
- **`blog.js`**: Your blog posts with content
- **`testimonials.js`**: Testimonials from clients/colleagues
- **`resume.js`**: Detailed resume information

### 2. Configure EmailJS (Contact Form)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your credentials:
   - Service ID
   - Template ID
   - Public Key
5. Update `src/pages/Contact.jsx`:

```javascript
const SERVICE_ID = 'your_service_id';
const TEMPLATE_ID = 'your_template_id';
const PUBLIC_KEY = 'your_public_key';
```

### 3. Add Your Assets

Place your assets in the `public` folder:

- **Avatar**: `/avatar.jpg`
- **Resume PDF**: `/resume.pdf`
- **Project Screenshots**: `/projects/`
- **Testimonial Photos**: `/testimonials/`

### 4. Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        light: '#3b82f6',
        DEFAULT: '#2563eb',
        dark: '#1d4ed8',
      },
    },
  },
}
```

## 📝 Adding Content

### Add a New Project

Edit `src/data/projects.js`:

```javascript
{
  id: 7,
  title: "Your Project Name",
  slug: "project-url-slug",
  description: "Short description",
  longDescription: "Detailed description",
  tags: ["React", "Node.js"],
  techStack: ["React", "MongoDB", "Express"],
  screenshots: ["/projects/image1.jpg"],
  liveUrl: "https://demo.com",
  githubUrl: "https://github.com/user/repo",
  featured: true,
  category: "Full Stack",
  date: "2024",
}
```

### Add a New Blog Post

Edit `src/data/blog.js`:

```javascript
{
  id: 5,
  slug: "url-friendly-slug",
  title: "Your Blog Post Title",
  date: "2024-02-20",
  author: "Your Name",
  excerpt: "Brief summary...",
  content: `Full content here...`,
  tags: ["React", "Tutorial"],
  readTime: "5 min read",
  featured: false,
}
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### Deploy to GitHub Pages

1. Install gh-pages: `npm install gh-pages --save-dev`
2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/repo-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## 🎨 Customization

### Dark Mode

Dark mode is implemented using Tailwind's `dark:` classes and is persistent via localStorage. The toggle is in the Navbar component.

### Responsive Design

All components are mobile-first and responsive. Breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 📦 Built With

- [React](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [React Router](https://reactrouter.com/) - Routing
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React Icons](https://react-icons.github.io/react-icons/) - Icons
- [EmailJS](https://www.emailjs.com/) - Contact form

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💬 Support

If you have any questions or need help, feel free to open an issue.

---

**Made with ❤️ using React and Tailwind CSS**
