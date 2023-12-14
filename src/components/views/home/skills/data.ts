import {
  mdiGit,
  mdiLanguageCss3,
  mdiLanguageHtml5,
  mdiLanguageJavascript,
  mdiLanguageTypescript,
  mdiMaterialDesign,
  mdiReact,
  mdiTailwind,
  nextJs,
} from '@/components/icons';

interface Skill {
  name: string;
  iconPath: string;
  color: string;
  hide?: boolean;
}

export const skills: Skill[] = [
  { name: 'JavaScript', iconPath: mdiLanguageJavascript, color: '#f7df1e' },
  { name: 'TypeScript', iconPath: mdiLanguageTypescript, color: '#3178c6' },
  { name: 'React', iconPath: mdiReact, color: '#00c2e6' },
  { name: 'Next.js', iconPath: nextJs, color: '#0070f3' },
  { name: 'React Native', iconPath: mdiReact, color: '#00c2e6' },
  { name: 'Tailwind CSS', iconPath: mdiTailwind, color: '#38bdf8' },
  { name: 'HTML5', iconPath: mdiLanguageHtml5, color: '#e34f26' },
  { name: 'CSS3', iconPath: mdiLanguageCss3, color: '#3572b5' },
  { name: 'Git', iconPath: mdiGit, color: '#fc6d26' },
  { name: 'MUI', iconPath: mdiMaterialDesign, color: '#888888' },
];
