import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className="container">
      <section className={styles.footer}>
        <span>© Big Dog Surf Camp</span>&nbsp;|&nbsp;
        <a href="mailto:bigdogsurfcamp@gmail.com" target="_blank">
          bigdogsurfcamp@gmail.com
        </a>
      </section>
    </footer>
  );
}
