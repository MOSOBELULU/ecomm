const config = required('./config')

/** @type { import('next').NextConfig} */
const nextConfig = {
    env: {
     DB_URI: config.DB_URI,  
     API,
    }
}

module.export = nextConfig;