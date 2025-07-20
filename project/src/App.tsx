import React, { useState } from 'react';
import { FileText, Eye, Settings } from 'lucide-react';
import { useResumeData } from './hooks/useResumeData';
import { PersonalInfoForm } from './components/PersonalInfoForm';
import { EducationForm } from './components/EducationForm';
import { ProjectsForm } from './components/ProjectsForm';
import { ExperienceForm } from './components/ExperienceForm';
import { SkillsForm } from './components/SkillsForm';
import { AchievementsForm } from './components/AchievementsForm';
import { ActivitiesForm } from './components/ActivitiesForm';
import { TemplateSelector } from './components/TemplateSelector';
import { ResumePreview } from './components/ResumePreview';
import { PDFDownload } from './components/PDFDownload';
import { TextAreaField } from './components/TextAreaField';
import { FormSection } from './components/FormSection';

type ViewMode = 'form' | 'preview' | 'templates';

function App() {
  const {
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
  } = useResumeData();

  const [viewMode, setViewMode] = useState<ViewMode>('form');

  const isFormValid = resumeData.personalInfo.fullName && resumeData.personalInfo.email;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="glass-effect shadow-xl border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold gradient-text">ResumeForge</h1>
              <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold rounded-full">
                PRO
              </span>
            </div>
            
            {/* Navigation */}
            <div className="hidden md:flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-xl p-1 shadow-lg border border-gray-200">
              <button
                onClick={() => setViewMode('form')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  viewMode === 'form'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Settings className="w-4 h-4" />
                Form
              </button>
              <button
                onClick={() => setViewMode('templates')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  viewMode === 'templates'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <FileText className="w-4 h-4" />
                Templates
              </button>
              <button
                onClick={() => setViewMode('preview')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  viewMode === 'preview'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Eye className="w-4 h-4" />
                Preview
              </button>
            </div>

            <div className="flex items-center gap-3">
              <PDFDownload 
                template={selectedTemplate} 
                fileName={resumeData.personalInfo.fullName || 'resume'}
                disabled={!isFormValid}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden glass-effect border-b border-white/20">
        <div className="flex">
          <button
            onClick={() => setViewMode('form')}
            className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold transition-all duration-200 ${
              viewMode === 'form'
                ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <Settings className="w-4 h-4" />
            Form
          </button>
          <button
            onClick={() => setViewMode('templates')}
            className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold transition-all duration-200 ${
              viewMode === 'templates'
                ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <FileText className="w-4 h-4" />
            Templates
          </button>
          <button
            onClick={() => setViewMode('preview')}
            className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold transition-all duration-200 ${
              viewMode === 'preview'
                ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <Eye className="w-4 h-4" />
            Preview
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <div className="glass-effect rounded-2xl p-6 mb-8 professional-shadow">
          <div className="text-center">
            <h2 className="text-3xl font-bold gradient-text mb-2">Create Your Professional Resume</h2>
            <p className="text-gray-600 text-lg">Build a standout resume in minutes with our professional templates</p>
          </div>
        </div>

        {viewMode === 'form' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <PersonalInfoForm 
                data={resumeData.personalInfo}
                onChange={updatePersonalInfo}
              />
              
              <FormSection title="Career Objective" className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                <TextAreaField
                  label="Objective"
                  value={resumeData.objective}
                  onChange={updateObjective}
                  placeholder="Write a brief career objective or professional summary..."
                  rows={4}
                />
              </FormSection>

              <EducationForm
                education={resumeData.education}
                onAdd={addEducation}
                onUpdate={updateEducation}
                onRemove={removeEducation}
              />

              <ExperienceForm
                experience={resumeData.experience}
                onAdd={addExperience}
                onUpdate={updateExperience}
                onRemove={removeExperience}
              />

              <ProjectsForm
                projects={resumeData.projects}
                onAdd={addProject}
                onUpdate={updateProject}
                onRemove={removeProject}
              />

              <SkillsForm
                skills={resumeData.skills}
                onAddCategory={addSkillCategory}
                onUpdateCategory={updateSkillCategory}
                onUpdateSkills={updateSkills}
                onRemoveCategory={removeSkillCategory}
              />

              <AchievementsForm
                achievements={resumeData.achievements}
                onAdd={addAchievement}
                onUpdate={updateAchievement}
                onRemove={removeAchievement}
              />

              <ActivitiesForm
                activities={resumeData.activities}
                onChange={updateActivities}
              />
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="glass-effect rounded-2xl p-4 professional-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Live Preview</h3>
                  <ResumePreview 
                    data={resumeData} 
                    template={selectedTemplate}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {viewMode === 'templates' && (
          <div className="max-w-6xl mx-auto">
            <div className="glass-effect rounded-2xl p-8 mb-8 professional-shadow">
              <TemplateSelector
                selectedTemplate={selectedTemplate}
                onSelect={setSelectedTemplate}
              />
            </div>
            <div className="glass-effect rounded-2xl p-6 professional-shadow">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Template Preview</h3>
              <ResumePreview 
                data={resumeData} 
                template={selectedTemplate}
              />
            </div>
          </div>
        )}

        {viewMode === 'preview' && (
          <div className="max-w-5xl mx-auto">
            <div className="glass-effect rounded-2xl p-8 mb-8 professional-shadow text-center">
              <h2 className="text-3xl font-bold gradient-text mb-3">Final Resume Preview</h2>
              <p className="text-gray-600 text-lg mb-6">Review your resume before downloading</p>
              <div className="flex justify-center">
                <PDFDownload 
                  template={selectedTemplate} 
                  fileName={resumeData.personalInfo.fullName || 'resume'}
                  disabled={!isFormValid}
                />
              </div>
            </div>
            <div className="glass-effect rounded-2xl p-6 professional-shadow">
              <ResumePreview 
                data={resumeData} 
                template={selectedTemplate}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;