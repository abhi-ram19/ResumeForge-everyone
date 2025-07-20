import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { FormSection } from './FormSection';
import { InputField } from './InputField';
import { TextAreaField } from './TextAreaField';
import { Project } from '../types/resume';

interface ProjectsFormProps {
  projects: Project[];
  onAdd: () => void;
  onUpdate: (id: string, field: keyof Project, value: string) => void;
  onRemove: (id: string) => void;
}

export const ProjectsForm: React.FC<ProjectsFormProps> = ({
  projects,
  onAdd,
  onUpdate,
  onRemove
}) => {
  return (
    <FormSection title="Projects">
      {projects.map((project, index) => (
        <div key={project.id} className="border border-gray-200 rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-md font-medium text-gray-800">Project {index + 1}</h4>
            {projects.length > 1 && (
              <button
                type="button"
                onClick={() => onRemove(project.id)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 gap-4">
            <InputField
              label="Project Title"
              value={project.title}
              onChange={(value) => onUpdate(project.id, 'title', value)}
              placeholder="E-commerce Website"
            />
            <InputField
              label="Tech Stack"
              value={project.techStack}
              onChange={(value) => onUpdate(project.id, 'techStack', value)}
              placeholder="React, Node.js, MongoDB, Express"
            />
            <InputField
              label="Project Link (Optional)"
              type="url"
              value={project.link || ''}
              onChange={(value) => onUpdate(project.id, 'link', value)}
              placeholder="https://github.com/username/project"
            />
            <TextAreaField
              label="Description"
              value={project.description}
              onChange={(value) => onUpdate(project.id, 'description', value)}
              placeholder="Describe your project, its features, and your role..."
              rows={3}
            />
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={onAdd}
        className="flex items-center gap-2 px-6 py-3 text-indigo-600 border-2 border-indigo-600 rounded-lg hover:bg-indigo-50 transition-all duration-200 font-semibold shadow-sm hover:shadow-md"
      >
        <Plus className="w-4 h-4" />
        Add Project
      </button>
    </FormSection>
  );
};