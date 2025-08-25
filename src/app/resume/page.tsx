import { Download, Calendar, MapPin, GraduationCap, Briefcase, Award } from 'lucide-react';
import resumeData from '../../../resume_data.json';

export default function Resume() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">Resume</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            A comprehensive overview of my educational background, experience, and achievements.
          </p>
          <a
            href="/Resume.pdf"
            download
            className="btn-primary inline-flex items-center space-x-2"
          >
            <Download className="w-5 h-5" />
            <span>Download PDF</span>
          </a>
        </div>

        {/* Contact Information */}
        <section className="mb-16">
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
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
                  <span className="font-medium text-gray-700 dark:text-gray-300">LinkedIn:</span>
                  <a 
                    href={resumeData.personal.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    {resumeData.personal.linkedin}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Timeline */}
        <section className="mb-16">
          <h2 className="section-title">Education</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            
            <div className="space-y-8">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 -translate-x-1/2"></div>
                  
                  {/* Content */}
                  <div className="ml-16 flex-1">
                    <div className="card">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div className="flex items-center space-x-2 mb-2 md:mb-0">
                          <GraduationCap className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.institution}</h3>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                            {edu.cgpa || edu.percentage}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-700 dark:text-gray-300 mb-3">{edu.degree}</p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                      
                      {edu.description && (
                        <p className="text-gray-600 dark:text-gray-400 mt-3">{edu.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="mb-16">
          <h2 className="section-title">Experience & Leadership</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            
            <div className="space-y-8">
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 -translate-x-1/2"></div>
                  
                  {/* Content */}
                  <div className="ml-16 flex-1">
                    <div className="card">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div className="flex items-center space-x-2 mb-2 md:mb-0">
                          <Briefcase className="w-5 h-5 text-green-600 dark:text-green-400" />
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.organization}</h3>
                        </div>
                        <div className="text-right">
                          <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
                            {exp.role}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Summary */}
        <section className="mb-16">
          <h2 className="section-title">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Programming Languages */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Languages</h3>
              <div className="space-y-2">
                {resumeData.skills.languages.map((skill, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-500">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Technologies</h3>
              <div className="space-y-2">
                {resumeData.skills.technologies.map((skill, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-500">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Databases</h3>
              <div className="space-y-2">
                {resumeData.skills.databases.map((skill, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-500">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tools</h3>
              <div className="space-y-2">
                {resumeData.skills.tools.map((skill, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-500">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section>
          <h2 className="section-title">Achievements & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.achievements.map((achievement, index) => (
              <div key={index} className="card">
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
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
