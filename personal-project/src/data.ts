import { faSquareJs, faPhp, faJava, faReact, faVuejs, faSquareGit, faNodeJs, faInvision, faFigma, faTrello } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, faFilePowerpoint, faGamepad } from '@fortawesome/free-solid-svg-icons';
import typeScript from './assets/icon-typescript.svg';

export const jobInfoData = [
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
    jobTitle: 'frontend developer'
  },
  {
    duration: '2018-2019', 
    companyName: 'university of fredericton', 
    companyAddress: 'fredericton, NB', 
    jobTitle: 'solution architect'
  },
]


export const skillsetsData = [
  {
    title: 'core programing',
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
    description: 'I have minimum viable UI experience. With a given design, I aim to deliver pixel-perfect results.',
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