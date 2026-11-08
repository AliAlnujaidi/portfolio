/** Static export: the build output in `out/` is plain HTML, CSS and JS, so it runs on any static host. */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
