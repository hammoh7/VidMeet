"use client";
import { MessageCircleCode } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const Home = () => {
  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <header className="bg-transparent py-6 px-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <MessageCircleCode className="text-white h-8 w-8 mr-2" />
            <Link href="/" className="font-bold text-2xl">
              VidMeet
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/about" className="hover:text-gray-300 transition-colors duration-300">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors duration-300">
              Contact Us
            </Link>
          </div>
        </nav>
      </header>

      <div className="flex justify-center items-center flex-row py-5">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl font-bold mb-6">Your one-stop solution for seamless communication</h1>
          <p className="text-lg mb-10">
            Join VidMeet and connect around the world anywhere from anywhere
          </p>
          <Link
            href="/lobby"
            className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-indigo-700 hover:text-white transition-colors duration-300"
          >
            Join the Conversation
          </Link>
        </div>
        <div className="mt-20">
          <Image
            src="/VidMeet.jpeg"
            alt="Video Conference"
            width={450}
            height={350}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      <footer className="bg-white py-5 px-8 shadow-md">
        <div className="md:max-w-screen-xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <MessageCircleCode className="text-indigo-600 h-8 w-8 mr-2" />
            <Link href="/" className="font-bold text-lg text-indigo-600">
              VidMeet
            </Link>
          </div>
          <div className="flex items-center space-x-6 text-gray-600">
            <Link href="/privacy-policy" className="hover:text-indigo-600 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-indigo-600 transition-colors duration-300">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
};