import React from 'react';
import { ResumeData } from '../../types/resume';
import { ExternalLink } from 'lucide-react';

interface MinimalTemplateProps {
  data: ResumeData;
}

export const MinimalTemplate: React.FC<MinimalTemplateProps> = ({ data }) => {
  const { personalInfo, objective, education, projects, experience, skills, achievements, activities } = data;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg" id="resume-minimal">
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-light mb-2 text-gray-900">{personalInfo.fullName || 'Your Name'}</h1>
          <div className="text-gray-600 space-y-1">
            {personalInfo.email && <p>{personalInfo.email}</p>}
            <div className="flex flex-wrap gap-4 text-sm">
              {personalInfo.phone && <span>{personalInfo.phone}</span>}
              {personalInfo.location && <span>{personalInfo.location}</span>}
              {personalInfo.linkedin && (
                <span>{personalInfo.linkedin.replace('https://', '').replace('http://', '')}</span>
              )}
              {personalInfo.github && (
                <span>{personalInfo.github.replace('https://', '').replace('http://', '')}</span>
              )}
            </div>
          </div>
        </div>

        {/* Objective */}
        {objective && (
          <section className="mb-8">
            <h2 className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wider">
              About
            </h2>
            <p className="text-gray-700 leading-relaxed">{objective}</p>
          </section>
        )}

        {/* Education */}
        {education.some(edu => edu.degree || edu.institution) && (
          <section className="mb-8">
            <h2 className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wider">
              Education
            </h2>
            {education.filter(edu => edu.degree || edu.institution).map((edu) => (
              <div key={edu.id} className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-800">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.institution}</p>
                  </div>
                  <div className="text-right text-sm text-gray-600">
                    <p>{edu.year}</p>
                    {edu.cgpa && <p>{edu.cgpa}</p>}
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Experience */}
        {experience.some(exp => exp.position || exp.company) && (
          <section className="mb-8">
            <h2 className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wider">
              Experience
            </h2>
            {experience.filter(exp => exp.position || exp.company).map((exp) => (
              <div key={exp.id} className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium text-gray-800">{exp.position}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <p className="text-gray-600 text-sm">{exp.duration}</p>
                </div>
                {exp.description && (
                  <p className="text-gray-700 text-sm leading-relaxed mt-2">{exp.description}</p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Projects */}
        {projects.some(project => project.title || project.description) && (
          <section className="mb-8">
            <h2 className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wider">
              Projects
            </h2>
            {projects.filter(project => project.title || project.description).map((project) => (
              <div key={project.id} className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-gray-800">{project.title}</h3>
                  {project.link && (
                    <a href={project.link} className="text-gray-500 hover:text-gray-700">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                {project.techStack && (
                  <p className="text-gray-600 text-sm mb-1">{project.techStack}</p>
                )}
                {project.description && (
                  <p className="text-gray-700 text-sm leading-relaxed">{project.description}</p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Skills */}
        {skills.some(skillGroup => skillGroup.skills.length > 0) && (
          <section className="mb-8">
            <h2 className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wider">
              Skills
            </h2>
            <div className="space-y-2">
              {skills.filter(skillGroup => skillGroup.skills.length > 0).map((skillGroup, index) => (
                <div key={index}>
                  <span className="font-medium text-gray-800 text-sm">{skillGroup.category}: </span>
                  <span className="text-gray-700 text-sm">{skillGroup.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Achievements */}
        {achievements.some(achievement => achievement.title || achievement.description) && (
          <section className="mb-8">
            <h2 className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wider">
              Achievements
            </h2>
            {achievements.filter(achievement => achievement.title || achievement.description).map((achievement) => (
              <div key={achievement.id} className="mb-3">
                <h3 className="font-medium text-gray-800">{achievement.title}</h3>
                {achievement.description && (
                  <p className="text-gray-700 text-sm mt-1">{achievement.description}</p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Activities */}
        {activities.some(activity => activity.trim()) && (
          <section className="mb-8">
            <h2 className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wider">
              Activities
            </h2>
            <div className="space-y-1">
              {activities.filter(activity => activity.trim()).map((activity, index) => (
                <p key={index} className="text-gray-700 text-sm">{activity}</p>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};