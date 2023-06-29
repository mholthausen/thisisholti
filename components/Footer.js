import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        &copy; 2022 - {new Date().getFullYear()} thisisholti.com 
      </footer>
    </>
  )
}
