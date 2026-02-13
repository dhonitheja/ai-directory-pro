import React, { useState, useMemo } from 'react';
import { TOOLS } from './data/tools';
import { ToolCard } from './components/ToolCard';
import { AIRecommender } from './components/AIRecommender';
import { Category, SortOption, PricingModel } from './types';
import { Search, Filter, Sparkles, Menu, X, SlidersHorizontal } from 'lucide-react';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [selectedPricing, setSelectedPricing] = useState<PricingModel | 'All'>('All');
  const [sortBy, setSortBy] = useState<SortOption>('rating');
  const [isRecommenderOpen, setIsRecommenderOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Filter and Sort Logic
  const filteredTools = useMemo(() => {
    let result = TOOLS;

    // Search
    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      result = result.filter(tool => 
        tool.name.toLowerCase().includes(lowerTerm) || 
        tool.description.toLowerCase().includes(lowerTerm) ||
        tool.tags.some(tag => tag.toLowerCase().includes(lowerTerm))
      );
    }

    // Category Filter
    if (selectedCategory !== 'All') {
      result = result.filter(tool => tool.category === selectedCategory);
    }

    // Pricing Filter
    if (selectedPricing !== 'All') {
      result = result.filter(tool => tool.pricing === selectedPricing);
    }

    // Sorting
    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating; // High to Low
        case 'reviews':
          return b.reviewCount - a.reviewCount; // High to Low
        case 'name':
          return a.name.localeCompare(b.name); // A-Z
        case 'newest':
          return parseInt(b.id) - parseInt(a.id); // Mock newest by ID
        default:
          return 0;
      }
    });

    return result;
  }, [searchTerm, selectedCategory, selectedPricing, sortBy]);

  const categories = ['All', ...Object.values(Category)];
  const pricingModels = ['All', ...Object.values(PricingModel)];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      
      {/* Navbar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <Sparkles className="text-white h-5 w-5" />
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
              AI Directory Pro
            </h1>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
            <input 
              type="text" 
              placeholder="Search tools (e.g. 'video editor', 'chatbot')..." 
              className="w-full pl-10 pr-4 py-2 rounded-full bg-slate-100 border-transparent focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsRecommenderOpen(true)}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm hover:shadow-md"
            >
              <Sparkles size={14} className="text-yellow-300" />
              Ask AI
            </button>
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {/* Mobile Search & Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white p-4 space-y-4">
             <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
              <input 
                type="text" 
                placeholder="Search tools..." 
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-100 border-transparent outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button 
              onClick={() => {
                setIsRecommenderOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium"
            >
              <Sparkles size={16} />
              Ask AI for Help
            </button>
          </div>
        )}
      </header>

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
            
            {/* Categories */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Filter size={14} /> Categories
              </h3>
              <div className="space-y-1">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat as Category | 'All')}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      selectedCategory === cat 
                        ? 'bg-indigo-50 text-indigo-700' 
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Pricing</h3>
              <div className="space-y-1">
                {pricingModels.map(price => (
                  <label key={price} className="flex items-center px-3 py-1.5 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="pricing" 
                      checked={selectedPricing === price}
                      onChange={() => setSelectedPricing(price as PricingModel | 'All')}
                      className="w-4 h-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
                    />
                    <span className={`ml-2 text-sm ${selectedPricing === price ? 'text-slate-900 font-medium' : 'text-slate-600 group-hover:text-slate-900'}`}>
                      {price}
                    </span>
                  </label>
                ))}
              </div>
            </div>

          </aside>

          {/* Main Content */}
          <main className="flex-1">
            
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h2 className="text-2xl font-bold text-slate-900">
                {selectedCategory === 'All' ? 'All Tools' : selectedCategory}
                <span className="ml-2 text-sm font-normal text-slate-500">({filteredTools.length})</span>
              </h2>
              
              <div className="flex items-center gap-2">
                <SlidersHorizontal size={16} className="text-slate-500" />
                <span className="text-sm text-slate-600">Sort by:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="text-sm border-none bg-transparent font-medium text-slate-900 focus:ring-0 cursor-pointer"
                >
                  <option value="rating">Highest Rated</option>
                  <option value="reviews">Most Reviewed</option>
                  <option value="name">Name (A-Z)</option>
                  <option value="newest">Newest Added</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            {filteredTools.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredTools.map(tool => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
                <p className="text-slate-500 text-lg">No tools found matching your criteria.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                    setSelectedPricing('All');
                  }}
                  className="mt-4 text-indigo-600 font-medium hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      <AIRecommender 
        isOpen={isRecommenderOpen} 
        onClose={() => setIsRecommenderOpen(false)} 
      />
    </div>
  );
};

export default App;
