const style = require('./ChikitaGif.module.css')
import Image from 'next/image'

export default function ChikitaGif() {
    return (
        <div className={style.gif}>
            <span></span>
                <Image alt="Chikikta Gif" src="/chikita.gif" width={200} height={200} priority unoptimized/>
            <span></span>
        </div>
    )
}