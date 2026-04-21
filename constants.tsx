
import React from 'react';
import { ShieldCheck, Scale, FileText, HeartPulse, Clock, Users } from 'lucide-react';
import { Service, Testimonial, FAQItem } from './types';

export const WHATSAPP_NUMBER = "5511963128396";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%20Dr.%20Luiz%20Carlos%2C%20gostaria%20de%20uma%20consulta%20previdenci%C3%A1ria.`;

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Aposentadoria por Idade',
    description: 'Análise completa do tempo de contribuição e idade para garantir o melhor benefício possível.',
    icon: 'Clock'
  },
  {
    id: '2',
    title: 'Aposentadoria Especial',
    description: 'Para trabalhadores expostos a agentes nocivos à saúde ou integridade física.',
    icon: 'ShieldCheck'
  },
  {
    id: '3',
    title: 'BPC / LOAS',
    description: 'Assistência jurídica para obtenção do benefício de prestação continuada para idosos e deficientes.',
    icon: 'HeartPulse'
  },
  {
    id: '4',
    title: 'Revisão de Benefícios',
    description: 'Verificação minuciosa se o seu benefício está sendo pago no valor correto conforme a lei.',
    icon: 'Scale'
  },
  {
    id: '5',
    title: 'Auxílio Doença e Invalidez',
    description: 'Atuação em casos de negativa do INSS para incapacidade laborativa temporária ou permanente.',
    icon: 'FileText'
  },
  {
    id: '6',
    title: 'Planejamento Previdenciário',
    description: 'Estudo estratégico para definir quando e com quanto você irá se aposentar no futuro.',
    icon: 'Users'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Maria Oliveira", text: "O Dr. Luiz Carlos resolveu minha aposentadoria que estava travada no INSS há 2 anos. Excelente profissional!", stars: 5 },
  { id: 2, name: "José Santos", text: "Muito atencioso e entende tudo de leis previdenciárias. Recomendo fortemente.", stars: 5 },
  { id: 3, name: "Ana Paula Silva", text: "Graças ao planejamento que fizemos, consegui me aposentar com um valor muito maior do que eu esperava.", stars: 5 }
];

export const FAQS: FAQItem[] = [
  {
    question: "Como saber se já posso me aposentar?",
    answer: "A melhor forma é através de um Planejamento Previdenciário, onde analisamos todo o seu histórico de contribuições, períodos especiais e regras de transição da Reforma da Previdência."
  },
  {
    question: "O INSS negou meu pedido, o que fazer?",
    answer: "A negativa administrativa não é o fim. Podemos entrar com um recurso administrativo ou uma ação judicial para garantir seus direitos fundamentais."
  },
  {
    question: "Quais documentos preciso para o BPC/LOAS?",
    answer: "São necessários documentos de identificação de todos que moram na casa, comprovante de residência e laudos médicos atualizados no caso de deficiência."
  }
];

export const IconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Scale,
  FileText,
  HeartPulse,
  Clock,
  Users
};
