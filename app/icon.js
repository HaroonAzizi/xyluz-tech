import { ImageResponse } from "next/og";
import { generateSVGFavicon } from "./favicon";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

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
