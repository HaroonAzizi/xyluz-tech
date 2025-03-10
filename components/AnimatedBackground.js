import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Gradient blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary opacity-10 rounded-full filter blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-72 h-72 bg-accent opacity-10 rounded-full filter blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary opacity-5 rounded-full filter blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
    </div>
  );
}
