import { Head } from '@/components/ui/Head';

type Props = {
  title: string;
  url: string;
  ogimage?: string;
};
export const LearningHead: React.FC<Props> = ({ title, url, ...others }) => {
  return <Head title={title} url={url} ogtype="article" {...others} />;
};
