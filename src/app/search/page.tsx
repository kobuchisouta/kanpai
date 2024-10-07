import styles from '@/styles/search.module.scss'
import Link from 'next/link'

export default function Search() {
    return (
        <>
            <form className={styles.form} action="/submit_reservation" method="POST">
                <label htmlFor="name">名前:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">メールアドレス:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="phone">電話番号:</label>
                <input type="tel" id="phone" name="phone" required />

                <label htmlFor="date">予約日:</label>
                <input type="date" id="date" name="date" required />

                <label htmlFor="time">予約時間:</label>
                <input type="time" id="time" name="time" required />

                <label htmlFor="comments">コメント:</label>
                <textarea id="comments" name="comments" rows={4}></textarea>

                <Link href="/search/result">
                    <button type="submit">次へ</button>
                </Link>
            </form>

        </>
    )
}
