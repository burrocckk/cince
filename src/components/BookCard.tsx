import { Eye, ArrowDownToLine } from 'lucide-react';

interface BookCardProps {
  title: string;
  author: string;
  imageUrl: string;
  hskLevel: number;
  hskColor: string;
  views: number;
  downloads: number;
}

const BookCard = ({ title, author, imageUrl, hskLevel, hskColor, views, downloads }: BookCardProps) => {
  return (
    <div className="bg-surface rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 border border-border">
      <div className="relative">
        <img src={imageUrl} alt={`Cover of ${title}`} className="w-full h-64 object-cover" />
        <div 
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-bold text-background"
          style={{ backgroundColor: hskColor }}
        >
          HSK {hskLevel}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-text truncate group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-text-secondary mt-1">{author}</p>
        <div className="flex items-center justify-between mt-4 text-text-secondary text-sm">
          <div className="flex items-center gap-2">
            <Eye size={16} />
            <span>{views}</span>
          </div>
          <div className="flex items-center gap-2">
            <ArrowDownToLine size={16} />
            <span>{downloads}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
