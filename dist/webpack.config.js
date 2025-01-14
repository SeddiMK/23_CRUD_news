import path from "path";
import { buildWebpack } from "./config/build/buildWebpack";
export default (function (env) {
    var _a, _b;
    var paths = {
        html: path.resolve(__dirname, "public", "index.html"),
        entry: path.resolve(__dirname, "src", "index.tsx"),
        // output: path.resolve(__dirname, "build"),
        output: {
            path: path.resolve(__dirname, "build"),
            publicPath: "/",
        },
        src: path.resolve(__dirname, "src"),
        public: path.resolve(__dirname, "public"),
    };
    var config = buildWebpack({
        port: (_a = env.port) !== null && _a !== void 0 ? _a : 5000,
        mode: (_b = env.mode) !== null && _b !== void 0 ? _b : "development",
        paths: paths,
    });
    return config;
});
