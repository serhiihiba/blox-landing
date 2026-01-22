/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blox: {
          bg: "#FDFCFB",
          text: "#0B1220",
          sub: "#475569",
          border: "#EDECEA",
          soft: "#F1F5F9",
          accent: "#0F172A",
        }
      },
      boxShadow: {
        blox: "0 20px 60px rgba(15,23,42,0.06)",
        bloxSm: "0 10px 25px rgba(15,23,42,0.05)"
      },
      borderRadius: {
        blox: "14px"
      }
    }
  }
}
