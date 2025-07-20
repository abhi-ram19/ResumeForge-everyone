import React from 'react';
import { TemplateType } from '../types/resume';

interface TemplateSelectorProps {
  selectedTemplate: TemplateType;
  onSelect: (template: TemplateType) => void;
}

export const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  selectedTemplate,
  onSelect
}) => {
  const templates = [
    {
      id: 'modern' as TemplateType,
      name: 'Modern',
      description: 'Clean layout with accent colors',
      preview: '/api/placeholder/300/400'
    },
    {
      id: 'classic' as TemplateType,
      name: 'Classic',
      description: 'Professional traditional format',
      preview: '/api/placeholder/300/400'
    },
    {
      id: 'minimal' as TemplateType,
      name: 'Minimal',
      description: 'Simple and elegant design',
      preview: '/api/placeholder/300/400'
    }
  ];

  return (
    <div>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold gradient-text mb-2">Choose Your Template</h3>
        <p className="text-gray-600">Select a professional template that matches your style</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {templates.map((template) => (
          <div
            key={template.id}
            onClick={() => onSelect(template.id)}
            className={`cursor-pointer rounded-xl border-2 p-6 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
              selectedTemplate === template.id
                ? 'border-indigo-500 bg-gradient-to-br from-indigo-50 to-purple-50 shadow-lg'
                : 'border-gray-200 hover:border-indigo-300 bg-white'
            }`}
          >
            <div className="aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg mb-4 flex items-center justify-center border border-gray-200">
              <div className="text-center">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <span className="text-gray-500 text-sm font-medium">Preview</span>
              </div>
            </div>
            <h4 className={`font-semibold text-lg mb-2 ${
              selectedTemplate === template.id ? 'text-blue-700' : 'text-gray-900'
            }`}>
              {template.name}
            </h4>
            <p className="text-sm text-gray-600">{template.description}</p>
            {selectedTemplate === template.id && (
              <div className="mt-3 flex items-center text-indigo-600 text-sm font-medium">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div>
                Selected
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};