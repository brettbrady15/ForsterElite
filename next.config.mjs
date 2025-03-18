let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // This disables the Next.js Image Optimization API to avoid 400 errors
    domains: ['images.unsplash.com'], // Allow images from Unsplash
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
    serverComponentsExternalPackages: ['bcrypt'],
  },
  webpack: (config, { isServer }) => {
    // Add a rule to handle HTML files if needed
    config.module.rules.push({
      test: /\.html$/,
      use: 'html-loader',
    });
    
    // Prevent webpack from trying to bundle bcrypt on the client
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        bcrypt: false,
        crypto: false,
        fs: false,
        os: false,
        path: false,
      };
    }
    
    return config;
  },
  // Generate build ID based on a timestamp to avoid caching issues with images
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },
  // Ensure output is exported correctly
  output: 'standalone',
}

mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }
}

export default nextConfig
