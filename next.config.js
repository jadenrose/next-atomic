/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    additionalData: `@use "src/scss/variables" as *; @use "src/scss/mixins" as *;`,
  },
}

export default nextConfig
