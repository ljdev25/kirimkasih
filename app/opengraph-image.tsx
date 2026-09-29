import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "linear-gradient(135deg, #FF7A30 0%, #167A63 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 96,
              height: 96,
              borderRadius: 24,
              background: "rgba(255,255,255,0.2)",
              fontSize: 56,
            }}
          >
            ❤️
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 800,
              color: "white",
            }}
          >
            KasihKirim
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 36,
            color: "rgba(255,255,255,0.92)",
          }}
        >
          Penghantaran &amp; Beli-Belah Tempatan Sabah
        </div>
      </div>
    ),
    { ...size }
  );
}
