
import React from 'react';
import { Layout } from './components/Layout';
import { SERVICES, TESTIMONIALS, FAQS, IconMap, WHATSAPP_LINK } from './constants';
import { CheckCircle, ArrowRight, Star, ChevronDown, Play } from 'lucide-react';
import Assistant from './components/Assistant';

const App: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 -z-10 w-full h-full bg-slate-900">
           <img 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000" 
              alt="Background" 
              className="w-full h-full object-cover opacity-20"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full text-indigo-400 text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Especialista em Direito Previdenciário (INSS)
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-8">
              Garanta sua <span className="text-indigo-400">Aposentadoria</span> com quem entende do assunto.
            </h1>
            
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Pare de perder dinheiro para o INSS. O Dr. Luiz Carlos ajuda você a conquistar o benefício que você merece com agilidade, transparência e segurança jurídica.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={WHATSAPP_LINK} 
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-bold px-8 py-4 rounded-lg shadow-xl shadow-indigo-900/20 flex items-center justify-center gap-2 group transition-all"
              >
                Falar com Especialista Agora
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#servicos" 
                className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white text-lg font-semibold px-8 py-4 rounded-lg flex items-center justify-center transition-all"
              >
                Ver Nossos Serviços
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/${i + 10}/100/100`} className="w-12 h-12 rounded-full border-4 border-slate-900" alt="Client" />
                ))}
              </div>
              <div className="text-slate-300">
                <div className="flex text-yellow-400 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-sm">+ de 500 famílias atendidas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60">
             <div className="flex items-center gap-2 text-xl font-bold italic text-slate-800">OAB SP</div>
             <div className="flex items-center gap-2 text-xl font-bold text-slate-800">EXPERIÊNCIA COMPROVADA</div>
             <div className="flex items-center gap-2 text-xl font-bold text-slate-800">INSS ESPECIALISTA</div>
             <div className="flex items-center gap-2 text-xl font-bold text-slate-800">ATENDIMENTO NACIONAL</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4">Especialidades</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Como podemos te ajudar?</h3>
            <p className="text-slate-600 text-lg">
              Oferecemos soluções jurídicas completas para você que busca benefícios previdenciários. Nossa missão é simplificar o processo e garantir seus direitos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const Icon = IconMap[service.icon];
              return (
                <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-indigo-100 transition-all group">
                  <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Icon size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <a href={WHATSAPP_LINK} className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    Saiba mais <ArrowRight size={18} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-100 rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-100 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000" 
                  alt="Dr. Luiz Carlos" 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-900 to-transparent p-10">
                   <p className="text-white text-xl font-bold">Dr. Luiz Carlos</p>
                   <p className="text-indigo-300">Advogado Previdenciarista | OAB/SP</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4">Sobre o Advogado</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Defendendo o seu futuro com ética e competência.</h3>
              
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10">
                <p>
                  Com anos de atuação exclusiva no Direito Previdenciário, o <strong>Dr. Luiz Carlos</strong> construiu uma carreira sólida pautada na defesa intransigente dos direitos dos segurados do INSS.
                </p>
                <p>
                  Nossa equipe utiliza tecnologia de ponta para realizar cálculos precisos e simulações que revelam a melhor estratégia de aposentadoria para cada cliente, evitando erros comuns que diminuem o valor final do benefício.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {[
                    "Atendimento Humanizado",
                    "Cálculos Judiciais",
                    "Ações em Todo o Brasil",
                    "Transparência Total",
                    "Foco em Resultados",
                    "Especialização Constante"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="text-indigo-600 flex-shrink-0" size={20} />
                      <span className="font-medium text-slate-900">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <a href={WHATSAPP_LINK} className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold px-10 py-4 rounded-lg transition-all shadow-lg">
                Fale Diretamente com o Dr. Luiz
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-indigo-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Como funciona nosso atendimento?</h2>
            <p className="text-indigo-200 text-lg max-w-2xl mx-auto">Tudo é pensado para ser simples, rápido e sem burocracia para você.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Consulta Inicial", desc: "Conversamos para entender sua história laboral e objetivos de aposentadoria." },
              { step: "02", title: "Análise Técnica", desc: "Realizamos cálculos minuciosos e análise de toda a sua documentação." },
              { step: "03", title: "Execução Estratégica", desc: "Entramos com o pedido ou recurso necessário para garantir seu direito." }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="text-6xl font-black text-white/10 absolute -top-10 left-0 group-hover:text-indigo-500/30 transition-colors">{item.step}</div>
                <div className="relative z-10 pt-8">
                  <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                  <p className="text-indigo-200 leading-relaxed text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4">Depoimentos</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">O que dizem nossos clientes</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <div className="flex text-yellow-500 mb-6">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 text-lg italic mb-8">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={`https://picsum.photos/seed/${t.id + 50}/100/100`} className="w-12 h-12 rounded-full object-cover" alt={t.name} />
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-slate-500 text-sm">Cliente Satisfeito</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
             <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Dúvidas Frequentes</h3>
             <p className="text-slate-600 text-lg">Esclarecemos os principais pontos sobre seus direitos.</p>
          </div>
          
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden" open={i === 0}>
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="text-lg font-bold text-slate-900">{faq.question}</span>
                  <span className="bg-indigo-50 p-2 rounded-full text-indigo-600 group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed text-lg border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contato" className="py-20">
        <div className="container mx-auto px-4">
           <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full -ml-32 -mb-32"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-6xl font-bold text-white mb-8">Não deixe o seu direito para depois.</h2>
                <p className="text-xl text-indigo-200 mb-12 max-w-2xl mx-auto">
                  A cada dia que passa, você pode estar perdendo parcelas da sua aposentadoria. Faça uma análise gratuita do seu caso agora.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <a href={WHATSAPP_LINK} className="bg-green-500 hover:bg-green-600 text-white font-bold text-xl px-12 py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl transition-all">
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.301-.15-1.767-.867-2.026-.962-.259-.095-.448-.15-.638.15-.19.299-.734.962-.899 1.15-.166.189-.331.209-.63.059-.3-.15-1.264-.467-2.407-1.485-.89-.794-1.49-1.773-1.665-2.072-.175-.3-.019-.461.13-.611.134-.134.3-.35.45-.524.151-.174.201-.299.301-.498.101-.199.05-.374-.025-.524-.075-.15-.638-1.537-.874-2.106-.23-.556-.463-.48-.638-.489-.165-.008-.354-.01-.543-.01-.189 0-.498.07-.758.351-.259.281-1.028 1.006-1.028 2.455 0 1.448 1.054 2.846 1.201 3.047.147.201 2.074 3.167 5.024 4.444.701.304 1.248.486 1.675.621.705.224 1.346.193 1.853.118.566-.084 1.767-.722 2.016-1.42.25-.697.25-1.294.175-1.42-.075-.124-.275-.199-.575-.35z" /></svg>
                    Falar no WhatsApp (11) 9.6312.8396
                  </a>
                </div>
              </div>
           </div>
        </div>
      </section>
      
      {/* AI Assistant for immediate engagement */}
      <Assistant />
    </Layout>
  );
};

export default App;
