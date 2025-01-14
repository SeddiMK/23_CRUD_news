import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export var NewsItemComponent = function (_a) {
    var news = _a.news, onEdit = _a.onEdit, onDelete = _a.onDelete;
    return (_jsxs("div", { children: [_jsx("h2", { children: news.title }), _jsx("p", { children: news.content }), _jsx("button", { onClick: function () { return onEdit(news.id); }, children: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C" }), _jsx("button", { onClick: function () { return onDelete(news.id); }, children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C" })] }));
};
