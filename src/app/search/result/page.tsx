"use client";
import styles from '@/styles/izakaya.module.scss'

function Page() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    async function getData() {
        try {
            console.log("run getData");
            const response = await fetch("/api/gourmet");
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
            }
            const result = await response.json();
            setData(result);
            console.log(result);
        } catch (error) {
            setError(error.message);
            console.error("Fetch error: ", error);
        }
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}></h1>
            <button className={styles.button} onClick={getData}>
                居酒屋を検索
            </button>
            {error && <p>Error: {error}</p>}
            {data && data.results && data.results.shop && data.results.shop.length > 0 && (
                <ul className={styles.list}>
                    {data.results.shop.map((shop, index) => (
                        <li key={index} className={styles.listitem}>
                            <h2 className={styles.shopName}>{shop.name}</h2>
                            <p className={styles.shopCatch}>{shop.catch}</p>
                            <img src={shop.photo.pc.l} alt={shop.name} className={styles.shopImage} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

import { useState } from "react";

export default Page;