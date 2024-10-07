import styles from '@/styles/app.module.scss'
import Link from 'next/link'

export default function Page() {

  return (
    <>
      <div className={styles.banner}>
        <img src="../img/banner.png" alt="イベントバナー" />
      </div>
      <div className={styles.main_wrap}>
        <div className={styles.btn}>
          <Link href="/search">
            <p>予定を立てる！</p>
          </Link>
        </div>
        <div className={styles.btn}>
          <Link href="#">
            <p>ジャンルで今すぐ！</p>
          </Link>
        </div>
      </div>
      <div className={styles.friend}>
        <Link href="#">
          <p>友達を招待</p>
        </Link>
      </div>
      <div className={styles.beerImg}>
        <img src="../img/beer.svg" alt="ビール" />
      </div>


    </>
  )



}