// This is your config file, place any global data here.
// You can import this data from anywhere in your site by using the `import` keyword.

type Config = {
  title: string;
  description: string;
  lang: string;
  profile: {
    author: string;
    description?: string;
  }
}

type SocialLink = {
  icon: string;
  friendlyName: string; // for accessibility
  link: string;
}

export const siteConfig: Config = {
  title: "Bot Antigüeño",
  description: "",
  lang: "en-GB",
  profile: {
    author: "Bot Antigüeño",
    description: ""
  }
}

/** 
  These are you social media links. 
  It uses https://github.com/natemoo-re/astro-icon#readme
  You can find icons @ https://icones.js.org/
*/
export const socialLinks: Array<SocialLink> = [
  {
    icon: "mdi:facebook",
    friendlyName: "Facebook",
    link: "#",
  },
  {
    icon: "mdi:instagram",
    friendlyName: "Instagram",
    link: "#",
  },
  {
    icon: "mdi:youtube",
    friendlyName: "Youtube",
    link: "#",
  },
  {
    icon: "mdi:email",
    friendlyName: "E-mail",
    link: "mailto:gtdigitalmind@gmail.com",
  }
];

export const NAV_LINKS: Array<{ title: string, path: string }> = [
  {
    title: "Inicio",
    path: "/",
  },
  {
    title: "Acerca de",
    path: "/about",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Projectos",
    path: '/projects'
  },
  {
    title: "Historia",
    path: '/history'
  }
];
