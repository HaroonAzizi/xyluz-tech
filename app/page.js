"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/components/Logo";
import AnimatedBackground from "@/components/AnimatedBackground";
import CountdownTimer from "@/components/CountdownTimer";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Home() {
  const [email, setEmail] = useState("");
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set launch date to 30 days from now
  useEffect(() => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    alert(`Thank you for subscribing with: ${email}`);
    setEmail("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground />

      {/* Header */}
      <header className="relative z-10 py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Logo />
          <div className="text-3xl font-bold gradient-text">Xyluz Tech</div>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a
            href="#about"
            className="text-foreground hover:text-primary transition-colors"
          >
            About
          </a>
          <a
            href="#services"
            className="text-foreground hover:text-primary transition-colors"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl w-full text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            The Future of <span className="gradient-text">Technology</span> is
            Coming Soon
          </h1>
          <p className="text-xl text-muted mb-12 max-w-2xl mx-auto">
            We are building something amazing. Xyluz Tech is preparing to
            revolutionize the way you interact with technology.
          </p>

          {/* Countdown timer */}
          <CountdownTimer countdown={countdown} />

          {/* Newsletter signup */}
          <NewsletterSignup
            email={email}
            setEmail={setEmail}
            handleSubmit={handleSubmit}
          />

          {/* Services preview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12" id="services">
            <div className="card">
              <div className="text-secondary text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Fast Development</h3>
              <p className="text-muted">
                Rapid prototyping and development services for startups and
                enterprises.
              </p>
            </div>
            <div className="card">
              <div className="text-primary text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">Secure Solutions</h3>
              <p className="text-muted">
                Enterprise-grade security for all your technology needs.
              </p>
            </div>
            <div className="card">
              <div className="text-accent text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Scalable Architecture</h3>
              <p className="text-muted">
                Build systems that grow with your business needs.
              </p>
            </div>
          </div>

          {/* About section */}
          <div className="card mb-12" id="about">
            <h2 className="text-2xl font-bold mb-4">About Xyluz Tech</h2>
            <p className="text-muted mb-4">
              XyluZ Tech is a forward-thinking technology company focused on
              creating innovative solutions for modern businesses. Our team of
              experts specializes in web development, mobile applications, cloud
              infrastructure, and AI solutions.
            </p>
            <p className="text-muted">
              Founded with a mission to make cutting-edge technology accessible
              to businesses of all sizes, we are committed to delivering
              high-quality, scalable, and secure solutions.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 sm:px-6 lg:px-8 border-t border-muted/20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted mb-4 md:mb-0">
            © {new Date().getFullYear()} XyluZ Tech. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="https://twitter.com/az_haroon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="https://github.com/HaroonAzizi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/haroon-azizi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
