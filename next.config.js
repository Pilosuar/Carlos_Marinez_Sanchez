/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Genera HTML estatico en /out para poder publicarlo en GitHub Pages
  output: "export",
  trailingSlash: true,
  // GitHub Pages sirve el sitio bajo /<nombre-del-repo>/ (vacio en local)
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

module.exports = nextConfig;
