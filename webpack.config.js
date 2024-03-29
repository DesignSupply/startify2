/* eslint-disable */

// modules include
const path = require('path');
const globule = require('globule');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const CopyPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');

// build settings
const buildMode = 'development'; // production or development
const cssInline = false; // true->inlineCSS false->outputfile
const useTypeScript = true; // true->TypeScript false->ECMAScript
const directoryPath = {
  root: path.resolve(__dirname, ''),
  dist: path.resolve(__dirname, 'dist'),
  src: path.resolve(__dirname, 'src')
}

// build configuration
const styleLoader = cssInline ? 'style-loader' : { loader: MiniCssExtractPlugin.loader };
const entryPointPath = useTypeScript ? `${directoryPath.src}/ts/main.ts` : `${directoryPath.src}/js/main.js`;
const pugFiles = globule.find('src/pug/**/*.pug', {
  ignore: [ 'src/pug/**/_*.pug' ]
});
const buildDefault = {
  mode: buildMode,
  devtool: 'source-map',
  entry: {
    main: entryPointPath,
  },
  output: {
    path: `${directoryPath.dist}/assets`,
    filename: 'scripts/[name].min.js',
    assetModuleFilename: 'images/_min/[name][ext][query]'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/]
          }
        }
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [ 
                [
                  '@babel/preset-env',
                  {
                    'targets': {
                      'node': true
                    }
                  },
                ],
              ]
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          styleLoader,
          {
            loader: 'css-loader',
            options: {
              url: true,
            }
          }
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          styleLoader,
          {
            loader: 'css-loader',
            options: {
              url: true,
              sourceMap: true,
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [ 'autoprefixer', { grid: true } ],
                  [ 'cssnano', { preset: 'default' } ]
                ]
              },
            }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true,
              root: `${directoryPath.src}/pug`
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpg|jpeg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 50 * 1024,
          },
        },
      },
    ]
  },
  resolve: {
    alias: { 'vue$': 'vue/dist/vue.esm-bundler.js' },
    extensions: [ '.ts', '.js', '.vue', '.json' ]
  },
  plugins: [
    new ESLintPlugin({
      extensions: [ '.ts', '.js' ],
      exclude: 'node_modules'
    }),
    new MiniCssExtractPlugin({ filename: 'stylesheets/main.min.css' }),
    new StylelintPlugin({ configFile: `${directoryPath.root}/.stylelintrc.json` }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 2000,
      server: { baseDir: directoryPath.dist }
    }),
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [
        { 
          from: `${directoryPath.src}/img`, 
          to: `${directoryPath.dist}/assets/images/_min/[name]_min[ext]`,
          noErrorOnMissing: true,
        }
      ]
    }),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      plugins: [
        ImageminMozjpeg({
          quality: 85,
          progressive: true,
        }),
      ],
      pngquant: {
        quality: '70-85',
      },
      gifsicle: {
        interlaced: false,
        optimizationLevel: 10,
        colors: 256,
      },
      svgo: {}
    })
  ],
  target: [ 'web', 'es5' ],
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  }
}

// page template output
pugFiles.forEach((pug) => {
  const html = pug.split('/').slice(-1)[0].replace('.pug', '.html');
  buildDefault.plugins.push(
    new HtmlWebpackPlugin({
      inject: false,
      filename: `${directoryPath.dist}/${html}`,
      template: pug,
      minify: buildMode === 'development' ? false : true,
      data: require(`${directoryPath.src}/pug/data/global.js`)
    })
  )
});

module.exports = buildDefault;