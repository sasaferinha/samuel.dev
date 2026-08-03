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

const faqs = [
  { question: "Quanto custa criar um site?", answer: "O investimento depende do tamanho e das funcionalidades. Depois de uma conversa inicial, você recebe uma proposta clara com escopo, prazo e valor." },
  { question: "Como funciona o desenvolvimento?", answer: "Começamos pela estratégia, seguimos para o design e então construímos e testamos o site. Você acompanha cada etapa e aprova as decisões importantes." },
  { question: "Você também cuida do site depois de publicado?", answer: "Sim. Posso continuar com manutenção, atualizações, novas páginas e melhorias de desempenho conforme sua empresa evolui." },
  { question: "Posso modernizar um site que já existe?", answer: "Sim. Primeiro analiso o que pode ser aproveitado e depois indico se vale mais uma evolução visual, uma reconstrução parcial ou um novo projeto." },
];

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    document.body.classList.add("intro-running");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => {
      setShowIntro(false);
      document.body.classList.remove("intro-running");
    }, reducedMotion ? 600 : 5400);
    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove("intro-running");
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    const scenes = document.querySelectorAll<HTMLElement>(".hero, .section, .contact");
    let frame = 0;
    const updateScrollMotion = () => {
      frame = 0;
      const pageRange = document.documentElement.scrollHeight - window.innerHeight;
      root.style.setProperty("--page-progress", `${pageRange > 0 ? window.scrollY / pageRange : 0}`);
      scenes.forEach((scene) => {
        const rect = scene.getBoundingClientRect();
        const distance = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
        const clamped = Math.max(-1.4, Math.min(1.4, distance));
        scene.style.setProperty("--parallax-slow", `${clamped * -30}px`);
        scene.style.setProperty("--parallax-text", `${clamped * -14}px`);
        scene.style.setProperty("--parallax-fast", `${clamped * -48}px`);
      });
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScrollMotion);
    };
    updateScrollMotion();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle("is-visible", entry.isIntersecting));
    }, { threshold: 0.12 });
    const revealItems = document.querySelectorAll(".section-heading, .intro>*, .project-card, .service-list details, .process li, .faq-list details, .contact>*");
    revealItems.forEach((item) => { item.classList.add("reveal"); revealObserver.observe(item); });
    return () => { revealObserver.disconnect(); };
  }, []);

  return (
    <main>
      <div className="scroll-progress" aria-hidden="true" />
      {showIntro && (
        <div className="intro-screen" role="status" aria-label="Apresentando samuel.dev">
          <div className="intro-word" aria-hidden="true">
            {["S", "A", "M", "U", "E", "L", ".", "D", "E", "V"].map((letter, index) => (
              <span key={`${letter}-${index}`}>{letter}</span>
            ))}
          </div>
          <div className="intro-progress" aria-hidden="true"><i /></div>
        </div>
      )}
      <section className="hero" id="inicio">
        <header className="site-header">
          <a className="brand" href="#inicio" aria-label="Início">
            <span>SAMUEL.DEV</span>
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
        <div className="hero-metal" aria-hidden="true"><i /><i /><i /></div>
        <div className="hero-waves" aria-hidden="true">
          {Array.from({ length: 9 }).map((_, index) => <i key={index} />)}
        </div>

        <div className="hero-content">
          <p className="eyebrow"><span /> Design & desenvolvimento web</p>
          <h1 className="hero-statement">
            <span>Sites</span>
            <span>que movem</span>
            <span><em>negócios.</em></span>
          </h1>
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
          <h2 id="services-title">Serviços</h2>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <details key={service.title} name="servicos">
              <summary>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <i aria-hidden="true">+</i>
              </summary>
              <div className="service-detail">
                <p>{service.text}</p>
                <ul><li>Estratégia</li><li>Experiência</li><li>Desenvolvimento</li></ul>
              </div>
            </details>
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

      <section className="faq section" aria-labelledby="faq-title">
        <div className="faq-heading">
          <p className="section-label">Perguntas frequentes</p>
          <h2 id="faq-title">Tudo claro<br /><em>antes de começar.</em></h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question} name="faq">
              <summary><span>0{index + 1}</span><strong>{faq.question}</strong><i aria-hidden="true">+</i></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="contact-orbit" aria-hidden="true"><i /><i /><i /></div>
        <p className="eyebrow"><span /> Seu próximo site começa aqui</p>
        <h2>Vamos criar algo<br /><em>único juntos?</em></h2>
        <a href="mailto:contato@samuelstudio.com.br">Quero tirar minha ideia do papel <span>↗</span></a>
      </section>

      <footer>
        <a className="brand" href="#inicio"><span>SAMUEL.DEV</span></a>
        <p>Sites que fazem sua empresa ser vista e lembrada.</p>
        <div><a href="#inicio">Voltar ao topo ↑</a><span>© 2026</span></div>
      </footer>
    </main>
  );
}
