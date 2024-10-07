"use client";
import { useState, useEffect, useRef } from 'react'
import jsQR from 'jsqr'
import { styleText } from 'util';
import styles from '@/styles/camera.module.scss'

export default function Qr_Camera() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)

    const [contentWidth, setContentWidth] = useState<number>(700)
    const [contentHeight, setContentHeight] = useState<number>(700)
    useEffect(() => {
        const config = { audio: false, video: { facingMode: "environment" } }
        const ctx = canvasRef.current?.getContext('2d')
        const canvasUpdate = () => {
            if (ctx && videoRef.current && canvasRef.current) {
                canvasRef.current.width = contentWidth
                canvasRef.current.height = contentHeight
                ctx.drawImage(videoRef.current, 0, 0, contentWidth, contentHeight)
                requestAnimationFrame(canvasUpdate)
            }
        }
        const checkImage = async () => {
            if (ctx && videoRef.current) {
                ctx?.drawImage(videoRef.current, 0, 0, contentWidth, contentHeight)
                const imageData = ctx.getImageData(0, 0, contentWidth, contentHeight)
                if (imageData) {
                    const code = jsQR(imageData.data, contentWidth, contentHeight)
                    if (code) {
                        // QRコードの情報が表示されます
                        console.log(code.data)
                        // URLに遷移します
                        const url = code.data
                        try {
                            new URL(url) // URLが有効かどうかを確認
                            window.location.href = url // URLに遷移
                        } catch (_) {
                            console.log("無効なURLです")
                        }
                    }
                }
                setTimeout(() => { checkImage() }, 200);
            }
        }

        navigator.mediaDevices.getUserMedia(config)
            .then(stream => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream
                    videoRef.current.onloadedmetadata = () => {
                        if (videoRef.current) {
                            videoRef.current.play()
                            setContentWidth(videoRef.current.clientWidth)
                            setContentHeight(videoRef.current.clientHeight)
                            canvasUpdate()
                            checkImage()
                        }
                    }
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, [contentWidth, contentHeight])

    return (
        <>
            <h1 className={styles.title}>QRコードを読み取ってください</h1>
            <div className={styles.camera}>
                <video ref={videoRef} autoPlay playsInline width={contentWidth} height={contentHeight}></video>
                <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
            </div>

        </>
    )
}
