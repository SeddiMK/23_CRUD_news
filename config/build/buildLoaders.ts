import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";

export const buildLoaders = ({
  mode,
}: BuildOptions): ModuleOptions["rules"] => {
  const isDev = mode === "development";

  // Общие настройки css-loader для модулей
  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      esModule: false,
      modules: {
        namedExport: false,
        localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
      },
    },
  };

  // Общие настройки css-loader для обычных файлов
  const cssLoader = {
    loader: "css-loader",
    options: {
      sourceMap: isDev,
    },
  };

  // Лоадер для module.scss
  const moduleScssLoader = {
    test: /\.module\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      cssLoaderWithModules,
      {
        loader: "sass-loader",
        options: {
          sourceMap: isDev,
        },
      },
    ],
  };

  // Лоадер для module.css
  const moduleCssLoader = {
    test: /\.module\.css$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      cssLoaderWithModules,
    ],
  };

  // Лоадер для обычных scss
  const scssLoader = {
    test: /\.s[ac]ss$/i,
    exclude: /\.module\.s[ac]ss$/i, // Исключаем файлы module.scss
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      cssLoader,
      {
        loader: "sass-loader",
        options: {
          sourceMap: isDev,
        },
      },
    ],
  };

  // Лоадер для обычных css
  const cssFileLoader = {
    test: /\.css$/i,
    exclude: /\.module\.css$/i, // Исключаем файлы module.css
    use: [isDev ? "style-loader" : MiniCssExtractPlugin.loader, cssLoader],
  };

  const assetLoader = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };

  const fontsLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: "asset/resource",
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [
    moduleCssLoader,
    moduleScssLoader,
    cssFileLoader,
    scssLoader,
    fontsLoader,
    assetLoader,
    tsLoader,
  ];
};
