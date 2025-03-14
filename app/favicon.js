// This file is no longer needed as we'll use static favicon files
export function generateSVGFavicon() {
  return `<svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="8" fill="url(#paint0_linear)" />
        <path d="M10 10L20 30L30 10" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10 20H30" stroke="white" stroke-width="3" stroke-linecap="round" />
        <defs>
          <linearGradient id="paint0_linear" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stop-color="#3B82F6" />
            <stop offset="1" stop-color="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>`;
}
