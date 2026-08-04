import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import resumeData from '../../resume_data.json';

export default function Home() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      {/* Newspaper Header */}
      <header className="text-center mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center pb-4 border-b border-black/20 dark:border-white/10 gap-4">
          {/* Left Block */}
          <div className="text-left text-xs uppercase tracking-wider font-semibold font-headline">
            <p className="font-bold">Dhruthi D</p>
            <p className="text-[#1c1917]/70 dark:text-[#eae6df]/70 font-medium">Bengaluru, Karnataka</p>
          </div>

          {/* Middle Block */}
          <div>
            <h1 className="text-4xl md:text-6xl font-black font-headline tracking-tighter uppercase text-black dark:text-white leading-none">
              DHRUTHI D
            </h1>
            <p className="text-xs uppercase tracking-widest font-bold mt-1 text-[#1c1917]/80 dark:text-[#eae6df]/80">
              BE in Information Science & Engineering
            </p>
          </div>

          {/* Right Block */}
          <div className="text-right hidden md:block">
            <span className="inline-block border border-black dark:border-white/40 px-3 py-1 text-xs uppercase tracking-widest font-bold font-headline">
              PORTFOLIO
            </span>
          </div>
        </div>

        {/* Issue Sub-bar */}
        <div className="flex justify-between items-center py-2 text-[10px] uppercase font-bold tracking-widest border-y-4 border-double border-black dark:border-white/40 my-3">
          <span>VOL. 2026 • ISSUE I</span>
          <span>{currentDate.toUpperCase()}</span>

        </div>
      </header>

      {/* Main Front Page Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Headline & Lead Story */}
        <div className="lg:col-span-8 space-y-6">
          <div className="border-b border-black/20 dark:border-white/10 pb-6">
            <h2 className="text-3xl md:text-5xl font-black font-headline tracking-tight text-black dark:text-white leading-tight uppercase mb-4">
              PIONEERING SYSTEM INTEGRATION & FULL-STACK SYSTEMS
            </h2>
            <p className="text-lg md:text-xl font-medium font-serif italic text-[#1c1917]/80 dark:text-[#eae6df]/80 leading-relaxed mb-6">
              "Building software and data-driven systems that bridge hardware control with personalized web recommendation algorithms."
            </p>

            {/* Main Picture Block */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Photo */}
              <div className="md:col-span-6">
                <div className="vintage-photo">
                  <div className="aspect-[4/3] relative bg-gradient-to-br from-black/5 to-black/10 dark:from-white/5 dark:to-white/10 border border-black/20 overflow-hidden">
                    <Image 
                      src={`/${resumeData.personal.photo}`}
                      alt={resumeData.personal.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <p className="text-[10px] italic text-center mt-2 text-[#1c1917]/70 dark:text-[#eae6df]/70 uppercase tracking-wider font-semibold">
                    Fig 1. Dhruthi D. - Student Portfolio portrait (typeset in digital print).
                  </p>
                </div>
              </div>

              {/* Lead Text */}
              <div className="md:col-span-6 space-y-4">
                <p className="text-sm leading-relaxed drop-cap text-[#1c1917]/90 dark:text-[#eae6df]/90 font-serif text-justify">
                  {resumeData.personal.bio}
                </p>
                <div className="pt-4 flex flex-wrap gap-3">
                  <Link href="/projects" className="btn-primary flex items-center space-x-2">
                    <span>INDEX OF WORK</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link href="/resume" className="btn-secondary flex items-center space-x-2">
                    <Download className="w-3.5 h-3.5" />
                    <span>GAZETTE</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-articles (Two columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Article 1: EduMate */}
            <div className="space-y-3 md:news-col-divider">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1c1917]/60 dark:text-[#eae6df]/60 font-headline">Latest Project Dispatch</span>
              <h3 className="text-xl font-bold font-headline uppercase leading-tight text-black dark:text-white">
                EDUMATE RECOMMENDS COLLEGE CHOICES TO 70+ KCET CANDIDATES
              </h3>
              <p className="text-xs text-justify font-serif text-[#1c1917]/85 dark:text-[#eae6df]/85 leading-relaxed">
                A full-stack Node.js, Express, and React platform was launched to help KCET counselling candidates prepare rank-based recommendations and automated choices. Developed with interactive visualizations and secure JWT verification.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/projects" className="text-xs font-bold font-headline underline hover:text-primary-600">
                  READ MORE ABOUT EDUMATE →
                </Link>
                {resumeData.projects[0].demo && (
                  <a
                    href={resumeData.projects[0].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold font-headline underline text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300"
                  >
                    LIVE DEMO ↗
                  </a>
                )}
              </div>
            </div>

            {/* Article 2: Urban Sustainability */}
            <div className="space-y-3">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1c1917]/60 dark:text-[#eae6df]/60 font-headline">AI & Earth Science</span>
              <h3 className="text-xl font-bold font-headline uppercase leading-tight text-black dark:text-white">
                URBAN SUSTAINABILITY AI INCORPORATES GEOSPATIAL MAPS
              </h3>
              <p className="text-xs text-justify font-serif text-[#1c1917]/85 dark:text-[#eae6df]/85 leading-relaxed">
                Integrating OpenStreetMap vector features and GeoPandas raster scoring, an AI system has been deployed predicting the environment impact of urban projects, explaining insights with Google Gemini AI.
              </p>
              <Link href="/projects" className="inline-block text-xs font-bold font-headline underline hover:text-primary-600">
                READ THE SUSTAINABILITY PAPER →
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side: Sidebar Stats & Information */}
        <div className="lg:col-span-4 space-y-6 lg:border-l lg:border-black/20 lg:dark:border-white/10 lg:pl-6">
          {/* Dispatch Box (Aesthetic Box border like Serbia News) */}
          <div className="border-4 border-black dark:border-white/40 p-5 bg-transparent">
            <h3 className="font-headline font-black text-lg text-center uppercase tracking-wider mb-4 border-b border-black dark:border-white/20 pb-2 text-black dark:text-white">
              DISPATCH GAZETTE
            </h3>

            <div className="space-y-6">
              {/* Stat 1 */}
              <div className="text-center pb-4 border-b border-black/10 dark:border-white/10">
                <div className="font-headline font-black text-3xl text-black dark:text-white mb-1">
                  {resumeData.education[0].cgpa}
                </div>
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#1c1917]/70 dark:text-[#eae6df]/70">
                  RVCE ACADEMIC CGPA
                </div>
              </div>

              {/* Stat 2 */}
              <div className="text-center pb-4 border-b border-black/10 dark:border-white/10">
                <div className="font-headline font-black text-3xl text-black dark:text-white mb-1">
                  {resumeData.projects.length}
                </div>
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#1c1917]/70 dark:text-[#eae6df]/70">
                  COMPLETED WORK DISPATCHES
                </div>
              </div>

              {/* Stat 3 */}
              <div className="text-center pb-4 border-b border-black/10 dark:border-white/10">
                <div className="font-headline font-black text-3xl text-black dark:text-white mb-1">
                  {resumeData.skills.languages.length + resumeData.skills.backend.length + resumeData.skills.frameworks.length}
                </div>
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#1c1917]/70 dark:text-[#eae6df]/70">
                  RECORDED TECHNICAL CAPABILITIES
                </div>
              </div>

              {/* Stat 4 */}
              <div className="text-center">
                <div className="font-headline font-black text-3xl text-black dark:text-white mb-1">
                  {resumeData.experience.length}
                </div>
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#1c1917]/70 dark:text-[#eae6df]/70">
                  ACTIVE COMMITTED GUILDS
                </div>
              </div>
            </div>
          </div>

          {/* Correspondence Directory */}
          <div className="card p-5">
            <h4 className="font-headline font-extrabold text-sm uppercase tracking-wider mb-4 border-b border-black/10 dark:border-white/10 pb-2 text-black dark:text-white">
              CORRESPONDENCE DIRECTORY
            </h4>
            <div className="space-y-4 text-xs font-semibold uppercase tracking-wider font-headline">
              <a
                href={resumeData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:underline"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB: /DHRUTHI-D</span>
              </a>
              <a
                href={resumeData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:underline"
              >
                <Linkedin className="w-4 h-4" />
                <span>LINKEDIN: /IN/DHRUTHI-D</span>
              </a>
              <a
                href={`mailto:${resumeData.social.email}`}
                className="flex items-center space-x-3 hover:underline"
              >
                <Mail className="w-4 h-4" />
                <span>EMAIL: {resumeData.social.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
