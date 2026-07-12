import Link from 'next/link';
import { Heart } from 'lucide-react';
import resumeData from '../../resume_data.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t-4 border-double border-black dark:border-white/40 bg-transparent py-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-black/20 dark:border-white/10">
          {/* Masthead Info */}
          <div className="space-y-3">
            <h3 className="font-headline font-black text-xl tracking-wider uppercase">DHRUTHI D</h3>
            <p className="text-xs text-[#1c1917]/70 dark:text-[#eae6df]/70 uppercase tracking-widest leading-relaxed">
              ESTABLISHED 2023 • BENGALURU, KARNATAKA • INFORMATION SCIENCE & ENGINEERING
            </p>
          </div>

          {/* Directory Column */}
          <div className="space-y-3">
            <h4 className="font-headline font-bold text-xs uppercase tracking-wider">Index of Sections</h4>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold">
              <Link href="/about" className="hover:underline">[ ABOUT ME ]</Link>
              <Link href="/projects" className="hover:underline">[ WORK & PROJECTS ]</Link>
              <Link href="/resume" className="hover:underline">[ EXPERIENCE & GAZETTE ]</Link>
              <Link href="/contact" className="hover:underline">[ WRITE TO EDITOR ]</Link>
            </div>
          </div>

          {/* Social Directory */}
          <div className="space-y-3">
            <h4 className="font-headline font-bold text-xs uppercase tracking-wider">Correspondence & Inquiries</h4>
            <div className="flex flex-col gap-y-1 text-xs font-semibold">
              <a href={resumeData.social.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                [ GITHUB ]
              </a>
              <a href={resumeData.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                [ LINKEDIN ]
              </a>
              <a href={`mailto:${resumeData.social.email}`} className="hover:underline">
                [ EMAIL: {resumeData.social.email.toUpperCase()} ]
              </a>
            </div>
          </div>
        </div>

        {/* Masthead base imprint */}
        <div className="pt-8 text-center md:flex md:justify-between md:items-center text-xs uppercase tracking-widest text-[#1c1917]/60 dark:text-[#eae6df]/60 font-medium">
          <p>© {currentYear} DHRUTHI D. ALL RIGHTS PRINTED ON DIGITAL PAPER.</p>
          <p className="flex items-center justify-center space-x-1 mt-2 md:mt-0">
            <span>TYPESET WITH NEXT.JS & TAILWIND CSS</span>
            <Heart className="w-3.5 h-3.5 text-black dark:text-white fill-current" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
