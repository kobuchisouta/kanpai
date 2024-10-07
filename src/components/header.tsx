import Image from "next/image"
import styles from '@/styles/header.module.scss'

export default function Header() {

    return (
        <>
            <header className={styles.header}>
                <a href="">
                    <div className={styles.logo}>
                        <img src="../img/KANPAI.svg" alt="ロゴ" />
                    </div>
                </a>
                <div className={styles.topMenu}>
                    <a href="#">
                        <div className={styles.search}>
                            <img src="../img/calender.svg" alt="カレンダー" />
                            <p>予約確認</p>
                        </div>
                    </a>
                    <a href="#">
                        <div className={styles.explanation}>
                            <img src="../img/BeginnerMark.svg" alt="初心者マーク" />
                            <a href="../html/index.html">
                                <p>初めての方</p>
                            </a>
                        </div>
                    </a>
                </div>
            </header>

        </>
    )
}