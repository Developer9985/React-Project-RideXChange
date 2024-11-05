// import path from "path"
// import react from "@vitejs/plugin-react"
// import { defineConfig } from "vite"

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },

  
  
// });


// vite.config.js
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // server: {
  //   proxy: {
  //     // Proxy all requests starting with /firebase-storage to Firebase Storage API
  //     "/firebase-storage": {
  //       target: "https://firebasestorage.googleapis.com/v0/b/ridexchange-92430.firebasestorage.app",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/firebase-storage/, ""),
  //       secure: true,
  //     },
  //   },
  // },
});
