import { Download, Calendar, MapPin, GraduationCap, Briefcase, Award } from 'lucide-react';
import resumeData from '../../../resume_data.json';

export default function Resume() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1c1917]/60 dark:text-[#eae6df]/60 font-headline">Section IV • Official Gazette</span>
        <h1 className="text-4xl md:text-5xl font-black font-headline text-black dark:text-white uppercase mt-1 pb-4 border-b border-black dark:border-white/20">
          ACADEMIC & WORK GAZETTE
        </h1>
        <p className="text-sm md:text-base font-serif italic text-[#1c1917]/70 dark:text-[#eae6df]/70 max-w-2xl mx-auto mt-4 leading-relaxed">
          "The compiled credentials, certifications, and operational history of Dhruthi D. verified for record."
        </p>
        <div className="mt-6 flex justify-center">
          <a
            href="/Resume.pdf"
            download
            className="btn-primary inline-flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD PRINT EDITION (PDF)</span>
          </a>
        </div>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Side: Timeline (Education & Experience) */}
        <div className="md:col-span-8 space-y-12">
          {/* Education timeline */}
          <section className="space-y-6">
            <h2 className="font-headline font-black text-xl text-black dark:text-white uppercase pb-2 border-b border-black dark:border-white/20">
              I. Educational Credentials
            </h2>
            <div className="space-y-6">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="card p-5">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                    <div>
                      <h3 className="font-headline font-bold text-base text-black dark:text-white uppercase flex items-center gap-2">
                        <GraduationCap className="w-4 h-4" />
                        {edu.institution}
                      </h3>
                      <p className="text-xs font-semibold text-[#1c1917]/80 dark:text-[#eae6df]/80 uppercase mt-0.5">
                        {edu.degree}
                      </p>
                    </div>
                    <div className="text-left md:text-right">
                      <span className="font-headline font-black text-lg text-black dark:text-white">
                        {edu.cgpa ? `CGPA: ${edu.cgpa}/10` : `Percentage: ${edu.percentage}`}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#1c1917]/60 dark:text-[#eae6df]/60 font-medium">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {edu.period}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {edu.location}</span>
                  </div>
                  {edu.description && (
                    <p className="text-xs text-[#1c1917]/85 dark:text-[#eae6df]/85 font-serif italic text-justify leading-relaxed mt-2.5">
                      {edu.description}
                    </p>
                  )}
                  {edu.institution === "R V College of Engineering" && resumeData.relevantCoursework && (
                    <div className="mt-4 pt-3 border-t border-black/10 dark:border-white/5">
                      <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-black dark:text-white mb-2">
                        Relevant Coursework:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {resumeData.relevantCoursework.map((course, idx) => (
                          <span key={idx} className="px-2 py-0.5 border border-black/20 dark:border-white/15 text-[10px] uppercase font-bold font-headline">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Experience timeline */}
          <section className="space-y-6">
            <h2 className="font-headline font-black text-xl text-black dark:text-white uppercase pb-2 border-b border-black dark:border-white/20">
              II. Experience & Leadership History
            </h2>
            <div className="space-y-6">
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="card p-5">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                    <div>
                      <h3 className="font-headline font-bold text-base text-black dark:text-white uppercase flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {exp.organization}
                      </h3>
                      <p className="text-xs font-semibold text-[#1c1917]/80 dark:text-[#eae6df]/80 uppercase mt-0.5">
                        Role: {exp.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#1c1917]/60 dark:text-[#eae6df]/60 font-medium">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {exp.period}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {exp.location}</span>
                  </div>
                  {exp.description && (
                    <p className="text-xs text-[#1c1917]/85 dark:text-[#eae6df]/85 font-serif italic text-justify leading-relaxed mt-2.5">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Side: Skills & Certifications */}
        <div className="md:col-span-4 space-y-8 md:border-l md:border-black/20 md:dark:border-white/10 md:pl-6">
          {/* Contact Details box */}
          <div className="border-2 border-black dark:border-white/40 p-4">
            <h3 className="font-headline font-black text-xs text-center uppercase tracking-wider mb-3 border-b border-black dark:border-white/20 pb-1 text-black dark:text-white">
              CONTACT SHEET
            </h3>
            <div className="space-y-2 text-xs font-serif text-[#1c1917]/85 dark:text-[#eae6df]/85 uppercase">
              <p className="font-bold">DHRUTHI D.</p>
              <p>{resumeData.personal.location}</p>
              <p>PH: {resumeData.personal.phone}</p>
              <p className="lowercase font-bold select-all">{resumeData.personal.email}</p>
            </div>
          </div>

          {/* Technical capabilities */}
          <div className="space-y-4">
            <h3 className="font-headline font-black text-sm uppercase tracking-wider text-black dark:text-white border-b border-black dark:border-white/20 pb-1">
              III. Technical Catalog
            </h3>
            
            {/* Languages */}
            <div className="space-y-1.5">
              <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-black dark:text-white">Languages</h4>
              <div className="space-y-1 text-xs font-serif">
                {resumeData.skills.languages.map((skill, index) => (
                  <div key={index} className="flex justify-between items-center py-1 border-b border-black/10 dark:border-white/5">
                    <span>{skill.name}</span>
                    <span className="font-bold">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="space-y-1.5 pt-2">
              <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-black dark:text-white">Backend Stack</h4>
              <div className="space-y-1 text-xs font-serif">
                {resumeData.skills.backend.map((skill, index) => (
                  <div key={index} className="flex justify-between items-center py-1 border-b border-black/10 dark:border-white/5">
                    <span>{skill.name}</span>
                    <span className="font-bold">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="space-y-1.5 pt-2">
              <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-black dark:text-white">Environments</h4>
              <div className="space-y-1 text-xs font-serif">
                {resumeData.skills.frameworks.map((skill, index) => (
                  <div key={index} className="flex justify-between items-center py-1 border-b border-black/10 dark:border-white/5">
                    <span>{skill.name}</span>
                    <span className="font-bold">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certificates */}
          {resumeData.certificates && resumeData.certificates.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-headline font-black text-sm uppercase tracking-wider text-black dark:text-white border-b border-black dark:border-white/20 pb-1">
                IV. Certificates
              </h3>
              <div className="space-y-3">
                {resumeData.certificates.map((cert, index) => (
                  <div key={index} className="border border-black/30 dark:border-white/20 p-3 bg-transparent">
                    <h4 className="font-headline font-bold text-xs uppercase text-black dark:text-white flex items-center gap-1.5 mb-1.5">
                      <Award className="w-3.5 h-3.5 text-black dark:text-white" />
                      {cert.name}
                    </h4>
                    <p className="text-[10px] text-justify leading-relaxed text-[#1c1917]/80 dark:text-[#eae6df]/80 font-serif italic">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Achievements list */}
          <div className="space-y-4">
            <h3 className="font-headline font-black text-sm uppercase tracking-wider text-black dark:text-white border-b border-black dark:border-white/20 pb-1">
              V. Key Declarations
            </h3>
            <ul className="space-y-2 text-xs font-serif text-[#1c1917]/90 dark:text-[#eae6df]/90 list-disc list-inside">
              {resumeData.achievements.map((achievement, index) => (
                <li key={index} className="leading-relaxed">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
