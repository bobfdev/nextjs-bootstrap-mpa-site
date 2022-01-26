import Image from 'next/image';
import styles from './Card.module.css';

export default function Card({ name, state, region, population, image, id }) {
  return (
    <div className={styles.card}>
      <div className={styles['card-header']}>
        <Image src={image.url} alt={image.alt} className={styles['card-img']} />
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
