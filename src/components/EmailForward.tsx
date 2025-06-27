// EmailForward.tsx

import emailjs from '@emailjs/browser';

export interface EmailParams {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const sendEmail = async (formData: EmailParams) => {
  try {
    const result = await emailjs.send(
      'service_61aejyb',         // ← Jouw EmailJS Service ID
      'template_dagejp8',        // ← Jouw EmailJS Template ID
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
      },
      'frqXqzR62sceHC_PE'        // ← Jouw EmailJS Public Key
    );
    return result;
  } catch (error) {
    console.error('Email verzenden mislukt:', error);
    throw error;
  }
};
