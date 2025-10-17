import BookCard from '@/components/BookCard';
import CategoryTag from '@/components/CategoryTag';

const HomePage = () => {
  const categories = [
    { name: 'Business Chinese' },
    { name: 'Daily Chinese' },
    { name: 'Story Books' },
    { name: 'History' },
    { name: 'Literature' },
  ];

  const hskCategories = [
    { name: 'HSK 1', color: '#6BCF7F' },
    { name: 'HSK 2', color: '#A3E635' },
    { name: 'HSK 3', color: '#FFD93D' },
    { name: 'HSK 4', color: '#FFB84D' },
    { name: 'HSK 5', color: '#FF8C42' },
    { name: 'HSK 6', color: '#FF6B6B' },
  ];

  const newBooks = [
    { title: "The Art of Business in China", author: "Lao Tzu", imageUrl: "https://images.pexels.com/photos/261794/pexels-photo-261794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", hskLevel: 5, hskColor: '#FF8C42', views: 1200, downloads: 450 },
    { title: "Conversations in Beijing", author: "Bai Wei", imageUrl: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", hskLevel: 3, hskColor: '#FFD93D', views: 3400, downloads: 1200 },
    { title: "Journey to the West (Abridged)", author: "Wu Cheng'en", imageUrl: "https://images.pexels.com/photos/34592/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", hskLevel: 4, hskColor: '#FFB84D', views: 890, downloads: 320 },
  ];

  return (
    <div className="space-y-32 pb-32">
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fade-in">
          <div className="inline-block mb-6 px-6 py-2 bg-surface-elevated border border-border-light rounded-full">
            <span className="text-primary text-sm font-semibold tracking-wide">WELCOME TO ONLYCHINESE</span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-tight">
            <span className="text-gradient animate-slide-up">
              Master Chinese
            </span>
            <br />
            <span className="text-white animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Through Literature
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-xl sm:text-2xl text-text-secondary leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Immerse yourself in authentic Chinese books curated for every skill level. Read, learn, and connect with a vibrant community of language enthusiasts.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <button className="group px-10 py-4 bg-primary text-background font-bold text-lg rounded-xl hover:shadow-glow-md transition-all duration-300 hover:scale-105 hover:bg-primary-light">
              <span className="flex items-center gap-2">
                Start Exploring
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button className="px-10 py-4 bg-surface-elevated border-2 border-border-light text-text font-bold text-lg rounded-xl hover:border-primary hover:shadow-glow-sm transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>

          <div className="mt-16 flex justify-center items-center gap-12 text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div>
              <div className="text-4xl font-bold text-primary">5000+</div>
              <div className="text-text-muted text-sm mt-1">Books</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <div className="text-4xl font-bold text-primary">50k+</div>
              <div className="text-text-muted text-sm mt-1">Learners</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <div className="text-4xl font-bold text-primary">6</div>
              <div className="text-text-muted text-sm mt-1">HSK Levels</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Explore by Category</h2>
          <p className="text-text-secondary text-xl max-w-2xl mx-auto">
            Find books tailored to your interests and proficiency level
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map(cat => <CategoryTag key={cat.name} name={cat.name} />)}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {hskCategories.map(cat => <CategoryTag key={cat.name} name={cat.name} color={cat.color} />)}
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">New Arrivals</h2>
            <p className="text-text-secondary">Fresh additions to our collection</p>
          </div>
          <button className="text-primary hover:text-primary-light transition-colors duration-300 font-semibold flex items-center gap-2">
            View All
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newBooks.map(book => <BookCard key={book.title} {...book} />)}
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">Popular Picks</h2>
            <p className="text-text-secondary">Most loved by our community</p>
          </div>
          <button className="text-primary hover:text-primary-light transition-colors duration-300 font-semibold flex items-center gap-2">
            View All
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newBooks.slice().reverse().map(book => <BookCard key={book.title} {...book} downloads={book.downloads * 3} views={book.views * 5} />)}
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-surface via-surface-elevated to-surface rounded-2xl p-12 lg:p-16 border border-border-light shadow-card overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent opacity-10 rounded-full blur-3xl"></div>

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full mb-6">
                <span className="text-primary text-sm font-semibold">VOCABULARY BUILDER</span>
              </div>
              <h2 className="text-5xl font-bold mb-6">
                <span className="text-gradient">Supercharge</span>
                <br />
                Your Vocabulary
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Master Chinese with our intelligent flashcard system, powered by HSK word lists and the comprehensive CC-CEDICT database. Build your vocabulary systematically, one word at a time.
              </p>
              <div className="mt-8 flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-text-secondary">Smart Spaced Repetition</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-text-secondary">Progress Tracking</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-elevated p-8 rounded-2xl border border-border-light shadow-card">
              <h3 className="text-2xl font-bold mb-6">Configure Your Session</h3>
              <div className="space-y-5">
                <div>
                  <label className="text-text-secondary text-sm font-medium block mb-2">Topic</label>
                  <select className="w-full px-4 py-3 bg-surface border border-border-light rounded-xl text-text focus:outline-none focus:border-primary transition-colors duration-300">
                    <option>Business</option>
                    <option>Daily Life</option>
                    <option>Travel</option>
                    <option>Food & Dining</option>
                  </select>
                </div>
                <div>
                  <label className="text-text-secondary text-sm font-medium block mb-2">HSK Level</label>
                  <select className="w-full px-4 py-3 bg-surface border border-border-light rounded-xl text-text focus:outline-none focus:border-primary transition-colors duration-300">
                    <option>HSK 1</option>
                    <option>HSK 2</option>
                    <option>HSK 3</option>
                    <option>HSK 4</option>
                    <option>HSK 5</option>
                    <option>HSK 6</option>
                  </select>
                </div>
                <div>
                  <label className="text-text-secondary text-sm font-medium block mb-2">Words per day</label>
                  <input
                    type="number"
                    defaultValue="10"
                    className="w-full px-4 py-3 bg-surface border border-border-light rounded-xl text-text focus:outline-none focus:border-primary transition-colors duration-300"
                  />
                </div>
                <button className="w-full py-4 bg-primary text-background font-bold text-lg rounded-xl hover:bg-primary-light hover:shadow-glow-md transition-all duration-300 mt-2">
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
