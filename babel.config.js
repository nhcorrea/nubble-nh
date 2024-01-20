module.exports = {
  presets: ['@rnx-kit/babel-preset-metro-react-native'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@domain': './src/domain',
          '@hooks': './src/hooks',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@icons': './src/assets/icons',
          '@theme': './src/theme',
          '@utils': './src/utils',
          '@brand': './src/assets/brand',
          '@api': './src/api',
        },
      },
    ],
  ],
};
