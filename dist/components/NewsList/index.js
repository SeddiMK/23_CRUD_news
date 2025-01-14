import { jsx as _jsx } from "react/jsx-runtime";
import { NewsItemComponent } from "@/components/NewsItem";
export const NewsList = ({ news, onEdit, onDelete }) => {
    return (_jsx("div", { children: news.map((n) => (_jsx(NewsItemComponent, { news: n, onEdit: onEdit, onDelete: onDelete }, n.id))) }));
};
