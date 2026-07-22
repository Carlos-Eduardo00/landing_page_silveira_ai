import React from 'react';

function Footer() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">SI</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold">Silveira IA</span>
                <span className="text-[11px] font-medium opacity-80">Atendimento inteligente para empresas</span>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Transforme seu atendimento no WhatsApp com inteligência artificial. Disponível 24 horas por dia.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Links rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('#hero')} className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#como-funciona')} className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Como funciona
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#diferenciais')} className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Diferenciais
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#faq')} className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>silveiraatendimentointel@gmail.com</li>
              <li>(11) 93941-2228</li>
              <li>Franco da Rocha, SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-90">
            © 2026 Silveira IA. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <button className="text-sm opacity-90 hover:opacity-100 transition-opacity">
              Política de privacidade
            </button>
            <button className="text-sm opacity-90 hover:opacity-100 transition-opacity">
              Termos de serviço
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;