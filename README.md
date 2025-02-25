# Portfolio Website

![Portfolio Banner](public/SM.webp)

A modern, responsive portfolio website built with Astro and React. This project showcases my skills, projects, and professional experience with a sleek design and performant architecture.

## ✨ Features

- **Modern Stack**: Built with Astro for fast static site generation with React components
- **Responsive Design**: Fully responsive layout that works on devices of all sizes
- **Dark/Light Mode**: Toggle between light and dark themes
- **Animations**: Smooth animations and transitions for enhanced user experience
- **Performance Optimized**: Fast load times and optimized assets
- **Contact Form**: Integrated EmailJS contact form with validation
- **SEO Friendly**: Optimized metadata and structured data for better search engine visibility

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **UI Components**: [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Astro Icon](https://github.com/natemoo-re/astro-icon)
- **Form Handling**: [EmailJS](https://www.emailjs.com/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)
- **Animation on Scroll**: [AOS](https://michalsnik.github.io/aos/)

## 📋 Project Structure

```
/
├── public/             # Static assets
│   └── images/         # Image files
├── src/
│   ├── components/     # UI components
│   │   ├── animations/ # Animation components
│   │   ├── effects/    # Visual effects
│   │   └── theme/      # Theme-related components
│   ├── data/           # Data files
│   ├── layouts/        # Layout components
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   ├── styles/         # Global styles
│   └── types/          # TypeScript type definitions
└── package.json        # Project dependencies
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ShrihariMaheshwari/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:4321`

## 🚢 Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

The built application will be in the `dist/` directory, ready to be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

## 🔧 Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the following values in the `Contact.astro` component:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   
   emailjs.sendForm(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     form
   )
   ```

## 📝 Customization

### Personal Information

Update personal information in the following files:

- `src/data/site.ts` - Website metadata and personal links
- `src/components/About.astro` - Skills and achievements
- `src/components/Experience.astro` - Work experience
- `src/components/Projects.astro` - Portfolio projects

### Themes

Customize theme colors in the TailwindCSS configuration file:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Your custom colors
      }
    }
  }
}
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/ShrihariMaheshwari/portfolio/issues).

## 📄 License

This project is [MIT](LICENSE) licensed.

## 👤 Contact

- Website: [shriharim.com](https://shriharim.com)
- Email: shrihari.maheshwari7@gmail.com
- LinkedIn: [https://www.linkedin.com/in/shriharimaheshwari](https://www.linkedin.com/in/shriharimaheshwari)
- GitHub: [https://github.com/ShrihariMaheshwari](https://github.com/ShrihariMaheshwari)