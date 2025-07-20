import React, { useState } from 'react';
import { Download, Loader } from 'lucide-react';
import { generatePDF } from '../utils/pdfGenerator';
import { TemplateType } from '../types/resume';

interface PDFDownloadProps {
  template: TemplateType;
  fileName?: string;
  disabled?: boolean;
}

export const PDFDownload: React.FC<PDFDownloadProps> = ({ 
  template, 
  fileName = 'resume',
  disabled = false 
}) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      await generatePDF(template, fileName);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={disabled || isGenerating}
      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none"
    >
      {isGenerating ? (
        <>
          <Loader className="w-5 h-5 animate-spin" />
          Generating PDF...
        </>
      ) : (
        <>
          <Download className="w-5 h-5" />
          Download PDF
        </>
      )}
    </button>
  );
};