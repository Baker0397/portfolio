module.exports = {
  siteTitle: 'Baker Mwanje | Software Engineer',
  siteDescription:
    'Baker Mwanje is a software engineer based in Munich, Germany, who specializes in developing high-quality websites and applications.',
  siteKeywords:
    'Baker Mwanje, Baker, Mwanje, Bakermwanje, mwanjebaker, software engineer, front-end engineer, web developer, javascript, munich',
  siteUrl: 'https://bakermwanje.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-159961489-1',
  googleVerification: '',
  name: 'Baker Mwanje',
  location: 'Munich, Germany',
  email: 'mwanjebakam@gmail.com',
  github: 'https://github.com/Baker0397',
  twitterHandle: '#',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Baker0397',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/baker-mwanje-0b408a1a1/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/Baker97',
    },
    {
      name: 'Instagram',
      url: 'https://www.linkedin.com/in/baker-mwanje-0b408a1a1/#',
    },
    {
      name: 'Twitter',
      url: 'https://www.linkedin.com/in/baker-mwanje-0b408a1a1/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
