const { NODE_ENV } = process.env;

/**
 * @type {import("next").NextConfig}
 */
const withProduction = {
    productionBrowserSourceMaps: true,
    headers: async () => {
        return [
            {
                source: "/:path*",
                headers: [
                    {
                        key: "Permissions-Policy",
                        value: "interest-cohort=()",
                    },
                ],
            },
        ];
    },
};

/**
 * @type {import("next").NextConfig}
 */
const baseConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.discordapp.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};
if (NODE_ENV === "development") {
    module.exports = baseConfig;
} else {
    module.exports = { ...baseConfig, ...withProduction };
}
