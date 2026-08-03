"use client";

import { useEffect, useState } from "react";

const services = [
  {
    number: "01",
    title: "Sites institucionais",
    text: "Presença digital profissional para apresentar sua empresa com clareza, confiança e personalidade.",
  },
  {
    number: "02",
    title: "Landing pages",
    text: "Páginas estratégicas, rápidas e focadas em transformar visitantes em novos contatos e clientes.",
  },
  {
    number: "03",
    title: "Lojas virtuais",
    text: "Experiências de compra simples e bonitas, pensadas para valorizar seus produtos e vender mais.",
  },
  {
    number: "04",
    title: "Evolução contínua",
    text: "Manutenção, novas páginas e melhorias para seu site continuar rápido, atual e relevante.",
  },
];

const projects = [
  { tag: "Saúde · Site institucional", name: "Clínica Essenza", className: "project-coral" },
  { tag: "Arquitetura · Portfólio", name: "Ateliê Norte", className: "project-sand" },
  { tag: "Gastronomia · Landing page", name: "Casa Alba", className: "project-blue" },
];

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    document.body.classList.add("intro-running");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => {
      setShowIntro(false);
      document.body.classList.remove("intro-running");
    }, reducedMotion ? 600 : 4000);
    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove("intro-running");
    };
  }, []);

  return (
    <main>
      {showIntro && (
        <div className="intro-screen" role="status" aria-label="Apresentando samuel.dev">
          <div className="intro-word" aria-hidden="true">
            {["s", "a", "m", "u", "e", "l", ".", "d", "e", "v"].map((letter, index) => (
              <span key={`${letter}-${index}`}>{letter}</span>
            ))}
          </div>
          <div className="intro-progress" aria-hidden="true"><i /></div>
        </div>
      )}
      <section className="hero" id="inicio">
        <header className="site-header">
          <a className="brand" href="#inicio" aria-label="Início">
            <span className="brand-mark">S</span>
            <span>samuel.dev</span>
          </a>
          <nav aria-label="Navegação principal">
            <a href="#trabalhos">Trabalhos</a>
            <a href="#servicos">Serviços</a>
            <a className="nav-cta" href="#contato">Vamos conversar <span>↗</span></a>
          </nav>
        </header>

        <div className="hero-lines" aria-hidden="true">
          {Array.from({ length: 16 }).map((_, index) => <i key={index} />)}
        </div>

        <div className="hero-sculpture" aria-hidden="true">
          <i /><i /><i />
          <span>s</span>
        </div>
        <div className="hero-ghost" aria-hidden="true">DESIGN / DEVELOPMENT</div>

        <div className="hero-content">
          <p className="eyebrow"><span /> Design & desenvolvimento web</p>
          <h1>Design que<br /><em>move negócios.</em></h1>
          <div className="hero-bottom">
            <p>Você merece um site próprio e único. Crio experiências digitais que traduzem a essência da sua empresa e ajudam o seu negócio a crescer.</p>
            <a className="circle-link" href="#trabalhos" aria-label="Ver meus trabalhos"><span>↓</span> Explorar</a>
          </div>
        </div>
        <div className="hero-index">Portfólio independente <span>•</span> Brasil, 2026</div>
      </section>

      <section className="intro section" aria-labelledby="intro-title">
        <p className="section-label">Sobre o estúdio</p>
        <div>
          <h2 id="intro-title">Sua empresa não precisa de<br />“apenas mais um site”.</h2>
          <p className="large-copy">Ela precisa de uma presença digital que seja lembrada. Uno estratégia, design e tecnologia para criar sites que comunicam valor antes mesmo da primeira conversa.</p>
          <div className="stats" aria-label="Diferenciais do serviço">
            <div><strong>100%</strong><span>Personalizado</span></div>
            <div><strong>01:01</strong><span>Atendimento direto</span></div>
            <div><strong>∞</strong><span>Possibilidades</span></div>
          </div>
        </div>
      </section>

      <section className="projects section" id="trabalhos" aria-labelledby="projects-title">
        <div className="section-heading">
          <div><p className="section-label">Projetos selecionados</p><h2 id="projects-title">Ideias que ganharam<br /><em>presença.</em></h2></div>
          <p>Uma amostra de experiências pensadas para negócios que querem se destacar.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card ${project.className}`} key={project.name}>
              <div className="project-visual">
                <span className="project-number">0{index + 1}</span>
                <div className="mock-window">
                  <div className="mock-bar"><i /><i /><i /></div>
                  <div className="mock-body"><span /> <strong>{project.name}</strong><p>identidade · experiência · resultado</p></div>
                </div>
                <span className="project-arrow">↗</span>
              </div>
              <p>{project.tag}</p>
              <h3>{project.name}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="services section" id="servicos" aria-labelledby="services-title">
        <div className="section-heading services-heading">
          <div><p className="section-label">O que eu faço</p><h2 id="services-title">Do primeiro rascunho<br />ao primeiro <em>clique.</em></h2></div>
          <p>Cuido de cada detalhe para entregar um site bonito, estratégico, rápido e fácil de usar.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article key={service.title}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <i>↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className="process section" aria-labelledby="process-title">
        <p className="section-label">Como funciona</p>
        <div className="process-content">
          <h2 id="process-title">Um processo simples.<br /><em>Um resultado singular.</em></h2>
          <ol>
            <li><span>01</span><div><strong>Descoberta</strong><p>Entendo seu negócio, seu público e o que o projeto precisa alcançar.</p></div></li>
            <li><span>02</span><div><strong>Criação</strong><p>Transformo a estratégia em uma experiência visual original e envolvente.</p></div></li>
            <li><span>03</span><div><strong>Construção</strong><p>Desenvolvo o site com desempenho, responsividade e atenção aos detalhes.</p></div></li>
            <li><span>04</span><div><strong>Lançamento</strong><p>Publicamos, revisamos e deixamos tudo pronto para sua empresa crescer.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="contact-orbit" aria-hidden="true"><i /><i /><i /></div>
        <p className="eyebrow"><span /> Seu próximo site começa aqui</p>
        <h2>Vamos criar algo<br /><em>único juntos?</em></h2>
        <p>Conte um pouco sobre sua ideia e receba uma proposta personalizada.</p>
        <a href="mailto:contato@samuelstudio.com.br">Quero tirar minha ideia do papel <span>↗</span></a>
      </section>

      <footer>
        <a className="brand" href="#inicio"><span className="brand-mark">S</span><span>samuel.dev</span></a>
        <p>Sites que fazem sua empresa ser vista e lembrada.</p>
        <div><a href="#inicio">Voltar ao topo ↑</a><span>© 2026</span></div>
      </footer>
    </main>
  );
}
