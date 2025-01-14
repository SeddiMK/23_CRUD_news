import { useState, useEffect, useRef } from "react";
import { NewsItem } from "@/types/general";
import "./style.scss";

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
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (editingNews) {
      setTitle(editingNews.title);
      setContent(editingNews.content);
    }
  }, [editingNews]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [content]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [title]);

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
    <div className="news">
      <div className="news__content">
        <textarea
          className="news__inp"
          placeholder="Заголовок"
          ref={inputRef}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="news__text"
          placeholder="Контент"
          value={content}
          ref={textareaRef}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div className="news__buttons">
        <button className="btn" onClick={handleSubmit}>
          {editingNews ? "Обновить" : "Добавить"}
        </button>
        {onCancel && (
          <button className="btn" onClick={onCancel}>
            Отмена
          </button>
        )}
      </div>
    </div>
  );
};
