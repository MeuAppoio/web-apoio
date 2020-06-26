import BlogImage1 from "../../assets/image/agency/blog/coach.jpg";
import BlogImage2 from "../../assets/image/agency/blog/gestor.jpg";
import BlogImage3 from "../../assets/image/agency/blog/psicologa.jpg";
import Member1 from "../../assets/image/agency/team/destk1.jpg";
import Member2 from "../../assets/image/agency/team/destk2.jpg";
import Member3 from "../../assets/image/agency/team/destk3.jpg";
import Denny from "../../assets/image/agency/client/denny.png";
import Menny from "../../assets/image/agency/client/menny.png";

const data = {
  menuItems: [
    {
      label: "Especialistas",
      path: "#blogSection",
      offset: "100",
    },
    {
      label: "Nossas Vantagens",
      path: "#AboutUsSection",
      offset: "80",
    },
    {
      label: "Histórico empresarial",
      path: "#workHistorySection",
      offset: "100",
    },
    {
      label: "Depoimentos",
      path: "#testimonialSection",
      offset: "100",
    },
    {
      label: "Profissionais em destaque",
      path: "#teamSection",
      offset: "67",
    },
    {
      label: "FAQ",
      path: "#faqSection",
      offset: "100",
    },
  ],
  aboutus: [
    {
      id: 1,
      title: "Possibilidade de atendimento a qualquer hora.",
      icon: "flaticon-next",
    },
    {
      id: 2,
      title: "A maior e melhor variedade de profissionais para te atender.",
      icon: "flaticon-next",
    },
    {
      id: 3,
      title: "O melhor custo-beneficio do mercado.",
      icon: "flaticon-next",
    },
    {
      id: 4,
      title: "Convênio com empresas",
      icon: "flaticon-next",
    },
    {
      id: 5,
      title: "Comece sua evolução agora mesmo.",
      icon: "flaticon-next",
    },
  ],
  features: [
    {
      /*
      id: 1,
      icon: "flaticon-flask",
      title: "Search Optimization",
      description:
        "By using Search Engine Optimization, You will get more Clients",
    },
    {
      id: 2,
      icon: "flaticon-pencil-case",
      title: "Ui/UX Design",
      description:
        "We provide the best UI/UX Design by following the latest trends of the market .",
    },
    {
      id: 3,
      icon: "flaticon-ruler",
      title: "Wireframing Task",
      description:
        "We respect our customer opinions and deals with them with perfect wireframing ",
    },
    {
      id: 4,
      icon: "flaticon-startup",
      title: "Business Solutions",
      description:
        "We are commited to provide proper business solutions with reasonable pricing",
    },
    {
      id: 5,
      icon: "flaticon-briefing",
      title: "Business Analysis",
      description:
        "A day to day report about your ongoing business for proper understanding",
    },
    {
      id: 6,
      icon: "flaticon-creative",
      title: "Content Management",
      description:
        "Proper Content Management is important to find out the real clients for your agencies",
    */
    },
  ],
  qualityFeature: [
    {
      id: 1,
      icon: "flaticon-flask",
      title: "Search Optimization",
      description:
        "By using Search Engine Optimization, You will get more Clients.",
    },
    {
      id: 2,
      icon: "flaticon-pencil-case",
      title: "Wireframing Task",
      description:
        "We respect our customer opinions and deals with them with perfect wireframing.",
    },
    {
      id: 3,
      icon: "flaticon-ruler",
      title: "Ui/Ux Design",
      description:
        "We provide the best UI/UX Design by following the latest trends of the market .",
    },
    {
      id: 4,
      icon: "flaticon-briefing",
      title: "Content Writting",
      description:
        "Proper Content Management is important to find out the real clients for your agencies .",
    },
  ],
  blog: [
    {
      id: 1,
      title: "Coaches",
      thumbnail_url: BlogImage1,
      postLink: "#1",
    },
    {
      id: 2,
      title: "Educadores financeiros",
      thumbnail_url: BlogImage2,
      postLink: "#2",
    },
    {
      id: 3,
      title: "Psicólogos",
      thumbnail_url: BlogImage3,
      postLink: "#3",
    },
  ],
  teamMember: [
    {
      id: 1,
      name: "Fernando Lopes",
      thumbnail_url: Member1,
      designation: "Coach",
      social_links: [],
    },
    {
      id: 2,
      name: "Gabriela Defoe",
      thumbnail_url: Member2,
      designation: "Gestora Financeira",
      social_links: [],
    },
    {
      id: 3,
      name: "Amanda Nante",
      thumbnail_url: Member3,
      designation: "Psicóloga",
      social_links: [],
    },
  ],
  testimonial: [
    {
      id: 1,
      name: "D. B.",
      designation: "Tanoshi",
      comment:
        "Supreendeu o quanto melhorou a qualidade de vida e produtividade dos meus funcionários ",
      avatar_url: Denny,
    },
    {
      id: 2,
      name: "M. N.",
      designation: "Rdc",
      comment: "Consegui chegar em um patamar incrível da minha vida.",
    },
    {
      id: 3,
      name: "J. N.",
      designation: "Ferraz metalurgica",
      comment: "A variedade de profissionais me surpreendeu muito",
      avatar_url: Denny,
    },
    {
      id: 4,
      name: "M. G.",
      designation: "Laboratório Amigovida ",
      comment: "Foi uma experiência incrível e transformadora.",
      avatar_url: Menny,
    },
  ],
  faq: [
    {
      id: 1,
      expend: true,
      title: "Como funciona?",
      description:
        "É simples, basta escolher um profissional da área desejada, agendar um horário e realizar sua consulta ",
    },
    {
      id: 2,
      title: "Não existe consultas presenciais?",
      description:
        "Não, apenas consultas virtuais, justamente para poderem ser realizadas a qualquer hora e qualquer lugar e com qualquer profissional. ",
    },
    {
      id: 3,
      title: "Houve um imprevisto de ultima hora, posso cancelar?",
      description:
        "Felizmente sim, voce pode cancelar sua consulta, desde que tenha ao menos 1 hora de antecedencia, caso contrário será cobrado uma taxa de 15 reais para remarcar.",
    },
  ],
  menuWidget: [
    {
      id: 1,
      title: "Meu atendimento",
      menuItems: [
        {
          id: 1,
          url: "#1",
          text: "Especialidades",
        },
        {
          id: 2,
          url: "#2",
          text: "Termos de uso do profissional",
        },
        {
          id: 3,
          url: "#3",
          text: "Horários",
        },
        {
          id: 4,
          url: "#4",
          text: "Valores",
        },
        {
          id: 5,
          url: "#5",
          text: "Cadastro",
        },
      ],
    },
    {
      id: 2,
      title: "Clientes",
      menuItems: [
        {
          id: 1,
          url: "#1",
          text: "Perguntas Frequentes",
        },
        {
          id: 2,
          url: "#2",
          text: "Politica de privacidade",
        },
        {
          id: 3,
          url: "#2",
          text: "Causas tratadas",
        },
        {
          id: 4,
          url: "#4",
          text: "Depoimentos",
        },
      ],
    },
    {
      id: 3,
      title: "Sobre nós",
      menuItems: [
        {
          id: 1,
          url: "#1",
          text: "Quem somos",
        },
        {
          id: 2,
          url: "#2",
          text: "Trabalhe conosco",
        },
        {
          id: 3,
          url: "#3",
          text: "Contato",
        },
        {
          id: 4,
          url: "#4",
          text: "Imprensa",
        },
      ],
    },
    {
      id: 4,
      title: "Especialistas",
      menuItems: [
        {
          id: 1,
          url: "#1",
          text: "Coaches",
        },
        {
          id: 2,
          url: "#2",
          text: "Educadores financeiros",
        },
        {
          id: 3,
          url: "#3",
          text: "Psicólogos",
        },
      ],
    },
  ],
  social_profile: [
    {
      id: 1,
      icon: "flaticon-facebook-logo",
      link: "#1",
    },
    {
      id: 2,
      icon: "flaticon-twitter-logo-silhouette",
      link: "#2",
    },
    {
      id: 3,
      icon: "flaticon-instagram",
      link: "#3",
    },
    {
      id: 4,
      icon: "flaticon-tumblr-logo",
      link: "#4",
    },
    {
      id: 5,
      icon: "flaticon-dribble-logo",
      link: "#5",
    },
  ],
};
export default data;
