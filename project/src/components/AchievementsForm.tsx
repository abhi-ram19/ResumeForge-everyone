import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { FormSection } from './FormSection';
import { InputField } from './InputField';
import { TextAreaField } from './TextAreaField';
import { Achievement } from '../types/resume';

interface AchievementsFormProps {
  achievements: Achievement[];
  onAdd: () => void;
  onUpdate: (id: string, field: keyof Achievement, value: string) => void;
  onRemove: (id: string) => void;
}

export const AchievementsForm: React.FC<AchievementsFormProps> = ({
  achievements,
  onAdd,
  onUpdate,
  onRemove
}) => {
  return (
    <FormSection title="Achievements & Certifications">
      {achievements.map((achievement, index) => (
        <div key={achievement.id} className="border border-gray-200 rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-md font-medium text-gray-800">Achievement {index + 1}</h4>
            {achievements.length > 1 && (
              <button
                type="button"
                onClick={() => onRemove(achievement.id)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 gap-4">
            <InputField
              label="Title"
              value={achievement.title}
              onChange={(value) => onUpdate(achievement.id, 'title', value)}
              placeholder="AWS Certified Developer, Dean's List, etc."
            />
            <TextAreaField
              label="Description"
              value={achievement.description}
              onChange={(value) => onUpdate(achievement.id, 'description', value)}
              placeholder="Brief description of the achievement..."
              rows={2}
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
        Add Achievement
      </button>
    </FormSection>
  );
};