import MiniCssExtractPlugin from "mini-css-extract-plugin";
export var buildLoaders = function (_a) {
    var mode = _a.mode;
    var isDev = mode === "development";
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
    var cssAndScssLoader = {
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
    var scssLoader = {
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
    var assetLoader = {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
    };
    var fontsLoader = {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
    };
    var tsLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };
    return [fontsLoader, cssAndScssLoader, assetLoader, tsLoader];
};
