import html2pdf from 'html2pdf.js';
import { TemplateType } from '../types/resume';

export const generatePDF = async (templateType: TemplateType, fileName: string = 'resume') => {
  const elementId = `resume-${templateType}`;
  const element = document.getElementById(elementId);
  
  if (!element) {
    console.error('Resume element not found');
    return;
  }

  const options = {
    margin: 0.5,
    filename: `${fileName}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { 
      scale: 2,
      useCORS: true,
      letterRendering: true,
      allowTaint: true
    },
    jsPDF: { 
      unit: 'in', 
      format: 'a4', 
      orientation: 'portrait' 
    }
  };

  try {
    await html2pdf().set(options).from(element).save();
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Error generating PDF. Please try again.');
  }
};