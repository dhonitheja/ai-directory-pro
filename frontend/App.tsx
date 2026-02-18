import React, { useState, useMemo } from 'react';
import { TOOLS } from './data/tools';
import { ToolCard } from './components/ToolCard';
import { AIRecommender } from './components/AIRecommender';
import { Category, SortOption, PricingModel } from './types';
import { Search, Filter, Sparkles, Menu, X, SlidersHorizontal, ShieldCheck } from 'lucide-react';

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
        (tool.tags || []).some(tag => tag.toLowerCase().includes(lowerTerm))
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
          return b.rating - a.rating;
        case 'reviews':
          return b.reviewCount - a.reviewCount;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'newest':
          return parseInt(b.id) - parseInt(a.id);
        default:
          return 0;
      }
    });

    return result;
  }, [searchTerm, selectedCategory, selectedPricing, sortBy]);

  const categories = ['All', ...Object.values(Category)];
  const pricingModels = ['All', ...Object.values(PricingModel)];

  return (
    <div className="app-container">

      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-content">
          <div className="navbar-logo">
            <div className="navbar-logo-icon">
              <Sparkles style={{ color: 'white', height: '20px', width: '20px' }} />
            </div>
            <h1 className="navbar-logo-text">
              AI Directory Pro
            </h1>
          </div>

          {/* Desktop Search */}
          <div className="navbar-search hidden-mobile">
            <Search className="navbar-search-icon" size={16} />
            <input
              type="text"
              placeholder="Search tools (e.g. 'video editor', 'chatbot')..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="navbar-actions">
            <button
              onClick={() => setIsRecommenderOpen(true)}
              className="btn btn-gradient hidden-mobile"
            >
              <Sparkles size={14} style={{ color: '#fbbf24' }} />
              Ask AI
            </button>
            <button
              className="btn-icon hidden-desktop"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Search & Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-search">
              <Search className="mobile-search-icon" size={16} />
              <input
                type="text"
                placeholder="Search tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              onClick={() => {
                setIsRecommenderOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="btn btn-gradient"
              style={{ width: '100%' }}
            >
              <Sparkles size={16} />
              Ask AI for Help
            </button>
          </div>
        )}
      </header>

      {/* Verification Trust Banner */}
      <div className="verification-banner">
        <div className="verification-banner-content">
          <div className="verification-shield">
            <ShieldCheck size={24} color="white" />
          </div>
          <div className="verification-text">
            <h3>
              <span className="verification-stat">{TOOLS.length} Tools</span> — All Verified & Vetted
            </h3>
            <p>
              Every tool is independently verified through industry-leading review platforms, official vendor data, and expert analysis before listing.
            </p>
          </div>
          <div className="trust-sources">
            <span className="trust-badge"><span className="trust-badge-dot orange"></span>G2</span>
            <span className="trust-badge"><span className="trust-badge-dot green"></span>Capterra</span>
            <span className="trust-badge"><span className="trust-badge-dot blue"></span>TrustRadius</span>
            <span className="trust-badge"><span className="trust-badge-dot red"></span>Product Hunt</span>
            <span className="trust-badge"><span className="trust-badge-dot purple"></span>Official Sites</span>
            <span className="trust-badge"><span className="trust-badge-dot teal"></span>Expert Reviews</span>
          </div>
        </div>
      </div>

      <div className="main-wrapper">
        <div className="content-grid">

          {/* Sidebar Filters */}
          <aside className="sidebar">

            {/* Categories */}
            <div className="filter-section">
              <h3 className="filter-title">
                <Filter size={14} /> Categories
              </h3>
              <div className="filter-options">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat as Category | 'All')}
                    className={`filter-button ${selectedCategory === cat ? 'active' : ''}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="filter-section">
              <h3 className="filter-title">Pricing</h3>
              <div className="filter-options">
                {pricingModels.map(price => (
                  <label key={price} className="filter-radio">
                    <input
                      type="radio"
                      name="pricing"
                      checked={selectedPricing === price}
                      onChange={() => setSelectedPricing(price as PricingModel | 'All')}
                    />
                    <span>
                      {price}
                    </span>
                  </label>
                ))}
              </div>
            </div>

          </aside>

          {/* Main Content */}
          <main className="main-content">

            {/* Toolbar */}
            <div className="toolbar">
              <h2 className="toolbar-title">
                {selectedCategory === 'All' ? 'All Tools' : selectedCategory}
                <span className="toolbar-count">({filteredTools.length})</span>
              </h2>

              <div className="toolbar-sort">
                <SlidersHorizontal size={16} style={{ color: 'var(--color-slate-500)' }} />
                <span>Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
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
              <div className="tools-grid">
                {filteredTools.map(tool => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <p className="empty-state-text">No tools found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                    setSelectedPricing('All');
                  }}
                  className="empty-state-button"
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
