import {
  mdiGit,
  mdiLanguageCss3,
  mdiLanguageHtml5,
  mdiLanguageJavascript,
  mdiLanguageTypescript,
  mdiPuzzleOutline,
  mdiReact,
  mdiTailwind,
  nextJs,
} from '@/components/icons';
import { mdiBootstrap, mdiSass, mdiMaterialUi } from '@mdi/js';
import { IoLogoPwa } from 'react-icons/io5';
import { IconType } from 'react-icons';
import { SiShadcnui, SiMantine, SiHeadlessui, SiRedux } from 'react-icons/si';
import { TbCircleDottedLetterZ } from 'react-icons/tb';

interface Skill {
  name: string;
  color: string;
  iconPath?: string; // for SVG path strings
  iconUrl?: string; // for image file URLs
  iconComponent?: IconType; // for react-icons components
  hide?: boolean;
}
export const skills: Skill[] = [
  { name: 'JavaScript', iconPath: mdiLanguageJavascript, color: '#f7df1e' },
  { name: 'TypeScript', iconPath: mdiLanguageTypescript, color: '#3178c6' },
  { name: 'React', iconPath: mdiReact, color: '#00c2e6' },
  { name: 'Next.js', iconPath: nextJs, color: '#0070f3' },
  { name: 'Express', iconPath: mdiPuzzleOutline, color: '#888888' },
  { name: 'React Native', iconPath: mdiReact, color: '#00c2e6' },
  { name: 'PWA', iconComponent: IoLogoPwa, color: '#00c2e6' },
  { name: 'Redux', iconComponent: SiRedux, color: '#00c2e6' },
  { name: 'Zustand', iconComponent: TbCircleDottedLetterZ, color: '#00c2e6' },
  { name: 'Tailwind CSS', iconPath: mdiTailwind, color: '#38bdf8' },
  { name: 'MUI', iconPath: mdiMaterialUi, color: '#888888' },
  { name: 'Shadcnui', iconComponent: SiShadcnui, color: '#f7df1e' },
  { name: 'Mantineui', iconComponent: SiMantine, color: '#00c2e6' },
  { name: 'Headlessui', iconComponent: SiHeadlessui, color: '#888888' },
  { name: 'Bootstrap', iconPath: mdiBootstrap, color: '#3178c6' },
  { name: 'HTML5', iconPath: mdiLanguageHtml5, color: '#e34f26' },
  { name: 'CSS', iconPath: mdiLanguageCss3, color: '#3572b5' },
  { name: 'Sass', iconPath: mdiSass, color: '#3572b5' },
  { name: 'Git', iconPath: mdiGit, color: '#fc6d26' },
  // { name: 'Node.js', iconPath: mdiNodejs, color: '#61af43' },
];
