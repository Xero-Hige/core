/**
 * This file is needed for Jest
 */
module.exports = {
  presets: ['@babel/preset-env', '@babel/react'],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread'
  ]
};
