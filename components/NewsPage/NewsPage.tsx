"use client";
import React, { useState } from "react";
import {
  Calendar,
  User,
  Clock,
  Search,
  ChevronRight,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Eye,
  TrendingUp,
  Filter,
  Grid,
  List,
  ArrowRight,
  Tag,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Sparkles,
  Loader2,
} from "lucide-react";

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Gaming: What to Expect in 2026",
    excerpt:
      "Explore the upcoming trends in gaming technology, from AI-powered NPCs to cloud gaming innovations that will revolutionize how we play.",
    content: "Full content here...",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop",
    category: "Gaming News",
    author: {
      name: "Alex Chen",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop",
      role: "Senior Editor",
    },
    date: "Mar 15, 2026",
    readTime: "5 min read",
    views: 2345,
    likes: 189,
    comments: 42,
    tags: ["Gaming", "Technology", "Future"],
    featured: true,
  },
  {
    id: 2,
    title: "Top 10 RPGs You Must Play This Year",
    excerpt:
      "From epic adventures to indie gems, here's our curated list of the best role-playing games that deserve your attention.",
    image:
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800&auto=format&fit=crop",
    category: "Reviews",
    author: {
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108777-2961285e9489?w=100&auto=format&fit=crop",
      role: "Game Reviewer",
    },
    date: "Mar 12, 2026",
    readTime: "8 min read",
    views: 1876,
    likes: 234,
    comments: 56,
    tags: ["RPG", "Reviews", "Top 10"],
    featured: false,
  },
  {
    id: 3,
    title: "How to Build the Ultimate Gaming Setup",
    excerpt:
      "Complete guide to creating your dream gaming station with the best peripherals, monitors, and ergonomic furniture.",
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&auto=format&fit=crop",
    category: "Guides",
    author: {
      name: "Mike Wilson",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop",
      role: "Tech Expert",
    },
    date: "Mar 10, 2026",
    readTime: "12 min read",
    views: 3124,
    likes: 445,
    comments: 89,
    tags: ["Setup", "Hardware", "Guide"],
    featured: true,
  },
  {
    id: 4,
    title: "The Rise of Indie Games: Hidden Gems of 2026",
    excerpt:
      "Discover the most innovative indie games that are taking the gaming world by storm this year.",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop",
    category: "Features",
    author: {
      name: "Emma Davis",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop",
      role: "Indie Game Specialist",
    },
    date: "Mar 8, 2026",
    readTime: "6 min read",
    views: 1567,
    likes: 178,
    comments: 34,
    tags: ["Indie", "Hidden Gems", "Features"],
    featured: false,
  },
  {
    id: 5,
    title: "Esports Championship 2026: Complete Coverage",
    excerpt:
      "Everything you need to know about the biggest esports event of the year, including results and highlights.",
    image:
      "https://images.unsplash.com/photo-1542751110-97427fec2fd0?w=800&auto=format&fit=crop",
    category: "Esports",
    author: {
      name: "David Kim",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop",
      role: "Esports Analyst",
    },
    date: "Mar 5, 2026",
    readTime: "7 min read",
    views: 2890,
    likes: 312,
    comments: 67,
    tags: ["Esports", "Tournament", "Coverage"],
    featured: true,
  },
  {
    id: 6,
    title: "Gaming and Mental Health: The Positive Impact",
    excerpt:
      "Research shows how gaming can improve cognitive function, reduce stress, and build social connections.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop",
    category: "Wellness",
    author: {
      name: "Dr. Lisa Park",
      avatar:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&auto=format&fit=crop",
      role: "Mental Health Expert",
    },
    date: "Mar 3, 2026",
    readTime: "9 min read",
    views: 2123,
    likes: 267,
    comments: 51,
    tags: ["Health", "Wellness", "Research"],
    featured: false,
  },
];

// Categories
const categories = [
  { name: "All Posts", count: 42 },
  { name: "Gaming News", count: 12 },
  { name: "Reviews", count: 8 },
  { name: "Guides", count: 6 },
  { name: "Features", count: 5 },
  { name: "Esports", count: 4 },
  { name: "Wellness", count: 3 },
  { name: "Interviews", count: 4 },
];

// Popular tags
const popularTags = [
  "Gaming",
  "RPG",
  "Esports",
  "Indie",
  "Reviews",
  "Guides",
  "Technology",
  "Setup",
  "Multiplayer",
  "VR",
];

// Blog Card Component
const BlogCard = ({
  post,
  viewMode = "grid",
}: {
  post: any;
  viewMode?: "grid" | "list";
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  if (viewMode === "list") {
    return (
      <div className="group bg-[#2A2A2A] rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-72 h-64 md:h-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            {!imageLoaded && (
              <div className="absolute inset-0 bg-[#1a1a1a] flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
              </div>
            )}
            <img
              src={post.image}
              alt={post.title}
              className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setImageLoaded(true)}
            />
            {/* Category Badge */}
            <div className="absolute top-4 left-4 z-20">
              <span className="px-3 py-1.5 bg-purple-600/90 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            {/* Meta Info */}
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {post.views}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
              {post.title}
            </h2>

            {/* Excerpt */}
            <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>

            {/* Author */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-purple-500/20"
              />
              <div>
                <p className="text-white font-medium">{post.author.name}</p>
                <p className="text-xs text-gray-500">{post.author.role}</p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-[#1a1a1a] text-gray-400 text-xs rounded-full border border-gray-700 hover:border-purple-500 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-800">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors group"
                >
                  <Heart
                    className={`w-5 h-5 transition-all ${isLiked ? "fill-red-500 text-red-500" : ""}`}
                  />
                  <span>{post.likes + (isLiked ? 1 : 0)}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span>{post.comments}</span>
                </button>
                <button className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
              <button
                onClick={() => setIsSaved(!isSaved)}
                className={`transition-colors ${isSaved ? "text-purple-400" : "text-gray-400 hover:text-purple-400"}`}
              >
                <Bookmark
                  className={`w-5 h-5 ${isSaved ? "fill-purple-400" : ""}`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-[#2A2A2A] rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 h-full flex flex-col">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        {!imageLoaded && (
          <div className="absolute inset-0 bg-[#1a1a1a] flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
          </div>
        )}
        <img
          src={post.image}
          alt={post.title}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-20">
          <span className="px-2 py-1 bg-purple-600/90 backdrop-blur-sm text-white text-xs font-bold rounded-full">
            {post.category}
          </span>
        </div>

        {/* Featured Badge */}
        {post.featured && (
          <div className="absolute top-3 right-3 z-20">
            <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Meta Info */}
        <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-gray-400 mb-4 line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        {/* Author */}
        <div className="flex items-center gap-2 mb-4">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-8 h-8 rounded-full object-cover border-2 border-purple-500/20"
          />
          <div>
            <p className="text-sm text-white font-medium">{post.author.name}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="flex items-center gap-1 text-gray-400 hover:text-red-500 transition-colors text-sm"
            >
              <Heart
                className={`w-4 h-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`}
              />
              <span>{post.likes + (isLiked ? 1 : 0)}</span>
            </button>
            <button className="flex items-center gap-1 text-gray-400 hover:text-purple-400 transition-colors text-sm">
              <MessageCircle className="w-4 h-4" />
              <span>{post.comments}</span>
            </button>
          </div>
          <button
            onClick={() => setIsSaved(!isSaved)}
            className={`transition-colors ${isSaved ? "text-purple-400" : "text-gray-400 hover:text-purple-400"}`}
          >
            <Bookmark
              className={`w-4 h-4 ${isSaved ? "fill-purple-400" : ""}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

// Featured Post Component
const FeaturedPost = ({ post }: { post: any }) => (
  <div className="group relative bg-gradient-to-br from-[#2A2A2A] to-[#1f1f1f] rounded-3xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    <div className="grid md:grid-cols-2 gap-6">
      {/* Image */}
      <div className="relative h-80 md:h-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-transparent z-10"></div>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-bold rounded-full flex items-center gap-1">
            <Sparkles className="w-4 h-4" />
            Featured Story
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col justify-center">
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {post.author.name}
          </span>
          <span className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            {post.views} views
          </span>
        </div>

        <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
          {post.title}
        </h2>

        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-[#1a1a1a] text-gray-300 text-sm rounded-full border border-gray-700"
            >
              #{tag}
            </span>
          ))}
        </div>

        <button className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium group/btn">
          Read Full Story
          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </div>
);

// Main Component
const NewsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  // Filter posts
  const filteredPosts = regularPosts.filter((post) => {
    if (selectedCategory !== "All Posts" && post.category !== selectedCategory)
      return false;
    if (searchQuery) {
      return (
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      );
    }
    return true;
  });

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className="min-h-screen bg-[#1a1a1a]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#2A2A2A] text-white rounded-xl border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-3 rounded-xl border transition-colors ${
                viewMode === "grid"
                  ? "bg-purple-600 border-purple-500 text-white"
                  : "bg-[#2A2A2A] border-gray-700 text-gray-400 hover:border-purple-500"
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-3 rounded-xl border transition-colors ${
                viewMode === "list"
                  ? "bg-purple-600 border-purple-500 text-white"
                  : "bg-[#2A2A2A] border-gray-700 text-gray-400 hover:border-purple-500"
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && <FeaturedPost post={featuredPost} />}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Categories */}
              <div className="bg-[#2A2A2A] rounded-2xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                        selectedCategory === category.name
                          ? "bg-purple-600/20 text-purple-400"
                          : "hover:bg-white/5 text-gray-400"
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-sm text-gray-500">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-[#2A2A2A] rounded-2xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5" />
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      className="px-3 py-1.5 bg-[#1a1a1a] text-gray-400 text-sm rounded-full border border-gray-700 hover:border-purple-500 hover:text-purple-400 transition-colors"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-[#2A2A2A] rounded-2xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {[Facebook, Twitter, Instagram, Linkedin].map(
                    (Icon, index) => (
                      <a
                        key={index}
                        href="#"
                        className="w-10 h-10 bg-[#1a1a1a] rounded-xl flex items-center justify-center hover:bg-purple-600 transition-all duration-300 hover:scale-110"
                      >
                        <Icon className="w-5 h-5 text-gray-400 hover:text-white" />
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="lg:col-span-3">
            {currentPosts.length > 0 ? (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
                    : "space-y-6"
                }
              >
                {currentPosts.map((post) => (
                  <BlogCard key={post.id} post={post} viewMode={viewMode} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-[#2A2A2A] rounded-2xl border border-gray-800">
                <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  No posts found
                </h3>
                <p className="text-gray-400">
                  Try adjusting your search or filter
                </p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-10 h-10 rounded-xl font-medium transition-all ${
                      currentPage === i + 1
                        ? "bg-purple-600 text-white"
                        : "bg-[#2A2A2A] text-gray-400 hover:bg-purple-600/20 hover:text-purple-400"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
