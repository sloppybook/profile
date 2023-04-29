import styles from  './styles.module.css'

export function Kiki() {
  return (
    <>
      <div className={styles.space}>
        <div className={styles.moon}></div>
        <div className={`${styles.kiki} ${styles.bounce}`}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.small_star}></div>
        <div className={styles.small_star}></div>
        <div className={styles.small_star}></div>
        <div className={styles.small_star}></div>
      </div>
    </>
  )
}
