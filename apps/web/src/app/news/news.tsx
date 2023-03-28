import './news.module.scss';
import { useEffect, useState } from 'react';
import getData from '../utils/getData';

/* eslint-disable-next-line */
export interface NewsProps {}
export interface PeaceOfNews {
  id: number;
  title: string;
  description: string;
  createdAt: number;
}

export function News(props: NewsProps) {
  const [news, setNews] = useState([] as PeaceOfNews[]);
  const sortNews = (news: PeaceOfNews[]) => {
    return news.sort((a, b) => a.createdAt - b.createdAt);
  };

  useEffect(() => {
    getData().then((data) => setNews(data as PeaceOfNews[]));
  }, []);

  return (
    <div>
      <h1>Последние новости</h1>
      <ul>
        {news.map((peaceOfNews) => {
          return (
            <li key={peaceOfNews.id}>
              <h2>{peaceOfNews.title}</h2>
              <p>{peaceOfNews.description}</p>
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default News;
