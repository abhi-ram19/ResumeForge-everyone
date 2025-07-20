import React from 'react';
import { ResumeData } from '../../types/resume';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';

interface ClassicTemplateProps {
  data: ResumeData;
}

export const ClassicTemplate: React.FC<ClassicTemplateProps> = ({ data }) => {
  const { personalInfo, objective, education, projects, experience, skills, achievements, activities } = data;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg" id="resume-classic">
      {/* Header */}
      <div className="text-center border-b-2 border-gray-800 pb-6 mb-6 p-8">
        <h1 className="text-3xl font-bold mb-3 text-gray-800">{personalInfo.fullName || 'Your Name'}</h1>
        <div className="flex justify-center flex-wrap gap-4 text-sm text-gray-600">
          {personalInfo.email && (
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{personalInfo.location}</span>
            </div>
          )}
        </div>
        {(personalInfo.linkedin || personalInfo.github) && (
          <div className="flex justify-center flex-wrap gap-4 text-sm text-gray-600 mt-2">
            {personalInfo.linkedin && (
              <div className="flex items-center gap-1">
                <Linkedin className="w-4 h-4" />
                <span>{personalInfo.linkedin.replace('https://', '').replace('http://', '')}</span>
              </div>
            )}
            {personalInfo.github && (
              <div className="flex items-center gap-1">
                <Github className="w-4 h-4" />
                <span>{personalInfo.github.replace('https://', '').replace('http://', '')}</span>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="px-8 pb-8">
        {/* Objective */}
        {objective && (
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3 uppercase tracking-wide">
              Career Objective
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">{objective}</p>
          </section>
        )}

        {/* Education */}
        {education.some(edu => edu.degree || edu.institution) && (
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3 uppercase tracking-wide">
              Education
            </h2>
            {education.filter(edu => edu.degree || edu.institution).map((edu) => (
              <div key={edu.id} className="mb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                    <p className="text-gray-600 italic">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">{edu.year}</p>
                    {edu.cgpa && <p className="text-sm text-gray-500">CGPA: {edu.cgpa}</p>}
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Experience */}
        {experience.some(exp => exp.position || exp.company) && (
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3 uppercase tracking-wide">
              Work Experience
            </h2>
            {experience.filter(exp => exp.position || exp.company).map((exp) => (
              <div key={exp.id} className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-800">{exp.position}</h3>
                    <p className="text-gray-600 italic">{exp.company}</p>
                  </div>
                  <p className="text-gray-600 text-sm">{exp.duration}</p>
                </div>
                {exp.description && (
                  <p className="text-gray-700 text-sm leading-relaxed text-justify">{exp.description}</p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Projects */}
        {projects.some(project => project.title || project.description) && (
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3 uppercase tracking-wide">
              Projects
            </h2>
            {projects.filter(project => project.title || project.description).map((project) => (
              <div key={project.id} className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800">{project.title}</h3>
                  {project.link && (
                    <a href={project.link} className="text-gray-600 hover:text-gray-800">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                {project.techStack && (
                  <p className="text-gray-600 text-sm italic mb-1">
                    Technologies: {project.techStack}
                  </p>
                )}
                {project.description && (
                  <p className="text-gray-700 text-sm leading-relaxed text-justify">{project.description}</p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Skills */}
        {skills.some(skillGroup => skillGroup.skills.length > 0) && (
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3 uppercase tracking-wide">
              Skills
            </h2>
            {skills.filter(skillGroup => skillGroup.skills.length > 0).map((skillGroup, index) => (
              <div key={index} className="mb-2">
                <span className="font-semibold text-gray-800">{skillGroup.category}: </span>
                <span className="text-gray-700">{skillGroup.skills.join(', ')}</span>
              </div>
            ))}
          </section>
        )}

        {/* Achievements */}
        {achievements.some(achievement => achievement.title || achievement.description) && (
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3 uppercase tracking-wide">
              Achievements & Certifications
            </h2>
            {achievements.filter(achievement => achievement.title || achievement.description).map((achievement) => (
              <div key={achievement.id} className="mb-3">
                <h3 className="font-semibold text-gray-800">{achievement.title}</h3>
                {achievement.description && (
                  <p className="text-gray-700 text-sm">{achievement.description}</p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Activities */}
        {activities.some(activity => activity.trim()) && (
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3 uppercase tracking-wide">
              Extra-Curricular Activities
            </h2>
            <ul className="list-disc list-inside space-y-1">
              {activities.filter(activity => activity.trim()).map((activity, index) => (
                <li key={index} className="text-gray-700 text-sm">{activity}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};