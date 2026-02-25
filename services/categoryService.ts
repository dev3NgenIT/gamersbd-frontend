// services/categoryService.ts
const API_BASE_URL = 'https://gamersbd-server.onrender.com/api';

export interface Category {
  _id: string;
  name: string;
  description: string;
  image: string | null;
  parent: {
    _id: string;
    name: string;
  } | null;
  level: number;
  createdAt: string;
}

export interface CategoryWithSubs extends Category {
  icon: string;
  subcategories: CategoryWithSubs[];
}

// Map category names to emoji icons
const categoryIcons: Record<string, string> = {
  'Collectibles': '🏆',
  'Video Games': '🎮',
  'Gaming Consoles': '🕹️',
  'Toys': '🧸',
  'Board Games': '🎲',
  'Card Games': '🃏',
  'Gaming Accessories': '🎧',
  'PS5 Games': '🎮',
  'PS4 Games': '🎮',
  'Xbox Series X|S Games': '🎮',
  'Xbox One Games': '🎮',
  'Nintendo Switch Games': '🎮',
  'PC Games': '💻',
  'PlayStation 5': '🕹️',
  'PlayStation 4': '🕹️',
  'Xbox Series X': '🕹️',
  'Nintendo Switch': '🕹️',
  'Action Figures': '🦸',
  'Remote Control Toys': '🚗',
  'Educational Toys': '📚',
  'Video Games with Image': '🎮'
};

// Fallback categories in case API fails
const fallbackCategories: Category[] = [
  {
    _id: "1",
    name: "Video Games",
    description: "All video games for all gaming platforms",
    image: null,
    parent: null,
    level: 0,
    createdAt: new Date().toISOString()
  },
  {
    _id: "2",
    name: "Gaming Consoles",
    description: "PlayStation, Xbox, Nintendo and more",
    image: null,
    parent: null,
    level: 0,
    createdAt: new Date().toISOString()
  },
  {
    _id: "3",
    name: "Toys",
    description: "Action figures, cars, educational toys and more",
    image: null,
    parent: null,
    level: 0,
    createdAt: new Date().toISOString()
  },
  {
    _id: "4",
    name: "Gaming Accessories",
    description: "Headsets, controllers, keyboards and more",
    image: null,
    parent: null,
    level: 0,
    createdAt: new Date().toISOString()
  },
  {
    _id: "5",
    name: "Collectibles",
    description: "Limited edition figures, statues and memorabilia",
    image: null,
    parent: null,
    level: 0,
    createdAt: new Date().toISOString()
  }
];

// Fallback subcategories
const fallbackSubCategories: Category[] = [
  {
    _id: "6",
    name: "PS5 Games",
    description: "PlayStation 5 exclusive and multi-platform games",
    image: null,
    parent: { _id: "1", name: "Video Games" },
    level: 1,
    createdAt: new Date().toISOString()
  },
  {
    _id: "7",
    name: "PS4 Games",
    description: "PlayStation 4 games",
    image: null,
    parent: { _id: "1", name: "Video Games" },
    level: 1,
    createdAt: new Date().toISOString()
  },
  {
    _id: "8",
    name: "Xbox Series X|S Games",
    description: "Xbox Series X and Series S games",
    image: null,
    parent: { _id: "1", name: "Video Games" },
    level: 1,
    createdAt: new Date().toISOString()
  },
  {
    _id: "9",
    name: "Nintendo Switch Games",
    description: "Nintendo Switch exclusive and multi-platform games",
    image: null,
    parent: { _id: "1", name: "Video Games" },
    level: 1,
    createdAt: new Date().toISOString()
  },
  {
    _id: "10",
    name: "PC Games",
    description: "Computer games - Steam, Epic, GOG",
    image: null,
    parent: { _id: "1", name: "Video Games" },
    level: 1,
    createdAt: new Date().toISOString()
  },
  {
    _id: "11",
    name: "PlayStation 5",
    description: "PS5 consoles, bundles and accessories",
    image: null,
    parent: { _id: "2", name: "Gaming Consoles" },
    level: 1,
    createdAt: new Date().toISOString()
  },
  {
    _id: "12",
    name: "Xbox Series X",
    description: "Xbox Series X consoles and bundles",
    image: null,
    parent: { _id: "2", name: "Gaming Consoles" },
    level: 1,
    createdAt: new Date().toISOString()
  },
  {
    _id: "13",
    name: "Nintendo Switch",
    description: "Nintendo Switch, Switch OLED and Switch Lite",
    image: null,
    parent: { _id: "2", name: "Gaming Consoles" },
    level: 1,
    createdAt: new Date().toISOString()
  }
];

export const categoryService = {
  // Fetch all categories with timeout and retry
  async getAllCategories(): Promise<Category[]> {
    // Try up to 3 times
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        console.log(`Attempting to fetch categories (attempt ${attempt}/3)...`);
        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

        const response = await fetch(`${API_BASE_URL}/categories`, {
          signal: controller.signal,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Categories fetched successfully:', data);
        
        if (data.success && Array.isArray(data.data)) {
          return data.data;
        } else {
          throw new Error('Invalid response format');
        }
      } catch (error) {
        console.error(`Attempt ${attempt} failed:`, error);
        
        if (attempt === 3) {
          console.warn('All fetch attempts failed. Using fallback categories.');
          // Combine fallback categories with subcategories
          return [...fallbackCategories, ...fallbackSubCategories];
        }
        
        // Wait before retrying (exponential backoff)
        await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
      }
    }
    
    return [];
  },

  // Build category tree based on parent field
  buildCategoryTree(categories: Category[]): CategoryWithSubs[] {
    // First, separate root categories (parent = null) from subcategories
    const rootCategories: CategoryWithSubs[] = [];
    const subCategories: Category[] = [];

    // Add icon to each category
    const categoriesWithIcons = categories.map(cat => ({
      ...cat,
      icon: categoryIcons[cat.name] || this.getDefaultIcon(cat.name)
    }));

    // Separate roots and subs
    categoriesWithIcons.forEach(cat => {
      if (!cat.parent) {
        // This is a root category
        rootCategories.push({
          ...cat,
          subcategories: []
        });
      } else {
        // This is a subcategory
        subCategories.push(cat);
      }
    });

    // Build the hierarchy by matching subcategories to their parents
    rootCategories.forEach(root => {
      root.subcategories = subCategories
        .filter(sub => sub.parent && sub.parent._id === root._id)
        .map(sub => ({
          ...sub,
          subcategories: [] // Subcategories can have their own subs (level 2)
        }));

      // Handle level 2 subcategories (subcategories of subcategories)
      if (root.subcategories.length > 0) {
        root.subcategories.forEach(sub => {
          sub.subcategories = subCategories
            .filter(s => s.parent && s.parent._id === sub._id)
            .map(s => ({
              ...s,
              subcategories: []
            }));
        });
      }
    });

    // Sort alphabetically
    rootCategories.sort((a, b) => a.name.localeCompare(b.name));
    rootCategories.forEach(root => {
      if (root.subcategories.length > 0) {
        root.subcategories.sort((a, b) => a.name.localeCompare(b.name));
        root.subcategories.forEach(sub => {
          if (sub.subcategories.length > 0) {
            sub.subcategories.sort((a, b) => a.name.localeCompare(b.name));
          }
        });
      }
    });

    return rootCategories;
  },

  // Get default icon based on category name
  getDefaultIcon(categoryName: string): string {
    const name = categoryName.toLowerCase();
    if (name.includes('game')) return '🎮';
    if (name.includes('console')) return '🕹️';
    if (name.includes('toy')) return '🧸';
    if (name.includes('accessory')) return '🎧';
    if (name.includes('collect')) return '🏆';
    if (name.includes('card')) return '🃏';
    if (name.includes('board')) return '🎲';
    if (name.includes('action')) return '🦸';
    if (name.includes('remote')) return '🚗';
    if (name.includes('educational')) return '📚';
    return '📦';
  },

  // Get root categories (parent = null)
  getRootCategories(categories: Category[]): Category[] {
    return categories.filter(cat => cat.parent === null);
  },

  // Get subcategories for a specific parent ID
  getSubcategoriesByParentId(categories: Category[], parentId: string): Category[] {
    return categories.filter(cat => cat.parent && cat.parent._id === parentId);
  },

  // Get category by ID
  getCategoryById(categories: Category[], id: string): Category | undefined {
    return categories.find(cat => cat._id === id);
  },

  // Get category by name
  getCategoryByName(categories: Category[], name: string): Category | undefined {
    return categories.find(cat => cat.name === name);
  }
};