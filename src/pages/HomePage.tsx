import BookCard from '@/components/BookCard';
import CategoryTag from '@/components/CategoryTag';
import { Zap, BrainCircuit, Users } from 'lucide-react';

const HomePage = () => {
  // Mock data - this will be replaced with data from Supabase
  const categories = [
    { name: 'Business Chinese' },
    { name: 'Daily Chinese' },
    { name: 'Story Books' },
    { name: 'History' },
    { name: 'Literature' },
  ];

  const hskCategories = [
    { name: 'HSK 1', color: '#4ade80' },
    { name: 'HSK 2', color: '#a3e635' },
    { name: 'HSK 3', color: '#facc15' },
    { name: 'HSK 4', color: '#fb923c' },
    { name: 'HSK 5', color: '#f87171' },
    { name: 'HSK 6', color: '#ef4444' },
  ];

  const newBooks = [
    { title: "The Art of Business in China", author: "Lao Tzu", imageUrl: "https://images.pexels.com/photos/261794/pexels-photo-261794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", hskLevel: 5, hskColor: '#f87171', views: 1200, downloads: 450 },
    { title: "Conversations in Beijing", author: "Bai Wei", imageUrl: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", hskLevel: 3, hskColor: '#facc15', views: 3400, downloads: 1200 },
    { title: "Journey to the West (Abridged)", author: "Wu Cheng'en", imageUrl: "https://images.pexels.com/photos/34592/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", hskLevel: 4, hskColor: '#fb923c', views: 890, downloads: 320 },
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative text-center py-20 sm:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Unlock the World of Chinese Literature
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-text-secondary">
            Dive into a curated library of Chinese books. Read, learn, and connect with a global community of language learners.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="px-8 py-3 bg-primary text-background font-bold rounded-lg hover:scale-105 transition-transform">Start Browsing</button>
            <button className="px-8 py-3 bg-surface text-text font-bold rounded-lg hover:scale-105 transition-transform">Learn More</button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Explore by Category</h2>
        <p className="text-text-secondary text-center max-w-xl mx-auto mb-10">Find books tailored to your interests and proficiency level.</p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(cat => <CategoryTag key={cat.name} name={cat.name} />)}
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {hskCategories.map(cat => <CategoryTag key={cat.name} name={cat.name} color={cat.color} />)}
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">New Arrivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newBooks.map(book => <BookCard key={book.title} {...book} />)}
        </div>
      </section>

      {/* Popular Picks Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Popular Picks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newBooks.slice().reverse().map(book => <BookCard key={book.title} {...book} downloads={book.downloads * 3} views={book.views * 5} />)}
        </div>
      </section>

      {/* Word Memorize Widget CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface rounded-xl p-10 lg:p-16 border border-border grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary">Supercharge Your Vocabulary</h2>
            <p className="mt-4 text-text-secondary text-lg">Use our intelligent flashcard system, powered by HSK word lists and the CC-CEDICT database, to build your vocabulary one word at a time.</p>
          </div>
          <div className="bg-background p-8 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4">Configure Your Session</h3>
            <div className="space-y-4">
              <div>
                <label className="text-text-secondary">Topic</label>
                <select className="w-full mt-1 p-2 bg-surface border border-border rounded-md">
                  <option>Business</option>
                  <option>Daily Life</option>
                </select>
              </div>
              <div>
                <label className="text-text-secondary">HSK Level</label>
                <select className="w-full mt-1 p-2 bg-surface border border-border rounded-md">
                  <option>HSK 3</option>
                  <option>HSK 4</option>
                </select>
              </div>
              <div>
                <label className="text-text-secondary">Words per day</label>
                <input type="number" defaultValue="10" className="w-full mt-1 p-2 bg-surface border border-border rounded-md" />
              </div>
              <button className="w-full py-3 bg-primary text-background font-bold rounded-lg mt-4">Start Learning</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
