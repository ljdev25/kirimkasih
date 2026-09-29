import { ImageResponse } from "next/og";

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
          borderRadius: 8,
          backgroundImage: "linear-gradient(135deg, #FF7A30 0%, #167A63 100%)",
          color: "white",
          fontSize: 20,
          fontWeight: 800,
        }}
      >
        K
      </div>
    ),
    { ...size }
  );
}
