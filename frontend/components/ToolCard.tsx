import React from 'react';
import { Tool } from '../types';
import { StarRating } from './StarRating';
import { ExternalLink, Tag } from 'lucide-react';

interface ToolCardProps {
  tool: Tool;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      <div className="h-40 overflow-hidden relative bg-slate-100">
        <img 
          src={tool.imageUrl} 
          alt={tool.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-semibold text-slate-700 shadow-sm">
          {tool.pricing}
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-bold text-slate-900">{tool.name}</h3>
            <p className="text-xs text-primary-600 font-medium uppercase tracking-wide mt-1">{tool.category}</p>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-lg font-bold text-slate-800">{tool.rating}</span>
            <StarRating rating={tool.rating} count={tool.reviewCount} />
          </div>
        </div>
        
        <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-1">
          {tool.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tool.tags.slice(0, 3).map(tag => (
            <span key={tag} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
              <Tag size={10} className="mr-1" />
              {tag}
            </span>
          ))}
        </div>
        
        <a 
          href={tool.website} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-auto w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-colors"
        >
          Visit Website
          <ExternalLink size={14} className="ml-2" />
        </a>
      </div>
    </div>
  );
};
