import Image from "next/image"
import Link from 'next/link'
import styles from '@/styles/footer.module.scss'

export default function Footer() {

    return (
        <>
            <footer className={styles.footer}>
                <Link href="/">
                    <div className={styles.home}>
                        <img src="../img/home.svg" alt="家マーク" />
                        <p>ホーム</p>
                    </div>
                </Link>
                <Link href="/calendar">
                    <div className={styles.calendar}>
                        <img src="../img/calender.svg" alt="カレンダー" />
                        <p>カレンダー</p>
                    </div>
                </Link>
                <Link href="/qr">
                    <div className={styles.qr}>
                        <img src="../img/QR.svg" alt="QR" />
                        <p>読み取る</p>
                    </div>
                </Link>
                <div className={styles.news}>
                    <img src="../img/NEWS.svg" alt="ニュース" />
                    <Link href="/infomation">
                        <p>お知らせ</p>
                    </Link>
                </div>
                <div className={styles.account}>
                    <img src="../img/account.svg" alt="アカウント" />
                    <a href="#">
                        <p>アカウント</p>
                    </a>
                </div>

            </footer>


        </>
    )
}