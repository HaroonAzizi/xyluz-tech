import React from "react";

export default function NewsletterSignup({ email, setEmail, handleSubmit }) {
  return (
    <div className="card max-w-md mx-auto mb-12" id="contact">
      <h2 className="text-2xl font-bold mb-4">Get Notified When We Launch</h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow px-4 py-3 rounded-lg bg-background border border-muted focus:outline-none focus:border-primary"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn-primary whitespace-nowrap">
          Notify Me
        </button>
      </form>
    </div>
  );
}
