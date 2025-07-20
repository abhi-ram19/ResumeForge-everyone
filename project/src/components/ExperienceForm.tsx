import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { FormSection } from './FormSection';
import { InputField } from './InputField';
import { TextAreaField } from './TextAreaField';
import { Experience } from '../types/resume';

interface ExperienceFormProps {
  experience: Experience[];
  onAdd: () => void;
  onUpdate: (id: string, field: keyof Experience, value: string) => void;
  onRemove: (id: string) => void;
}

export const ExperienceForm: React.FC<ExperienceFormProps> = ({
  experience,
  onAdd,
  onUpdate,
  onRemove
}) => {
  return (
    <FormSection title="Work Experience & Internships">
      {experience.map((exp, index) => (
        <div key={exp.id} className="border border-gray-200 rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-md font-medium text-gray-800">Experience {index + 1}</h4>
            {experience.length > 1 && (
              <button
                type="button"
                onClick={() => onRemove(exp.id)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Position"
              value={exp.position}
              onChange={(value) => onUpdate(exp.id, 'position', value)}
              placeholder="Software Engineering Intern"
            />
            <InputField
              label="Company"
              value={exp.company}
              onChange={(value) => onUpdate(exp.id, 'company', value)}
              placeholder="Company Name"
            />
            <div className="md:col-span-2">
              <InputField
                label="Duration"
                value={exp.duration}
                onChange={(value) => onUpdate(exp.id, 'duration', value)}
                placeholder="June 2023 - August 2023"
              />
            </div>
            <div className="md:col-span-2">
              <TextAreaField
                label="Description"
                value={exp.description}
                onChange={(value) => onUpdate(exp.id, 'description', value)}
                placeholder="Describe your responsibilities, achievements, and impact..."
                rows={3}
              />
            </div>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={onAdd}
        className="flex items-center gap-2 px-6 py-3 text-indigo-600 border-2 border-indigo-600 rounded-lg hover:bg-indigo-50 transition-all duration-200 font-semibold shadow-sm hover:shadow-md"
      >
        <Plus className="w-4 h-4" />
        Add Experience
      </button>
    </FormSection>
  );
};