interface CategoryTagProps {
  name: string;
  color?: string;
}

const CategoryTag = ({ name, color }: CategoryTagProps) => {
  const baseClasses = "px-5 py-2.5 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-300 hover:scale-105";

  if (color) {
    return (
      <span
        className={`${baseClasses} font-bold shadow-lg hover:shadow-xl`}
        style={{
          backgroundColor: `${color}15`,
          color: color,
          border: `2px solid ${color}`,
          boxShadow: `0 4px 12px ${color}20`,
        }}
      >
        {name}
      </span>
    );
  }

  return (
    <span className={`${baseClasses} bg-surface-elevated border-2 border-border-light text-text-secondary hover:bg-primary hover:text-background hover:border-primary hover:shadow-glow-sm`}>
      {name}
    </span>
  );
};

export default CategoryTag;
