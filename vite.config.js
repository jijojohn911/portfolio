// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   optimizeDeps: {
//     exclude: ['@tsparticles/react'] // 👈 Add this line to bypass the pre-bundle bug
//   }
// })






import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    // Tell Vite to IGNORE these packages so they don't break
    exclude: [
      "@tsparticles/react",
      "@tsparticles/engine",
      "@tsparticles/preset-stars",
      "@tsparticles/basic"
    ]
  }
})
