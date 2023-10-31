/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        domains: ["files.stripe.com"],
    },
    experimental: {
        serverActions: true,
    }
}