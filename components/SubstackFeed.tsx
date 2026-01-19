"use client";

import { useState, useEffect } from "react";

interface SubstackPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

export default function SubstackFeed() {
  const [posts, setPosts] = useState<SubstackPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Using RSS2JSON service to convert Substack RSS to JSON
        // Update 'andrewmcdonald' to your actual Substack subdomain
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://andrewmcdonald.substack.com/feed`
        );
        const data = await response.json();

        if (data.status === "ok") {
          // Get only the 3 most recent posts
          setPosts(data.items.slice(0, 3));
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Error fetching Substack posts:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[rgb(184,144,87)] text-4xl sm:text-5xl font-bold text-center mb-16">
            Recent Writing
          </h2>
          <div className="text-center text-gray-600">Loading posts...</div>
        </div>
      </section>
    );
  }

  if (error || posts.length === 0) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[rgb(184,144,87)] text-4xl sm:text-5xl font-bold text-center mb-16">
            Recent Writing
          </h2>
          <div className="text-center">
            <p className="text-gray-700 mb-6">
              Check out my latest thoughts and reflections on men's work, authenticity, and personal growth.
            </p>
            <a
              href="https://andrewmcdonald.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(20,30,70)] text-white py-3 px-8 rounded-md font-semibold hover:bg-[rgb(30,40,80)] transition-colors"
            >
              Read on Substack
            </a>
          </div>
        </div>
      </section>
    );
  }

  const stripHtml = (html: string) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[rgb(184,144,87)] text-4xl sm:text-5xl font-bold text-center mb-16">
          Recent Writing
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-[rgb(245,242,235)] rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-[rgb(20,30,70)] mb-3">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{formatDate(post.pubDate)}</p>
              <p className="text-gray-700 mb-4 line-clamp-3">
                {stripHtml(post.description).substring(0, 150)}...
              </p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgb(184,144,87)] hover:text-[rgb(200,170,120)] font-semibold transition-colors"
              >
                Read More →
              </a>
            </article>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://andrewmcdonald.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(20,30,70)] text-white py-3 px-8 rounded-md font-semibold hover:bg-[rgb(30,40,80)] transition-colors"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
}
