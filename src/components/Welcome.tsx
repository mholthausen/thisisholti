interface HeadlineProps {
  value: string;
}

const Headline: React.FC<HeadlineProps> = ({ value }) => {
  return <h1>{value}</h1>;
};

const Welcome: React.FC = () => {
  const greeting: string = 'Coming soon…';

  return <Headline value={greeting} />;
};

export default Welcome;
