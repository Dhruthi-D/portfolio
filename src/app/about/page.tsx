import resumeData from '../../../resume_data.json';

export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">About Me</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {resumeData.personal.bio}
          </p>
        </div>

        {/* Bio Section */}
        <section className="mb-16">
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Name:</span>
                  <span className="text-gray-900 dark:text-white">{resumeData.personal.name}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Title:</span>
                  <span className="text-gray-900 dark:text-white">{resumeData.personal.title}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Location:</span>
                  <span className="text-gray-900 dark:text-white">{resumeData.personal.location}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Email:</span>
                  <span className="text-gray-900 dark:text-white">{resumeData.personal.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Phone:</span>
                  <span className="text-gray-900 dark:text-white">{resumeData.personal.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-medium text-gray-700 dark:text-gray-300">CGPA:</span>
                  <span className="text-gray-900 dark:text-white">{resumeData.education[0].cgpa}/10</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="section-title">Skills & Technologies</h2>
          
          {/* Programming Languages */}
          <div className="card mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Programming Languages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resumeData.skills.languages.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-primary-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="card mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Technologies & Frameworks</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resumeData.skills.technologies.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="card mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Databases & Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resumeData.skills.databases.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hardware Tools */}
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Hardware & Development Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resumeData.skills.tools.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-yellow-500 to-orange-500 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Preview */}
        <section className="mb-16">
          <h2 className="section-title">Education</h2>
          <div className="space-y-6">
            {resumeData.education.map((edu, index) => (
              <div key={index} className="card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.institution}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{edu.degree}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{edu.location}</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                      {edu.cgpa || edu.percentage}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{edu.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section>
          <h2 className="section-title">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.achievements.map((achievement, index) => (
              <div key={index} className="card">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">{achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
