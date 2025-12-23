import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Landing Pages Eficientes",
    description:
      "Landing pages personalizadas e otimizadas para conversão, desenvolvidas especificamente para o tipo de necessidade do seu negócio.",
    detailedDescription:
      "Criamos landing pages altamente eficientes e personalizadas que se adaptam perfeitamente ao seu tipo de negócio. Cada página é desenvolvida com foco em conversão, performance e experiência do usuário, garantindo que seus visitantes se transformem em clientes. Utilizamos as melhores práticas de UX/UI, SEO e otimização para garantir resultados reais.",
    tags: ["Web", "Landing Page"],
    tech: ["React", "Next.js", "Tailwind CSS", "SEO"],
    image: null,
    demoUrl: "#contact",
    githubUrl: "#contact",
    link: "#contact",
  },
  {
    id: 2,
    title: "Phishing Test & Treinamento",
    description:
      "Sistema completo de testes de phishing com possibilidade de treinamento de segurança para fortalecer a proteção da sua empresa.",
    detailedDescription:
      "Oferecemos uma solução completa de testes de phishing e treinamento de segurança. Nosso sistema permite simular ataques de engenharia social de forma controlada, identificando vulnerabilidades na sua equipe. Além disso, fornecemos treinamentos personalizados para educar seus colaboradores sobre as melhores práticas de segurança cibernética, transformando-os na primeira linha de defesa da sua empresa.",
    tags: ["Segurança", "Pentest"],
    tech: ["Engenharia Social", "Treinamento", "Análise"],
    image: null,
    demoUrl: "#contact",
    githubUrl: "#contact",
    link: "#contact",
  },
  {
    id: 3,
    title: "Automação On/Off Boarding",
    description:
      "Sistema automatizado para contratação e desligamento de colaboradores, integrando todos os sistemas com apenas um clique.",
    detailedDescription:
      "Revolucione a gestão de pessoas com nossa solução de automação de onboarding e offboarding. Ao contratar um novo colaborador, você pode adicioná-lo automaticamente em todos os sistemas necessários (email, sistemas internos, ferramentas de trabalho) e configurar todas as permissões e acessos pré-definidos. No desligamento, remova a pessoa de todos os sistemas com apenas um clique, garantindo segurança e eficiência. Economize tempo e reduza erros manuais.",
    tags: ["Automação", "RH"],
    tech: ["RPA", "Integração", "Workflow"],
    image: null,
    demoUrl: "#contact",
    githubUrl: "#contact",
    link: "#contact",
  },
  {
    id: 4,
    title: "App de Finanças + WhatsApp",
    description:
      "Aplicativo mobile para controle de finanças pessoais com integração ao WhatsApp para maior praticidade e agilidade.",
    detailedDescription:
      "Aplicativo mobile completo para controle de finanças pessoais que se integra diretamente com o WhatsApp. Receba notificações de gastos, relatórios financeiros e alertas importantes diretamente no WhatsApp. Gerencie suas receitas, despesas, investimentos e metas financeiras de forma simples e intuitiva. A integração com WhatsApp torna o controle financeiro ainda mais prático e acessível, permitindo que você gerencie suas finanças sem sair do aplicativo que mais usa.",
    tags: ["Mobile", "Fintech"],
    tech: ["React Native", "WhatsApp API", "Financeiro"],
    image: null,
    demoUrl: "#contact",
    githubUrl: "#contact",
    link: "#contact",
  },
  {
    id: 5,
    title: "Dashboard Polícia Civil",
    description:
      "Dashboard completo para a Polícia Civil, reunindo todas as informações que um chefe de estado precisa para tomada de decisões estratégicas.",
    detailedDescription:
      "Dashboard especializado desenvolvido para a Polícia Civil, centralizando todas as informações essenciais que um chefe de estado precisa para tomada de decisões estratégicas. Visualize estatísticas de criminalidade em tempo real, acompanhe indicadores de performance, monitore operações em andamento e tenha acesso a relatórios detalhados. Interface intuitiva e responsiva que facilita a análise de dados complexos e suporta decisões baseadas em evidências.",
    tags: ["Dashboard", "Governo"],
    tech: ["Data Visualization", "Analytics", "Real-time"],
    image: null,
    demoUrl: "#contact",
    githubUrl: "#contact",
    link: "#contact",
  },
  {
    id: 6,
    title: "Sistema de Locação & Agendamento",
    description:
      "Sistema completo para locação de veículos, quadras esportivas, venda de produtos e agendamento comercial, tudo em uma única plataforma.",
    detailedDescription:
      "Solução completa e integrada para gestão de locações e agendamentos comerciais. Gerencie locação de veículos, quadras esportivas, espaços comerciais e muito mais. O sistema também inclui funcionalidades de e-commerce para venda de produtos e um sistema robusto de agendamento comercial. Tudo em uma única plataforma que facilita a gestão do seu negócio, desde o cadastro de clientes até o controle de pagamentos e relatórios financeiros.",
    tags: ["Sistema", "E-commerce"],
    tech: ["Full Stack", "Agendamento", "Pagamentos"],
    image: null,
    demoUrl: "#contact",
    githubUrl: "#contact",
    link: "#contact",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Nossos Projetos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos e que fazem a
            diferença para nossos clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
