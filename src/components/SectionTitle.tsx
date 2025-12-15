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
          className="absolute left-0 bottom-0 block h-1 w-1/2 bg-accent transition-all duration-300 group-hover:w-full"
          aria-hidden="true"
        />
      </h2>
    </div>
  );
};

export default SectionTitle;

