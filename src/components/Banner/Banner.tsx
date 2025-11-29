import styles from './banner.module.css'

export default function Banner() {
  return (
    <section className={styles.banner}>
      <h1>UPA's de São Paulo</h1>
      <h3>Uma lista de todas as UPA's do estado de São Paulo</h3>
      <a className={styles.btn} href="#upas">Ver lista</a>
    </section>
  );
}
