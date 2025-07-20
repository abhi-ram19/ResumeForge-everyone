import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { FormSection } from './FormSection';
import { InputField } from './InputField';
import { Education } from '../types/resume';

interface EducationFormProps {
  education: Education[];
  onAdd: () => void;
  onUpdate: (id: string, field: keyof Education, value: string) => void;
  onRemove: (id: string) => void;
}

export const EducationForm: React.FC<EducationFormProps> = ({
  education,
  onAdd,
  onUpdate,
  onRemove
}) => {
  return (
    <FormSection title="Education">
      {education.map((edu, index) => (
        <div key={edu.id} className="border border-gray-200 rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-md font-medium text-gray-800">Education {index + 1}</h4>
            {education.length > 1 && (
              <button
                type="button"
                onClick={() => onRemove(edu.id)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Degree"
              value={edu.degree}
              onChange={(value) => onUpdate(edu.id, 'degree', value)}
              placeholder="Bachelor of Science in Computer Science"
            />
            <InputField
              label="Institution"
              value={edu.institution}
              onChange={(value) => onUpdate(edu.id, 'institution', value)}
              placeholder="University Name"
            />
            <InputField
              label="Year"
              value={edu.year}
              onChange={(value) => onUpdate(edu.id, 'year', value)}
              placeholder="2020 - 2024"
            />
            <InputField
              label="CGPA/GPA"
              value={edu.cgpa}
              onChange={(value) => onUpdate(edu.id, 'cgpa', value)}
              placeholder="3.8/4.0"
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
        Add Education
      </button>
    </FormSection>
  );
};