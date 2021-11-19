import styles from './Footer.module.css'
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles['footer-content']}>
        Copy Right @Lillian <em>Nov-2021</em>
      </p>
    </footer>
  )
}
