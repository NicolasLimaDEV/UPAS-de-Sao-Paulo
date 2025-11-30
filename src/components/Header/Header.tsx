import logoUPA from "../../assets/logo-upa.webp";
import styles from "./header.module.css";

export default function Header() {
  function alertPage(event: { preventDefault: () => void }) {
    event.preventDefault();
    alert(
      'Em breve! Página em desenvolvimento...'
    )
  }

  return (
    <header className={styles.header}>
      <div className={styles.containerLogo}>
        <img src={logoUPA} alt="Logo da UPA" />
        <span>| SP</span>
      </div>

      <nav className={styles.navbar}>
        <a href="#projeto" onClick={alertPage}>Projeto</a>
        <a href="#upas">
          UPA's
        </a>
      </nav>
    </header>
  );
}
