# DHRUTHI D - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design, dark mode support, and a functional contact form.

## ✨ Features

- **Modern Design**: Clean and professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Fast Performance**: Built with Next.js for optimal performance
- **TypeScript**: Type-safe development with TypeScript
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Contact Form**: Functional contact form with email integration
- **Downloadable Resume**: Direct download of resume PDF
- **Social Links**: Integration with GitHub, LinkedIn, and other platforms

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` and add your email credentials:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx          # About page
│   │   ├── contact/
│   │   │   └── page.tsx          # Contact page
│   │   ├── projects/
│   │   │   └── page.tsx          # Projects page
│   │   ├── resume/
│   │   │   └── page.tsx          # Resume page
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts      # Contact form API
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Home page
│   └── components/
│       ├── Navigation.tsx        # Navigation component
│       ├── Footer.tsx            # Footer component
│       └── ThemeProvider.tsx     # Dark mode provider
├── public/
│   └── Resume.pdf                # Resume file for download
├── resume_data.json              # Portfolio data
├── tailwind.config.ts            # Tailwind configuration
├── next.config.ts                # Next.js configuration
└── package.json                  # Dependencies
```

## 🎨 Customization

### Updating Portfolio Data

All your information is stored in `resume_data.json`. Simply edit this file to update:

- Personal information
- Education history
- Work experience
- Skills and technologies
- Projects
- Achievements
- Contact information

### Styling

The website uses Tailwind CSS with custom color schemes. You can modify:

- Colors in `tailwind.config.ts`
- Component styles in `src/app/globals.css`
- Individual page layouts

### Adding New Pages

To add a new page:

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Follow the existing page structure with navigation and layout

## 📧 Contact Form Setup

The contact form uses Nodemailer to send emails. To configure:

1. **Gmail Setup** (recommended for beginners):
   - Enable 2-Factor Authentication on your Google account
   - Generate an App Password
   - Use the App Password in your `.env.local` file

2. **Other Email Services**:
   - Update the `service` field in `src/app/api/contact/route.ts`
   - Modify authentication settings as needed

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- **Netlify**: Use `npm run build` and deploy the `out` directory
- **Railway**: Connect your GitHub repo and deploy
- **DigitalOcean App Platform**: Select Next.js and deploy
- **AWS Amplify**: Connect your repository and deploy

### Environment Variables

Make sure to set these environment variables in your deployment platform:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The website is fully responsive and includes:

- Mobile-first design approach
- Responsive navigation with hamburger menu
- Optimized layouts for all screen sizes
- Touch-friendly interactions

## 🌙 Dark Mode

The website includes a dark mode toggle that:

- Persists user preference in localStorage
- Respects system preference by default
- Smoothly transitions between themes
- Maintains accessibility in both modes

## 🔧 Technologies Used

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Email**: Nodemailer
- **Deployment**: Vercel (recommended)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support or questions:
- Open an issue on GitHub
- Contact: dhruthilakshmi.d@gmail.com
- LinkedIn: [linkedin.com/in/dhruthi-d](https://linkedin.com/in/dhruthi-d)

## 🙏 Acknowledgments

- Built with Next.js and Tailwind CSS
- Icons from Lucide React
- Design inspiration from modern portfolio websites

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
