import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
export var NewsForm = function (_a) {
    var onSave = _a.onSave, editingNews = _a.editingNews, onCancel = _a.onCancel;
    var _b = useState(""), title = _b[0], setTitle = _b[1];
    var _c = useState(""), content = _c[0], setContent = _c[1];
    useEffect(function () {
        if (editingNews) {
            setTitle(editingNews.title);
            setContent(editingNews.content);
        }
    }, [editingNews]);
    var handleSubmit = function () {
        if (!title || !content)
            return alert("Заполните все поля");
        var news = {
            id: (editingNews === null || editingNews === void 0 ? void 0 : editingNews.id) || crypto.randomUUID(),
            title: title,
            content: content,
        };
        onSave(news);
        setTitle("");
        setContent("");
    };
    return (_jsxs("div", { children: [_jsx("input", { type: "text", placeholder: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A", value: title, onChange: function (e) { return setTitle(e.target.value); } }), _jsx("textarea", { placeholder: "\u041A\u043E\u043D\u0442\u0435\u043D\u0442", value: content, onChange: function (e) { return setContent(e.target.value); } }), _jsx("button", { onClick: handleSubmit, children: editingNews ? "Обновить" : "Добавить" }), onCancel && _jsx("button", { onClick: onCancel, children: "\u041E\u0442\u043C\u0435\u043D\u0430" })] }));
};
