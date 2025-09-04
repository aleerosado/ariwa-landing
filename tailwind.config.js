/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts,tsx,mdx,md}"],
  theme: {
    extend: {
      colors:{
        ariwa:{
          red:"#E53B3B",
          blue:"#10223A",
          bg:"#0A0F18",
          ink:"#FFFFFF",
          muted:"#C8D3E0"
        }
      },
      borderRadius:{ xl: "1rem", "2xl":"1.25rem" }
    }
  },
  plugins:[]
}
