import { useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import useVideos from "../hooks/useVideos";
import style from "../styles/Cards.module.css";
import Card from "./Card";

const Cards = () => {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideos(page);

  return (
    <>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          loader="Loading..."
          next={() => setPage(page + 8)}
          className={style.cards}
        >
          {
            videos.map((video) => <Card video={video} />)
          }
        </InfiniteScroll>
      )}

      {!loading && videos.length === 0 && <div>No data found!</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading...</div>}
    </>
  );
}

export default Cards;