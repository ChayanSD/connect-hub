interface SectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle = ({ title, className = "" }: SectionTitleProps) => {
  return (
    <div className="group inline-block">
      <h2
        className={`relative inline-block pb-3 font-bold text-center ${className}`}
      >
        {title}
        <span
          className="absolute left-1/2 bottom-0 block h-1 w-1/2 -translate-x-1/2 transform bg-accent transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0"
          aria-hidden="true"
        />
      </h2>
    </div>
  );
};

export default SectionTitle;

