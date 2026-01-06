import React from 'react'
import Instagram from "../img/instagram (2).png"
import TicTok from "../img/tiktok (2).png"
import Telegram from "../img/telegram (2).png"
import Sizes from "../img/size-img.png"


export default function Footer() {
    return (
        <footer>
            <div className="footer_container">

                <div className="footer-left">
                    EXFRAG 2025. All rights reserved &copy;
                </div>

                <div className="footer-right">
                    <div className="footer-socials">
                        <a target='blank' href="https://www.instagram.com/exfrag.eu?igsh=MTV5cWlmc3N0bDR5aQ%3D%3D&utm_source=qr">
                            <img src={Instagram} alt="Instagram" />
                        </a>
                        <a target='blank' href="https://www.tiktok.com/@.exfrag?_r=1&_t=ZN-92KzW5hNLKI">
                            <img src={TicTok} alt="TikTok" />
                        </a>
                        <a target='blank' href="https://t.me/exfragshop">
                            <img src={Telegram} alt="Telegram" />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    )
}
