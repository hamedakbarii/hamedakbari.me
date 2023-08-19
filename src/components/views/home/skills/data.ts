import {
  mdiAndroid,
  mdiGit,
  mdiLanguageCss3,
  mdiLanguageHtml5,
  mdiLanguageJavascript,
  mdiLanguageTypescript,
  mdiLeaf,
  mdiMaterialDesign,
  mdiNodejs,
  mdiPuzzleOutline,
  mdiReact,
  mdiDatabase,
  mdiTailwind,
  nextJs,
  mdiBrain,
} from '@/components/icons';

interface Skill {
  name: string;
  iconPath: string;
  color: string;
  hide?: boolean;
}

export const skills: Skill[] = [
  { name: 'TypeScript', iconPath: mdiLanguageTypescript, color: '#3178c6' },
  { name: 'JavaScript', iconPath: mdiLanguageJavascript, color: '#f7df1e' },
  { name: 'React', iconPath: mdiReact, color: '#00c2e6' },
  { name: 'Large Language Models', iconPath: mdiBrain, color: '#3ddc84' },
  { name: 'Next.js', iconPath: nextJs, color: '#0070f3' },
  { name: 'SQL', iconPath: mdiDatabase, color: '#69a14a' },
  { name: 'Tailwind CSS', iconPath: mdiTailwind, color: '#38bdf8' },
  { name: 'React Native', iconPath: mdiReact, color: '#00c2e6' },
  { name: 'HTML5', iconPath: mdiLanguageHtml5, color: '#e34f26' },
  { name: 'CSS3', iconPath: mdiLanguageCss3, color: '#3572b5' },
  { name: 'Android', iconPath: mdiAndroid, color: '#3ddc84' },
  { name: 'Node.js', iconPath: mdiNodejs, color: '#61af43' },
  { name: 'Mongo DB', iconPath: mdiLeaf, color: '#69a14a' },
  { name: 'Express', iconPath: mdiPuzzleOutline, color: '#888888' },
  { name: 'Git', iconPath: mdiGit, color: '#fc6d26' },
  { name: 'Material Design', iconPath: mdiMaterialDesign, color: '#888888' },
];
