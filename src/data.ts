import { faSquareJs, faPhp, faJava, faReact, faVuejs, faSquareGit, faNodeJs, faInvision, faFigma, faTrello } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, faFilePowerpoint, faGamepad } from '@fortawesome/free-solid-svg-icons';
import typeScript from './assets/icon-typescript.svg';
import billCoding from './assets/bill-coding.webp'
import billPianoHand from './assets/bill-piano-hand.webp'
import billSitReading from './assets/bill-sit-reading.webp'
import pathetique from './assets/pathetique.mp4';
import SAO from './assets/SAO-ost.mp4';
import forward from './assets/forward.mp4'
import ourLove from './assets/our-love.mp4';
import lydia from './assets/lydia.mp4';
import unknownTitle from './assets/famous-unkown-title.mp4';
import websiteReviwerDemo from './assets/website-reviewer-demo.mp4';
import websiteReviwerCover from './assets/website-reviewer-cover.png';
import personalWebsiteCover from './assets/personal-website-cover.png';
import recipeRandomizationAppCover from './assets/recipe-randomization-app-cover.png';

export const musicVideos = [
  {url: pathetique, title: "Beethoven's Pathetique 3rd Movement '21 [rearranged]"},
  {url: SAO, title: "Sword Art Online - OST '18 [improv]"},
  {url: forward, title: "Forward! '22 [original]"},
  {url: ourLove, title: "Our Love/我们的爱 '18 [rearranged]"},
  {url: unknownTitle, title: "Unknown Title '18 [improv]"},
  {url: lydia, title: "Lydia '18 [rearranged]"},
]

export const pageSelectionData = [
  {
    to: '/projects',
    text: 'idea builder',
    img: billSitReading,
    alt: 'Bill sitting and reading',
  },
  {
    to: '/resume',
    text: 'full stack developer',
    img: billCoding,
    alt: 'Bill sitting and coding',
  },
  {
    to: '/music',
    text: 'piano enthusiast',
    img: billPianoHand,
    alt: 'Bill playing the piano',
  }
]

export const jobInfoData = [
  {
    duration: '2023-present', 
    companyName: 'communitech hub', 
    companyAddress: 'kitchener, ON', 
    jobTitle: 'web developer'
  },
  {
    duration: '2021-2022', 
    companyName: 'superscalar technologies | chosen plaintext consulting inc.', 
    companyAddress: 'kitchener, ON', 
    jobTitle: 'project lead'
  },
  {
    duration: '2019-2020', 
    companyName: 'blockGen corp | chosen plaintext consulting inc.', 
    companyAddress: 'miami, FL', 
    jobTitle: 'lead frontend developer'
  },
  {
    duration: '2018-2019', 
    companyName: 'UFred', 
    companyAddress: 'fredericton, NB', 
    jobTitle: 'solution architect'
  },
]

export const skillsetsData = [
  {
    title: 'core programming',
    description: 'I take pride in my code. I aim to deliver clean, easy-to-read and efficient code to the best of my abilities.',
    icons: [{icon: faSquareJs, description: 'JavaScript'}, {icon: typeScript, description: 'TypeScript'}, {icon: faPhp, description: 'PHP'}, {icon: faJava, description: 'Java'}, ],
  },
  {
    title: 'web frameworks',
    description: 'On top of JS/TS, I use modern web frameworks to build reusable components and single page applications.',
    icons: [{icon: faReact, description: 'React.js'}, {icon: faVuejs, description: 'Vue.js'}],
  },
  {
    title: 'technical tools',
    description: 'From source control to databases, I have an array of technical tools in my arsonal.',
    icons: [{icon: faSquareGit, description: 'Git'}, {icon: faNodeJs, description: 'Node.js'}, {icon: faDatabase, description: 'SQL'}],
  },
  {
    title: 'user experience',
    description: 'I enjoy figuring out fun and engaging UX with motivational design and gamification.',
    icons: [{icon: faGamepad, description: 'Gamification'}],
  },
  {
    title: 'user interface',
    description: 'I like to play with designs for personal projects. With a given design, I aim to deliver pixel-perfect results.',
    icons: [{icon: faInvision, description: 'Invision'}, {icon: faFigma, description: 'Figma'}, ],
  },
  {
    title: 'lo-fi prototyping',
    description: 'I can comfortably rapid-prototype low fidality projects, either in interactive wireframes or in code.',
    icons: [{icon: faCode, description: 'Justinmind'}],
  },
  {
    title: 'product management',
    description: 'I have experience coordinating small teams to ensure the accuracy and delivery of each feature.',
    icons: [{icon: faTrello, description: 'Trello'}],
  },
  {
    title: 'pitch presentation',
    description: 'As an aspiring entrepreneur, I have plenty of experience pitching ideas/products infront of judges and professionals.',
    icons: [{icon: faFilePowerpoint, description: 'PowerPoint'}],
  }
]

export const projectsData = [
  {
    title: 'website reviewer',
    description: 'An MVP web-app that allow user to create notes and save reviews on a snapshot of any given website.',
    coverImg: websiteReviwerCover,
    coverImgAlt: 'cover photo for website reviwer mvp',
    demo: websiteReviwerDemo,
    codeLink: 'https://github.com/lzhlchmxl/website-reviewer-mvp',
    technologies: {
      frontend: 'React + Typescript',
      backend: 'Node.js',
      database: 'JSON file (temp)',
      hosting: 'Local',
      cicd: 'Not supported',
    }
  },
  {
    title: 'personal website',
    description: 'This very web-app you are looking at right now :)',
    coverImg: personalWebsiteCover,
    coverImgAlt: 'cover photo for personal website',
    demo: null,
    codeLink: 'https://github.com/lzhlchmxl/2023-personal-site',
    technologies: {
      frontend: 'React + Typescript + tailwind',
      backend: 'N/A',
      database: 'N/A',
      hosting: 'AWS S3 + CloudFront',
      cicd: 'AWS CodePipeline',
    }
  },
  {
    title: 'recipe randomization app',
    description: 'A mobile web-app that provides convenience for home-cooking couples to decide on a reasonable meal plan.',
    coverImg: recipeRandomizationAppCover,
    coverImgAlt: 'cover photo for recipe randomization app',
    demo: null,
    codeLink: 'https://github.com/lzhlchmxl/recipe-randomization-app',
    technologies: {
      frontend: 'React + Typescript + tailwind',
      backend: 'Node.js',
      database: 'JSON file (temp)',
      hosting: 'AWS EC2',
      cicd: 'Not Supported',
    }
  }
]