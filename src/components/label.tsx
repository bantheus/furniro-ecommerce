interface LabelProps {
  children: string;
}

const Label = ({ children }: LabelProps) => {
  return (
    <div
      className={`absolute right-4 top-4 flex size-10 items-center justify-center rounded-full ${children === "New" ? "bg-emerald-500" : "bg-rose-500"} text-xs text-white`}
    >
      {children}
    </div>
  );
};

export default Label;
