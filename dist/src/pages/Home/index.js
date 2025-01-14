var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { getFromLocalStorage, saveToLocalStorage, } from "@/utils/localStorageHelper";
import { NewsForm } from "@/components/NewsForm";
import { NewsList } from "@/components/NewsList";
import style from "./style.module.css";
// import "./style.css";
export var Home = function () {
    var _a = useState([]), news = _a[0], setNews = _a[1];
    var _b = useState(null), editingNews = _b[0], setEditingNews = _b[1];
    var handleSave = function (newItem) {
        if (editingNews) {
            setNews(news.map(function (n) { return (n.id === newItem.id ? newItem : n); }));
        }
        else {
            setNews(__spreadArray(__spreadArray([], news, true), [newItem], false));
        }
        setEditingNews(null);
    };
    var handleEdit = function (id) {
        var items = news.filter(function (n) { return n.id === id; });
        if (items.length > 0)
            setEditingNews(items[0]);
    };
    var handleDelete = function (id) {
        setNews(news.filter(function (n) { return n.id !== id; }));
    };
    useEffect(function () {
        var savedNews = getFromLocalStorage("news");
        if (savedNews)
            setNews(savedNews);
    }, []);
    useEffect(function () {
        saveToLocalStorage("news", news);
    }, [news]);
    if (!style.wrapper) {
        console.error('Класс "wrapper" не найден в style.module.css');
        return null;
    }
    // className={style.wrapper}
    return (_jsxs("div", { children: [_jsx("h1", { children: "CRUD \u041D\u043E\u0432\u043E\u0441\u0442\u0435\u0439" }), _jsx(NewsForm, { onSave: handleSave, editingNews: editingNews, onCancel: function () { return setEditingNews(null); } }), _jsx(NewsList, { news: news, onEdit: handleEdit, onDelete: handleDelete })] }));
};
