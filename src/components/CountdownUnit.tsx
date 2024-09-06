export type CountdownUnitProps = {
  value: number;
  label: string;
};

const CountdownUnit = ({ value, label }: CountdownUnitProps) => {
  return (
    <div className="flex flex-col gap-2 text-center border-2 border-primary py-1 px-2 md:py-3 md:px-6">
      <span className="text-6xl font-sans text-white">{value}</span>
      <span className="text-xl text-gray-400">{label}</span>
    </div>
  );
};

export default CountdownUnit;
