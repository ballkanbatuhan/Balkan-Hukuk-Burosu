import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Balkan Hukuk Bürosu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
            fontSize: 68,
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          Her adımda dikkat, her aşamada özen.
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#5c6570" }}>İstanbul</div>
      </div>
    ),
    { ...size },
  );
}
