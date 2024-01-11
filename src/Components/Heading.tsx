type Props = {
  title: string;
};

const Heading = ({ title }: Props) => {
  return <h2 className="text-2xl font-semibold text-center mb-4">{title}</h2>;
};
export default Heading;
