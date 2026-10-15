import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function createOgImage(title: string) {
  const fontSize = title.length > 42 ? 46 : 64;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f3eee6",
          color: "#1c2430",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 18, letterSpacing: 4 }}>
          BALKAN HUKUK BÜROSU
        </div>
        <div
          style={{
            display: "flex",
            fontSize,
            lineHeight: 1.1,
            maxWidth: 980,
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#5c6570" }}>İstanbul</div>
      </div>
    ),
    { ...ogSize },
  );
}
