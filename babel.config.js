module.exports = {
  presets: ['@rnx-kit/babel-preset-metro-react-native'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@icons': './src/assets/icons',
          '@theme': './src/theme',
          '@utils': './src/utils',
        },
      },
    ],
  ],
}
