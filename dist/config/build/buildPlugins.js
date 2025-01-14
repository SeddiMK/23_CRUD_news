import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
export var buildPlugins = function (_a) {
    var mode = _a.mode, paths = _a.paths;
    var isProd = mode === "production";
    var plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
    ];
    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }));
    }
    return plugins;
};
