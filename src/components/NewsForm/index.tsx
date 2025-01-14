import React, { useState, useEffect } from "react";
import { NewsItem } from "@/types/general";

type Props = {
  onSave: (news: NewsItem) => void;
  editingNews?: NewsItem | null;
  onCancel?: () => void;
};

export const NewsForm: React.FC<Props> = ({
  onSave,
  editingNews,
  onCancel,
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editingNews) {
      setTitle(editingNews.title);
      setContent(editingNews.content);
    }
  }, [editingNews]);

  const handleSubmit = () => {
    if (!title || !content) return alert("Заполните все поля");
    const news: NewsItem = {
      id: editingNews?.id || crypto.randomUUID(),
      title,
      content,
    };
    onSave(news);
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Контент"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSubmit}>
        {editingNews ? "Обновить" : "Добавить"}
      </button>
      {onCancel && <button onClick={onCancel}>Отмена</button>}
    </div>
  );
};
