import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import s from "./style.module.css";
export function TVShowList({ tvShowList, onClickItem }) {
  return (
    <div>
      <div className={s.title}>Notre sélection :</div>
      <div className={s.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span key={tvShow.id} className={s.tv_show_list_item}>
              <TVShowListItem onClick={onClickItem} tvShow={tvShow} />
            </span>
          );
        })}
      </div>
    </div>
  );
}
