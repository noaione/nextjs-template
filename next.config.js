/**
 * @type {import("next").NextConfig}
 */
const nextConfig = {
    productionBrowserSourceMaps: true,
    swcMinify: true,
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
module.exports = nextConfig;
