import { useState } from 'react';
import { ResumeData, TemplateType } from '../types/resume';

const initialData: ResumeData = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    location: ''
  },
  objective: '',
  education: [{ id: '1', degree: '', institution: '', year: '', cgpa: '' }],
  projects: [{ id: '1', title: '', description: '', techStack: '', link: '' }],
  experience: [{ id: '1', position: '', company: '', duration: '', description: '' }],
  skills: [{ category: 'Technical Skills', skills: [] }],
  achievements: [{ id: '1', title: '', description: '' }],
  activities: ['']
};

export const useResumeData = () => {
  const [resumeData, setResumeData] = useState<ResumeData>(initialData);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>('modern');

  const updatePersonalInfo = (field: keyof ResumeData['personalInfo'], value: string) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }));
  };

  const updateObjective = (objective: string) => {
    setResumeData(prev => ({ ...prev, objective }));
  };

  const addEducation = () => {
    const newId = Date.now().toString();
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, { id: newId, degree: '', institution: '', year: '', cgpa: '' }]
    }));
  };

  const updateEducation = (id: string, field: keyof ResumeData['education'][0], value: string) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(edu => 
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const removeEducation = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  const addProject = () => {
    const newId = Date.now().toString();
    setResumeData(prev => ({
      ...prev,
      projects: [...prev.projects, { id: newId, title: '', description: '', techStack: '', link: '' }]
    }));
  };

  const updateProject = (id: string, field: keyof ResumeData['projects'][0], value: string) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.map(project => 
        project.id === id ? { ...project, [field]: value } : project
      )
    }));
  };

  const removeProject = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.filter(project => project.id !== id)
    }));
  };

  const addExperience = () => {
    const newId = Date.now().toString();
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, { id: newId, position: '', company: '', duration: '', description: '' }]
    }));
  };

  const updateExperience = (id: string, field: keyof ResumeData['experience'][0], value: string) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => 
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const removeExperience = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  const updateSkills = (categoryIndex: number, skills: string[]) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.map((skillGroup, index) => 
        index === categoryIndex ? { ...skillGroup, skills } : skillGroup
      )
    }));
  };

  const addSkillCategory = () => {
    setResumeData(prev => ({
      ...prev,
      skills: [...prev.skills, { category: '', skills: [] }]
    }));
  };

  const updateSkillCategory = (index: number, category: string) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.map((skillGroup, i) => 
        i === index ? { ...skillGroup, category } : skillGroup
      )
    }));
  };

  const removeSkillCategory = (index: number) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const addAchievement = () => {
    const newId = Date.now().toString();
    setResumeData(prev => ({
      ...prev,
      achievements: [...prev.achievements, { id: newId, title: '', description: '' }]
    }));
  };

  const updateAchievement = (id: string, field: keyof ResumeData['achievements'][0], value: string) => {
    setResumeData(prev => ({
      ...prev,
      achievements: prev.achievements.map(achievement => 
        achievement.id === id ? { ...achievement, [field]: value } : achievement
      )
    }));
  };

  const removeAchievement = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      achievements: prev.achievements.filter(achievement => achievement.id !== id)
    }));
  };

  const updateActivities = (activities: string[]) => {
    setResumeData(prev => ({ ...prev, activities }));
  };

  return {
    resumeData,
    selectedTemplate,
    setSelectedTemplate,
    updatePersonalInfo,
    updateObjective,
    addEducation,
    updateEducation,
    removeEducation,
    addProject,
    updateProject,
    removeProject,
    addExperience,
    updateExperience,
    removeExperience,
    updateSkills,
    addSkillCategory,
    updateSkillCategory,
    removeSkillCategory,
    addAchievement,
    updateAchievement,
    removeAchievement,
    updateActivities
  };
};