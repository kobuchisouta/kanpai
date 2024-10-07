import styles from '@/styles/event.module.scss'
import Link from 'next/link'

export default function Event() {
    return (
        <>
            <div className={styles.search}>
                <div className={styles.searchBar}></div>
                <p>イベントを検索</p>
                <div className={styles.searchBtn}>
                </div>
            </div>
            <div className={styles.place_wrap}>
                <div className={styles.place}>
                    <h1>大阪</h1>
                </div>
                <div className={styles.event}>
                    <Link href="">
                        <div>
                            <img src="../img/event.png" alt="" />
                        </div>
                        <div>
                            <img src="../img/event.png" alt="" />
                        </div>
                        <div>
                            <img src="../img/event.png" alt="" />
                        </div>
                        <div>
                            <img src="../img/event.png" alt="" />
                        </div>
                    </Link>
                </div>
            </div>

        </>
    )
}