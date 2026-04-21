
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  stars: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}
