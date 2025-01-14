export var buildDevServer = function (options) {
    var _a;
    return {
        historyApiFallback: true, // перенаправление всех маршрутов на index.html для роутинга
        port: (_a = options.port) !== null && _a !== void 0 ? _a : 5000,
        open: true,
    };
};
