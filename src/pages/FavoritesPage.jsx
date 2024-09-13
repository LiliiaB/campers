import css from "./FavoritesPage.module.css";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { FavoriteList } from "../components/FavoriteList/FavoriteList";
import { SideBar } from "../components/SideBar/SideBar";
import { selectFavoritesId, selectLoading } from "../redux/campers/selectors";
import { fetchCampers } from "../redux/campers/operations";
import Loader from "../components/Loader/Loader";

export const FavoritePage = () => {
  const favoriteIds = useSelector(selectFavoritesId);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <main className={css.main}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SideBar />
          <FavoriteList favoriteIds={favoriteIds} />
        </>
      )}
    </main>
  );
};
