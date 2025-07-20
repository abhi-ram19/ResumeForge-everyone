import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { FormSection } from './FormSection';

interface ActivitiesFormProps {
  activities: string[];
  onChange: (activities: string[]) => void;
}

export const ActivitiesForm: React.FC<ActivitiesFormProps> = ({ activities, onChange }) => {
  const [inputValue, setInputValue] = useState('');

  const addActivity = () => {
    if (inputValue.trim()) {
      onChange([...activities.filter(a => a.trim()), inputValue.trim()]);
      setInputValue('');
    }
  };

  const removeActivity = (index: number) => {
    onChange(activities.filter((_, i) => i !== index));
  };

  const updateActivity = (index: number, value: string) => {
    const newActivities = [...activities];
    newActivities[index] = value;
    onChange(newActivities);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addActivity();
    }
  };

  return (
    <FormSection title="Extra-Curricular Activities">
      <div className="space-y-3 mb-4">
        {activities.filter(a => a.trim()).map((activity, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              value={activity}
              onChange={(e) => updateActivity(index, e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg shadow-sm input-focus bg-gray-50 hover:bg-white transition-colors"
              placeholder="Activity, club, volunteer work, etc."
            />
            <button
              type="button"
              onClick={() => removeActivity(index)}
              className="px-3 py-2 text-red-500 hover:text-red-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add an extra-curricular activity..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg shadow-sm input-focus bg-gray-50 hover:bg-white transition-colors"
        />
        <button
          type="button"
          onClick={addActivity}
          className="px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </FormSection>
  );
};