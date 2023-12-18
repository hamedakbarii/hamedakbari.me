import {
  mdiGit,
  mdiLanguageCss3,
  mdiLanguageHtml5,
  mdiLanguageJavascript,
  mdiLanguageTypescript,
  mdiReact,
  mdiTailwind,
  nextJs,
} from '@/components/icons';

import { mdiMaterialUi, mdiBootstrap } from '@mdi/js';

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
  { name: 'PWA', iconPath: mdiLanguageJavascript, color: '#888888' },
  { name: 'Tailwind CSS', iconPath: mdiTailwind, color: '#38bdf8' },
  { name: 'MUI', iconPath: mdiMaterialUi, color: '#888888' },
  { name: 'Bootstrap', iconPath: mdiBootstrap, color: '#888888' },
  { name: 'HTML5', iconPath: mdiLanguageHtml5, color: '#e34f26' },
  { name: 'CSS3', iconPath: mdiLanguageCss3, color: '#3572b5' },
  { name: 'Git', iconPath: mdiGit, color: '#fc6d26' },
];
