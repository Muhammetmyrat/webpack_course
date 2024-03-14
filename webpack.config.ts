import webpack from 'webpack'
import path from 'path'
import 'webpack-dev-server'
import { buildWebpack } from './config/build/buildWebpack'
import { BuildMode, BuildPath } from './config/build/types/types'

interface Environment {
  mode: BuildMode
  port: number
}
export default (env: Environment) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: path.resolve(__dirname, 'bundle'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 5000,
    mode: env.mode ?? 'development',
    paths: paths,
  })

  return config
}
