import { Tool, Category, PricingModel } from '../types';

export const TOOLS: Tool[] = [
  // TEXT & WRITING
  {
    id: '1',
    name: 'ChatGPT',
    description: 'The industry-leading conversational AI by OpenAI, capable of writing, coding, reasoning, and analysis.',
    category: Category.TEXT,
    rating: 4.9,
    reviewCount: 25420,
    pricing: PricingModel.FREEMIUM,
    website: 'https://chat.openai.com',
    tags: ['chatbot', 'llm', 'writing', 'assistant'],
    imageUrl: 'https://picsum.photos/seed/chatgpt/400/300'
  },
  {
    id: '2',
    name: 'Claude 3',
    description: 'Anthropic’s advanced AI model known for high reliability, large context windows, and nuanced writing.',
    category: Category.TEXT,
    rating: 4.8,
    reviewCount: 8700,
    pricing: PricingModel.FREEMIUM,
    website: 'https://claude.ai',
    tags: ['chatbot', 'analysis', 'coding', 'safe'],
    imageUrl: 'https://picsum.photos/seed/claude/400/300'
  },
  {
    id: '3',
    name: 'Google Gemini',
    description: 'Google’s most capable multimodal model, integrated with the Google ecosystem.',
    category: Category.TEXT,
    rating: 4.7,
    reviewCount: 12500,
    pricing: PricingModel.FREEMIUM,
    website: 'https://gemini.google.com',
    tags: ['google', 'multimodal', 'search'],
    imageUrl: 'https://picsum.photos/seed/gemini/400/300'
  },
  {
    id: '4',
    name: 'Perplexity AI',
    description: 'An AI-powered answer engine that provides real-time, cited answers from the web.',
    category: Category.TEXT,
    rating: 4.8,
    reviewCount: 5800,
    pricing: PricingModel.FREEMIUM,
    website: 'https://perplexity.ai',
    tags: ['search', 'research', 'citations'],
    imageUrl: 'https://picsum.photos/seed/perplexity/400/300'
  },
  {
    id: '5',
    name: 'Jasper',
    description: 'AI content platform purpose-built for enterprise marketing teams and brand voice consistency.',
    category: Category.MARKETING,
    rating: 4.6,
    reviewCount: 4200,
    pricing: PricingModel.PAID,
    website: 'https://jasper.ai',
    tags: ['copywriting', 'marketing', 'brand'],
    imageUrl: 'https://picsum.photos/seed/jasper/400/300'
  },
  {
    id: '6',
    name: 'Copy.ai',
    description: 'AI-powered copywriter that generates high-quality content for blogs, ads, and social media.',
    category: Category.MARKETING,
    rating: 4.5,
    reviewCount: 3100,
    pricing: PricingModel.FREEMIUM,
    website: 'https://copy.ai',
    tags: ['copywriting', 'social media', 'email'],
    imageUrl: 'https://picsum.photos/seed/copyai/400/300'
  },
  {
    id: '7',
    name: 'Quillbot',
    description: 'Advanced paraphrasing tool that helps rewrite and enhance sentences.',
    category: Category.TEXT,
    rating: 4.7,
    reviewCount: 9500,
    pricing: PricingModel.FREEMIUM,
    website: 'https://quillbot.com',
    tags: ['writing', 'paraphrasing', 'grammar'],
    imageUrl: 'https://picsum.photos/seed/quillbot/400/300'
  },
  {
    id: '8',
    name: 'Grammarly',
    description: 'AI writing assistant that corrects grammar, spelling, and style in real-time.',
    category: Category.TEXT,
    rating: 4.8,
    reviewCount: 35000,
    pricing: PricingModel.FREEMIUM,
    website: 'https://grammarly.com',
    tags: ['grammar', 'editing', 'writing'],
    imageUrl: 'https://picsum.photos/seed/grammarly/400/300'
  },
  {
    id: '41',
    name: 'Rytr',
    description: 'An AI writing assistant that helps you create high-quality content, in just a few seconds, at a fraction of the cost.',
    category: Category.TEXT,
    rating: 4.6,
    reviewCount: 3200,
    pricing: PricingModel.FREEMIUM,
    website: 'https://rytr.me',
    tags: ['writing', 'blogging', 'emails'],
    imageUrl: 'https://picsum.photos/seed/rytr/400/300'
  },
  {
    id: '42',
    name: 'Writesonic',
    description: 'AI writer that creates SEO-friendly content for blogs, Facebook ads, Google ads, and Shopify for free.',
    category: Category.TEXT,
    rating: 4.7,
    reviewCount: 5100,
    pricing: PricingModel.FREEMIUM,
    website: 'https://writesonic.com',
    tags: ['seo', 'marketing', 'ads'],
    imageUrl: 'https://picsum.photos/seed/writesonic/400/300'
  },
  {
    id: '43',
    name: 'Sudowrite',
    description: 'The non-judgmental, always-there AI writing partner for fiction authors.',
    category: Category.TEXT,
    rating: 4.8,
    reviewCount: 1200,
    pricing: PricingModel.PAID,
    website: 'https://sudowrite.com',
    tags: ['fiction', 'novels', 'creative writing'],
    imageUrl: 'https://picsum.photos/seed/sudowrite/400/300'
  },

  // IMAGE GENERATION
  {
    id: '9',
    name: 'Midjourney',
    description: 'Generates hyper-realistic and artistic images from text prompts via Discord.',
    category: Category.IMAGE,
    rating: 4.9,
    reviewCount: 18900,
    pricing: PricingModel.PAID,
    website: 'https://midjourney.com',
    tags: ['art', 'realistic', 'creative'],
    imageUrl: 'https://picsum.photos/seed/midjourney/400/300'
  },
  {
    id: '10',
    name: 'DALL-E 3',
    description: 'OpenAI’s image model integrated into ChatGPT, known for following complex instructions.',
    category: Category.IMAGE,
    rating: 4.7,
    reviewCount: 11000,
    pricing: PricingModel.PAID,
    website: 'https://openai.com/dall-e-3',
    tags: ['art', 'chatgpt', 'easy'],
    imageUrl: 'https://picsum.photos/seed/dalle3/400/300'
  },
  {
    id: '11',
    name: 'Stable Diffusion',
    description: 'Open-source latent text-to-image diffusion model with immense customizability.',
    category: Category.IMAGE,
    rating: 4.6,
    reviewCount: 8200,
    pricing: PricingModel.FREE,
    website: 'https://stability.ai',
    tags: ['open source', 'local', 'generation'],
    imageUrl: 'https://picsum.photos/seed/stablediffusion/400/300'
  },
  {
    id: '12',
    name: 'Leonardo.ai',
    description: 'Feature-rich image generation platform for game assets and artistic concepts.',
    category: Category.IMAGE,
    rating: 4.7,
    reviewCount: 4500,
    pricing: PricingModel.FREEMIUM,
    website: 'https://leonardo.ai',
    tags: ['game assets', 'art', 'platform'],
    imageUrl: 'https://picsum.photos/seed/leonardo/400/300'
  },
  {
    id: '13',
    name: 'Adobe Firefly',
    description: 'Generative AI for creators, integrated into Photoshop and Adobe Creative Cloud.',
    category: Category.IMAGE,
    rating: 4.6,
    reviewCount: 6000,
    pricing: PricingModel.FREEMIUM,
    website: 'https://firefly.adobe.com',
    tags: ['adobe', 'design', 'commercial safe'],
    imageUrl: 'https://picsum.photos/seed/firefly/400/300'
  },
  {
    id: '44',
    name: 'Playground AI',
    description: 'A free-to-use online AI image creator. Use it to create art, social media posts, presentations, posters, videos, logos and more.',
    category: Category.IMAGE,
    rating: 4.5,
    reviewCount: 2100,
    pricing: PricingModel.FREEMIUM,
    website: 'https://playgroundai.com',
    tags: ['art', 'editor', 'social'],
    imageUrl: 'https://picsum.photos/seed/playground/400/300'
  },
  {
    id: '45',
    name: 'Clipdrop',
    description: 'An ecosystem of apps, plugins & resources for all creators, powered by AI. Remove backgrounds, relight images, and more.',
    category: Category.IMAGE,
    rating: 4.7,
    reviewCount: 3400,
    pricing: PricingModel.FREEMIUM,
    website: 'https://clipdrop.co',
    tags: ['editing', 'tools', 'cleanup'],
    imageUrl: 'https://picsum.photos/seed/clipdrop/400/300'
  },

  // VIDEO CREATION
  {
    id: '14',
    name: 'Runway Gen-2',
    description: 'Leading video generation AI for cinematic results from text, images, or video.',
    category: Category.VIDEO,
    rating: 4.5,
    reviewCount: 3100,
    pricing: PricingModel.FREEMIUM,
    website: 'https://runwayml.com',
    tags: ['cinematic', 'vfx', 'editor'],
    imageUrl: 'https://picsum.photos/seed/runway/400/300'
  },
  {
    id: '15',
    name: 'HeyGen',
    description: 'Create AI avatar videos for business, marketing, and personalized outreach.',
    category: Category.VIDEO,
    rating: 4.8,
    reviewCount: 2200,
    pricing: PricingModel.PAID,
    website: 'https://heygen.com',
    tags: ['avatars', 'business', 'translation'],
    imageUrl: 'https://picsum.photos/seed/heygen/400/300'
  },
  {
    id: '16',
    name: 'Synthesia',
    description: '#1 AI Video Generation Platform. Turn text into video in minutes.',
    category: Category.VIDEO,
    rating: 4.6,
    reviewCount: 2800,
    pricing: PricingModel.PAID,
    website: 'https://synthesia.io',
    tags: ['corporate', 'training', 'avatars'],
    imageUrl: 'https://picsum.photos/seed/synthesia/400/300'
  },
  {
    id: '17',
    name: 'Pika',
    description: 'Idea-to-video platform that lets you generate and edit videos with simple commands.',
    category: Category.VIDEO,
    rating: 4.5,
    reviewCount: 1500,
    pricing: PricingModel.FREEMIUM,
    website: 'https://pika.art',
    tags: ['animation', 'social', 'creative'],
    imageUrl: 'https://picsum.photos/seed/pika/400/300'
  },
  {
    id: '18',
    name: 'Descript',
    description: 'All-in-one video and audio editor that works like a doc. Includes AI voice cloning.',
    category: Category.VIDEO,
    rating: 4.7,
    reviewCount: 4100,
    pricing: PricingModel.FREEMIUM,
    website: 'https://descript.com',
    tags: ['editing', 'transcription', 'podcasting'],
    imageUrl: 'https://picsum.photos/seed/descript/400/300'
  },
  {
    id: '46',
    name: 'InVideo',
    description: 'Turn text into video with AI. Generates scripts, creates scenes, adds voiceovers, and tweaks the video at your command.',
    category: Category.VIDEO,
    rating: 4.6,
    reviewCount: 5500,
    pricing: PricingModel.FREEMIUM,
    website: 'https://invideo.io',
    tags: ['marketing', 'social media', 'text-to-video'],
    imageUrl: 'https://picsum.photos/seed/invideo/400/300'
  },
  {
    id: '47',
    name: 'Fliki',
    description: 'Turn text into videos with AI voices. Create videos from scripts or blog posts using realistic voices.',
    category: Category.VIDEO,
    rating: 4.5,
    reviewCount: 2800,
    pricing: PricingModel.FREEMIUM,
    website: 'https://fliki.ai',
    tags: ['text-to-video', 'voiceover', 'content'],
    imageUrl: 'https://picsum.photos/seed/fliki/400/300'
  },
  {
    id: '48',
    name: 'Opus Clip',
    description: 'AI video repurposing tool that turns long videos into viral short clips.',
    category: Category.VIDEO,
    rating: 4.8,
    reviewCount: 1900,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.opus.pro',
    tags: ['shorts', 'repurposing', 'social'],
    imageUrl: 'https://picsum.photos/seed/opus/400/300'
  },

  // AUDIO & VOICE
  {
    id: '19',
    name: 'ElevenLabs',
    description: 'The most realistic AI text-to-speech and voice cloning software.',
    category: Category.AUDIO,
    rating: 4.9,
    reviewCount: 5400,
    pricing: PricingModel.FREEMIUM,
    website: 'https://elevenlabs.io',
    tags: ['tts', 'voice cloning', 'dubbing'],
    imageUrl: 'https://picsum.photos/seed/elevenlabs/400/300'
  },
  {
    id: '20',
    name: 'Suno',
    description: 'Create full songs with lyrics and vocals from simple text prompts.',
    category: Category.AUDIO,
    rating: 4.8,
    reviewCount: 3200,
    pricing: PricingModel.FREEMIUM,
    website: 'https://suno.com',
    tags: ['music', 'songs', 'generation'],
    imageUrl: 'https://picsum.photos/seed/suno/400/300'
  },
  {
    id: '21',
    name: 'Udio',
    description: 'Generates high-fidelity music tracks with advanced musicality.',
    category: Category.AUDIO,
    rating: 4.7,
    reviewCount: 1800,
    pricing: PricingModel.FREE,
    website: 'https://udio.com',
    tags: ['music', 'production', 'beta'],
    imageUrl: 'https://picsum.photos/seed/udio/400/300'
  },
  {
    id: '22',
    name: 'Murf.ai',
    description: 'Versatile AI voice generator for professional voiceovers.',
    category: Category.AUDIO,
    rating: 4.5,
    reviewCount: 2100,
    pricing: PricingModel.FREEMIUM,
    website: 'https://murf.ai',
    tags: ['voiceover', 'presentation', 'studio'],
    imageUrl: 'https://picsum.photos/seed/murf/400/300'
  },
  {
    id: '49',
    name: 'Lovo.ai',
    description: 'Award-winning AI Voice Generator and Text to Speech software with 500+ voices in 100+ languages.',
    category: Category.AUDIO,
    rating: 4.6,
    reviewCount: 1500,
    pricing: PricingModel.PAID,
    website: 'https://lovo.ai',
    tags: ['voiceover', 'tts', 'marketing'],
    imageUrl: 'https://picsum.photos/seed/lovo/400/300'
  },
  {
    id: '50',
    name: 'Speechify',
    description: 'The #1 text to speech reader. Turn any text into audio.',
    category: Category.AUDIO,
    rating: 4.7,
    reviewCount: 8000,
    pricing: PricingModel.FREEMIUM,
    website: 'https://speechify.com',
    tags: ['accessibility', 'reading', 'productivity'],
    imageUrl: 'https://picsum.photos/seed/speechify/400/300'
  },
  {
    id: '66',
    name: 'Krisp',
    description: 'AI noise cancellation app that removes background noise and echo from meetings.',
    category: Category.AUDIO,
    rating: 4.8,
    reviewCount: 4200,
    pricing: PricingModel.FREEMIUM,
    website: 'https://krisp.ai',
    tags: ['meetings', 'noise cancellation', 'audio'],
    imageUrl: 'https://picsum.photos/seed/krisp/400/300'
  },
  {
    id: '67',
    name: 'Beatoven.ai',
    description: 'Create unique royalty-free music that elevates your story.',
    category: Category.AUDIO,
    rating: 4.5,
    reviewCount: 900,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.beatoven.ai',
    tags: ['music', 'royalty-free', 'creators'],
    imageUrl: 'https://picsum.photos/seed/beatoven/400/300'
  },

  // CODING
  {
    id: '23',
    name: 'GitHub Copilot',
    description: 'Your AI pair programmer. Autocomplete-style suggestions for code.',
    category: Category.CODING,
    rating: 4.8,
    reviewCount: 15600,
    pricing: PricingModel.PAID,
    website: 'https://github.com/features/copilot',
    tags: ['developer', 'vscode', 'productivity'],
    imageUrl: 'https://picsum.photos/seed/copilot/400/300'
  },
  {
    id: '24',
    name: 'Cursor',
    description: 'An AI-first code editor built for pair programming with AI.',
    category: Category.CODING,
    rating: 4.9,
    reviewCount: 2500,
    pricing: PricingModel.FREEMIUM,
    website: 'https://cursor.sh',
    tags: ['ide', 'editor', 'chat'],
    imageUrl: 'https://picsum.photos/seed/cursor/400/300'
  },
  {
    id: '25',
    name: 'Tabnine',
    description: 'AI code assistant that keeps your code private and secure.',
    category: Category.CODING,
    rating: 4.4,
    reviewCount: 3000,
    pricing: PricingModel.FREEMIUM,
    website: 'https://tabnine.com',
    tags: ['privacy', 'enterprise', 'autocomplete'],
    imageUrl: 'https://picsum.photos/seed/tabnine/400/300'
  },
  {
    id: '26',
    name: 'Replit',
    description: 'Collaborative online IDE with integrated AI coding assistance.',
    category: Category.CODING,
    rating: 4.6,
    reviewCount: 4000,
    pricing: PricingModel.FREEMIUM,
    website: 'https://replit.com',
    tags: ['cloud', 'ide', 'learning'],
    imageUrl: 'https://picsum.photos/seed/replit/400/300'
  },
  {
    id: '51',
    name: 'Amazon Q Developer',
    description: 'A generative AI-powered assistant for software development (formerly CodeWhisperer).',
    category: Category.CODING,
    rating: 4.5,
    reviewCount: 1200,
    pricing: PricingModel.FREE,
    website: 'https://aws.amazon.com/q/developer/',
    tags: ['aws', 'cloud', 'enterprise'],
    imageUrl: 'https://picsum.photos/seed/amazonq/400/300'
  },
  {
    id: '52',
    name: 'Cody',
    description: 'AI coding assistant by Sourcegraph that knows your entire codebase.',
    category: Category.CODING,
    rating: 4.6,
    reviewCount: 800,
    pricing: PricingModel.FREEMIUM,
    website: 'https://sourcegraph.com/cody',
    tags: ['context', 'codebase', 'search'],
    imageUrl: 'https://picsum.photos/seed/cody/400/300'
  },
  {
    id: '69',
    name: 'Phind',
    description: 'The search engine for developers. Optimized for technical questions and code generation.',
    category: Category.CODING,
    rating: 4.8,
    reviewCount: 2100,
    pricing: PricingModel.FREE,
    website: 'https://www.phind.com',
    tags: ['search', 'developer', 'answers'],
    imageUrl: 'https://picsum.photos/seed/phind/400/300'
  },

  // PRODUCTIVITY
  {
    id: '27',
    name: 'Notion AI',
    description: 'Integrated AI assistant for writing, summarizing, and organizing within Notion.',
    category: Category.PRODUCTIVITY,
    rating: 4.7,
    reviewCount: 8100,
    pricing: PricingModel.PAID,
    website: 'https://notion.so',
    tags: ['docs', 'wiki', 'management'],
    imageUrl: 'https://picsum.photos/seed/notion/400/300'
  },
  {
    id: '28',
    name: 'Otter.ai',
    description: 'AI meeting assistant that records audio, writes notes, and captures slides.',
    category: Category.PRODUCTIVITY,
    rating: 4.6,
    reviewCount: 5900,
    pricing: PricingModel.FREEMIUM,
    website: 'https://otter.ai',
    tags: ['meetings', 'transcription', 'notes'],
    imageUrl: 'https://picsum.photos/seed/otter/400/300'
  },
  {
    id: '29',
    name: 'Fireflies.ai',
    description: 'Automate your meeting notes. Record, transcribe, and search voice conversations.',
    category: Category.PRODUCTIVITY,
    rating: 4.5,
    reviewCount: 2300,
    pricing: PricingModel.FREEMIUM,
    website: 'https://fireflies.ai',
    tags: ['meetings', 'automation', 'teams'],
    imageUrl: 'https://picsum.photos/seed/fireflies/400/300'
  },
  {
    id: '30',
    name: 'Mem',
    description: 'The self-organizing workspace. It uses AI to connect your notes and data.',
    category: Category.PRODUCTIVITY,
    rating: 4.4,
    reviewCount: 1200,
    pricing: PricingModel.FREEMIUM,
    website: 'https://mem.ai',
    tags: ['notes', 'knowledge base', 'personal'],
    imageUrl: 'https://picsum.photos/seed/mem/400/300'
  },
  {
    id: '31',
    name: 'Taskade',
    description: 'AI-powered productivity platform for tasks, notes, and mind maps.',
    category: Category.PRODUCTIVITY,
    rating: 4.6,
    reviewCount: 1800,
    pricing: PricingModel.FREEMIUM,
    website: 'https://taskade.com',
    tags: ['tasks', 'collaboration', 'agents'],
    imageUrl: 'https://picsum.photos/seed/taskade/400/300'
  },
  {
    id: '53',
    name: 'Tome',
    description: 'AI-powered storytelling format. Create presentations and docs in seconds.',
    category: Category.PRODUCTIVITY,
    rating: 4.7,
    reviewCount: 3100,
    pricing: PricingModel.FREEMIUM,
    website: 'https://tome.app',
    tags: ['presentations', 'storytelling', 'slides'],
    imageUrl: 'https://picsum.photos/seed/tome/400/300'
  },
  {
    id: '55',
    name: 'Rewind',
    description: 'A personalized AI that captures everything you’ve seen, said, or heard on your Mac.',
    category: Category.PRODUCTIVITY,
    rating: 4.8,
    reviewCount: 1400,
    pricing: PricingModel.PAID,
    website: 'https://www.rewind.ai',
    tags: ['memory', 'mac', 'search'],
    imageUrl: 'https://picsum.photos/seed/rewind/400/300'
  },
  {
    id: '62',
    name: 'Zapier',
    description: 'Automation platform that now includes AI integrations to connect your apps.',
    category: Category.PRODUCTIVITY,
    rating: 4.9,
    reviewCount: 12000,
    pricing: PricingModel.FREEMIUM,
    website: 'https://zapier.com',
    tags: ['automation', 'workflow', 'integration'],
    imageUrl: 'https://picsum.photos/seed/zapier/400/300'
  },
  {
    id: '65',
    name: 'ChatPDF',
    description: 'Chat with any PDF. Ask questions, summarize, and extract information from documents.',
    category: Category.PRODUCTIVITY,
    rating: 4.6,
    reviewCount: 2500,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.chatpdf.com',
    tags: ['pdf', 'research', 'students'],
    imageUrl: 'https://picsum.photos/seed/chatpdf/400/300'
  },

  // DESIGN & UI
  {
    id: '32',
    name: 'Canva Magic Studio',
    description: 'Comprehensive AI design tools for social media, presentations, and more.',
    category: Category.DESIGN,
    rating: 4.8,
    reviewCount: 22000,
    pricing: PricingModel.FREEMIUM,
    website: 'https://canva.com',
    tags: ['graphic design', 'easy', 'templates'],
    imageUrl: 'https://picsum.photos/seed/canva/400/300'
  },
  {
    id: '33',
    name: 'Uizard',
    description: 'Design wireframes, mockups, and prototypes in minutes with AI.',
    category: Category.DESIGN,
    rating: 4.5,
    reviewCount: 1400,
    pricing: PricingModel.FREEMIUM,
    website: 'https://uizard.io',
    tags: ['ui/ux', 'prototyping', 'wireframes'],
    imageUrl: 'https://picsum.photos/seed/uizard/400/300'
  },
  {
    id: '34',
    name: 'Galileo AI',
    description: 'Generates high-fidelity UI designs from simple text descriptions.',
    category: Category.DESIGN,
    rating: 4.4,
    reviewCount: 900,
    pricing: PricingModel.PAID,
    website: 'https://usegalileo.ai',
    tags: ['ui', 'interface', 'figma'],
    imageUrl: 'https://picsum.photos/seed/galileo/400/300'
  },
  {
    id: '35',
    name: 'Gamma',
    description: 'A new medium for presenting ideas. Powered by AI. Create beautiful decks in seconds.',
    category: Category.DESIGN,
    rating: 4.7,
    reviewCount: 2100,
    pricing: PricingModel.FREEMIUM,
    website: 'https://gamma.app',
    tags: ['presentations', 'slides', 'web'],
    imageUrl: 'https://picsum.photos/seed/gamma/400/300'
  },
  {
    id: '54',
    name: 'Beautiful.ai',
    description: 'Generative AI presentation software for the workplace.',
    category: Category.DESIGN,
    rating: 4.6,
    reviewCount: 2200,
    pricing: PricingModel.PAID,
    website: 'https://www.beautiful.ai',
    tags: ['presentations', 'slides', 'business'],
    imageUrl: 'https://picsum.photos/seed/beautifulai/400/300'
  },
  {
    id: '58',
    name: 'Looka',
    description: 'Design your own beautiful brand. Use AI to design a logo and build a brand you love.',
    category: Category.DESIGN,
    rating: 4.5,
    reviewCount: 3500,
    pricing: PricingModel.PAID,
    website: 'https://looka.com',
    tags: ['logo', 'branding', 'startup'],
    imageUrl: 'https://picsum.photos/seed/looka/400/300'
  },

  // DATA & ANALYTICS
  {
    id: '36',
    name: 'Julius AI',
    description: 'Your personal AI data analyst. Analyze and visualize data with chat.',
    category: Category.DATA,
    rating: 4.6,
    reviewCount: 1100,
    pricing: PricingModel.FREEMIUM,
    website: 'https://julius.ai',
    tags: ['data analysis', 'visualization', 'python'],
    imageUrl: 'https://picsum.photos/seed/julius/400/300'
  },
  {
    id: '37',
    name: 'Tableau AI',
    description: 'Enterprise analytics platform enhanced with generative AI capabilities.',
    category: Category.DATA,
    rating: 4.5,
    reviewCount: 5000,
    pricing: PricingModel.PAID,
    website: 'https://tableau.com',
    tags: ['enterprise', 'bi', 'analytics'],
    imageUrl: 'https://picsum.photos/seed/tableau/400/300'
  },
  {
    id: '38',
    name: 'Hugging Face',
    description: 'The platform where the machine learning community collaborates on models and datasets.',
    category: Category.DATA,
    rating: 4.9,
    reviewCount: 10000,
    pricing: PricingModel.FREE,
    website: 'https://huggingface.co',
    tags: ['open source', 'models', 'datasets'],
    imageUrl: 'https://picsum.photos/seed/huggingface/400/300'
  },
  {
    id: '63',
    name: 'Browse AI',
    description: 'The easiest way to extract and monitor data from any website.',
    category: Category.DATA,
    rating: 4.5,
    reviewCount: 1300,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.browse.ai',
    tags: ['scraping', 'monitoring', 'automation'],
    imageUrl: 'https://picsum.photos/seed/browseai/400/300'
  },
  {
    id: '64',
    name: 'Akkio',
    description: 'Generative AI for analytics and predictive modeling. No code required.',
    category: Category.DATA,
    rating: 4.4,
    reviewCount: 600,
    pricing: PricingModel.PAID,
    website: 'https://www.akkio.com',
    tags: ['predictive', 'no-code', 'business'],
    imageUrl: 'https://picsum.photos/seed/akkio/400/300'
  },

  // MARKETING (Additional)
  {
    id: '39',
    name: 'AdCreative.ai',
    description: 'Generate conversion-focused ad creatives and social media posts in seconds.',
    category: Category.MARKETING,
    rating: 4.4,
    reviewCount: 1600,
    pricing: PricingModel.PAID,
    website: 'https://adcreative.ai',
    tags: ['ads', 'social media', 'conversion'],
    imageUrl: 'https://picsum.photos/seed/adcreative/400/300'
  },
  {
    id: '40',
    name: 'Surfer SEO',
    description: 'AI tool for SEO strategy, content creation, and optimization.',
    category: Category.MARKETING,
    rating: 4.6,
    reviewCount: 2400,
    pricing: PricingModel.PAID,
    website: 'https://surferseo.com',
    tags: ['seo', 'ranking', 'content'],
    imageUrl: 'https://picsum.photos/seed/surfer/400/300'
  },
  {
    id: '56',
    name: 'Predis.ai',
    description: 'AI social media post generator. Create ready-to-publish posts in seconds.',
    category: Category.MARKETING,
    rating: 4.5,
    reviewCount: 1100,
    pricing: PricingModel.FREEMIUM,
    website: 'https://predis.ai',
    tags: ['social media', 'instagram', 'content'],
    imageUrl: 'https://picsum.photos/seed/predis/400/300'
  },
  {
    id: '57',
    name: 'Ocoya',
    description: 'A platform to create, schedule, and analyze social media content 10x faster.',
    category: Category.MARKETING,
    rating: 4.4,
    reviewCount: 950,
    pricing: PricingModel.PAID,
    website: 'https://www.ocoya.com',
    tags: ['social media', 'scheduling', 'copywriting'],
    imageUrl: 'https://picsum.photos/seed/ocoya/400/300'
  },
  {
    id: '70',
    name: 'HypeAuditor',
    description: 'AI-powered influencer marketing platform for analytics and discovery.',
    category: Category.MARKETING,
    rating: 4.6,
    reviewCount: 1800,
    pricing: PricingModel.PAID,
    website: 'https://hypeauditor.com',
    tags: ['influencers', 'analytics', 'instagram'],
    imageUrl: 'https://picsum.photos/seed/hypeauditor/400/300'
  },

  // 3D & GAMING
  {
    id: '59',
    name: 'Luma AI',
    description: 'Capture the world in lifelike 3D. Create cinema-quality 3D assets from video.',
    category: Category.THREE_D,
    rating: 4.7,
    reviewCount: 2200,
    pricing: PricingModel.FREE,
    website: 'https://lumalabs.ai',
    tags: ['3d', 'nerf', 'capture'],
    imageUrl: 'https://picsum.photos/seed/luma/400/300'
  },
  {
    id: '60',
    name: 'Spline',
    description: '3D design tool in the browser with real-time collaboration and AI textures.',
    category: Category.THREE_D,
    rating: 4.6,
    reviewCount: 1500,
    pricing: PricingModel.FREEMIUM,
    website: 'https://spline.design',
    tags: ['3d', 'web design', 'interactive'],
    imageUrl: 'https://picsum.photos/seed/spline/400/300'
  },
  {
    id: '61',
    name: 'Blockade Labs',
    description: 'Create 360° skybox environments for games and 3D worlds with text prompts.',
    category: Category.THREE_D,
    rating: 4.8,
    reviewCount: 800,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.blockadelabs.com',
    tags: ['3d', 'skybox', 'environment'],
    imageUrl: 'https://picsum.photos/seed/blockade/400/300'
  },

  // ============================================================
  // ADDITIONAL AI ASSISTANTS & CHATBOTS
  // ============================================================
  {
    id: '71',
    name: 'Microsoft Copilot',
    description: 'Microsoft\'s AI assistant integrated across Microsoft 365 (Teams, Outlook, Word, Excel). Enhances productivity with summaries, drafting, and context-aware assistance.',
    category: Category.PRODUCTIVITY,
    rating: 4.3,
    reviewCount: 8500,
    pricing: PricingModel.FREEMIUM,
    website: 'https://copilot.microsoft.com',
    tags: ['microsoft', 'productivity', 'enterprise'],
    imageUrl: 'https://picsum.photos/seed/mscopilot/400/300'
  },
  {
    id: '72',
    name: 'NotebookLM',
    description: 'Google\'s source-grounded AI research assistant. Analyzes your documents (PDFs, Docs, audio) with minimal hallucinations. Creates study guides and audio overviews.',
    category: Category.PRODUCTIVITY,
    rating: 4.7,
    reviewCount: 4200,
    pricing: PricingModel.FREEMIUM,
    website: 'https://notebooklm.google.com',
    tags: ['research', 'documents', 'google'],
    imageUrl: 'https://picsum.photos/seed/notebooklm/400/300'
  },
  {
    id: '74',
    name: 'Grok',
    description: 'xAI\'s truth-seeking AI with real-time X (Twitter) integration. Grok-4 features fast mode and thinking mode, excels in math reasoning and PhD-level science questions.',
    category: Category.TEXT,
    rating: 4.5,
    reviewCount: 3800,
    pricing: PricingModel.PAID,
    website: 'https://x.ai',
    tags: ['real-time', 'reasoning', 'twitter'],
    imageUrl: 'https://picsum.photos/seed/grok/400/300'
  },
  {
    id: '75',
    name: 'Mistral AI',
    description: 'Europe\'s leading AI startup ($6.2B valuation). Offers open-weight models like Mixtral 8x7B. 30-40% lower costs than GPT-4 with strong multilingual reasoning.',
    category: Category.TEXT,
    rating: 4.6,
    reviewCount: 2900,
    pricing: PricingModel.FREEMIUM,
    website: 'https://mistral.ai',
    tags: ['open source', 'multilingual', 'efficient'],
    imageUrl: 'https://picsum.photos/seed/mistral/400/300'
  },
  {
    id: '84',
    name: 'Baidu Ernie',
    description: 'Baidu\'s multimodal AI with 2.4T parameters. Ernie 5.0 ranks 8th globally in text performance, 2nd in math reasoning. 200M monthly active users.',
    category: Category.TEXT,
    rating: 4.4,
    reviewCount: 12000,
    pricing: PricingModel.FREEMIUM,
    website: 'https://yiyan.baidu.com',
    tags: ['chinese', 'multimodal', 'enterprise'],
    imageUrl: 'https://picsum.photos/seed/ernie/400/300'
  },
  {
    id: '85',
    name: 'Alibaba Qwen',
    description: 'Alibaba\'s Qwen 3.5 with 397B parameters. 3rd best open-weights model globally. 60% cheaper, 8x faster with agentic capabilities. Supports 201 languages.',
    category: Category.TEXT,
    rating: 4.5,
    reviewCount: 8700,
    pricing: PricingModel.FREEMIUM,
    website: 'https://qwenlm.github.io',
    tags: ['chinese', 'multilingual', 'open source'],
    imageUrl: 'https://picsum.photos/seed/qwen/400/300'
  },

  // ============================================================
  // CODING & DEVELOPMENT TOOLS
  // ============================================================
  {
    id: '73',
    name: 'DeepSeek',
    description: 'Chinese AI startup with cost-efficient reasoning models. DeepSeek-R1 excels in coding (65.9% LiveCodeBench) and mathematics (90% accuracy). Open-source focused.',
    category: Category.CODING,
    rating: 4.6,
    reviewCount: 5100,
    pricing: PricingModel.FREE,
    website: 'https://deepseek.ai',
    tags: ['coding', 'reasoning', 'open source'],
    imageUrl: 'https://picsum.photos/seed/deepseek/400/300'
  },
  {
    id: '76',
    name: 'Google AI Studio',
    description: 'Google\'s web-based sandbox for rapid AI prototyping. Access Gemini models with 1M token context, vibe coding, and one-click deployment. Free tier available.',
    category: Category.CODING,
    rating: 4.2,
    reviewCount: 3100,
    pricing: PricingModel.FREEMIUM,
    website: 'https://aistudio.google.com',
    tags: ['google', 'prototyping', 'gemini'],
    imageUrl: 'https://picsum.photos/seed/aistudio/400/300'
  },
  {
    id: '77',
    name: 'Vertex AI',
    description: 'Google Cloud\'s enterprise MLOps platform. Build, deploy, and scale AI with Agent Builder, Model Garden (Gemini 3, Claude, Llama), and managed infrastructure.',
    category: Category.CODING,
    rating: 4.4,
    reviewCount: 2400,
    pricing: PricingModel.PAID,
    website: 'https://cloud.google.com/vertex-ai',
    tags: ['enterprise', 'mlops', 'google cloud'],
    imageUrl: 'https://picsum.photos/seed/vertexai/400/300'
  },
  {
    id: '92',
    name: 'Tabnine',
    description: 'Privacy-first AI coding assistant with on-premise deployment. Supports 80+ languages, trains on your private codebase. Enterprise-ready.',
    category: Category.CODING,
    rating: 4.5,
    reviewCount: 6800,
    pricing: PricingModel.FREEMIUM,
    website: 'https://tabnine.com',
    tags: ['privacy', 'enterprise', 'code completion'],
    imageUrl: 'https://picsum.photos/seed/tabnine/400/300'
  },
  {
    id: '94',
    name: 'Codeium',
    description: 'Free AI code completion tool supporting 70+ languages. Fast autocomplete, chat, and search across your codebase.',
    category: Category.CODING,
    rating: 4.6,
    reviewCount: 4900,
    pricing: PricingModel.FREE,
    website: 'https://codeium.com',
    tags: ['free', 'autocomplete', 'multi-language'],
    imageUrl: 'https://picsum.photos/seed/codeium/400/300'
  },
  {
    id: '128',
    name: 'Bolt.new',
    description: 'Browser-based AI app builder for instant prototyping. Zero setup, WebContainers for Node.js, live preview. Perfect for demos and hackathons.',
    category: Category.CODING,
    rating: 4.7,
    reviewCount: 4600,
    pricing: PricingModel.FREEMIUM,
    website: 'https://bolt.new',
    tags: ['app builder', 'prototyping', 'no-setup'],
    imageUrl: 'https://picsum.photos/seed/boltnew/400/300'
  },
  {
    id: '129',
    name: 'Lovable',
    description: 'AI app builder for full-stack MVPs from plain English prompts. Supabase integration, visual editing, real-time collaboration, and security scanning.',
    category: Category.CODING,
    rating: 4.8,
    reviewCount: 3500,
    pricing: PricingModel.FREEMIUM,
    website: 'https://lovable.dev',
    tags: ['app builder', 'mvp', 'full-stack'],
    imageUrl: 'https://picsum.photos/seed/lovable/400/300'
  },
  {
    id: '130',
    name: 'v0 by Vercel',
    description: 'AI UI component generator specialized for React/Next.js. Converts Figma designs to code, generates high-quality components from text prompts.',
    category: Category.CODING,
    rating: 4.6,
    reviewCount: 5200,
    pricing: PricingModel.FREEMIUM,
    website: 'https://v0.dev',
    tags: ['react', 'ui components', 'nextjs'],
    imageUrl: 'https://picsum.photos/seed/v0dev/400/300'
  },
  {
    id: '131',
    name: 'Windsurf',
    description: 'AI-first IDE with Cascade agent that anticipates bugs, offers real-time previews, and auto-linting. Predictable $15/month pricing.',
    category: Category.CODING,
    rating: 4.7,
    reviewCount: 3800,
    pricing: PricingModel.PAID,
    website: 'https://windsurf.com',
    tags: ['ide', 'agent', 'debugging'],
    imageUrl: 'https://picsum.photos/seed/windsurf/400/300'
  },
  {
    id: '132',
    name: 'Aider',
    description: 'AI pair programming in the terminal. Supports 100+ languages, Git integration with auto-commits, voice-to-code, and deep project context.',
    category: Category.CODING,
    rating: 4.5,
    reviewCount: 2900,
    pricing: PricingModel.FREE,
    website: 'https://aider.chat',
    tags: ['terminal', 'pair programming', 'git'],
    imageUrl: 'https://picsum.photos/seed/aider/400/300'
  },
  {
    id: '133',
    name: 'Codestral',
    description: 'Mistral AI\'s specialized coding model. Optimized for code generation, completion, and explanation across multiple languages.',
    category: Category.CODING,
    rating: 4.5,
    reviewCount: 2200,
    pricing: PricingModel.FREEMIUM,
    website: 'https://mistral.ai/products/codestral',
    tags: ['code generation', 'mistral', 'multi-language'],
    imageUrl: 'https://picsum.photos/seed/codestral/400/300'
  },

  // ============================================================
  // WRITING & CONTENT TOOLS
  // ============================================================
  {
    id: '134',
    name: 'Wordtune',
    description: 'AI writing companion for clarity and rephrasing. Multiple suggestion modes for professional, casual, and academic writing. Chrome extension.',
    category: Category.TEXT,
    rating: 4.6,
    reviewCount: 6800,
    pricing: PricingModel.FREEMIUM,
    website: 'https://wordtune.com',
    tags: ['writing', 'rephrasing', 'clarity'],
    imageUrl: 'https://picsum.photos/seed/wordtune/400/300'
  },
  {
    id: '135',
    name: 'Anyword',
    description: 'Performance-driven AI copywriting with predictive scoring. Analytics to optimize content for conversions. 30% avg lift in business results.',
    category: Category.MARKETING,
    rating: 4.8,
    reviewCount: 3100,
    pricing: PricingModel.PAID,
    website: 'https://anyword.com',
    tags: ['copywriting', 'analytics', 'conversions'],
    imageUrl: 'https://picsum.photos/seed/anyword/400/300'
  },
  {
    id: '136',
    name: 'Writer',
    description: 'Enterprise AI platform for building and deploying AI agents. Maintains brand consistency across large teams. Content governance built-in.',
    category: Category.TEXT,
    rating: 4.6,
    reviewCount: 2400,
    pricing: PricingModel.PAID,
    website: 'https://writer.com',
    tags: ['enterprise', 'brand', 'governance'],
    imageUrl: 'https://picsum.photos/seed/writerai/400/300'
  },
  {
    id: '137',
    name: 'Hemingway Editor',
    description: 'Writing style checker focused on readability. Highlights complex sentences, passive voice, and adverbs. AI-powered rewrites in Plus version.',
    category: Category.TEXT,
    rating: 4.4,
    reviewCount: 8200,
    pricing: PricingModel.FREEMIUM,
    website: 'https://hemingwayapp.com',
    tags: ['readability', 'style', 'editing'],
    imageUrl: 'https://picsum.photos/seed/hemingway/400/300'
  },
  {
    id: '138',
    name: 'Scalenut',
    description: 'AI SEO content platform with Cruise Mode for full blog posts in minutes. Keyword research, real-time SEO scoring, and content optimization.',
    category: Category.MARKETING,
    rating: 4.8,
    reviewCount: 4200,
    pricing: PricingModel.PAID,
    website: 'https://scalenut.com',
    tags: ['seo', 'blog writing', 'content planning'],
    imageUrl: 'https://picsum.photos/seed/scalenut/400/300'
  },
  {
    id: '139',
    name: 'Peppertype.ai',
    description: 'AI content marketing tool for blogs, social media ads, and SEO content. Clean UI, fast generation, and multiple content formats.',
    category: Category.MARKETING,
    rating: 4.6,
    reviewCount: 3800,
    pricing: PricingModel.PAID,
    website: 'https://peppertype.ai',
    tags: ['content marketing', 'blog posts', 'social ads'],
    imageUrl: 'https://picsum.photos/seed/peppertype/400/300'
  },

  // ============================================================
  // VIDEO TOOLS (Additional)
  // ============================================================
  {
    id: '140',
    name: 'CapCut',
    description: 'Free AI video editor with auto captions (130+ languages), AI avatars, script-to-video, background removal, and auto-reframe. Social media focused.',
    category: Category.VIDEO,
    rating: 4.4,
    reviewCount: 18500,
    pricing: PricingModel.FREEMIUM,
    website: 'https://capcut.com',
    tags: ['free editor', 'social media', 'captions'],
    imageUrl: 'https://picsum.photos/seed/capcut/400/300'
  },
  {
    id: '141',
    name: 'Lumen5',
    description: 'AI video maker for content marketing. Converts blog posts to videos with auto-storyboarding, stock footage matching, and brand templates.',
    category: Category.VIDEO,
    rating: 4.7,
    reviewCount: 5800,
    pricing: PricingModel.FREEMIUM,
    website: 'https://lumen5.com',
    tags: ['blog-to-video', 'marketing', 'templates'],
    imageUrl: 'https://picsum.photos/seed/lumen5/400/300'
  },
  {
    id: '142',
    name: 'Captions',
    description: 'AI video tool with auto-captions, multi-language dubbing (29+ languages), 3D avatars, eye contact correction, and noise removal.',
    category: Category.VIDEO,
    rating: 4.1,
    reviewCount: 3400,
    pricing: PricingModel.FREEMIUM,
    website: 'https://captions.ai',
    tags: ['captions', 'dubbing', 'avatars'],
    imageUrl: 'https://picsum.photos/seed/captionsai/400/300'
  },
  {
    id: '143',
    name: 'Pictory',
    description: 'AI video generator that turns long-form content into short branded videos. Auto-summarization, stock library, and team collaboration.',
    category: Category.VIDEO,
    rating: 4.5,
    reviewCount: 4100,
    pricing: PricingModel.PAID,
    website: 'https://pictory.ai',
    tags: ['repurposing', 'branded', 'short-form'],
    imageUrl: 'https://picsum.photos/seed/pictory/400/300'
  },
  {
    id: '144',
    name: 'Colossyan',
    description: 'AI video platform for corporate training. Multilingual AI presenters, scenario branching, and enterprise LMS integrations.',
    category: Category.VIDEO,
    rating: 4.6,
    reviewCount: 2100,
    pricing: PricingModel.PAID,
    website: 'https://colossyan.com',
    tags: ['training', 'corporate', 'multilingual'],
    imageUrl: 'https://picsum.photos/seed/colossyan/400/300'
  },
  {
    id: '145',
    name: 'Veed.io',
    description: 'Online AI video editor with auto-subtitles, background removal, screen recording, and AI avatars. Browser-based, no download needed.',
    category: Category.VIDEO,
    rating: 4.5,
    reviewCount: 7800,
    pricing: PricingModel.FREEMIUM,
    website: 'https://veed.io',
    tags: ['online editor', 'subtitles', 'screen recording'],
    imageUrl: 'https://picsum.photos/seed/veed/400/300'
  },

  // ============================================================
  // IMAGE GENERATION (Additional)
  // ============================================================
  {
    id: '89',
    name: 'Leonardo AI',
    description: 'AI art and design platform for high-quality images, textures, and concept art. Custom model training and integrated editing tools.',
    category: Category.IMAGE,
    rating: 4.7,
    reviewCount: 8900,
    pricing: PricingModel.FREEMIUM,
    website: 'https://leonardo.ai',
    tags: ['art', 'design', 'concept art'],
    imageUrl: 'https://picsum.photos/seed/leonardoai2/400/300'
  },
  {
    id: '90',
    name: 'Ideogram',
    description: 'AI image generator excelling at text rendering in images. Perfect for logos, posters, and social media graphics with clear typography.',
    category: Category.IMAGE,
    rating: 4.8,
    reviewCount: 5600,
    pricing: PricingModel.FREEMIUM,
    website: 'https://ideogram.ai',
    tags: ['text-in-image', 'logos', 'graphics'],
    imageUrl: 'https://picsum.photos/seed/ideogram/400/300'
  },
  {
    id: '91',
    name: 'Flux AI',
    description: 'Open-source image generation model with photorealistic output. Fast generation and creative control for artists and designers.',
    category: Category.IMAGE,
    rating: 4.6,
    reviewCount: 4100,
    pricing: PricingModel.FREE,
    website: 'https://flux.ai',
    tags: ['open source', 'photorealistic', 'fast'],
    imageUrl: 'https://picsum.photos/seed/flux/400/300'
  },
  {
    id: '86',
    name: 'Stability AI',
    description: 'Creator of Stable Diffusion 3.5 for image generation. Open-source, runs on consumer hardware, offers privacy with self-hosting.',
    category: Category.IMAGE,
    rating: 4.6,
    reviewCount: 15200,
    pricing: PricingModel.FREEMIUM,
    website: 'https://stability.ai',
    tags: ['image', 'open source', 'privacy'],
    imageUrl: 'https://picsum.photos/seed/stability/400/300'
  },
  {
    id: '146',
    name: 'NightCafe',
    description: 'AI art community and generator with multiple algorithms (Stable Diffusion, DALL-E). Daily free credits, community features, and print-on-demand.',
    category: Category.IMAGE,
    rating: 4.5,
    reviewCount: 6700,
    pricing: PricingModel.FREEMIUM,
    website: 'https://nightcafe.studio',
    tags: ['community', 'multiple models', 'art'],
    imageUrl: 'https://picsum.photos/seed/nightcafe/400/300'
  },
  {
    id: '147',
    name: 'Canva Magic Studio',
    description: 'AI design suite inside Canva. Magic Design, Magic Write, background remover, text-to-image, and brand kit automation.',
    category: Category.DESIGN,
    rating: 4.7,
    reviewCount: 25400,
    pricing: PricingModel.FREEMIUM,
    website: 'https://canva.com',
    tags: ['design', 'templates', 'all-in-one'],
    imageUrl: 'https://picsum.photos/seed/canvamagic/400/300'
  },

  // ============================================================
  // AUDIO & VOICE (Additional)
  // ============================================================
  {
    id: '148',
    name: 'Play.ht',
    description: 'AI voice generator with 900+ voices in 142 languages. Ultra-realistic speech synthesis for content creators and businesses.',
    category: Category.AUDIO,
    rating: 4.6,
    reviewCount: 3400,
    pricing: PricingModel.FREEMIUM,
    website: 'https://play.ht',
    tags: ['voice', 'multilingual', 'text-to-speech'],
    imageUrl: 'https://picsum.photos/seed/playht/400/300'
  },
  {
    id: '149',
    name: 'Resemble AI',
    description: 'AI voice cloning and synthesis for developers. Real-time voice conversion, custom voice creation, and anti-deepfake watermarking.',
    category: Category.AUDIO,
    rating: 4.5,
    reviewCount: 2100,
    pricing: PricingModel.PAID,
    website: 'https://resemble.ai',
    tags: ['voice cloning', 'developers', 'api'],
    imageUrl: 'https://picsum.photos/seed/resemble/400/300'
  },
  {
    id: '150',
    name: 'Podcastle',
    description: 'AI podcast creation platform. Recording, editing, transcription, and text-to-podcast conversion with studio-quality audio enhancement.',
    category: Category.AUDIO,
    rating: 4.6,
    reviewCount: 3600,
    pricing: PricingModel.FREEMIUM,
    website: 'https://podcastle.ai',
    tags: ['podcast', 'recording', 'editing'],
    imageUrl: 'https://picsum.photos/seed/podcastle/400/300'
  },

  // ============================================================
  // DATA ANALYTICS & BI
  // ============================================================
  {
    id: '95',
    name: 'Julius AI',
    description: 'AI data analyst that connects to databases and spreadsheets. Natural language queries, Python/R execution, and automated reporting.',
    category: Category.PRODUCTIVITY,
    rating: 4.5,
    reviewCount: 2800,
    pricing: PricingModel.FREEMIUM,
    website: 'https://julius.ai',
    tags: ['data analysis', 'databases', 'reporting'],
    imageUrl: 'https://picsum.photos/seed/julius/400/300'
  },
  {
    id: '96',
    name: 'Tableau AI',
    description: 'Industry-leading data visualization with AI-powered insights via Tableau Pulse. Automated anomaly detection and natural language queries.',
    category: Category.PRODUCTIVITY,
    rating: 4.7,
    reviewCount: 18500,
    pricing: PricingModel.PAID,
    website: 'https://tableau.com',
    tags: ['visualization', 'business intelligence', 'analytics'],
    imageUrl: 'https://picsum.photos/seed/tableau/400/300'
  },
  {
    id: '97',
    name: 'ChatCSV',
    description: 'Simple AI tool for CSV analysis through natural language. Quick insights and visualizations for non-technical users.',
    category: Category.PRODUCTIVITY,
    rating: 4.3,
    reviewCount: 1900,
    pricing: PricingModel.FREEMIUM,
    website: 'https://chatcsv.co',
    tags: ['csv', 'data analysis', 'simple'],
    imageUrl: 'https://picsum.photos/seed/chatcsv/400/300'
  },

  // ============================================================
  // CUSTOMER SERVICE AI
  // ============================================================
  {
    id: '98',
    name: 'Intercom Fin',
    description: 'AI customer service agent built on OpenAI. Handles complex queries, escalates to humans when needed. Reduces support volume by 44%.',
    category: Category.PRODUCTIVITY,
    rating: 4.4,
    reviewCount: 5600,
    pricing: PricingModel.PAID,
    website: 'https://intercom.com',
    tags: ['customer service', 'chatbot', 'support'],
    imageUrl: 'https://picsum.photos/seed/intercom/400/300'
  },
  {
    id: '99',
    name: 'Zendesk AI',
    description: 'Autonomous customer support AI trained on billions of interactions. Resolves 80%+ of common inquiries, cuts resolution time by 87%.',
    category: Category.PRODUCTIVITY,
    rating: 4.3,
    reviewCount: 12400,
    pricing: PricingModel.PAID,
    website: 'https://zendesk.com',
    tags: ['customer service', 'automation', 'enterprise'],
    imageUrl: 'https://picsum.photos/seed/zendesk/400/300'
  },
  {
    id: '151',
    name: 'Tidio',
    description: 'AI chatbot builder for e-commerce and small business. Live chat, email integration, and automated customer engagement. Easy setup.',
    category: Category.MARKETING,
    rating: 4.7,
    reviewCount: 6800,
    pricing: PricingModel.FREEMIUM,
    website: 'https://tidio.com',
    tags: ['chatbot', 'e-commerce', 'live chat'],
    imageUrl: 'https://picsum.photos/seed/tidio/400/300'
  },
  {
    id: '152',
    name: 'Freshdesk Freddy',
    description: 'Freshworks AI for customer support. Auto-prioritizes tickets, suggests responses, and provides smart routing across channels.',
    category: Category.PRODUCTIVITY,
    rating: 4.4,
    reviewCount: 5200,
    pricing: PricingModel.PAID,
    website: 'https://freshworks.com',
    tags: ['support', 'ticketing', 'automation'],
    imageUrl: 'https://picsum.photos/seed/freshdesk/400/300'
  },

  // ============================================================
  // PRESENTATIONS & DESIGN
  // ============================================================
  {
    id: '100',
    name: 'Gamma',
    description: 'AI-powered presentation maker. Create beautiful decks, docs, and webpages in seconds with AI-generated content and design.',
    category: Category.DESIGN,
    rating: 4.7,
    reviewCount: 6200,
    pricing: PricingModel.FREEMIUM,
    website: 'https://gamma.app',
    tags: ['presentations', 'slides', 'design'],
    imageUrl: 'https://picsum.photos/seed/gamma/400/300'
  },
  {
    id: '101',
    name: 'Beautiful.ai',
    description: 'Smart presentation software with AI-powered design. Auto-formatting and professional templates for business presentations.',
    category: Category.DESIGN,
    rating: 4.5,
    reviewCount: 3800,
    pricing: PricingModel.PAID,
    website: 'https://beautiful.ai',
    tags: ['presentations', 'business', 'templates'],
    imageUrl: 'https://picsum.photos/seed/beautifulai/400/300'
  },
  {
    id: '153',
    name: 'Figma AI',
    description: 'AI design features integrated into Figma. Auto-layout suggestions, content generation, and smart component recommendations.',
    category: Category.DESIGN,
    rating: 4.8,
    reviewCount: 12600,
    pricing: PricingModel.FREEMIUM,
    website: 'https://figma.com',
    tags: ['ui design', 'collaboration', 'prototyping'],
    imageUrl: 'https://picsum.photos/seed/figmaai/400/300'
  },

  // ============================================================
  // SEO & MARKETING
  // ============================================================
  {
    id: '102',
    name: 'Surfer SEO',
    description: 'AI SEO tool for content optimization. Real-time suggestions, keyword research, and SERP analysis.',
    category: Category.MARKETING,
    rating: 4.6,
    reviewCount: 4500,
    pricing: PricingModel.PAID,
    website: 'https://surferseo.com',
    tags: ['seo', 'content', 'optimization'],
    imageUrl: 'https://picsum.photos/seed/surferseo/400/300'
  },
  {
    id: '103',
    name: 'Frase',
    description: 'AI content optimization and research tool. Creates SEO-optimized briefs and content based on SERP analysis.',
    category: Category.MARKETING,
    rating: 4.5,
    reviewCount: 3200,
    pricing: PricingModel.PAID,
    website: 'https://frase.io',
    tags: ['seo', 'content research', 'briefs'],
    imageUrl: 'https://picsum.photos/seed/frase/400/300'
  },
  {
    id: '105',
    name: 'Lavender',
    description: 'AI email coach for sales teams. Real-time suggestions to improve email effectiveness and response rates.',
    category: Category.MARKETING,
    rating: 4.6,
    reviewCount: 2900,
    pricing: PricingModel.FREEMIUM,
    website: 'https://lavender.ai',
    tags: ['email', 'sales', 'coaching'],
    imageUrl: 'https://picsum.photos/seed/lavender/400/300'
  },
  {
    id: '108',
    name: 'Hootsuite Insights',
    description: 'AI-powered social media management with sentiment analysis, content suggestions, and optimal posting times.',
    category: Category.MARKETING,
    rating: 4.4,
    reviewCount: 9200,
    pricing: PricingModel.PAID,
    website: 'https://hootsuite.com',
    tags: ['social media', 'analytics', 'scheduling'],
    imageUrl: 'https://picsum.photos/seed/hootsuite/400/300'
  },
  {
    id: '109',
    name: 'Predis.ai',
    description: 'AI social media content generator. Creates posts, carousels, and videos for Instagram, Facebook, and LinkedIn.',
    category: Category.MARKETING,
    rating: 4.5,
    reviewCount: 2700,
    pricing: PricingModel.FREEMIUM,
    website: 'https://predis.ai',
    tags: ['social media', 'content creation', 'automation'],
    imageUrl: 'https://picsum.photos/seed/predis/400/300'
  },
  {
    id: '118',
    name: 'Gong',
    description: 'AI revenue intelligence platform. Analyzes sales calls, provides coaching insights, and forecasts deal outcomes.',
    category: Category.MARKETING,
    rating: 4.7,
    reviewCount: 5800,
    pricing: PricingModel.PAID,
    website: 'https://gong.io',
    tags: ['sales', 'revenue', 'analytics'],
    imageUrl: 'https://picsum.photos/seed/gong/400/300'
  },
  {
    id: '119',
    name: 'Clari',
    description: 'AI platform for revenue operations. Forecasting, pipeline management, and deal insights for sales teams.',
    category: Category.MARKETING,
    rating: 4.5,
    reviewCount: 3200,
    pricing: PricingModel.PAID,
    website: 'https://clari.com',
    tags: ['sales', 'forecasting', 'pipeline'],
    imageUrl: 'https://picsum.photos/seed/clari/400/300'
  },
  {
    id: '124',
    name: 'Shopify Magic',
    description: 'AI tools for e-commerce. Product descriptions, email campaigns, and customer support automation.',
    category: Category.MARKETING,
    rating: 4.5,
    reviewCount: 12600,
    pricing: PricingModel.PAID,
    website: 'https://shopify.com',
    tags: ['e-commerce', 'retail', 'automation'],
    imageUrl: 'https://picsum.photos/seed/shopify/400/300'
  },

  // ============================================================
  // EMAIL & COMMUNICATION
  // ============================================================
  {
    id: '104',
    name: 'Superhuman',
    description: 'AI-powered email client with auto-triage, instant replies, and follow-up reminders. Blazingly fast email management.',
    category: Category.PRODUCTIVITY,
    rating: 4.8,
    reviewCount: 5100,
    pricing: PricingModel.PAID,
    website: 'https://superhuman.com',
    tags: ['email', 'productivity', 'fast'],
    imageUrl: 'https://picsum.photos/seed/superhuman/400/300'
  },

  // ============================================================
  // MEETING & TRANSCRIPTION
  // ============================================================
  {
    id: '107',
    name: 'Fathom',
    description: 'Free AI meeting assistant. Records, transcribes, and highlights key moments. Zero-effort meeting notes.',
    category: Category.PRODUCTIVITY,
    rating: 4.7,
    reviewCount: 4300,
    pricing: PricingModel.FREE,
    website: 'https://fathom.video',
    tags: ['meetings', 'free', 'highlights'],
    imageUrl: 'https://picsum.photos/seed/fathom/400/300'
  },
  {
    id: '154',
    name: 'tl;dv',
    description: 'AI meeting recorder for Zoom, Google Meet, and Teams. Auto-timestamps, searchable transcripts, and AI meeting summaries.',
    category: Category.PRODUCTIVITY,
    rating: 4.6,
    reviewCount: 3800,
    pricing: PricingModel.FREEMIUM,
    website: 'https://tldv.io',
    tags: ['meetings', 'recording', 'summaries'],
    imageUrl: 'https://picsum.photos/seed/tldv/400/300'
  },

  // ============================================================
  // LEGAL & DOCUMENT AI
  // ============================================================
  {
    id: '110',
    name: 'Harvey AI',
    description: 'AI legal assistant for law firms. Contract analysis, legal research, and document drafting with domain-specific training.',
    category: Category.PRODUCTIVITY,
    rating: 4.6,
    reviewCount: 1800,
    pricing: PricingModel.PAID,
    website: 'https://harvey.ai',
    tags: ['legal', 'contracts', 'research'],
    imageUrl: 'https://picsum.photos/seed/harvey/400/300'
  },
  {
    id: '111',
    name: 'Docsumo',
    description: 'AI document processing for invoices, receipts, and forms. Automated data extraction with 99%+ accuracy.',
    category: Category.PRODUCTIVITY,
    rating: 4.5,
    reviewCount: 2100,
    pricing: PricingModel.PAID,
    website: 'https://docsumo.com',
    tags: ['documents', 'ocr', 'automation'],
    imageUrl: 'https://picsum.photos/seed/docsumo/400/300'
  },

  // ============================================================
  // HEALTHCARE AI
  // ============================================================
  {
    id: '112',
    name: 'Nabla',
    description: 'AI medical scribe for healthcare providers. Generates clinical notes from patient conversations, saving 2+ hours daily.',
    category: Category.PRODUCTIVITY,
    rating: 4.8,
    reviewCount: 3400,
    pricing: PricingModel.PAID,
    website: 'https://nabla.com',
    tags: ['healthcare', 'medical', 'transcription'],
    imageUrl: 'https://picsum.photos/seed/nabla/400/300'
  },

  // ============================================================
  // TRANSLATION
  // ============================================================
  {
    id: '113',
    name: 'DeepL',
    description: 'AI translation service with superior accuracy. Supports 31 languages with natural-sounding translations.',
    category: Category.PRODUCTIVITY,
    rating: 4.8,
    reviewCount: 14200,
    pricing: PricingModel.FREEMIUM,
    website: 'https://deepl.com',
    tags: ['translation', 'languages', 'accurate'],
    imageUrl: 'https://picsum.photos/seed/deepl/400/300'
  },

  // ============================================================
  // RESEARCH & ACADEMIC
  // ============================================================
  {
    id: '114',
    name: 'Consensus',
    description: 'AI research assistant that searches 200M+ academic papers. Evidence-based answers with citations.',
    category: Category.PRODUCTIVITY,
    rating: 4.6,
    reviewCount: 2900,
    pricing: PricingModel.FREEMIUM,
    website: 'https://consensus.app',
    tags: ['research', 'academic', 'papers'],
    imageUrl: 'https://picsum.photos/seed/consensus/400/300'
  },
  {
    id: '115',
    name: 'Elicit',
    description: 'AI research assistant for literature reviews. Finds relevant papers, extracts key claims, and summarizes findings.',
    category: Category.PRODUCTIVITY,
    rating: 4.5,
    reviewCount: 2400,
    pricing: PricingModel.FREEMIUM,
    website: 'https://elicit.org',
    tags: ['research', 'literature review', 'academic'],
    imageUrl: 'https://picsum.photos/seed/elicit/400/300'
  },
  {
    id: '155',
    name: 'Semantic Scholar',
    description: 'AI-powered academic search engine by Allen Institute. Finds relevant papers, highlights key findings, and tracks citations.',
    category: Category.PRODUCTIVITY,
    rating: 4.7,
    reviewCount: 8100,
    pricing: PricingModel.FREE,
    website: 'https://semanticscholar.org',
    tags: ['research', 'papers', 'citations'],
    imageUrl: 'https://picsum.photos/seed/semantic/400/300'
  },

  // ============================================================
  // PERSONAL ASSISTANTS & SCHEDULING
  // ============================================================
  {
    id: '116',
    name: 'Motion',
    description: 'AI calendar and project manager. Automatically schedules tasks, meetings, and blocks focus time for maximum productivity.',
    category: Category.PRODUCTIVITY,
    rating: 4.7,
    reviewCount: 3600,
    pricing: PricingModel.PAID,
    website: 'https://usemotion.com',
    tags: ['calendar', 'scheduling', 'productivity'],
    imageUrl: 'https://picsum.photos/seed/motion/400/300'
  },
  {
    id: '117',
    name: 'Reclaim.ai',
    description: 'Smart calendar assistant that defends your time. Auto-schedules habits, tasks, and meetings around your priorities.',
    category: Category.PRODUCTIVITY,
    rating: 4.6,
    reviewCount: 4100,
    pricing: PricingModel.FREEMIUM,
    website: 'https://reclaim.ai',
    tags: ['calendar', 'time management', 'habits'],
    imageUrl: 'https://picsum.photos/seed/reclaim/400/300'
  },

  // ============================================================
  // HR & RECRUITMENT
  // ============================================================
  {
    id: '120',
    name: 'Paradox',
    description: 'AI recruiting assistant that screens candidates, schedules interviews, and answers questions 24/7.',
    category: Category.PRODUCTIVITY,
    rating: 4.6,
    reviewCount: 2800,
    pricing: PricingModel.PAID,
    website: 'https://paradox.ai',
    tags: ['hr', 'recruiting', 'automation'],
    imageUrl: 'https://picsum.photos/seed/paradox/400/300'
  },

  // ============================================================
  // FINANCE & ACCOUNTING
  // ============================================================
  {
    id: '121',
    name: 'Truewind',
    description: 'AI-powered bookkeeping and finance for startups. Automated categorization, reconciliation, and financial reporting.',
    category: Category.PRODUCTIVITY,
    rating: 4.7,
    reviewCount: 1600,
    pricing: PricingModel.PAID,
    website: 'https://truewind.ai',
    tags: ['finance', 'accounting', 'startups'],
    imageUrl: 'https://picsum.photos/seed/truewind/400/300'
  },

  // ============================================================
  // EDUCATION & LEARNING
  // ============================================================
  {
    id: '122',
    name: 'Khan Academy Khanmigo',
    description: 'AI tutor for personalized learning. Guides students through problems without giving direct answers.',
    category: Category.PRODUCTIVITY,
    rating: 4.8,
    reviewCount: 5900,
    pricing: PricingModel.PAID,
    website: 'https://khanacademy.org',
    tags: ['education', 'tutoring', 'learning'],
    imageUrl: 'https://picsum.photos/seed/khanmigo/400/300'
  },
  {
    id: '123',
    name: 'Duolingo Max',
    description: 'AI-powered language learning with GPT-4. Conversational practice and personalized explanations.',
    category: Category.PRODUCTIVITY,
    rating: 4.7,
    reviewCount: 18200,
    pricing: PricingModel.FREEMIUM,
    website: 'https://duolingo.com',
    tags: ['language learning', 'education', 'practice'],
    imageUrl: 'https://picsum.photos/seed/duolingo/400/300'
  },

  // ============================================================
  // CYBERSECURITY
  // ============================================================
  {
    id: '125',
    name: 'Darktrace',
    description: 'AI cybersecurity platform that detects and responds to threats in real-time using self-learning AI.',
    category: Category.PRODUCTIVITY,
    rating: 4.6,
    reviewCount: 2100,
    pricing: PricingModel.PAID,
    website: 'https://darktrace.com',
    tags: ['security', 'threat detection', 'enterprise'],
    imageUrl: 'https://picsum.photos/seed/darktrace/400/300'
  },

  // ============================================================
  // PROJECT MANAGEMENT & AUTOMATION
  // ============================================================
  {
    id: '156',
    name: 'ClickUp AI',
    description: 'AI-powered project management with task generation, document summaries, writing assistance, and workflow automation.',
    category: Category.PRODUCTIVITY,
    rating: 4.5,
    reviewCount: 9800,
    pricing: PricingModel.FREEMIUM,
    website: 'https://clickup.com',
    tags: ['project management', 'tasks', 'automation'],
    imageUrl: 'https://picsum.photos/seed/clickup/400/300'
  },
  {
    id: '157',
    name: 'Monday AI',
    description: 'AI features in Monday.com for task management. Auto-assigns tasks, predicts timelines, and generates content for projects.',
    category: Category.PRODUCTIVITY,
    rating: 4.6,
    reviewCount: 11400,
    pricing: PricingModel.PAID,
    website: 'https://monday.com',
    tags: ['project management', 'team', 'workflows'],
    imageUrl: 'https://picsum.photos/seed/mondayai/400/300'
  },
  {
    id: '158',
    name: 'Make (Integromat)',
    description: 'Visual automation platform with AI. Connect 1,500+ apps with no-code workflows, AI-powered data transformation, and smart routing.',
    category: Category.PRODUCTIVITY,
    rating: 4.7,
    reviewCount: 7200,
    pricing: PricingModel.FREEMIUM,
    website: 'https://make.com',
    tags: ['automation', 'no-code', 'integrations'],
    imageUrl: 'https://picsum.photos/seed/make/400/300'
  },

  // ============================================================
  // SEARCH & KNOWLEDGE
  // ============================================================
  {
    id: '159',
    name: 'You.com',
    description: 'AI search engine with built-in AI chat, code generation, and image creation. Privacy-focused with no tracking.',
    category: Category.TEXT,
    rating: 4.4,
    reviewCount: 4200,
    pricing: PricingModel.FREEMIUM,
    website: 'https://you.com',
    tags: ['search', 'privacy', 'ai chat'],
    imageUrl: 'https://picsum.photos/seed/youcom/400/300'
  },
  {
    id: '160',
    name: 'Kagi',
    description: 'Premium AI search engine with zero ads and no tracking. Integrates with AI assistants for research and summarization.',
    category: Category.TEXT,
    rating: 4.8,
    reviewCount: 2800,
    pricing: PricingModel.PAID,
    website: 'https://kagi.com',
    tags: ['search', 'premium', 'no-ads'],
    imageUrl: 'https://picsum.photos/seed/kagi/400/300'
  },

  // ============================================================
  // 3D & SPATIAL AI
  // ============================================================
  {
    id: '161',
    name: 'Meshy',
    description: 'AI 3D model generator from text or image prompts. PBR textures, rigging support, and game-ready assets in minutes.',
    category: Category.DESIGN,
    rating: 4.5,
    reviewCount: 3200,
    pricing: PricingModel.FREEMIUM,
    website: 'https://meshy.ai',
    tags: ['3d', 'game assets', 'modeling'],
    imageUrl: 'https://picsum.photos/seed/meshy/400/300'
  },
  {
    id: '162',
    name: 'Spline AI',
    description: 'AI-powered 3D design tool in the browser. Generate 3D objects, scenes, and animations from text prompts.',
    category: Category.DESIGN,
    rating: 4.6,
    reviewCount: 4100,
    pricing: PricingModel.FREEMIUM,
    website: 'https://spline.design',
    tags: ['3d', 'browser', 'animations'],
    imageUrl: 'https://picsum.photos/seed/spline/400/300'
  },

  // ============================================================
  // NOTETAKING & KNOWLEDGE MANAGEMENT
  // ============================================================
  {
    id: '163',
    name: 'Reflect',
    description: 'AI-powered note-taking app with bidirectional linking. GPT-4 integration for summarization and idea generation.',
    category: Category.PRODUCTIVITY,
    rating: 4.6,
    reviewCount: 2400,
    pricing: PricingModel.PAID,
    website: 'https://reflect.app',
    tags: ['notes', 'knowledge graph', 'thinking'],
    imageUrl: 'https://picsum.photos/seed/reflect/400/300'
  },
  {
    id: '164',
    name: 'Obsidian AI',
    description: 'AI plugins for the popular Obsidian note-taking app. Local-first knowledge management with AI-assisted linking and summarization.',
    category: Category.PRODUCTIVITY,
    rating: 4.7,
    reviewCount: 8400,
    pricing: PricingModel.FREEMIUM,
    website: 'https://obsidian.md',
    tags: ['notes', 'local-first', 'knowledge base'],
    imageUrl: 'https://picsum.photos/seed/obsidian/400/300'
  },

  // ============================================================
  // SALES ENABLEMENT
  // ============================================================
  {
    id: '165',
    name: 'Apollo.io',
    description: 'AI-powered sales intelligence with 275M+ contacts. Automated outreach sequences, lead scoring, and CRM enrichment.',
    category: Category.MARKETING,
    rating: 4.7,
    reviewCount: 8900,
    pricing: PricingModel.FREEMIUM,
    website: 'https://apollo.io',
    tags: ['sales', 'leads', 'outreach'],
    imageUrl: 'https://picsum.photos/seed/apollo/400/300'
  },
  {
    id: '166',
    name: 'Clay',
    description: 'AI data enrichment and outreach platform. Combines 75+ data providers for hyper-personalized sales campaigns.',
    category: Category.MARKETING,
    rating: 4.8,
    reviewCount: 3400,
    pricing: PricingModel.PAID,
    website: 'https://clay.com',
    tags: ['enrichment', 'personalization', 'outbound'],
    imageUrl: 'https://picsum.photos/seed/clay/400/300'
  },

  // ============================================================
  // CAREER & RESUME BUILDING
  // ============================================================
  {
    id: '167',
    name: 'Rezi',
    description: 'AI resume builder that optimizes keywords for ATS systems to help you get hired.',
    category: Category.BUSINESS,
    rating: 4.8,
    reviewCount: 4200,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.rezi.ai',
    tags: ['resume', 'career', 'ats'],
    imageUrl: 'https://picsum.photos/seed/rezi/400/300'
  },
  {
    id: '168',
    name: 'Teal',
    description: 'All-in-one career growth platform. Track jobs, build resumes, and manage your search.',
    category: Category.BUSINESS,
    rating: 4.9,
    reviewCount: 3100,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.tealhq.com',
    tags: ['career', 'tracking', 'resume'],
    imageUrl: 'https://picsum.photos/seed/teal/400/300'
  },
  {
    id: '169',
    name: 'Kickresume',
    description: 'Create beautiful resumes and cover letters with the help of AI and customizable templates.',
    category: Category.BUSINESS,
    rating: 4.7,
    reviewCount: 2800,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.kickresume.com',
    tags: ['resume', 'cover letter', 'design'],
    imageUrl: 'https://picsum.photos/seed/kickresume/400/300'
  },
  {
    id: '170',
    name: 'Resume Worded',
    description: 'AI-powered resume feedback. Improve your resume and LinkedIn profile with instant feedback.',
    category: Category.BUSINESS,
    rating: 4.6,
    reviewCount: 1900,
    pricing: PricingModel.FREEMIUM,
    website: 'https://resumeworded.com',
    tags: ['feedback', 'linkedin', 'optimization'],
    imageUrl: 'https://picsum.photos/seed/resumeworded/400/300'
  },
  {
    id: '171',
    name: 'Jobscan',
    description: 'Optimize your resume, LinkedIn profile, and cover letter for ATS and recruiters.',
    category: Category.BUSINESS,
    rating: 4.5,
    reviewCount: 2500,
    pricing: PricingModel.PAID,
    website: 'https://www.jobscan.co',
    tags: ['ats', 'optimization', 'keywords'],
    imageUrl: 'https://picsum.photos/seed/jobscan/400/300'
  },
  {
    id: '172',
    name: 'WonsultingAI',
    description: 'AI career tools for networking, resume building, and interview prep.',
    category: Category.BUSINESS,
    rating: 4.7,
    reviewCount: 1500,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.wonsulting.com/ai',
    tags: ['networking', 'interview', 'career'],
    imageUrl: 'https://picsum.photos/seed/wonsulting/400/300'
  },

  // ============================================================
  // DOCUMENTATION & KNOWLEDGE
  // ============================================================
  {
    id: '173',
    name: 'Scribe',
    description: 'Turn any process into a step-by-step guide, instantly. Automatically generates how-to guides.',
    category: Category.PRODUCTIVITY,
    rating: 4.9,
    reviewCount: 5200,
    pricing: PricingModel.FREEMIUM,
    website: 'https://scribehow.com',
    tags: ['documentation', 'guides', 'process'],
    imageUrl: 'https://picsum.photos/seed/scribe/400/300'
  },
  {
    id: '174',
    name: 'Tango',
    description: 'Create beautiful how-to guides with screenshots, in seconds. Captures your workflow automatically.',
    category: Category.PRODUCTIVITY,
    rating: 4.8,
    reviewCount: 3800,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.tango.us',
    tags: ['guides', 'workflow', 'training'],
    imageUrl: 'https://picsum.photos/seed/tango/400/300'
  },
  {
    id: '175',
    name: 'Mintlify',
    description: 'Beautiful documentation that lives with your code.  AI-powered documentation writer.',
    category: Category.CODING,
    rating: 4.8,
    reviewCount: 1100,
    pricing: PricingModel.FREEMIUM,
    website: 'https://mintlify.com',
    tags: ['docs', 'developer', 'code'],
    imageUrl: 'https://picsum.photos/seed/mintlify/400/300'
  },
  {
    id: '176',
    name: 'GitBook',
    description: 'Knowledge management for technical teams. Documentation, but better, with AI search.',
    category: Category.CODING,
    rating: 4.7,
    reviewCount: 4500,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.gitbook.com',
    tags: ['docs', 'wiki', 'teams'],
    imageUrl: 'https://picsum.photos/seed/gitbook/400/300'
  },

  // ============================================================
  // PRESENTATIONS (PPT)
  // ============================================================
  {
    id: '177',
    name: 'SlidesAI',
    description: 'Generate professional presentation slides from any text in seconds using AI. Works with Google Slides.',
    category: Category.DESIGN,
    rating: 4.5,
    reviewCount: 12000,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.slidesai.io',
    tags: ['slides', 'google slides', 'presentation'],
    imageUrl: 'https://picsum.photos/seed/slidesai/400/300'
  },
  {
    id: '178',
    name: 'Decktopus',
    description: 'The world\'s #1 AI-powered presentation generator. Create decks in no time.',
    category: Category.DESIGN,
    rating: 4.6,
    reviewCount: 2100,
    pricing: PricingModel.FREEMIUM,
    website: 'https://decktopus.com',
    tags: ['decks', 'presentation', 'business'],
    imageUrl: 'https://picsum.photos/seed/decktopus/400/300'
  },
  {
    id: '179',
    name: 'Pitch',
    description: 'Collaborative presentation software for modern teams, with AI generation features.',
    category: Category.DESIGN,
    rating: 4.7,
    reviewCount: 3300,
    pricing: PricingModel.FREEMIUM,
    website: 'https://pitch.com',
    tags: ['collaboration', 'design', 'decks'],
    imageUrl: 'https://picsum.photos/seed/pitch/400/300'
  },

  // ============================================================
  // VOICE CONVERSATION & EMOTION
  // ============================================================
  {
    id: '180',
    name: 'Pi',
    description: 'A personalized AI, designed to be supportive, smart, and there for you anytime.  Great for voice conversation.',
    category: Category.TEXT,
    rating: 4.8,
    reviewCount: 6700,
    pricing: PricingModel.FREE,
    website: 'https://pi.ai',
    tags: ['conversation', 'support', 'voice'],
    imageUrl: 'https://picsum.photos/seed/pi/400/300'
  },
  {
    id: '181',
    name: 'Hume AI',
    description: 'The Empathic Voice Interface.  AI that understands and responds to human emotion in voice.',
    category: Category.AUDIO,
    rating: 4.7,
    reviewCount: 900,
    pricing: PricingModel.FREEMIUM,
    website: 'https://hume.ai',
    tags: ['emotion', 'voice', 'api'],
    imageUrl: 'https://picsum.photos/seed/hume/400/300'
  },

  // ============================================================
  // EMAIL WRITING
  // ============================================================
  {
    id: '182',
    name: 'Lavender',
    description: 'The #1 AI Sales Email Assistant. Write better emails faster and get more replies.',
    category: Category.MARKETING,
    rating: 4.9,
    reviewCount: 1400,
    pricing: PricingModel.PAID,
    website: 'https://www.lavender.ai',
    tags: ['sales', 'email', 'coaching'],
    imageUrl: 'https://picsum.photos/seed/lavender/400/300'
  },
  {
    id: '183',
    name: 'Warmer.ai',
    description: 'AI email personalization tool that helps you increase reply rates with hyper-personalized intros.',
    category: Category.MARKETING,
    rating: 4.4,
    reviewCount: 800,
    pricing: PricingModel.PAID,
    website: 'https://warmer.ai',
    tags: ['personalization', 'outreach', 'email'],
    imageUrl: 'https://picsum.photos/seed/warmer/400/300'
  },
  {
    id: '184',
    name: 'Ellie',
    description: 'Your AI email assistant. Learn your writing style and craft replies in seconds.',
    category: Category.TEXT,
    rating: 4.6,
    reviewCount: 1100,
    pricing: PricingModel.FREEMIUM,
    website: 'https://tryellie.com',
    tags: ['email', 'reply', 'assistant'],
    imageUrl: 'https://picsum.photos/seed/ellie/400/300'
  },

  // ============================================================
  // ADVANCED VIDEO EDITING
  // ============================================================
  {
    id: '185',
    name: 'Wisecut',
    description: 'AI video editor that automatically cuts silences, adds subtitles, and background music.',
    category: Category.VIDEO,
    rating: 4.5,
    reviewCount: 1600,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.wisecut.video',
    tags: ['editing', 'silence remover', 'subtitles'],
    imageUrl: 'https://picsum.photos/seed/wisecut/400/300'
  },
  {
    id: '186',
    name: 'Munch',
    description: 'Extract the most engaging clips from your long-form videos using AI.',
    category: Category.VIDEO,
    rating: 4.7,
    reviewCount: 2200,
    pricing: PricingModel.PAID,
    website: 'https://www.getmunch.com',
    tags: ['repurposing', 'clips', 'social'],
    imageUrl: 'https://picsum.photos/seed/munch/400/300'
  },
  {
    id: '187',
    name: 'Dumme',
    description: 'Generates shorts from your long videos with zero editing required.',
    category: Category.VIDEO,
    rating: 4.6,
    reviewCount: 1300,
    pricing: PricingModel.PAID,
    website: 'https://dumme.com',
    tags: ['shorts', 'clips', 'automation'],
    imageUrl: 'https://picsum.photos/seed/dumme/400/300'
  },
  {
    id: '188',
    name: 'Gling',
    description: 'AI video editor built for YouTubers. Automatically cuts bad takes and silences.',
    category: Category.VIDEO,
    rating: 4.8,
    reviewCount: 950,
    pricing: PricingModel.PAID,
    website: 'https://gling.ai',
    tags: ['youtube', 'editing', 'creators'],
    imageUrl: 'https://picsum.photos/seed/gling/400/300'
  },
  {
    id: '189',
    name: 'Kapwing',
    description: 'Collaborative online video editor with smart AI tools for modern creators.',
    category: Category.VIDEO,
    rating: 4.7,
    reviewCount: 5000,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.kapwing.com',
    tags: ['editor', 'online', 'collaborative'],
    imageUrl: 'https://picsum.photos/seed/kapwing/400/300'
  },
  {
    id: '190',
    name: 'Veed.io',
    description: 'Professional video editing, recording, hosting, and sharing platform. Powered by AI.',
    category: Category.VIDEO,
    rating: 4.6,
    reviewCount: 7500,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.veed.io',
    tags: ['editor', 'subtitles', 'recorder'],
    imageUrl: 'https://picsum.photos/seed/veed/400/300'
  },

  // ============================================================
  // MEETING ASSISTANTS
  // ============================================================
  {
    id: '191',
    name: 'Fathom',
    description: 'A free AI meeting assistant that records, transcribes, and summarizes your Zoom, Google Meet, and Microsoft Teams calls.',
    category: Category.PRODUCTIVITY,
    rating: 4.9,
    reviewCount: 3200,
    pricing: PricingModel.FREE,
    website: 'https://fathom.video',
    tags: ['meeting', 'recorder', 'summary'],
    imageUrl: 'https://picsum.photos/seed/fathom/400/300'
  },
  {
    id: '192',
    name: 'Supernormal',
    description: 'AI-powered notetaker specifically designed for Google Meet and Zoom. Captures meeting notes automatically.',
    category: Category.PRODUCTIVITY,
    rating: 4.7,
    reviewCount: 1800,
    pricing: PricingModel.FREEMIUM,
    website: 'https://supernormal.com',
    tags: ['notes', 'google meet', 'zoom'],
    imageUrl: 'https://picsum.photos/seed/supernormal/400/300'
  },
  {
    id: '193',
    name: 'Avoma',
    description: 'An AI meeting assistant for customer-facing teams. Analyze calls and get actionable insights.',
    category: Category.PRODUCTIVITY,
    rating: 4.6,
    reviewCount: 1200,
    pricing: PricingModel.PAID,
    website: 'https://www.avoma.com',
    tags: ['sales', 'customer success', 'analytics'],
    imageUrl: 'https://picsum.photos/seed/avoma/400/300'
  },
  {
    id: '194',
    name: 'MeetGeek',
    description: 'Your AI meeting assistant. Automatically record, transcribe, summarize, and share key insights from every meeting.',
    category: Category.PRODUCTIVITY,
    rating: 4.8,
    reviewCount: 2500,
    pricing: PricingModel.FREEMIUM,
    website: 'https://meetgeek.ai',
    tags: ['transcription', 'summary', 'insights'],
    imageUrl: 'https://picsum.photos/seed/meetgeek/400/300'
  },
  {
    id: '195',
    name: 'Grain',
    description: 'AI meeting recording tool that helps you capture, share, and build knowledge from your team\'s conversations.',
    category: Category.PRODUCTIVITY,
    rating: 4.7,
    reviewCount: 1500,
    pricing: PricingModel.FREEMIUM,
    website: 'https://grain.com',
    tags: ['clips', 'sharing', 'knowledge'],
    imageUrl: 'https://picsum.photos/seed/grain/400/300'
  },
  {
    id: '196',
    name: 'tl;dv',
    description: 'The meeting recorder for Zoom and Google Meet. Catch up on meetings in minutes.',
    category: Category.PRODUCTIVITY,
    rating: 4.8,
    reviewCount: 4100,
    pricing: PricingModel.FREEMIUM,
    website: 'https://tldv.io',
    tags: ['zoom', 'google meet', 'recorder'],
    imageUrl: 'https://picsum.photos/seed/tldv/400/300'
  },

  // ============================================================
  // ANIMATION
  // ============================================================
  {
    id: '197',
    name: 'Kaiber',
    description: 'Create animation videos from your own images or text prompts. Known for "Linkin Park" style music videos.',
    category: Category.VIDEO,
    rating: 4.7,
    reviewCount: 3800,
    pricing: PricingModel.PAID,
    website: 'https://kaiber.ai',
    tags: ['animation', 'stylized', 'music'],
    imageUrl: 'https://picsum.photos/seed/kaiber/400/300'
  },
  {
    id: '198',
    name: 'Plask',
    description: 'AI motion capture tool. Extract 3D motion from video without expensive suits.',
    category: Category.THREE_D,
    rating: 4.5,
    reviewCount: 1200,
    pricing: PricingModel.FREEMIUM,
    website: 'https://plask.ai',
    tags: ['mocap', 'animation', '3d'],
    imageUrl: 'https://picsum.photos/seed/plask/400/300'
  },
  {
    id: '199',
    name: 'Artflow.ai',
    description: 'Turn your stories into animated movies with consistent characters and scenes.',
    category: Category.VIDEO,
    rating: 4.6,
    reviewCount: 1500,
    pricing: PricingModel.FREEMIUM,
    website: 'https://artflow.ai',
    tags: ['storytelling', 'animation', 'characters'],
    imageUrl: 'https://picsum.photos/seed/artflow/400/300'
  },
  {
    id: '200',
    name: 'LottieLab',
    description: 'Create, edit and ship Lottie animations. Features AI text-to-animation capabilities.',
    category: Category.DESIGN,
    rating: 4.7,
    reviewCount: 900,
    pricing: PricingModel.FREEMIUM,
    website: 'https://lottielab.com',
    tags: ['lottie', 'web animation', 'ui'],
    imageUrl: 'https://picsum.photos/seed/lottielab/400/300'
  },

  // ============================================================
  // MOBILE APPLICATION BUILDING
  // ============================================================
  {
    id: '201',
    name: 'FlutterFlow',
    description: 'Build beautiful native apps in a visual interface. Use AI to generate code, pages, and components.',
    category: Category.CODING,
    rating: 4.8,
    reviewCount: 5500,
    pricing: PricingModel.FREEMIUM,
    website: 'https://flutterflow.io',
    tags: ['mobile', 'app builder', 'no-code'],
    imageUrl: 'https://picsum.photos/seed/flutterflow/400/300'
  },
  {
    id: '202',
    name: 'Imagica',
    description: 'Build functional AI apps from a simple text prompt. No coding required.',
    category: Category.CODING,
    rating: 4.5,
    reviewCount: 800,
    pricing: PricingModel.FREEMIUM,
    website: 'https://get.imagica.ai',
    tags: ['app builder', 'generative', 'no-code'],
    imageUrl: 'https://picsum.photos/seed/imagica/400/300'
  },
  {
    id: '203',
    name: 'Softr',
    description: 'Build portals and internal tools from Airtable or Google Sheets. AI generator builds apps for you.',
    category: Category.CODING,
    rating: 4.7,
    reviewCount: 2200,
    pricing: PricingModel.FREEMIUM,
    website: 'https://softr.io',
    tags: ['web apps', 'internal tools', 'business'],
    imageUrl: 'https://picsum.photos/seed/softr/400/300'
  },
  {
    id: '204',
    name: 'Glide',
    description: 'Create powerful apps from your data. AI powers the app generation and logic.',
    category: Category.CODING,
    rating: 4.8,
    reviewCount: 3100,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.glideapps.com',
    tags: ['mobile', 'business apps', 'data'],
    imageUrl: 'https://picsum.photos/seed/glide/400/300'
  },

  // ============================================================
  // STORYTELLING & WRITING
  // ============================================================
  {
    id: '205',
    name: 'NovelAI',
    description: 'A monthly subscription service for AI-assisted authorship and storytelling.',
    category: Category.TEXT,
    rating: 4.6,
    reviewCount: 2500,
    pricing: PricingModel.PAID,
    website: 'https://novelai.net',
    tags: ['fiction', 'story', 'writing'],
    imageUrl: 'https://picsum.photos/seed/novelai/400/300'
  },
  {
    id: '206',
    name: 'Charisma.ai',
    description: 'Create interactive stories with believable virtual characters that you can talk to.',
    category: Category.THREE_D,
    rating: 4.5,
    reviewCount: 600,
    pricing: PricingModel.FREEMIUM,
    website: 'https://charisma.ai',
    tags: ['interactive', 'games', 'narrative'],
    imageUrl: 'https://picsum.photos/seed/charisma/400/300'
  },
  {
    id: '207',
    name: 'Storybird.ai',
    description: 'Create personalized stories for children with illustrations in seconds.',
    category: Category.TEXT,
    rating: 4.7,
    reviewCount: 1100,
    pricing: PricingModel.FREEMIUM,
    website: 'https://storybird.ai',
    tags: ['kids', 'books', 'illustrated'],
    imageUrl: 'https://picsum.photos/seed/storybird/400/300'
  },

  // ============================================================
  // EDUCATION & LEARNING
  // ============================================================
  {
    id: '208',
    name: 'Khanmigo',
    description: 'Khan Academy\'s AI-powered guide. It acts as a tutor for students and an assistant for teachers.',
    category: Category.PRODUCTIVITY,
    rating: 4.9,
    reviewCount: 1500,
    pricing: PricingModel.PAID,
    website: 'https://www.khanacademy.org/khan-labs',
    tags: ['tutor', 'education', 'math'],
    imageUrl: 'https://picsum.photos/seed/khanmigo/400/300'
  },
  {
    id: '209',
    name: 'Duolingo Max',
    description: 'Subscription tier of Duolingo powered by GPT-4, featuring Roleplay and Explain My Answer.',
    category: Category.PRODUCTIVITY,
    rating: 4.8,
    reviewCount: 50000,
    pricing: PricingModel.PAID,
    website: 'https://www.duolingo.com',
    tags: ['language', 'learning', 'conversation'],
    imageUrl: 'https://picsum.photos/seed/duolingo/400/300'
  },
  {
    id: '210',
    name: 'Quizlet',
    description: 'AI-powered study tools. Magic Notes turns your notes into flashcards, quizzes, and outlines.',
    category: Category.PRODUCTIVITY,
    rating: 4.7,
    reviewCount: 14000,
    pricing: PricingModel.FREEMIUM,
    website: 'https://quizlet.com',
    tags: ['study', 'flashcards', 'students'],
    imageUrl: 'https://picsum.photos/seed/quizlet/400/300'
  },
  {
    id: '211',
    name: 'Socratic',
    description: 'Google app that helps students understand their school work at a high school and university level.',
    category: Category.PRODUCTIVITY,
    rating: 4.6,
    reviewCount: 8500,
    pricing: PricingModel.FREE,
    website: 'https://socratic.org',
    tags: ['homework', 'math', 'science'],
    imageUrl: 'https://picsum.photos/seed/socratic/400/300'
  },
  {
    id: '212',
    name: 'Coursera Coach',
    description: 'Interactive AI learning assistant integrated into Coursera courses.',
    category: Category.PRODUCTIVITY,
    rating: 4.5,
    reviewCount: 3000,
    pricing: PricingModel.PAID,
    website: 'https://www.coursera.org',
    tags: ['courses', 'professional', 'learning'],
    imageUrl: 'https://picsum.photos/seed/coursera/400/300'
  },

  // ============================================================
  // BUSINESS & MANAGEMENT
  // ============================================================
  {
    id: '213',
    name: 'Attio',
    description: 'A powerfully flexible CRM for modern teams. Real-time collaboration, endless customization, and AI-enhanced data enrichment.',
    category: Category.BUSINESS,
    rating: 4.8,
    reviewCount: 1500,
    pricing: PricingModel.FREEMIUM,
    website: 'https://attio.com',
    tags: ['crm', 'collaboration', 'database'],
    imageUrl: 'https://picsum.photos/seed/attio/400/300'
  },
  {
    id: '214',
    name: 'Jira Intelligence',
    description: 'Atlassian\'s AI features integrated into Jira. Automate tasks, summarize updates, and search across projects with natural language.',
    category: Category.PRODUCTIVITY,
    rating: 4.6,
    reviewCount: 25000,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.atlassian.com/software/jira',
    tags: ['project management', 'agile', 'tasks'],
    imageUrl: 'https://picsum.photos/seed/jira/400/300'
  },
  {
    id: '215',
    name: 'Base44',
    description: 'AI-powered app development platform. Build apps faster by leveraging AI for coding, design, and deployment.',
    category: Category.CODING,
    rating: 4.5,
    reviewCount: 600,
    pricing: PricingModel.PAID,
    website: 'https://www.base44.com',
    tags: ['app builder', 'development', 'ai'],
    imageUrl: 'https://picsum.photos/seed/base44/400/300'
  },

  // ============================================================
  // DEVELOPER TOOLS
  // ============================================================
  {
    id: '216',
    name: 'Google Cloud AI',
    description: 'A suite of machine learning services including Vision, Translation, and Natural Language APIs for developers.',
    category: Category.DATA,
    rating: 4.7,
    reviewCount: 12000,
    pricing: PricingModel.FREEMIUM,
    website: 'https://cloud.google.com/products/ai',
    tags: ['cloud', 'api', 'machine learning'],
    imageUrl: 'https://picsum.photos/seed/googlecloud/400/300'
  },
  {
    id: '217',
    name: 'JetBrains AI',
    description: 'AI assistant integrated into JetBrains IDEs. Context-aware code completion, refactoring, and explanations.',
    category: Category.CODING,
    rating: 4.8,
    reviewCount: 5000,
    pricing: PricingModel.PAID,
    website: 'https://www.jetbrains.com/ai',
    tags: ['ide', 'coding', 'intellij'],
    imageUrl: 'https://picsum.photos/seed/jetbrains/400/300'
  },

  // ============================================================
  // TRENDING 2025 TOOLS
  // ============================================================
  {
    id: '218',
    name: 'Lovable',
    description: 'GPT-4 powered full-stack app builder. Describe your app and get a fully functional react application.',
    category: Category.CODING,
    rating: 4.8,
    reviewCount: 900,
    pricing: PricingModel.PAID,
    website: 'https://lovable.dev',
    tags: ['app builder', 'react', 'full-stack'],
    imageUrl: 'https://picsum.photos/seed/lovable/400/300'
  },
  {
    id: '219',
    name: 'Bolt.new',
    description: 'Browser-based AI web development environment. Prompt to build, edit, and deploy full-stack apps instantly.',
    category: Category.CODING,
    rating: 4.9,
    reviewCount: 1500,
    pricing: PricingModel.FREE,
    website: 'https://bolt.new',
    tags: ['web dev', 'browser', 'instant'],
    imageUrl: 'https://picsum.photos/seed/bolt/400/300'
  },
  {
    id: '220',
    name: 'n8n',
    description: 'Workflow automation for technical people. Fair-code, self-hostable, and AI-native automation.',
    category: Category.PRODUCTIVITY,
    rating: 4.8,
    reviewCount: 2200,
    pricing: PricingModel.FREEMIUM,
    website: 'https://n8n.io',
    tags: ['automation', 'workflow', 'self-hosted'],
    imageUrl: 'https://picsum.photos/seed/n8n/400/300'
  },
  {
    id: '221',
    name: 'Humata AI',
    description: 'Chat with your files. AI that helps you read, understand, and extract data from complex documents faster.',
    category: Category.PRODUCTIVITY,
    rating: 4.6,
    reviewCount: 1800,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.humata.ai',
    tags: ['pdf', 'research', 'analysis'],
    imageUrl: 'https://picsum.photos/seed/humata/400/300'
  },
  {
    id: '222',
    name: 'Talkpal AI',
    description: 'The most advanced AI language tutor. Learn languages by chatting with an AI in realistic scenarios.',
    category: Category.PRODUCTIVITY,
    rating: 4.7,
    reviewCount: 3100,
    pricing: PricingModel.FREEMIUM,
    website: 'https://talkpal.ai',
    tags: ['language', 'tutor', 'learning'],
    imageUrl: 'https://picsum.photos/seed/talkpal/400/300'
  },
  {
    id: '223',
    name: 'Wondershare Filmora',
    description: 'Video editor with integrated AI features for copywriting, image generation, and smart editing.',
    category: Category.VIDEO,
    rating: 4.5,
    reviewCount: 15000,
    pricing: PricingModel.PAID,
    website: 'https://filmora.wondershare.com',
    tags: ['video editor', 'creative', 'effects'],
    imageUrl: 'https://picsum.photos/seed/filmora/400/300'
  },

  // ============================================================
  // ENTERPRISE & ECOSYSTEM
  // ============================================================
  {
    id: '224',
    name: 'Microsoft 365 Copilot',
    description: 'AI integrated into Word, Excel, PowerPoint, Outlook, and Teams to unleash creativity and productivity.',
    category: Category.PRODUCTIVITY,
    rating: 4.7,
    reviewCount: 15000,
    pricing: PricingModel.PAID,
    website: 'https://www.microsoft.com/en-us/microsoft-365/copilot',
    tags: ['enterprise', 'office', 'productivity'],
    imageUrl: 'https://picsum.photos/seed/m365copilot/400/300'
  },
  {
    id: '225',
    name: 'Zoom AI Companion',
    description: 'Generative AI assistant for Zoom. Summaries, smart recordings, and email drafting.',
    category: Category.PRODUCTIVITY,
    rating: 4.6,
    reviewCount: 8000,
    pricing: PricingModel.PAID,
    website: 'https://www.zoom.us/ai-assistant',
    tags: ['meetings', 'video conferencing', 'summary'],
    imageUrl: 'https://picsum.photos/seed/zoomai/400/300'
  },
  {
    id: '226',
    name: 'Google AI Studio',
    description: 'The fastest way to prototype with the latest Gemini models. Build generative AI apps quickly.',
    category: Category.CODING,
    rating: 4.8,
    reviewCount: 3500,
    pricing: PricingModel.FREE,
    website: 'https://aistudio.google.com',
    tags: ['developer', 'prototyping', 'gemini'],
    imageUrl: 'https://picsum.photos/seed/googlestudio/400/300'
  },
  {
    id: '227',
    name: 'NotebookLM',
    description: 'An AI-first notebook by Google. Upload docs and get instant summaries, answers, and synthesized insights.',
    category: Category.PRODUCTIVITY,
    rating: 4.9,
    reviewCount: 2200,
    pricing: PricingModel.FREE,
    website: 'https://notebooklm.google.com',
    tags: ['research', 'notes', 'study'],
    imageUrl: 'https://picsum.photos/seed/notebooklm/400/300'
  },
  {
    id: '228',
    name: 'Apple Intelligence',
    description: 'Personal intelligence system for iPhone, iPad, and Mac that combines generative models with personal context.',
    category: Category.PRODUCTIVITY,
    rating: 4.8,
    reviewCount: 10000,
    pricing: PricingModel.FREE,
    website: 'https://www.apple.com/apple-intelligence',
    tags: ['ios', 'native', 'personal'],
    imageUrl: 'https://picsum.photos/seed/appleintelligence/400/300'
  },
  {
    id: '213',
    name: 'Attio',
    description: 'A powerfully flexible CRM for modern teams. Real-time collaboration, endless customization, and AI-enhanced data enrichment.',
    category: Category.BUSINESS,
    rating: 4.8,
    reviewCount: 1500,
    pricing: PricingModel.FREEMIUM,
    website: 'https://attio.com',
    tags: ['crm', 'collaboration', 'database'],
    imageUrl: 'https://picsum.photos/seed/attio/400/300'
  },
  {
    id: '214',
    name: 'Jira Intelligence',
    description: 'Atlassian\'s AI features integrated into Jira. Automate tasks, summarize updates, and search across projects with natural language.',
    category: Category.PRODUCTIVITY,
    rating: 4.6,
    reviewCount: 25000,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.atlassian.com/software/jira',
    tags: ['project management', 'agile', 'tasks'],
    imageUrl: 'https://picsum.photos/seed/jira/400/300'
  },
  {
    id: '215',
    name: 'Base44',
    description: 'AI-powered app development platform. Build apps faster by leveraging AI for coding, design, and deployment.',
    category: Category.CODING,
    rating: 4.5,
    reviewCount: 600,
    pricing: PricingModel.PAID,
    website: 'https://www.base44.com',
    tags: ['app builder', 'development', 'ai'],
    imageUrl: 'https://picsum.photos/seed/base44/400/300'
  },

  // ============================================================
  // DEVELOPER TOOLS
  // ============================================================
  {
    id: '216',
    name: 'Google Cloud AI',
    description: 'A suite of machine learning services including Vision, Translation, and Natural Language APIs for developers.',
    category: Category.DATA,
    rating: 4.7,
    reviewCount: 12000,
    pricing: PricingModel.FREEMIUM,
    website: 'https://cloud.google.com/products/ai',
    tags: ['cloud', 'api', 'machine learning'],
    imageUrl: 'https://picsum.photos/seed/googlecloud/400/300'
  },
  {
    id: '217',
    name: 'JetBrains AI',
    description: 'AI assistant integrated into JetBrains IDEs. Context-aware code completion, refactoring, and explanations.',
    category: Category.CODING,
    rating: 4.8,
    reviewCount: 5000,
    pricing: PricingModel.PAID,
    website: 'https://www.jetbrains.com/ai',
    tags: ['ide', 'coding', 'intellij'],
    imageUrl: 'https://picsum.photos/seed/jetbrains/400/300'
  },

  // ============================================================
  // TRENDING 2025 TOOLS
  // ============================================================
  {
    id: '218',
    name: 'Lovable',
    description: 'GPT-4 powered full-stack app builder. Describe your app and get a fully functional react application.',
    category: Category.CODING,
    rating: 4.8,
    reviewCount: 900,
    pricing: PricingModel.PAID,
    website: 'https://lovable.dev',
    tags: ['app builder', 'react', 'full-stack'],
    imageUrl: 'https://picsum.photos/seed/lovable/400/300'
  },
  {
    id: '219',
    name: 'Bolt.new',
    description: 'Browser-based AI web development environment. Prompt to build, edit, and deploy full-stack apps instantly.',
    category: Category.CODING,
    rating: 4.9,
    reviewCount: 1500,
    pricing: PricingModel.FREE,
    website: 'https://bolt.new',
    tags: ['web dev', 'browser', 'instant'],
    imageUrl: 'https://picsum.photos/seed/bolt/400/300'
  },
  {
    id: '220',
    name: 'n8n',
    description: 'Workflow automation for technical people. Fair-code, self-hostable, and AI-native automation.',
    category: Category.PRODUCTIVITY,
    rating: 4.8,
    reviewCount: 2200,
    pricing: PricingModel.FREEMIUM,
    website: 'https://n8n.io',
    tags: ['automation', 'workflow', 'self-hosted'],
    imageUrl: 'https://picsum.photos/seed/n8n/400/300'
  },
  {
    id: '221',
    name: 'Humata AI',
    description: 'Chat with your files. AI that helps you read, understand, and extract data from complex documents faster.',
    category: Category.PRODUCTIVITY,
    rating: 4.6,
    reviewCount: 1800,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.humata.ai',
    tags: ['pdf', 'research', 'analysis'],
    imageUrl: 'https://picsum.photos/seed/humata/400/300'
  },
  {
    id: '222',
    name: 'Talkpal AI',
    description: 'The most advanced AI language tutor. Learn languages by chatting with an AI in realistic scenarios.',
    category: Category.PRODUCTIVITY,
    rating: 4.7,
    reviewCount: 3100,
    pricing: PricingModel.FREEMIUM,
    website: 'https://talkpal.ai',
    tags: ['language', 'tutor', 'learning'],
    imageUrl: 'https://picsum.photos/seed/talkpal/400/300'
  },
  {
    id: '223',
    name: 'Wondershare Filmora',
    description: 'Video editor with integrated AI features for copywriting, image generation, and smart editing.',
    category: Category.VIDEO,
    rating: 4.5,
    reviewCount: 15000,
    pricing: PricingModel.PAID,
    website: 'https://filmora.wondershare.com',
    tags: ['video editor', 'creative', 'effects'],
    imageUrl: 'https://picsum.photos/seed/filmora/400/300'
  },

  // ============================================================
  // ENTERPRISE & ECOSYSTEM
  // ============================================================
  {
    id: '224',
    name: 'Microsoft 365 Copilot',
    description: 'AI integrated into Word, Excel, PowerPoint, Outlook, and Teams to unleash creativity and productivity.',
    category: Category.PRODUCTIVITY,
    rating: 4.7,
    reviewCount: 15000,
    pricing: PricingModel.PAID,
    website: 'https://www.microsoft.com/en-us/microsoft-365/copilot',
    tags: ['enterprise', 'office', 'productivity'],
    imageUrl: 'https://picsum.photos/seed/m365copilot/400/300'
  },
  {
    id: '225',
    name: 'Zoom AI Companion',
    description: 'Generative AI assistant for Zoom. Summaries, smart recordings, and email drafting.',
    category: Category.PRODUCTIVITY,
    rating: 4.6,
    reviewCount: 8000,
    pricing: PricingModel.PAID,
    website: 'https://www.zoom.us/ai-assistant',
    tags: ['meetings', 'video conferencing', 'summary'],
    imageUrl: 'https://picsum.photos/seed/zoomai/400/300'
  },
  {
    id: '226',
    name: 'Google AI Studio',
    description: 'The fastest way to prototype with the latest Gemini models. Build generative AI apps quickly.',
    category: Category.CODING,
    rating: 4.8,
    reviewCount: 3500,
    pricing: PricingModel.FREE,
    website: 'https://aistudio.google.com',
    tags: ['developer', 'prototyping', 'gemini'],
    imageUrl: 'https://picsum.photos/seed/googlestudio/400/300'
  },
  {
    id: '227',
    name: 'NotebookLM',
    description: 'An AI-first notebook by Google. Upload docs and get instant summaries, answers, and synthesized insights.',
    category: Category.PRODUCTIVITY,
    rating: 4.9,
    reviewCount: 2200,
    pricing: PricingModel.FREE,
    website: 'https://notebooklm.google.com',
    tags: ['research', 'notes', 'study'],
    imageUrl: 'https://picsum.photos/seed/notebooklm/400/300'
  },
  {
    id: '228',
    name: 'Apple Intelligence',
    description: 'Personal intelligence system for iPhone, iPad, and Mac that combines generative models with personal context.',
    category: Category.PRODUCTIVITY,
    rating: 4.8,
    reviewCount: 10000,
    pricing: PricingModel.FREE,
    website: 'https://www.apple.com/apple-intelligence',
    tags: ['ios', 'native', 'personal'],
    imageUrl: 'https://picsum.photos/seed/appleintelligence/400/300'
  },

  {
    id: '1771447737890',
    name: 'Design Rails',
    description: 'Discussion | Link...',
    category: Category.PRODUCTIVITY,
    rating: 0,
    reviewCount: 0,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.producthunt.com/products/design-rails-ai-native-brand-in-mins',
    tags: ["new", "rss", "auto-discovered"],
    imageUrl: 'https://picsum.photos/seed/1771447737890/400/300'
  },
  {
    id: '1771453193291',
    name: 'Jasper Chat',
    // Sanitize description: escape quotes AND remove newlines to prevent syntax errors
    description: 'An AI chatbot for business that stays on brand and knows your company facts.',
    category: Category.MARKETING,
    rating: 0,
    reviewCount: 0,
    pricing: PricingModel.PAID,
    website: 'https://www.jasper.ai/chat',
    tags: ["chatbot", "business", "marketing"],
    imageUrl: 'https://picsum.photos/seed/1771453193291/400/300'
  },
  {
    id: '1771486816615',
    name: 'Flixier Generate AI Video in Timeline',
    // Sanitize description: escape quotes AND remove newlines to prevent syntax errors
    description: 'Discussion             |             Link...', 
    category: Category.PRODUCTIVITY,
    rating: 0,
    reviewCount: 0,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.producthunt.com/products/flixier',
    tags: ["new","rss","auto-discovered"],
    imageUrl: 'https://picsum.photos/seed/1771486816615/400/300'
  },
  {
    id: '1771500547124',
    name: 'Clawi.ai',
    // Sanitize description: escape quotes AND remove newlines to prevent syntax errors
    description: 'Discussion             |             Link...', 
    category: Category.PRODUCTIVITY,
    rating: 0,
    reviewCount: 0,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.producthunt.com/products/clawi-ai',
    tags: ["new","rss","auto-discovered"],
    imageUrl: 'https://picsum.photos/seed/1771500547124/400/300'
  },
  {
    id: '1771576003829',
    name: 'Repaint',
    // Sanitize description: escape quotes AND remove newlines to prevent syntax errors
    description: 'Discussion             |             Link...', 
    category: Category.PRODUCTIVITY,
    rating: 0,
    reviewCount: 0,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.producthunt.com/products/repaint-ai-website-builder',
    tags: ["new","rss","auto-discovered"],
    imageUrl: 'https://picsum.photos/seed/1771576003829/400/300'
  },
  {
    id: '1771583030080',
    name: 'keychains.dev',
    // Sanitize description: escape quotes AND remove newlines to prevent syntax errors
    description: 'Discussion             |             Link...', 
    category: Category.PRODUCTIVITY,
    rating: 0,
    reviewCount: 0,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.producthunt.com/products/keychain-dev',
    tags: ["new","rss","auto-discovered"],
    imageUrl: 'https://picsum.photos/seed/1771583030080/400/300'
  },
  {
    id: '1771748190278',
    name: 'Straion',
    // Sanitize description: escape quotes AND remove newlines to prevent syntax errors
    description: 'Discussion             |             Link...', 
    category: Category.PRODUCTIVITY,
    rating: 0,
    reviewCount: 0,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.producthunt.com/products/straion',
    tags: ["new","rss","auto-discovered"],
    imageUrl: 'https://picsum.photos/seed/1771748190278/400/300'
  },
  {
    id: '1771748190280',
    name: 'Superpowers AI',
    // Sanitize description: escape quotes AND remove newlines to prevent syntax errors
    description: 'Discussion             |             Link...', 
    category: Category.PRODUCTIVITY,
    rating: 0,
    reviewCount: 0,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.producthunt.com/products/superpowers-ai',
    tags: ["new","rss","auto-discovered"],
    imageUrl: 'https://picsum.photos/seed/1771748190280/400/300'
  },
  {
    id: '1771855139246',
    name: 'AnnotateAI',
    // Sanitize description: escape quotes AND remove newlines to prevent syntax errors
    description: 'Discussion             |             Link...', 
    category: Category.PRODUCTIVITY,
    rating: 0,
    reviewCount: 0,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.producthunt.com/products/annotateai',
    tags: ["new","rss","auto-discovered"],
    imageUrl: 'https://picsum.photos/seed/1771855139246/400/300'
  },
  {
    id: '1771925905678',
    name: 'Prosaic',
    // Sanitize description: escape quotes AND remove newlines to prevent syntax errors
    description: 'Discussion             |             Link...', 
    category: Category.PRODUCTIVITY,
    rating: 0,
    reviewCount: 0,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.producthunt.com/products/prosaic',
    tags: ["new","rss","auto-discovered"],
    imageUrl: 'https://picsum.photos/seed/1771925905678/400/300'
  },
  {
    id: '1771932650157',
    name: 'Live AI Design Benchmark',
    // Sanitize description: escape quotes AND remove newlines to prevent syntax errors
    description: 'Discussion             |             Link...', 
    category: Category.PRODUCTIVITY,
    rating: 0,
    reviewCount: 0,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.producthunt.com/products/live-ai-design-benchmark',
    tags: ["new","rss","auto-discovered"],
    imageUrl: 'https://picsum.photos/seed/1771932650157/400/300'
  },
  {
    id: '1771958506985',
    name: 'Nag Alarm AI',
    // Sanitize description: escape quotes AND remove newlines to prevent syntax errors
    description: 'Discussion             |             Link...', 
    category: Category.PRODUCTIVITY,
    rating: 0,
    reviewCount: 0,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.producthunt.com/products/nag-alarm-ai',
    tags: ["new","rss","auto-discovered"],
    imageUrl: 'https://picsum.photos/seed/1771958506985/400/300'
  },
  {
    id: '1771968156341',
    name: 'semn.ai',
    // Sanitize description: escape quotes AND remove newlines to prevent syntax errors
    description: 'Discussion             |             Link...', 
    category: Category.PRODUCTIVITY,
    rating: 0,
    reviewCount: 0,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.producthunt.com/products/semn-ai',
    tags: ["new","rss","auto-discovered"],
    imageUrl: 'https://picsum.photos/seed/1771968156341/400/300'
  },
  {
    id: '1772034368152',
    name: 'RamAIn',
    // Sanitize description: escape quotes AND remove newlines to prevent syntax errors
    description: 'Discussion             |             Link...', 
    category: Category.PRODUCTIVITY,
    rating: 0,
    reviewCount: 0,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.producthunt.com/products/ramain',
    tags: ["new","rss","auto-discovered"],
    imageUrl: 'https://picsum.photos/seed/1772034368152/400/300'
  },
  {
    id: '1772038506284',
    name: 'AskAIBase',
    // Sanitize description: escape quotes AND remove newlines to prevent syntax errors
    description: 'Discussion             |             Link...', 
    category: Category.PRODUCTIVITY,
    rating: 0,
    reviewCount: 0,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.producthunt.com/products/ask-7',
    tags: ["new","rss","auto-discovered"],
    imageUrl: 'https://picsum.photos/seed/1772038506284/400/300'
  },
  {
    id: '1772082843584',
    name: 'Yuma Social AI',
    // Sanitize description: escape quotes AND remove newlines to prevent syntax errors
    description: 'Discussion             |             Link...', 
    category: Category.PRODUCTIVITY,
    rating: 0,
    reviewCount: 0,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.producthunt.com/products/yuma-social-ai',
    tags: ["new","rss","auto-discovered"],
    imageUrl: 'https://picsum.photos/seed/1772082843584/400/300'
  },
  {
    id: '1772094666212',
    name: 'Rover by rtrvr.ai',
    // Sanitize description: escape quotes AND remove newlines to prevent syntax errors
    description: 'Discussion             |             Link...', 
    category: Category.PRODUCTIVITY,
    rating: 0,
    reviewCount: 0,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.producthunt.com/products/rtrvr-ai',
    tags: ["new","rss","auto-discovered"],
    imageUrl: 'https://picsum.photos/seed/1772094666212/400/300'
  },
  {
    id: '1772101976481',
    name: 'Digital Twin by Read AI',
    // Sanitize description: escape quotes AND remove newlines to prevent syntax errors
    description: 'Discussion             |             Link...', 
    category: Category.PRODUCTIVITY,
    rating: 0,
    reviewCount: 0,
    pricing: PricingModel.FREEMIUM,
    website: 'https://www.producthunt.com/products/read-dashboard',
    tags: ["new","rss","auto-discovered"],
    imageUrl: 'https://picsum.photos/seed/1772101976481/400/300'
  }];
