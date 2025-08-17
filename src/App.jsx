import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function EnhancedLandingPage() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#experiencia", label: "Experiência" },
    { href: "#skills", label: "Skills" },
    { href: "#projetos", label: "Projetos" },
  ];

  const skillGroups = [
    {
      title: "Frontend",
      icon: "🎨",
      color: "from-cyan-400 to-blue-500",
      items: [
        "React",
        "Vite",
        "TailwindCSS",
        "Bootstrap",
        "Framer Motion",
        "HTML5/CSS3",
      ],
    },
    {
      title: "Backend",
      icon: "🛠️",
      color: "from-green-400 to-emerald-500",
      items: [
        "Node.js (Express)",
        "PHP",
        "REST APIs",
        "JWT/Auth",
        "WebSockets",
        "MVC Pattern",
      ],
    },
    {
      title: "Banco de Dados",
      icon: "🗄️",
      color: "from-blue-400 to-violet-500",
      items: [
        "MongoDB (Mongoose)",
        "MySQL",
        "Modelagem",
        "Índices",
        "Migrations",
      ],
    },
    {
      title: "Infraestrutura",
      icon: "⚙️",
      color: "from-orange-400 to-red-500",
      items: ["Redes", "Linux", "Git/GitHub", "CI/CD", "Suporte Técnico"],
    },
  ];

  const experiences = [
    {
      period: "2024 - Presente",
      role: "Técnico de Informática",
      company: "Prefeitura de Videira",
      description:
        "Responsável pela manutenção de infraestrutura de TI, suporte técnico aos usuários, configuração de redes e desenvolvimento de soluções internas.",
      achievements: [
        "Manutenção de infraestrutura de TI da prefeitura",
        "Suporte técnico especializado aos departamentos",
        "Configuração e gestão de redes corporativas",
        "Desenvolvimento de soluções internas",
        "Responsavel por equipe de TI",
      ],
    },
    {
      period: "2020 - Presente",
      role: "Desenvolvedor Full Stack",
      company: "Projetos Pessoais & Freelances",
      description:
        "Desenvolvimento de aplicações web completas utilizando tecnologias modernas, desde o design até a implementação e deploy.",
      achievements: [
        "Desenvolvimento de +15 projetos full stack",
        "Experiência com React, Node.js e bancos de dados",
        "Implementação de sistemas de autenticação e APIs",
        "Deploy e manutenção de aplicações em produção",
      ],
    },
  ];

  const projects = [
    {
      title: "Sistema de Gestão de Projetos",
      desc: "Plataforma completa para gerenciamento de projetos com tarefas, workflows e notificações em tempo real.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "JWT"],
      link: "#",
      featured: true,
    },
    {
      title: "Portal de Telefones + Dashboard",
      desc: "Sistema CRUD completo com categorias, paginação avançada, busca inteligente e sistema de permissões por usuário.",
      tech: ["React", "Express", "MongoDB", "Tailwind"],
      link: "#",
      featured: true,
    },
    {
      title: "Consulta Publica + Painel de adminstração",
      desc: "Sistema completo para suportar mais de 10k de usuarios acessando simultaneamente e respondendo perguntas sobre consulta publica",
      tech: ["React", "Node.js", "MySQL", "Chart.js"],
      link: "#",
      featured: false,
    },
    {
      title: "Sistema de Controle de Estoque",
      desc: "Solução para controle de estoque com alertas automáticos, relatórios de movimentação e integração com fornecedores.",
      tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      link: "#",
      featured: false,
    },
  ];

  const stats = [
    { label: "Anos de Experiência", value: "3+", icon: "📅" },
    { label: "Projetos Concluídos", value: "20+", icon: "🚀" },
    { label: "Tecnologias Dominadas", value: "20+", icon: "⚡" },
    { label: "Clientes Satisfeitos", value: "100%", icon: "⭐" },
  ];

  const glass = "bg-white/5 backdrop-blur-xl border border-white/10";
  const section = "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#0b0f14] text-slate-100 antialiased relative overflow-x-clip">
      {/* Background com parallax */}
      <motion.div
        style={{ y: yBg }}
        className="pointer-events-none fixed inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(1400px_700px_at_80%_-10%,rgba(56,189,248,0.2),transparent_60%),radial-gradient(1000px_600px_at_10%_10%,rgba(168,85,247,0.15),transparent_60%),radial-gradient(800px_400px_at_90%_90%,rgba(34,197,94,0.1),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            mixBlendMode: "overlay",
          }}
        />
      </motion.div>

      {/* Navbar aprimorado */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`${section} sticky top-4 z-50`}
      >
        <div
          className={`${glass} rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl`}
        >
          <motion.a
            href="#inicio"
            className="font-bold tracking-wide text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
              Vinícius Lazarotto
            </span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="px-4 py-2 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20 transition-all duration-300 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {l.label}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <motion.a
              href="https://github.com/Vinilazza"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="GitHub"
            >
              <span>🐙</span>
              <span className="hidden sm:inline font-medium">GitHub</span>
            </motion.a>
          </div>
        </div>
      </motion.header>

      {/* Hero Section aprimorado */}
      <section id="inicio" className={`${section} pt-20 md:pt-32`}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.span
              className="inline-block text-sm uppercase tracking-widest text-slate-400 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Desenvolvedor Full Stack • Técnico de Informática
            </motion.span>

            <motion.h1
              className="text-5xl md:text-7xl font-black leading-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Olá! Eu sou{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-400">
                Vinícius
              </span>
            </motion.h1>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-xl text-slate-300/90 leading-relaxed">
                <span className="font-bold text-white">20 anos</span>, estudante
                de{" "}
                <span className="font-bold text-cyan-300">
                  Ciência da Computação
                </span>{" "}
                e desenvolvedor fullstack focado em criar experiências digitais
                incríveis.
              </p>
              <p className="text-lg text-slate-300/80 leading-relaxed">
                Transformo ideias em realidade com{" "}
                <b className="text-cyan-300">React</b>,{" "}
                <b className="text-green-300">Node.js</b> e{" "}
                <b className="text-blue-300">design responsivo</b>. Especialista
                em gestão de TI e infraestutura de redes.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#projetos"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 font-semibold shadow-[0_0_40px_rgba(56,189,248,0.3)] hover:shadow-[0_0_60px_rgba(56,189,248,0.4)]"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Projetos <span className="text-xl">🚀</span>
              </motion.a>

              <motion.a
                href="#contato"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all duration-300 font-semibold"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Vamos Conversar <span className="text-xl">💬</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero Visual aprimorado */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-96 md:h-[500px] lg:h-[600px]"
          >
            {/* Card principal */}
            <div
              className={`absolute inset-4 rounded-3xl ${glass} shadow-2xl overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-blue-500/10" />

              {/* Elementos flutuantes */}
              <motion.div
                className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-2xl"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                ⚡
              </motion.div>

              <motion.div
                className="absolute top-20 right-8 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center text-lg"
                animate={{ y: [0, -8, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                🎨
              </motion.div>

              <motion.div
                className="absolute bottom-20 left-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-2xl"
                animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              >
                🛠️
              </motion.div>

              <motion.div
                className="absolute bottom-8 right-12 w-14 h-14 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-xl"
                animate={{ y: [0, -6, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1.5 }}
              >
                📊
              </motion.div>
            </div>

            {/* Efeitos de luz */}
            <motion.div
              className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${glass} rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300`}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Sobre Section aprimorado */}
      <section id="sobre" className={`${section} pt-32`}>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className={`${glass} rounded-3xl p-8 md:p-12`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Sobre mim
            </h2>
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p className="text-lg">
                Sou um jovem desenvolvedor de{" "}
                <span className="font-bold text-white">20 anos</span>,
                atualmente cursando{" "}
                <span className="font-bold text-cyan-300">
                  Ciência da Computação
                </span>{" "}
                e trabalhando como{" "}
                <span className="font-bold text-blue-300">
                  Técnico de Informática
                </span>{" "}
                na Prefeitura de Videira há{" "}
                <span className="font-bold text-green-300">1,6 anos</span>.
              </p>
              <p>
                Minha jornada na programação começou em{" "}
                <span className="font-bold text-yellow-300">2022</span>, e desde
                então venho me especializando em desenvolvimento full stack.
                Tenho paixão por criar soluções que fazem a diferença na vida
                das pessoas.
              </p>
              <p>
                Além do desenvolvimento, possuo conhecimento sólido em{" "}
                <span className="font-bold text-blue-300">infraestrutura</span>,
                <span className="font-bold text-red-300"> redes</span> e{" "}
                <span className="font-bold text-orange-300">
                  suporte técnico
                </span>
                , o que me proporciona uma visão completa do ecossistema
                tecnológico.
              </p>
              <p className="text-cyan-200 font-semibold">
                🎯 Objetivo: Me formar e me tornar um desenvolvedor sênior
                reconhecido no mercado.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`${glass} rounded-2xl p-6`}
            >
              <h3 className="text-xl font-bold mb-3 text-cyan-300">
                🎓 Formação
              </h3>
              <p className="text-slate-300">
                Cursando <strong>Ciência da Computação</strong> - Focado em
                algoritmos, estruturas de dados e engenharia de software.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`${glass} rounded-2xl p-6`}
            >
              <h3 className="text-xl font-bold mb-3 text-blue-300">
                💼 Especialidades
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "MongoDB", "Redes", "Infraestrutura"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-white/10 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className={`${glass} rounded-2xl p-6`}
            >
              <h3 className="text-xl font-bold mb-3 text-green-300">
                🚀 Visão de Futuro
              </h3>
              <p className="text-slate-300">
                Desenvolvedor sênior, especialista em arquitetura de software e
                liderança técnica em projetos inovadores.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Experiência Section */}
      <section id="experiencia" className={`${section} pt-32`}>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Experiência Profissional
          </h2>
          <p className="text-center text-slate-400 max-w-2xl mx-auto">
            Minha trajetória profissional e os projetos que moldaram minha
            carreira
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`${glass} rounded-3xl p-8 md:p-10 hover:bg-white/10 transition-all duration-300`}
            >
              <div className="grid lg:grid-cols-4 gap-8">
                <div className="lg:col-span-1">
                  <div className="text-sm font-semibold text-cyan-300 mb-2">
                    {exp.period}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-blue-300 font-medium">{exp.company}</p>
                </div>
                <div className="lg:col-span-3 space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-green-400 mt-1">✓</span>
                        <span className="text-sm text-slate-300">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section aprimorado */}
      <section id="skills" className={`${section} pt-32`}>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Habilidades Técnicas
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`${glass} rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 group`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${group.color} flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}
                >
                  {group.icon}
                </div>
                <h3 className="font-bold text-xl">{group.title}</h3>
              </div>

              <div className="space-y-3">
                {group.items.map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 + idx * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${group.color}`}
                    />
                    <span className="text-sm font-medium text-slate-200">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projetos Section aprimorado */}
      <section id="projetos" className={`${section} pt-32`}>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Projetos em Destaque
              </h2>
              <p className="text-slate-400">
                Alguns dos projetos que desenvolvi nos últimos anos
              </p>
            </div>
            <motion.a
              href="https://github.com/Vinilazza"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 border border-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver no GitHub <span className="text-lg">↗️</span>
            </motion.a>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`${glass} rounded-3xl p-8 md:p-10 hover:bg-white/10 transition-all duration-300 group`}
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-bold group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <motion.span
                    className="text-2xl opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                    whileHover={{ rotate: 45 }}
                  >
                    ↗️
                  </motion.span>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-white/10 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 font-semibold"
                  whileHover={{ x: 5 }}
                >
                  Ver projeto <span>→</span>
                </motion.a>
              </motion.div>
            ))}
        </div>

        {/* Projetos menores */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects
            .filter((p) => !p.featured)
            .map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`${glass} rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-lg font-semibold group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h4>
                  <span className="opacity-60 group-hover:opacity-100 transition-opacity">
                    ↗️
                  </span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* CTA Section aprimorado */}
      <section className={`${section} pt-32`}>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`${glass} rounded-3xl p-8 md:p-12 text-center relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Vamos Trabalhar Juntos? 🚀
            </h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Estou sempre aberto a novos desafios e oportunidades. Se você tem
              um projeto interessante ou quer bater um papo sobre tecnologia,
              vamos conversar!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={`https://wa.me/5549920009207?text=${encodeURIComponent(
                  "Oi Vini! Vim pelo site e quero falar com você."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 font-semibold shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Falar Comigo <span className="text-xl">💬</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contato Section aprimorado */}

      {/* Footer aprimorado */}
      <footer className={`${section} pb-10`}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-slate-400 mb-2">
                © {new Date().getFullYear()} Vinícius Lazarotto. Todos os
                direitos reservados.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <motion.a
                href="#inicio"
                className="text-slate-400 hover:text-cyan-300 transition-colors font-medium"
                whileHover={{ y: -2 }}
              >
                ↑ Voltar ao topo
              </motion.a>
              <motion.a
                href="https://github.com/Vinilazza"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/vinicius-lazarotto-3020b4278/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                LinkedIn
              </motion.a>
            </div>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
