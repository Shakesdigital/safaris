import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-safari-green text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-bold mb-3">About Us</h3>
            <p className="text-gray-300">Inspiring and crafting unforgettable safari experiences across Uganda</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Contact</h3>
            <p className="text-gray-300">Email: info@shakestravel.com</p>
            <p className="text-gray-300">Phone: +256 XXX XXX XXX</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Address</h3>
            <p className="text-gray-300">Kampala, Uganda</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8 border-t border-gray-600 pt-4">
          <p className="text-sm text-gray-300">&copy; {new Date().getFullYear()} All rights reserved.</p>
          <img src="/logo.png" alt="Shakes Travel Logo" className="h-16 w-auto" />
        </div>
      </div>
    </footer>
  );
}