module.exports = {
    productionBrowserSourceMaps: true,
    experimental: {
        swcLoader: true,
        swcMinify: true,
        esmExternals: true,
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    webpack: (config, { dev, isServer, webpack }) => {
        if (!dev && !isServer) {
            Object.assign(config.resolve.alias, {
                react: "preact/compat",
                "react-dom/test-utils": "preact/test-utils",
                "react-dom": "preact/compat",
            });
        }
        return config;
    },
    async headers() {
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
