const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');
const dotenv = require('dotenv');

dotenv.config();

const isProd = process.env.NODE_ENV === 'production';

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {};
}

const webpack = require('webpack');

module.exports =   {
  target: 'serverless',
  webpack: config => {
      config.plugins.push(
          new webpack.DefinePlugin({ 'global.GENTLY': false }),
      );
      return config;
  },
};

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]'
  },
  ...withLess(
    withSass({
      lessLoaderOptions: {
        javascriptEnabled: true
      }
    })
  ),
  env: {
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    AUTH0_SCOPE: 'openid profile',
    REDIRECT_URI:
      process.env.REDIRECT_URI || 'http://localhost:3000/api/callback',
    POST_LOGOUT_REDIRECT_URI:
      process.env.POST_LOGOUT_REDIRECT_URI || 'http://localhost:3000/',
    SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
    SESSION_COOKIE_LIFETIME: 7200, // 2 hours
    APP_HOST: process.env.DOMAIN,
    S3_ACCESS_KEY_ID: process.env.S3_ACCESS_KEY_ID,
    S3_SECRET_ACCESS_KEY_ID: process.env.S3_SECRET_ACCESS_KEY_ID,
    S3_ENDPOINT: process.env.S3_ENDPOINT,
    S3_BUCKET: process.env.S3_BUCKET
  }
});
