import upas from "../../services/api";
import styles from "./upalist.module.css";

const regionColors: Record<string, string> = {
  "Zona Leste": "#e53935",
  "Zona Norte": "#1e3a8a",
  "Zona Sul": "#2e7d32",
  "Centro/Sudeste": "#6d28d9",
  "Zona Oeste": "#f59e0b",
};

export default function UpaList() {
  return (
    <section id="upas" className={styles.containerList}>
      <div className={styles.contentCards}>
        {upas.map((item) => (
          <div className={styles.card} key={item.id}>
            <h3>{item.nome}</h3>
            <p style={{ backgroundColor: regionColors[item.regiao] || "#000" }}>
              {item.regiao}
            </p>
            <em>{item.endereco}</em>
            <a href={item.googleLink} target="_blank">Ver no mapa</a>
          </div>
        ))}
      </div>
    </section>
  );
}
