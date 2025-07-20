import React from 'react';
import { FormSection } from './FormSection';
import { InputField } from './InputField';
import { PersonalInfo } from '../types/resume';

interface PersonalInfoFormProps {
  data: PersonalInfo;
  onChange: (field: keyof PersonalInfo, value: string) => void;
}

export const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ data, onChange }) => {
  return (
    <FormSection title="Personal Information">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Full Name"
          value={data.fullName}
          onChange={(value) => onChange('fullName', value)}
          required
          placeholder="John Doe"
        />
        <InputField
          label="Email"
          type="email"
          value={data.email}
          onChange={(value) => onChange('email', value)}
          required
          placeholder="john.doe@email.com"
        />
        <InputField
          label="Phone"
          type="tel"
          value={data.phone}
          onChange={(value) => onChange('phone', value)}
          placeholder="+1 (555) 123-4567"
        />
        <InputField
          label="Location"
          value={data.location}
          onChange={(value) => onChange('location', value)}
          placeholder="City, State"
        />
        <InputField
          label="LinkedIn"
          type="url"
          value={data.linkedin}
          onChange={(value) => onChange('linkedin', value)}
          placeholder="linkedin.com/in/johndoe"
        />
        <InputField
          label="GitHub"
          type="url"
          value={data.github}
          onChange={(value) => onChange('github', value)}
          placeholder="github.com/johndoe"
        />
      </div>
    </FormSection>
  );
};