interface CategoryTagProps {
  name: string;
  color?: string;
}

const CategoryTag = ({ name, color }: CategoryTagProps) => {
  const baseClasses = "px-4 py-2 rounded-full text-sm font-semibold cursor-pointer transition-all duration-300";
  
  if (color) {
    return (
      <span 
        className={`${baseClasses} text-background hover:shadow-lg`}
        style={{ backgroundColor: color, boxShadow: `0 0 15px ${color}33` }}
      >
        {name}
      </span>
    );
  }

  return (
    <span className={`${baseClasses} bg-surface border border-border hover:bg-primary hover:text-background hover:border-primary`}>
      {name}
    </span>
  );
};

export default CategoryTag;
