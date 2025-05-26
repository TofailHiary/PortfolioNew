# Al-Tofail Al-Hiary - Portfolio

> Quality ∙ Velocity ∙ Reliability

A modern, responsive portfolio website for Al-Tofail Al-Hiary, a QA & QC Team Lead with expertise in automation, leadership, and cutting-edge testing methodologies. This project showcases skills, experience, projects, and provides multiple ways to get in touch.

## 🚀 Live Demo & Repository

- **Live Portfolio**: [https://TofailHiary.github.io/Tofail/](https://TofailHiary.github.io/Tofail/)
- **GitHub Repository**: [https://github.com/TofailHiary/Tofail.git](https://github.com/TofailHiary/Tofail.git)

## ✨ Features

### 🎨 Design & UX
- Modern design with glassmorphism effects.
- **Light & Dark Theme Support** with a toggle for user preference.
- Jordanian sunset-inspired color palette (#F77F00, #FFB703, #023047) as a primary accent.
- Mobile-first responsive design.
- Smooth CSS animations and transitions.
- Custom cursor interactions (styling defined in `index.css`).

### 🛠️ Technical Stack
- **React 18** with TypeScript
- **Vite** for a fast development experience.
- **Tailwind CSS** for utility-first styling, with a custom design system using CSS variables.
- Component-based architecture.

### 🔥 Key Functionalities
- **Theme Switching:** User-selectable light and dark themes.
- **Interactive Timeline:** For showcasing work experience.
- **Dynamic Skills Display:** Categorized skills with animated progress bars.
- **Project Showcase:** Displays featured projects with details and links to GitHub repositories. Includes a "QA Metrics View" toggle.
- **Certificate Linking:** Certificates can be linked to downloadable PDF files.
- **Functional Contact Form:** Integrated with Formspree for message submission.
- **"Bug Hunt" Easter Egg:** Ctrl+B opens a console modal (a fun feature from the original project).

### 📱 Sections
1.  **Hero:** Animated introduction with dynamic roles, contact chips, and CV download.
2.  **About:** Professional journey and personal details.
3.  **Experience:** Interactive timeline detailing career progression.
4.  **Skills:** Categorized technical and soft skills with visual progress.
5.  **Projects:** Showcase of key projects with descriptions, tech stacks, and QA insights.
6.  **Blog:** Displays mock blog posts (can be adapted for a live feed).
7.  **Certificates & Training:** Grid of certifications and trainings, with links to PDF certificates.
8.  **Contact:** Contact information and a functional contact form.

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+ (or latest LTS)
- npm (comes with Node.js) or Bun
- Git

### Installation & Running Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/TofailHiary/Tofail.git
    cd Tofail
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # OR if using Bun
    # bun install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    # OR if using Bun
    # bun run dev
    ```
    The application will typically be available at `http://localhost:5173` (Vite's default) or `http://localhost:8080` (as previously used by the user).

4.  **Build for production:**
    ```bash
    npm run build
    # OR if using Bun
    # bun run build
    ```

5.  **Preview production build:**
    ```bash
    npm run preview
    # OR if using Bun
    # bun run preview
    ```

## 📂 Project Structure (Key Areas)

```
public/
├── CV_AlTofailAlHiary.pdf
├── ctfl.pdf
├── ctal-ta.pdf
└── 21-CTAL-TTA-183921-12.pdf
src/
├── components/           # Reusable UI components
│   ├── About.tsx
│   ├── Blog.tsx
│   ├── Certificates.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── icons/            # Custom SVG icons
│   │   └── WhatsappIcon.tsx
│   └── ui/               # General UI elements (buttons, theme toggle, etc.)
│       └── ThemeToggleButton.tsx
├── contexts/             # React contexts
│   └── ThemeContext.tsx
├── App.tsx               # Main application component with routing
├── main.tsx              # Application entry point
└── index.css             # Tailwind directives, custom CSS, theme variables
```

## 🎯 Key Interactions

- **Theme Toggle Button:** Located in the navigation bar to switch between light and dark modes.
- **QA View Toggle:** In the Projects section, shows/hides QA impact metrics.
- **Skill Progress Bars:** Animate into view when scrolled to.
- **Keyboard Shortcuts:**
    - **Ctrl + B**: Opens the "Bug Hunt" console modal.
    - **Esc**: Closes modals.

## 🚀 Deployment

This project is set up for deployment on static hosting platforms like GitHub Pages or Vercel.

### GitHub Pages
1.  Ensure the `base` path in `vite.config.ts` is set to `"/Tofail/"` and `basename` in `src/App.tsx` is `"/Tofail"`.
2.  Build the static files: `npm run build`.
3.  Deploy the contents of the `dist/` folder to the `gh-pages` branch of your repository.

## 🔧 Configuration

### Tailwind CSS
-   Custom color palette (sunset theme) and theme variables are defined in `tailwind.config.ts` and `src/index.css`.
-   Light and dark theme variables are managed in `src/index.css`.

### Fonts
-   **Primary**: Space Grotesk
-   **Monospace**: JetBrains Mono
    (These are likely imported via a CSS import or a link tag in `index.html` - ensure this is set up).

## 📝 Content Management
-   Most content (experience, skills, project details, certificates, blog posts) is currently hardcoded within the respective components.
-   Certificate PDF files are linked from the `public` folder.
-   The contact form submissions are handled by Formspree via the endpoint: `https://formspree.io/f/mzzrlawl`.

## 📧 Contact

**Al-Tofail Al-Hiary**
- Email: tofailhiary@gmail.com
- LinkedIn: [al-tofail-al-hiary-3268a798](https://www.linkedin.com/in/al-tofail-al-hiary-3268a798)
- Phone/WhatsApp: +962 777 894 429
- Location: Amman, Jordan (UTC +03)

---

Built with ❤️ and ☕ by Al-Tofail Al-Hiary.
