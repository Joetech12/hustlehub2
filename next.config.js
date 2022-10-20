// 

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = nextConfig

module.exports = {
  images: {
    loader: "akamai",
    path: "/",
    domains: ["rb.gy"],
  },
  trailingSlash: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: "/projects/",
  //       destination: "https://ifeanyiumeh.com/projects/",
  //     },
  //     {
  //       source: "/projects/:slug/",
  //       destination: "https://ifeanyiumeh.com/projects/:slug/",
  //     },
  //   ];
  // },
};
