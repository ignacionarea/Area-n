import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #04120f 0%, #0b3c31 100%)",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 20,
              background: "linear-gradient(135deg, #0e7d55, #042e2c)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="70"
              height="70"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 45H23.5C26.4 45 28.8 42.6 28.8 39.7V18.2L47 44.4V27C47 21.9 51.1 17.8 56.2 17.8H58"
                stroke="white"
                strokeWidth="8.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div style={{ fontSize: 42, fontWeight: 700 }}>{siteConfig.name}</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ color: "#a7f3d0", fontSize: 28, marginBottom: 20 }}>
            Domotica residencial en CABA y GBA
          </div>
          <div style={{ maxWidth: 900, fontSize: 72, lineHeight: 1.02 }}>
            Hogares inteligentes con criterio electrico profesional.
          </div>
        </div>
      </div>
    ),
    size
  );
}
