import { link } from "fs";
import Link from "next/link";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on Exciting project.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Brain Wave - AI",
    des: "AI Modern UI design landing page.",
    img: "/image-1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/next.svg"],
    link: "https://brainwavesite.netlify.app/",
  },
  {
    id: 2,
    title: "Hilink - Travel",
    des: "Travel Modern UI landing page.",
    img: "/image-4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://hilinksite.netlify.app/",
  },
  {
    id: 3,
    title: "Sundow Studio - (Clone)",
    des: "Cool Animated landing page. Page clone of sundown-studio.com",
    img: "/image-6.svg",
    iconLists: ["/4.svg", "/5.svg", "/6.svg", ],
    link: "https://sundownstudiosite.netlify.app/",
  },
  {
    id: 4,
    title: "Elegance - E-commerce ",
    des: "I Develop a sample e-commerce landing page which contains all features.",
    img: "/image-2.svg",
    iconLists: ["/7.svg"],
    link: "http://elegance.great-site.net",
  },

    {
    id: 5,
    title: "Vexel - UI/UX Design Agency",
    des: "I build a sample website for UI/UX design agency to showcase as a project.",
    img: "/image-3.svg",
    iconLists: ["/7.svg"],
    link: "http://vexel.great-site.net/",
  },
  {
    id: 6,
    title: "Ali Zamam Technology - Digital agency",
    des: "I created a sleek, modern landing page for this agency to showcase its services and work effectively.",
    img: "/image-5.svg",
    iconLists: ["/7.svg"],
    link: "https://alizamamtech.com/",
  },

];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack developer - Freelancer",
    desc: "As a full-stack developer, I've worked on numerous projects, consistently delivering high-quality results.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "CMS Developer - Freelancer",
    desc: "As a CMS developer, I build websites on both Shopify and WordPress, fulfilling client requirements with precision.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  // {
  //   id: 3,
  //   title: "Graphic designer - Consort Logistics Inc",
  //   desc: "As a graphic designer, I design social media post, logo etc & Manage social media pages",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  // {
  //   id: 4,
  //   title: "Graphic Designer & Video editor - The Roots Digital",
  //   desc: "As a graphic designer & video editor, I design and edit videos, social media post, logo etc",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/owaismateen",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://linkedin.com/in/muhammad-owais-a57b03247" ,
  },
  {
    id: 3,
    img: "/upwork.svg",
    link: "https://www.upwork.com/freelancers/~0146f1599236839e89",
  },
];
