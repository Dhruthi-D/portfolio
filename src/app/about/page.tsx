import resumeData from '../../../resume_data.json';

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      {/* Header section styled like a editorial header */}
      <div className="text-center mb-12">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1c1917]/60 dark:text-[#eae6df]/60 font-headline">Section II • Editorial Profile</span>
        <h1 className="text-4xl md:text-5xl font-black font-headline text-black dark:text-white uppercase mt-1 pb-4 border-b border-black dark:border-white/20">
          EDITORIAL: MEET DHRUTHI D.
        </h1>
        <p className="text-sm md:text-base font-serif italic text-[#1c1917]/70 dark:text-[#eae6df]/70 max-w-2xl mx-auto mt-4 leading-relaxed">
          "A retrospective on academic excellence at R V College of Engineering and building systems that bridge the physical and virtual worlds."
        </p>
      </div>

      {/* Main Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Side: Bio Editorial */}
        <div className="md:col-span-8 space-y-6">
          <section className="pb-6 border-b border-black/20 dark:border-white/10">
            <h2 className="font-headline font-black text-xl text-black dark:text-white uppercase mb-4">
              Academic & Professional Chronicle
            </h2>
            <p className="text-sm leading-relaxed drop-cap text-[#1c1917]/90 dark:text-[#eae6df]/90 text-justify">
              {resumeData.personal.bio}
            </p>
          </section>

          {/* Education timeline */}
          <section className="pb-6 border-b border-black/20 dark:border-white/10">
            <h2 className="font-headline font-black text-xl text-black dark:text-white uppercase mb-6">
              Official Institutions & Record
            </h2>
            <div className="space-y-6">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="pl-4 border-l-2 border-black dark:border-white/30 space-y-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-headline font-bold text-base text-black dark:text-white uppercase">
                      {edu.institution}
                    </h3>
                    <span className="font-bold text-sm">{edu.cgpa || edu.percentage}</span>
                  </div>
                  <p className="text-xs font-semibold text-[#1c1917]/80 dark:text-[#eae6df]/80 uppercase tracking-wide">
                    {edu.degree}
                  </p>
                  <p className="text-xs text-[#1c1917]/60 dark:text-[#eae6df]/60 font-medium">
                    {edu.location} • {edu.period}
                  </p>
                  <p className="text-xs text-[#1c1917]/80 dark:text-[#eae6df]/80 mt-1 italic text-justify leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Relevant Coursework */}
          {resumeData.relevantCoursework && (
            <section className="pb-6">
              <h2 className="font-headline font-black text-xl text-black dark:text-white uppercase mb-4">
                Syllabus & Curriculum
              </h2>
              <div className="flex flex-wrap gap-2">
                {resumeData.relevantCoursework.map((course, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 border border-black/30 dark:border-white/20 text-xs font-bold font-headline uppercase tracking-wider text-black dark:text-white"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Side: Skills & Key achievements */}
        <div className="md:col-span-4 space-y-6 md:border-l md:border-black/20 md:dark:border-white/10 md:pl-6">
          {/* Key Achievements Box */}
          <div className="border-2 border-black dark:border-white/40 p-4">
            <h3 className="font-headline font-black text-sm text-center uppercase tracking-wider mb-4 border-b border-black dark:border-white/20 pb-1 text-black dark:text-white">
              FEATS & ANNOUNCEMENTS
            </h3>
            <ul className="space-y-4">
              {resumeData.achievements.map((achievement, index) => (
                <li key={index} className="text-xs leading-relaxed text-[#1c1917]/90 dark:text-[#eae6df]/90 list-disc list-inside">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Capabilities list */}
          <div className="space-y-4">
            <h3 className="font-headline font-black text-sm uppercase tracking-wider text-black dark:text-white border-b border-black dark:border-white/20 pb-1">
              RECORDED SKILLS
            </h3>

            {/* Languages */}
            <div className="space-y-2">
              <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-black dark:text-white">
                Programming Languages
              </h4>
              <div className="space-y-1 text-xs font-serif">
                {resumeData.skills.languages.map((skill, index) => (
                  <div key={index} className="flex justify-between items-center py-1 border-b border-black/10 dark:border-white/5">
                    <span>{skill.name}</span>
                    <span className="font-bold text-[#1c1917]/70 dark:text-[#eae6df]/70">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="space-y-2 pt-2">
              <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-black dark:text-white">
                Backend Technologies
              </h4>
              <div className="space-y-1 text-xs font-serif">
                {resumeData.skills.backend.map((skill, index) => (
                  <div key={index} className="flex justify-between items-center py-1 border-b border-black/10 dark:border-white/5">
                    <span>{skill.name}</span>
                    <span className="font-bold text-[#1c1917]/70 dark:text-[#eae6df]/70">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="space-y-2 pt-2">
              <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-black dark:text-white">
                Environments & Frameworks
              </h4>
              <div className="space-y-1 text-xs font-serif">
                {resumeData.skills.frameworks.map((skill, index) => (
                  <div key={index} className="flex justify-between items-center py-1 border-b border-black/10 dark:border-white/5">
                    <span>{skill.name}</span>
                    <span className="font-bold text-[#1c1917]/70 dark:text-[#eae6df]/70">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
