import { format } from 'date-fns';
import { sl } from 'date-fns/locale';
import styles from './NewsList.module.scss';

const news = [
  {
    id: 1,
    title: 'Javno pismo sindikatov s področja varnosti in obrambe',
    date: '2024-06-14',
    excerpt: 'Šest sindikatov s področja varnosti in obrambe je 13. 6. 2024 v medijsko objavo poslalo javno pismo...'
  },
  {
    id: 2,
    title: 'Novičnik SVOZD april 2024',
    date: '2024-04-29',
    excerpt: 'V tokratnem novičniku preberite: voščilo ob 1. maju prazniku dela splošna peticija SVOZD o minimalni plači...'
  }
];

export default function NewsList() {
  return (
    <div className={styles.newsList}>
      {news.map((item) => (
        <article key={item.id} className={styles.newsItem}>
          <time>
            {format(new Date(item.date), 'd. MMMM yyyy', { locale: sl })}
          </time>
          <h3>{item.title}</h3>
          <p>{item.excerpt}</p>
          <a href="#" className={styles.readMore}>Preberi več →</a>
        </article>
      ))}
    </div>
  );
}