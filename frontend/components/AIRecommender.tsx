import React, { useState } from 'react';
import { Sparkles, X, Send, Loader2 } from 'lucide-react';
import { getAIRecommendations } from '../services/aiService';

interface AIRecommenderProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AIRecommender: React.FC<AIRecommenderProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setResponse('');
    
    const result = await getAIRecommendations(query);
    setResponse(result);
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-yellow-300" />
            <h2 className="text-xl font-bold">AI Smart Recommender</h2>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {!response && !isLoading && (
            <div className="text-center py-10 text-slate-500">
              <Sparkles size={48} className="mx-auto mb-4 text-indigo-200" />
              <p className="text-lg font-medium text-slate-700">What are you looking for?</p>
              <p className="text-sm">Describe your needs (e.g., "I need a free tool to edit videos for YouTube") and I'll find the best match.</p>
            </div>
          )}

          {isLoading && (
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <Loader2 size={40} className="animate-spin text-indigo-600" />
              <p className="text-slate-600 font-medium">Analyzing your request...</p>
            </div>
          )}

          {response && (
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 prose prose-slate max-w-none">
              <h3 className="text-indigo-900 font-semibold mb-2 flex items-center">
                <Sparkles size={16} className="mr-2 text-indigo-600" />
                Recommendation
              </h3>
              <div className="whitespace-pre-wrap text-slate-700 leading-relaxed">
                {response}
              </div>
            </div>
          )}
        </div>

        {/* Footer / Input */}
        <div className="p-4 border-t border-slate-100 bg-slate-50">
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask for a recommendation..."
              className="w-full pl-4 pr-12 py-3 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all shadow-sm"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !query.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
