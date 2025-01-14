import { NewsItem } from "@/types/general";
import { NewsItemComponent } from "@/components/NewsItem";
import "./style.scss";

type Props = {
  news: NewsItem[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

export const NewsList: React.FC<Props> = ({ news, onEdit, onDelete }) => {
  return (
    <div className="list-wrp">
      {news.map((n) => (
        <NewsItemComponent
          key={n.id}
          news={n}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
