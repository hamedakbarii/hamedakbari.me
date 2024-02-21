import { Projects } from '@/components/views/projects/projects';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

export const metadata = getStaticMetadata({
  title: 'Projects – Hirad Arshadi',
  description:
    // eslint-disable-next-line max-len
    "Projects by Hirad Arshadi. Get to know the projects I'm most proud of.",
  exactUrl: 'https://hiradary.me/projects',
  keywords: [
    'indie-hacker',
    'build-in-public',
    'software',
    'development',
    'project',
    'portfolio',
    'app',
    'programming',
    'open-source',
  ],
  image: buildOgImageUrl('projects'),
});

export default function ProjectsPage() {
  return <Projects full />;
}
