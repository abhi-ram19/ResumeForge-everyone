import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { FormSection } from './FormSection';
import { InputField } from './InputField';
import { SkillsInput } from './SkillsInput';
import { Skill } from '../types/resume';

interface SkillsFormProps {
  skills: Skill[];
  onAddCategory: () => void;
  onUpdateCategory: (index: number, category: string) => void;
  onUpdateSkills: (index: number, skills: string[]) => void;
  onRemoveCategory: (index: number) => void;
}

export const SkillsForm: React.FC<SkillsFormProps> = ({
  skills,
  onAddCategory,
  onUpdateCategory,
  onUpdateSkills,
  onRemoveCategory
}) => {
  return (
    <FormSection title="Skills">
      {skills.map((skillGroup, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-3">
            <InputField
              label=""
              value={skillGroup.category}
              onChange={(value) => onUpdateCategory(index, value)}
              placeholder="Technical Skills, Soft Skills, Languages, etc."
              className="mb-0 flex-1 mr-4"
            />
            {skills.length > 1 && (
              <button
                type="button"
                onClick={() => onRemoveCategory(index)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
          <SkillsInput
            skills={skillGroup.skills}
            onChange={(newSkills) => onUpdateSkills(index, newSkills)}
            placeholder="Add skills for this category..."
          />
        </div>
      ))}
      <button
        type="button"
        onClick={onAddCategory}
        className="flex items-center gap-2 px-6 py-3 text-indigo-600 border-2 border-indigo-600 rounded-lg hover:bg-indigo-50 transition-all duration-200 font-semibold shadow-sm hover:shadow-md"
      >
        <Plus className="w-4 h-4" />
        Add Skill Category
      </button>
    </FormSection>
  );
};