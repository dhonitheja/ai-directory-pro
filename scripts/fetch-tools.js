const fs = require('fs');
const path = require('path');
// Note: If using Node < 18, uncomment the next line and install node-fetch
// const fetch = require('node-fetch');

// CONFIGURATION
const TOOLS_FILE = path.join(__dirname, '../frontend/data/tools.ts');
const MAX_NEW_TOOLS = 5; // Limit per run to avoid spam

// MOCK DATA SOURCE (Replace with actual API call)
// Example: Product Hunt API, arXiv, or GitHub Trending
async function fetchTrendingTools() {
    console.log('Fetching trending AI tools...');

    // Simulated API response for demonstration
    // In production, replace this with:
    // const response = await fetch('YOUR_API_URL');
    // const data = await response.json();

    return [
        {
            name: `AutoGPT-Next-${Date.now().toString().slice(-4)}`,
            description: 'Autonomous AI agent for complex task execution.',
            category: 'Coding Assistant',
            website: 'https://github.com/significant-gravitas/AutoGPT',
            tags: ['agent', 'autonomous', 'open-source'],
            pricing: 'Free'
        },
        {
            name: `Stable-Diffusion-XL-${Date.now().toString().slice(-4)}`,
            description: 'Advanced text-to-image generation model.',
            category: 'Image Generation',
            website: 'https://stability.ai',
            tags: ['image', 'generative', 'art'],
            pricing: 'Freemium'
        }
    ];
}

function mapCategory(categoryString) {
    // Map external category string to internal Enum key
    // You might need to update this map based on your source data
    const map = {
        'Coding Assistant': 'Category.CODING',
        'Image Generation': 'Category.IMAGE',
        'Text & Writing': 'Category.TEXT',
        'Video Creation': 'Category.VIDEO',
        // fallback
        'default': 'Category.PRODUCTIVITY'
    };
    return map[categoryString] || map['default'];
}

function mapPricing(pricingString) {
    const map = {
        'Free': 'PricingModel.FREE',
        'Freemium': 'PricingModel.FREEMIUM',
        'Paid': 'PricingModel.PAID',
        'Free Trial': 'PricingModel.TRIAL',
        'default': 'PricingModel.FREEMIUM'
    };
    return map[pricingString] || map['default'];
}

async function updateTools() {
    try {
        const newTools = await fetchTrendingTools();
        let fileContent = fs.readFileSync(TOOLS_FILE, 'utf8');

        // Find the closing bracket of the array
        const closingBracketIndex = fileContent.lastIndexOf('];');
        if (closingBracketIndex === -1) {
            throw new Error('Could not find closing bracket in tools.ts');
        }

        let addedCount = 0;
        let newEntriesString = '';

        for (const tool of newTools) {
            // Check for duplicates (simple name check)
            if (fileContent.includes(`name: '${tool.name}'`)) {
                console.log(`Skipping duplicate: ${tool.name}`);
                continue;
            }

            const id = Date.now().toString() + Math.floor(Math.random() * 1000);

            const newEntry = `
  {
    id: '${id}',
    name: '${tool.name.replace(/'/g, "\\'")}',
    description: '${tool.description.replace(/'/g, "\\'")}',
    category: ${mapCategory(tool.category)},
    rating: 0, // New tools start with 0 rating
    reviewCount: 0,
    pricing: ${mapPricing(tool.pricing)},
    website: '${tool.website}',
    tags: ${JSON.stringify(tool.tags)},
    imageUrl: 'https://picsum.photos/seed/${id}/400/300' // Placeholder image
  },`;

            newEntriesString += newEntry;
            addedCount++;

            if (addedCount >= MAX_NEW_TOOLS) break;
        }

        if (addedCount > 0) {
            // Insert new entries before the closing bracket
            const newContent = fileContent.slice(0, closingBracketIndex) +
                newEntriesString +
                fileContent.slice(closingBracketIndex);

            fs.writeFileSync(TOOLS_FILE, newContent, 'utf8');
            console.log(`Successfully added ${addedCount} new tools.`);
        } else {
            console.log('No new unique tools found.');
        }

    } catch (error) {
        console.error('Error updating tools:', error);
        process.exit(1);
    }
}

updateTools();
