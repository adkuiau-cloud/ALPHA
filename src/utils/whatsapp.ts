import { Car } from '@/types/car';

export const generateWhatsAppMessage = (car: Car): string => {
  const message = `Hi! I'm interested in the ${car.title} (${car.year}) priced at ${new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(car.price)}. 

Could you please provide more details about:
- Availability and viewing times
- Financing options
- Vehicle history/condition
- Any additional features

Thank you!`;

  return encodeURIComponent(message);
};

export const openWhatsAppChat = (car: Car, phoneNumber: string = '1234567890') => {
  const message = generateWhatsAppMessage(car);
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, '_blank');
};

export const generateGeneralInquiry = (): string => {
  const message = `Hi GARAN MOTORS! I'm interested in learning more about your vehicle inventory. 

Could you please help me with:
- Available vehicles in my budget
- Financing options
- Viewing appointments
- Trade-in evaluations

Looking forward to hearing from you!`;

  return encodeURIComponent(message);
};

export const openGeneralWhatsAppChat = (phoneNumber: string = '1234567890') => {
  const message = generateGeneralInquiry();
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, '_blank');
};