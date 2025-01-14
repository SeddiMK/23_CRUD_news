import React from "react";
import { NewsItem } from "@/types/general";

type Props = {
  news: NewsItem;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

export const NewsItemComponent: React.FC<Props> = ({
  news,
  onEdit,
  onDelete,
}) => {
  return (
    <div>
      <h2>{news.title}</h2>
      <p>{news.content}</p>
      <button onClick={() => onEdit(news.id)}>Редактировать</button>
      <button onClick={() => onDelete(news.id)}>Удалить</button>
    </div>
  );
};
