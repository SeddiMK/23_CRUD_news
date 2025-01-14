import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { getFromLocalStorage, saveToLocalStorage, } from "@/utils/localStorageHelper";
import { NewsForm } from "@/components/NewsForm";
import { NewsList } from "@/components/NewsList";
import style from "./style.module.css";
// import "./style.css";
export const Home = () => {
    const [news, setNews] = useState([]);
    const [editingNews, setEditingNews] = useState(null);
    const handleSave = (newItem) => {
        if (editingNews) {
            setNews(news.map((n) => (n.id === newItem.id ? newItem : n)));
        }
        else {
            setNews([...news, newItem]);
        }
        setEditingNews(null);
    };
    const handleEdit = (id) => {
        const items = news.filter((n) => n.id === id);
        if (items.length > 0)
            setEditingNews(items[0]);
    };
    const handleDelete = (id) => {
        setNews(news.filter((n) => n.id !== id));
    };
    useEffect(() => {
        const savedNews = getFromLocalStorage("news");
        if (savedNews)
            setNews(savedNews);
    }, []);
    useEffect(() => {
        saveToLocalStorage("news", news);
    }, [news]);
    if (!style.wrapper) {
        console.error('Класс "wrapper" не найден в style.module.css');
        return null;
    }
    // className={style.wrapper}
    return (_jsxs("div", { children: [_jsx("h1", { children: "CRUD \u041D\u043E\u0432\u043E\u0441\u0442\u0435\u0439" }), _jsx(NewsForm, { onSave: handleSave, editingNews: editingNews, onCancel: () => setEditingNews(null) }), _jsx(NewsList, { news: news, onEdit: handleEdit, onDelete: handleDelete })] }));
};
