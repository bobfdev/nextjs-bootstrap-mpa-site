import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from './Card.module.css';

export default function Card({ name, state, region, population, img, alt, id }) {
  const router = useRouter();

  return (
    <div 
      className={styles.card}
      onClick={() => router.push(`/cities/${id}`)}
    >
      <div className={styles['card-header']}>
        <Image src={img} alt={alt} className={styles['card-img']} />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{state}</p>
        <p>{region}</p>
        <p>{population}</p>
      </div>
    </div>
  );
}
