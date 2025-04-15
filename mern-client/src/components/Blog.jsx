import React from "react";

const Blog = () => {
    const posts = [
        {
            title: "The Rise of Digital Reading",
            excerpt:
                "From dusty shelves to digital screens — how the way we read has evolved, and what it means for the future of books.",
            image:
                "https://images.unsplash.com/photo-1531219432768-9f540ce91ef8",
            author: "Aanya Verma",
            date: "April 10, 2025",
        },
        {
            title: "Top 5 Must-Read Classics Before You Turn 25",
            excerpt:
                "These timeless tales still hit different. Here’s a quick roundup of the classics that shaped generations.",
            image:
                "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
            author: "Rohan Mehta",
            date: "March 28, 2025",
        },
        {
            title: "Behind the Scenes at Lexicon",
            excerpt:
                "A peek into how we curate books, what inspires our team, and why Lexicon is more than just a bookstore.",
            image:
                "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e",
            author: "Team Lexicon",
            date: "March 12, 2025",
        },
    ];

    return (
        <div className="min-h-screen font-sans text-blue-700 bg-white">
            {/* Header */}
            <div className="bg-teal-50 py-20 px-6 md:px-20 text-center">
                <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Lexicon Blog</h1>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    Thoughts, reviews, stories, and everything bookish — straight from the Lexicon desk.
                </p>
            </div>

            {/* Blog Cards */}
            <div className="py-16 px-6 md:px-20 bg-white grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {posts.map((post, index) => (
                    <div
                        key={index}
                        className="bg-teal-50 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-teal-100"
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className="h-48 w-full object-cover rounded-t-2xl"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                            <p className="text-gray-700 text-sm mb-4">{post.excerpt}</p>
                            <div className="text-xs text-gray-500 italic">
                                By {post.author} • {post.date}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Newsletter or CTA Section */}
            <div className="bg-teal-50 py-16 px-6 md:px-20 text-center">
                <h2 className="text-3xl font-bold mb-4">Want more bookish content?</h2>
                <p className="text-gray-700 mb-6">
                    Subscribe to our newsletter for curated reading lists, blog drops, and literary recommendations.
                </p>
                <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold transition">
                    Subscribe Now
                </button>
            </div>

            {/* Footer Note */}
            <div className="bg-white py-10 text-center">
                <p className="text-blue-700 text-sm italic">
                    Stories that stick. Words that wander. — Lexicon Blog ✨
                </p>
                <p className="text-gray-500 text-xs mt-2">
                    Got something to share? Reach out to us at <a href="mailto:lexiconblog@read.in" className="text-blue-600 underline">lexiconblog@read.in</a>
                </p>
            </div>
        </div>
    );
};

export default Blog;
