import { jsx as _jsx } from "react/jsx-runtime";
import { NewsItemComponent } from "@/components/NewsItem";
export var NewsList = function (_a) {
    var news = _a.news, onEdit = _a.onEdit, onDelete = _a.onDelete;
    return (_jsx("div", { children: news.map(function (n) { return (_jsx(NewsItemComponent, { news: n, onEdit: onEdit, onDelete: onDelete }, n.id)); }) }));
};
