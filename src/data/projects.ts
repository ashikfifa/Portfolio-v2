import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Ecommerce Website",
    href: "/projects",
    tags: [
      "Nextjs",
      "Typescript",
      "Tailwindcss",
      "Redux",
      "Framer motion",
      "ShadCN",
      "Vercel",
    ],
    image: {
      LIGHT: "/images/projects/onlineS_1.png",
      DARK: "/images/projects/onlineS_1.png",
    },
  },
  {
    index: 1,
    title: "Roboket",
    href: "/projects",
    tags: [
      "Reactjs",
      "Typescript",
      "Rsuite",
      "Scss",
      "React-router-dom",
      "Redux",
      "Formik",
      "Chart.js",
    ],
    image: {
      LIGHT: "/images/projects/rob1.png",
      DARK: "/images/projects/rob1.png",
    },
  },
  {
    index: 2,
    title: "Multi-step-form",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "Shadcdn", "React hook form"],
    image: {
      LIGHT: "/images/projects/multi-stage-form_1.png",
      DARK: "/images/projects/multi-stage-form_1.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Ecommerce Website",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/onlineS_1.png",
      "/images/projects/onlineS_2.png",
      "/images/projects/onlineS_4.png",
      "/images/projects/onlineS_7.png",
    ],
    description:
      "Ecommerce website built with Next js and Typescript. This is a simple ecommerce website. For styling I used Tailwind css. For state management I used Redux. For animation and transitions Framer Motion and I used ShadCN UI for beautifully styled, accessible, and customizable UI components.",
    sourceCodeHref: "https://github.com/ashikfifa/web-ecommerce",
    liveWebsiteHref: "https://web-ecommerce-rho.vercel.app/",
  },
  {
    name: "Roboket",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/rob_1.png",
      "/images/projects/rob_2.png",
      "/images/projects/rob_3.png",
      "/images/projects/rob_4.png",
      "/images/projects/rob_5.png",
      "/images/projects/rob_6.png",
    ],
    description:
      "Integrated CRM functionalities, such as contact management and lead tracking, into the front-end interface for user experience.Integrate the sslcommerz payment module to facilitate the purchase of packages and addon services for the project.Many more",

    sourceCodeHref: "",
    liveWebsiteHref: "https://app.roboket.com",
  },
  {
    name: "Multi steps form",
    favicon: "/images/projects/svg/form.svg",
    imageUrl: [
      "/images/projects/multi-stage-form_1.png",
      "/images/projects/multi-stage-form_1.png",
    ],
    description:
      "Multi steps forms create with Next js. This is a simple multi steps form.For form and form validation I used react hook form. For styling I used Tailwind css.",
    sourceCodeHref: "https://github.com/ashikfifa/Multiple-steps-form",
    liveWebsiteHref: "https://multiple-steps-form-x9mm.vercel.app/",
  },

  {
    name: "Wir in ungarn (Client project)",
    favicon: "/images/projects/svg/web.svg",
    imageUrl: [
      "/images/projects/wir_ungarn_1.png",
      "/images/projects/wir_ungarn_2.png",
    ],
    description:
      "Client blog website featuring various post types, games, user authentication, animations, and more.",
    sourceCodeHref: "https://github.com/ashikfifa/wirin-ungarn",
    liveWebsiteHref: "https://wirin-ungarn.vercel.app/",
  },

  {
    name: "Wikipedia Search Engine",
    favicon: "/images/projects/svg/wiki.svg",
    imageUrl: [
      "/images/projects/wiki_1.png",
      "/images/projects/wiki_2.png",
      "/images/projects/wiki_3.png",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/ashikfifa/Wikipedia-search-tool",
    liveWebsiteHref: "https://wikipediasearchtools.netlify.app/",
  },
  {
    name: "Book shop",
    favicon: "/images/projects/logos/covidtracker.ico",
    imageUrl: [
      "/images/projects/bookShop_1.png",
      "/images/projects/bookShop_2.png",
      "/images/projects/bookShop_3.png",
    ],
    description:
      "Real-time search and filtering of books by genre, title.Can search by title, Pagination.Use redux toolkit for displaying wishlist data.Have wishlist and book details page. Responsive design for a smooth experience on mobile and desktop.  Stack: React, Redux, Typescript, Rsuite.",
    sourceCodeHref: "https://github.com/ashikfifa/Book-shop",
    liveWebsiteHref: "https://book-shopsbd.netlify.app/",
  },
  {
    name: "Wix-headless website design",
    favicon: "/images/projects/svg/wix.svg",
    imageUrl: [
      "/images/projects/wix-1.png",
      "/images/projects/wix-3.png",
      "/images/projects/wix-4.png",
      "/images/projects/wix-6.png",
    ],
    description:
      "I had designed this website using Next.js and Tailwind CSS, ensuring a responsive and visually appealing layout",
    sourceCodeHref: "https://github.com/ashikfifa/wix-headless-website-design",
    liveWebsiteHref: "https://wix-headless.netlify.app/",
  },
  {
    name: "Crypto currency",
    favicon: "/images/projects/svg/crypto.svg",
    imageUrl: [
      "/images/projects/coin-1.png",
      "/images/projects/coin-2.png",
      "/images/projects/coin-3.png",
    ],
    description:
      "I had designed this website using Next.js and Tailwind CSS, ensuring a responsive and visually appealing layout",
    sourceCodeHref: "https://github.com/ashikfifa/Coin-Desk",
    liveWebsiteHref: "https://boisterous-cranachan-8efd37.netlify.app/",
  },
  {
    name: "Dummy website",
    favicon: "/images/projects/svg/dummyWeb.svg",
    imageUrl: ["/images/projects/adn_1.png", "/images/projects/adn_2.png"],
    description:
      "I made this website for the ADN Diginet Assignment.Designer gave me a figma file and i did the design. i was using React framework and tailwind ncss.",
    sourceCodeHref: "https://github.com/ashikfifa/adn-diginet-project",
    liveWebsiteHref: "https://leafy-cannoli-8c1203.netlify.app/",
  },
  {
    name: "RFL Shop",
    favicon: "/images/projects/svg/rflShop.svg",
    imageUrl: [
      "/images/projects/rfl_1.png",
      "/images/projects/rfl_2.png",
      "/images/projects/rfl_3.png",
      "/images/projects/rfl_4.png",
      "/images/projects/rfl_5.png",
    ],
    description:
      "I made this website for online shopping.Designe inspired from rfl best shop. I use React framework,material ui,redux toolkit and scss.",
    sourceCodeHref: "https://github.com/ashikfifa/shop-swift",
    liveWebsiteHref: "https://rflbestbuyshop.netlify.app",
  },
  {
    name: "GP flexi plan",
    favicon: "/images/projects/svg/flexi.svg",
    imageUrl: [
      "/images/projects/gp_flexi_1.png",
      "/images/projects/gp_flexi_2.png",
    ],
    description:
      "An integrated tool for Mobile recharge. Stack: React, Redux, Typescript, Rsuite. Real-time balance check and recharge offers display.Supports multiple payment gateways for seamless mobile recharges.Customizable flexi-plan options for users based on usage patterns.Notification system for special offers and discounts. ",
    sourceCodeHref: "https://github.com/ashikfifa/GP-FlexiLoad",
    liveWebsiteHref: "https://gp-offer.netlify.app/",
  },
];
