import { ImageResponse } from "next/og";
import { generateSVGFavicon } from "./favicon";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
        dangerouslySetInnerHTML={{ __html: generateSVGFavicon() }}
      />
    ),
    {
      ...size,
    }
  );
}
