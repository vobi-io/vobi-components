const path = require("path");

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  storybookBaseConfig.module.rules.push({
    test: /\.s?css$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    // include: path.resolve(__dirname, "../")
  });
  
  storybookBaseConfig.module.rules.push({
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?limit=50000&mimetype=image/svg+xml',
  });
  
  storybookBaseConfig.module.rules.push({
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'file-loader',
  });
  
  storybookBaseConfig.module.rules.push({
    test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'file-loader',
  });

  storybookBaseConfig.module.rules.push({
    test: /\.(png|jpg|gif)$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
  });

  storybookBaseConfig.module.rules.push({
    test: /\.(woff|woff2)$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?prefix=font/&limit=5000',
  });

  storybookBaseConfig.module.rules.push({
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
  });
  
  storybookBaseConfig.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: {
          prettierConfig: {
            printWidth: 80,
            singleQuote: false,
          }
        }
      }
    ],
    enforce: 'pre',
  });

  // Return the altered config
  return storybookBaseConfig;
};