import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";

export const buildLoaders = ({
  mode,
}: BuildOptions): ModuleOptions["rules"] => {
  const isDev = mode === "development";

  // const cssLoader = {
  //   test: /\.((c|sa|sc)ss)$/i,
  //   use: [
  //     isDev ? "style-loader" : MiniCssExtractPlugin.loader,
  //     {
  //       loader: "css-loader",
  //     },

  //     "sass-loader",
  //   ],
  // };

  // Лоадер для обычных CSS/SCSS файлов
  const cssAndScssLoader = {
    test: /\.(css|scss|sass)$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            // Поддержка CSS-модулей только для файлов с .module.css/.module.scss
            auto: /\.module\.\w+$/i,
            localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
          },
          sourceMap: isDev,
        },
      },
      {
        loader: "sass-loader",
        options: {
          sourceMap: isDev,
        },
      },
    ],
  };

  const scssLoader = {
    test: /\.module\.css$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64]",
          },
        },
      },
    ],
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

  return [fontsLoader, cssAndScssLoader, assetLoader, tsLoader];
};
