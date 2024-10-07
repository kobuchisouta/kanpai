import styles from '@/styles/infomation.module.scss'
import Link from 'next/link'

export default function Infomation() {

    return (
        <>
            <div className={styles.search}>
                <div className={styles.searchBar}></div>
                <p>イベントを検索</p>
                <div className={styles.searchBtn}></div>
            </div>
            <div className={styles.newsWrap}>
                <Link className={styles.news} href="/event" >
                    <div className={styles.osaka}>
                        <p>OSAKA</p>
                    </div>
                </Link>
                <Link className={styles.news} href="" >
                    <div className={styles.kyoto}>
                        <p>KYOTO</p>
                    </div>
                </Link>
                <Link className={styles.news} href="" >
                    <div className={styles.hyogo}>
                        <p>HYOGO</p>
                    </div>
                </Link>
            </div >
        </>
    )
}