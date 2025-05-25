
# Al-Tofail Al-Hiary - Portfolio

> Quality ∙ Velocity ∙ Reliability

A modern, responsive portfolio website for Al-Tofail Al-Hiary, QA & QC Team Lead with expertise in automation, leadership, and cutting-edge testing methodologies.

## 🚀 Live Demo

- **Production**: [Portfolio Website](https://al-tofail-portfolio.vercel.app)
- **GitHub**: [Repository](https://github.com/tofailhiary/portfolio)

## ✨ Features

### 🎨 Design & UX
- **Awwwards-level design** with glassmorphism effects
- **Jordanian sunset color palette** (#F77F00, #FFB703, #023047)
- **Mobile-first responsive design** 
- **Smooth animations** with Framer Motion
- **Custom cursor interactions**
- **Dark theme** optimized for readability

### 🛠️ Technical Excellence
- **React 18** with TypeScript
- **Vite** for lightning-fast development
- **Tailwind CSS** with custom design system
- **Atomic design methodology**
- **WCAG 2.2 AA accessibility** compliance
- **Lighthouse score ≥ 95** across all categories

### 🔥 Signature Features
- **Interactive timeline** for work experience
- **QA metrics overlay** toggle for projects
- **Live blog feed** from RSS integration
- **Certificate verification** system
- **Ctrl+B shortcut** for "Bug Hunt" console modal
- **Weekly Lighthouse updates** via GitHub Actions

### 📱 Sections
1. **Hero** - Animated introduction with contact chips
2. **About** - Professional journey and personal details
3. **Experience** - Interactive timeline of 8+ years career
4. **Skills** - Categorized expertise with progress bars
5. **Projects** - Portfolio with QA insights toggle
6. **Blog** - Latest posts from QA Geeks blog
7. **Certificates** - ISTQB® and professional certifications
8. **Contact** - React Hook Form with EmailJS integration

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/tofailhiary/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Setup

Create a `.env.local` file for EmailJS integration:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📂 Project Structure

```
src/
├── components/           # Atomic components
│   ├── Navigation.tsx   # Responsive navigation
│   ├── Hero.tsx         # Landing section
│   ├── About.tsx        # Bio and personal info
│   ├── Experience.tsx   # Interactive timeline
│   ├── Skills.tsx       # Categorized skills
│   ├── Projects.tsx     # Portfolio showcase
│   ├── Blog.tsx         # RSS feed integration
│   ├── Certificates.tsx # Certification grid
│   ├── Contact.tsx      # Contact form
│   ├── Footer.tsx       # Site footer
│   ├── BugHuntModal.tsx # Ctrl+B easter egg
│   └── LighthouseWidget.tsx # Performance scores
├── pages/
│   └── Index.tsx        # Main page layout
├── styles/
│   └── index.css        # Tailwind + custom CSS
└── types/               # TypeScript definitions
```

## 🎯 Key Interactions

### Keyboard Shortcuts
- **Ctrl + B**: Opens "Bug Hunt" console showing OSS issues
- **Esc**: Closes any open modal

### Interactive Elements
- **QA View Toggle**: Shows metrics overlay on projects
- **Skill Progress Bars**: Animate on scroll into view
- **Timeline Hover**: Enhanced cards with glow effects
- **Custom Cursor**: Morphs based on hover targets

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### GitHub Pages
```bash
# Build static files
npm run build

# Deploy dist/ folder to gh-pages branch
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 4173
CMD ["npm", "run", "preview", "--", "--host"]
```

## 📊 Performance

- **Lighthouse Performance**: 96+
- **Lighthouse Accessibility**: 98+
- **Lighthouse Best Practices**: 95+
- **Lighthouse SEO**: 100
- **First Contentful Paint**: <1.5s
- **Time to Interactive**: <2.5s

## 🔧 Configuration

### Tailwind Config
Custom color palette and animations defined in `tailwind.config.ts`:

```typescript
colors: {
  'sunset': {
    orange: '#F77F00',
    amber: '#FFB703', 
    navy: '#023047',
  }
}
```

### Fonts
- **Primary**: Space Grotesk (Google Fonts)
- **Monospace**: JetBrains Mono (Google Fonts)

## 📝 Content Management

### Blog Integration
RSS feed from [QA Geeks Blog](https://tofailhiary.github.io/QAGeeks/feed.xml) automatically fetches latest posts.

### Certificate Updates
Update certificates data in `src/components/Certificates.tsx` with new certifications.

### Experience Timeline
Modify experience data in `src/components/Experience.tsx` for career updates.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Al-Tofail Al-Hiary**
- Email: tofailhiary@gmail.com
- LinkedIn: [al-tofail-al-hiary-3268a798](https://www.linkedin.com/in/al-tofail-al-hiary-3268a798)
- Phone: +962 777 894 429
- Location: Amman, Jordan (UTC +03)

---

Built with ❤️ and ☕ by Al-Tofail Al-Hiary | QA & QC Team Lead | ISTQB® CTFL, CTAL-TA, CTAL-TTA
