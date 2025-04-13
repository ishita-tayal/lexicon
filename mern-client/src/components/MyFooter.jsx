import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul>
                            <li><a href="#" className="hover:text-amber-500">About</a></li>
                            <li><a href="#" className="hover:text-amber-500">Careers</a></li>
                            <li><a href="#" className="hover:text-amber-500">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-amber-500">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li><a href="#" className="hover:text-amber-500">Shop</a></li>
                            <li><a href="#" className="hover:text-amber-500">Categories</a></li>
                            <li><a href="#" className="hover:text-amber-500">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <p className="text-gray-400 mb-4">Get updates on new arrivals, promotions, and more. Subscribe to our newsletter!</p>
                        <form action="#" method="POST" className="flex">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="px-4 py-2 bg-gray-700 text-white rounded-l-md"
                            />
                            <button type="submit" className="bg-amber-500 px-6 py-2 rounded-r-md text-white">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} Lexicon. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
