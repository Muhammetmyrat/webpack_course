import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BuildOptions } from './types/types'

export function buildPlugins({ mode, paths }: BuildOptions): webpack.Configuration['plugins'] {
  const isDev = mode === 'development'
  const isProd = mode === 'production'

  const plugins: webpack.Configuration['plugins'] = [new HtmlWebpackPlugin({ template: paths.html })]

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin())
  }
  if (isProd) {
    plugins.push(new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash:8].css', chunkFilename: '[name].[contenthash:8].css' }))
  }

  return plugins
}
