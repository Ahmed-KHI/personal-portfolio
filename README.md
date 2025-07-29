# Modern Personal Portfolio with AI Robot Assistant 🤖

A cutting-edge personal portfolio website featuring an interactive AI robot assistant that guides visitors through your professional journey. Built with modern web technologies and designed with a focus on user experience and accessibility.

## ✨ Features

### 🤖 AI Robot Assistant
- **Interactive Chatbot**: Floating robot that explains portfolio sections
- **Text-to-Speech**: Voice narration of content
- **Smart Responses**: Contextual information about skills, projects, and experience
- **Expandable Interface**: Minimizable chat window with quick actions

### 🎨 Modern Design
- **Glass Morphism**: Frosted glass effects and transparency
- **Smooth Animations**: Framer Motion powered transitions
- **Gradient Typography**: Eye-catching text effects
- **Dark Theme**: Professional dark mode with blue/purple accents

### 📱 Responsive & Accessible
- **Mobile-First**: Optimized for all device sizes
- **Accessibility**: ARIA labels and semantic HTML
- **Performance**: Fast loading with Vite bundling
- **SEO Optimized**: Proper meta tags and structure

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Landing section
│   ├── About.tsx           # About section with stats
│   ├── Skills.tsx          # Skills with progress bars
│   ├── Projects.tsx        # Portfolio projects
│   ├── Contact.tsx         # Contact form
│   ├── RobotAssistant.tsx  # AI chatbot assistant
│   └── LoadingScreen.tsx   # Loading animation
├── App.tsx                 # Main application
├── main.tsx               # Entry point
└── index.css              # Global styles
```

## 🎯 Key Components

### Robot Assistant
The centerpiece of this portfolio - an interactive AI assistant that:
- Provides information about portfolio sections
- Offers voice narration capabilities
- Includes quick action buttons for navigation
- Features smooth animations and transitions

### Responsive Design
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Adaptive Layouts**: Grid systems that adjust to screen size
- **Touch Friendly**: Optimized for touch interactions
- **Performance**: Lazy loading and optimized assets

## 🎨 Customization

### Colors & Theme
Edit `tailwind.config.js` to customize:
- Primary colors
- Dark theme shades
- Gradient combinations
- Animation timings

### Content
Update the following files with your information:
- `components/Hero.tsx` - Name and title
- `components/About.tsx` - Personal information and stats
- `components/Skills.tsx` - Your technical skills
- `components/Projects.tsx` - Your portfolio projects
- `components/Contact.tsx` - Contact information

### Robot Responses
Customize the AI assistant in `components/RobotAssistant.tsx`:
- Update `robotResponses` array with your content
- Modify quick action buttons
- Customize voice settings

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy!

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects if needed

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run deploy`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern web portfolios
- Robot concept inspired by AI assistant interfaces
- Built with love using React and modern web technologies

---

**Note**: Remember to replace placeholder content with your actual information before deploying!

## 📧 Support

If you have any questions or need help customizing the portfolio, feel free to reach out or open an issue.

Happy coding! 🚀
