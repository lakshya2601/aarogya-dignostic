"use client";
import React from "react";

import Footer from "../components/Footer/Footer";

import Navbar from "../components/Navbar/navbar";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding the Importance of Regular Health Check-ups",
    excerpt: "Regular health check-ups are crucial for early detection and prevention of diseases. Learn why you shouldn't skip your annual check-up.",
    date: "2024-03-15",
    author: "Dr. Sharma",
    category: "Preventive Care",
    imageUrl: "/health-checkup.jpg"
  },
  {
    id: 2,
    title: "The Role of Diagnostic Tests in Modern Healthcare",
    excerpt: "Discover how advanced diagnostic tests are revolutionizing healthcare and improving patient outcomes.",
    date: "2024-03-10",
    author: "Dr. Patel",
    category: "Healthcare Technology",
    imageUrl: "/diagnostic-tests.jpg"
  },
  {
    id: 3,
    title: "Maintaining Heart Health: Tips and Guidelines",
    excerpt: "Expert advice on keeping your heart healthy through lifestyle changes and regular monitoring.",
    date: "2024-03-05",
    author: "Dr. Kumar",
    category: "Cardiology",
    imageUrl: "/heart-health.jpg"
  }
];

const BlogPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow mt-[120px] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-l from-[#325818] via-[#41691b] to-[#789e1f] bg-clip-text text-transparent">
          Health & Wellness Blog
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:bg-opacity-75">
              <div className="h-48 bg-gray-200">
                {/* Image placeholder */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  [Image Placeholder]
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-sm text-green-600 font-medium">{post.category}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h2 className="text-xl font-semibold mb-3 text-gray-800 hover:text-green-600 transition-colors duration-200">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {post.author}</span>
                  <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;