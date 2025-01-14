import React, { useState, useEffect } from "react";
import { NewsItem } from "@/types/general";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "@/utils/localStorageHelper";
import { NewsForm } from "@/components/NewsForm";
import { NewsList } from "@/components/NewsList";

export const Home: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);

  useEffect(() => {
    const savedNews = getFromLocalStorage<NewsItem[]>("news");
    if (savedNews) setNews(savedNews);
  }, []);

  useEffect(() => {
    saveToLocalStorage("news", news);
  }, [news]);

  const handleSave = (newItem: NewsItem) => {
    if (editingNews) {
      setNews(news.map((n) => (n.id === newItem.id ? newItem : n)));
    } else {
      setNews([...news, newItem]);
    }
    setEditingNews(null);
  };

  const handleEdit = (id: string) => {
    const item = news.find((n) => n.id === id);
    if (item) setEditingNews(item);
  };

  const handleDelete = (id: string) => {
    setNews(news.filter((n) => n.id !== id));
  };

  return (
    <div>
      <h1>CRUD Новостей</h1>
      <NewsForm
        onSave={handleSave}
        editingNews={editingNews}
        onCancel={() => setEditingNews(null)}
      />
      <NewsList news={news} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};
