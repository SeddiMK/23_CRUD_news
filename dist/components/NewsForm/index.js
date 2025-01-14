import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
export const NewsForm = ({ onSave, editingNews, onCancel, }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    useEffect(() => {
        if (editingNews) {
            setTitle(editingNews.title);
            setContent(editingNews.content);
        }
    }, [editingNews]);
    const handleSubmit = () => {
        if (!title || !content)
            return alert("Заполните все поля");
        const news = {
            id: (editingNews === null || editingNews === void 0 ? void 0 : editingNews.id) || crypto.randomUUID(),
            title,
            content,
        };
        onSave(news);
        setTitle("");
        setContent("");
    };
    return (_jsxs("div", { children: [_jsx("input", { type: "text", placeholder: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A", value: title, onChange: (e) => setTitle(e.target.value) }), _jsx("textarea", { placeholder: "\u041A\u043E\u043D\u0442\u0435\u043D\u0442", value: content, onChange: (e) => setContent(e.target.value) }), _jsx("button", { onClick: handleSubmit, children: editingNews ? "Обновить" : "Добавить" }), onCancel && _jsx("button", { onClick: onCancel, children: "\u041E\u0442\u043C\u0435\u043D\u0430" })] }));
};
