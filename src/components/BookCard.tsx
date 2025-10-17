import { Eye, Download } from 'lucide-react';

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
    <div className="group relative bg-surface rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-card-hover cursor-pointer">
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

        <div className="absolute top-4 right-4">
          <div
            className="px-3 py-1.5 rounded-lg font-bold text-sm shadow-lg backdrop-blur-sm"
            style={{
              backgroundColor: `${hskColor}20`,
              color: hskColor,
              border: `2px solid ${hskColor}`,
            }}
          >
            HSK {hskLevel}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-xl font-bold text-white mb-1 line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-text-secondary text-sm mb-4">{author}</p>

          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1.5 text-text-secondary">
              <Eye size={16} className="text-primary" />
              <span>{views.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1.5 text-text-secondary">
              <Download size={16} className="text-primary" />
              <span>{downloads.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 border-2 border-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

export default BookCard;
