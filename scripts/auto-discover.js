const fs = require('fs');
const path = require('path');
const Parser = require('rss-parser');
const parser = new Parser();

// Configuration
const TOOLS_FILE = path.join(__dirname, '../frontend/data/tools.ts');
const MAX_TOOLS_PER_RUN = 3;

// List of high-quality RSS feeds for AI tools
// We can expand this list easily
const FEED_URLS = [
    'https://theresanaiforthat.com/feed',     // One of the largest AI directories
    'https://toolify.ai/feed',                // Popular tool list
    'https://www.producthunt.com/feed'        // General tech, often AI
];

// Fallback logic in case feeds fail
const FALLBACK_TOOLS = [
    {
        name: 'Jasper Chat',
        description: 'An AI chatbot for business that stays on brand and knows your company facts.',
        category: 'Category.MARKETING',
        pricing: 'PricingModel.PAID',
        website: 'https://www.jasper.ai/chat',
        tags: ['chatbot', 'business', 'marketing']
    },
    {
        name: 'Pictory',
        description: 'Automatically create short, highly-sharable branded videos from your long form content.',
        category: 'Category.VIDEO',
        pricing: 'PricingModel.FREEMIUM',
        website: 'https://pictory.ai',
        tags: ['video', 'content repurposing', 'social']
    }
];

async function fetchFromFeeds() {
    console.log('Fetching new AI tools from RSS feeds...');
    const newTools = [];

    for (const url of FEED_URLS) {
        try {
            const feed = await parser.parseURL(url);
            console.log(`Checking feed: ${feed.title}`);

            // Get the latest 5 items from the feed
            for (const item of feed.items.slice(0, 5)) {
                // Basic filtering: check if title or description mentions "AI"
                const text = (item.title + item.contentSnippet).toLowerCase();
                if (text.includes('ai') || text.includes('gpt') || text.includes('intelligence')) {

                    newTools.push({
                        name: item.title, // RSS titles are usually clean
                        description: item.contentSnippet ? item.contentSnippet.substring(0, 150) + '...' : 'No description available.',
                        category: 'Category.PRODUCTIVITY', // Default, hard to categorize automatically (can improve with keyword matching)
                        pricing: 'PricingModel.FREEMIUM', // Default assumption
                        website: item.link,
                        tags: ['new', 'rss', 'auto-discovered']
                    });
                }
            }
        } catch (error) {
            console.warn(`Failed to fetch RSS feed: ${url}`, error.message);
        }
    }

    if (newTools.length === 0) {
        console.log('No new AI tools found in feeds today. Using fallback.');
        return FALLBACK_TOOLS[Math.floor(Math.random() * FALLBACK_TOOLS.length)];
    }

    // Pick a random tool from the fetched list to add
    return newTools[Math.floor(Math.random() * newTools.length)];
}

function updateDatabase(newTool) {
    if (!newTool) return;

    try {
        let fileContent = fs.readFileSync(TOOLS_FILE, 'utf8');

        // Check for duplicates
        if (fileContent.includes(`name: '${newTool.name}'`)) {
            console.log(`Tool already exists: ${newTool.name}`);
            return;
        }

        const closingBracketIndex = fileContent.lastIndexOf('];');
        if (closingBracketIndex === -1) {
            console.error('Could not find closing bracket in tools.ts');
            return;
        }

        const id = Date.now().toString();
        // Improve category guessing based on description keywords
        let category = newTool.category;
        const desc = newTool.description.toLowerCase();
        if (desc.includes('video') || desc.includes('movie')) category = 'Category.VIDEO';
        else if (desc.includes('image') || desc.includes('art') || desc.includes('drawing')) category = 'Category.IMAGE';
        else if (desc.includes('code') || desc.includes('programming') || desc.includes('developer')) category = 'Category.CODING';
        else if (desc.includes('write') || desc.includes('marketing') || desc.includes('copy')) category = 'Category.TEXT';

        const newEntry = `,
  {
    id: '${id}',
    name: '${newTool.name.replace(/'/g, "\\'")}',
    description: '${newTool.description.replace(/'/g, "\\'")}', 
    category: ${category},
    rating: 0,
    reviewCount: 0,
    pricing: ${newTool.pricing},
    website: '${newTool.website}',
    tags: ${JSON.stringify(newTool.tags)},
    imageUrl: 'https://picsum.photos/seed/${id}/400/300'
  }`;

        const newContent = fileContent.slice(0, closingBracketIndex) +
            newEntry +
            fileContent.slice(closingBracketIndex);

        fs.writeFileSync(TOOLS_FILE, newContent, 'utf8');
        console.log(`[SUCCESS] Added new tool: ${newTool.name}`);

    } catch (error) {
        console.error('Error writing to database:', error);
        process.exit(1);
    }
}

// Logic
(async () => {
    const foundTool = await fetchFromFeeds();
    updateDatabase(foundTool);
})();
