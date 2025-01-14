import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const NewsItemComponent = ({ news, onEdit, onDelete, }) => {
    return (_jsxs("div", { children: [_jsx("h2", { children: news.title }), _jsx("p", { children: news.content }), _jsx("button", { onClick: () => onEdit(news.id), children: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C" }), _jsx("button", { onClick: () => onDelete(news.id), children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C" })] }));
};
