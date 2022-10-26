import { Head } from '@/components/ui/Head';

type Props = {
  title: string;
};
export const HomeHead: React.FC<Props> = ({ title }) => {
  return <Head title={title} url="/" ogtype="website" />;
};
