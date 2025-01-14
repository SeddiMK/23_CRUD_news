import { NewsItem } from "@/types/general";
import "./style.scss";

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
    <div className="list">
      <div className="list__content">
        <h2 className="list__title">{news.title}</h2>
        <p className="list__text">{news.content}</p>
      </div>

      <div className="list__buttons">
        <button className="btn" onClick={() => onEdit(news.id)}>
          Редактировать
        </button>
        <button className="btn del" onClick={() => onDelete(news.id)}>
          Удалить
        </button>
      </div>
    </div>
  );
};
