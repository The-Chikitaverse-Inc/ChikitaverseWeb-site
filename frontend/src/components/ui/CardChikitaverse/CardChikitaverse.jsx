import Image from 'next/image'
import styles from './CardChikitaverse.module.css'

export default function CardChikitaverse({logo, link, title, game}) {
        
    const vrlogo = `/${logo}`  
    const vrlink = link
    const vrtitle = title
    const vrgame = game

        return (
            <a href={vrlink} target='_blank' className={styles.card_ch}>
                <Image src={vrlogo} width={95} height={95} alt='Link Chikitaverse'/>
                    <h4>{vrtitle}</h4>
                        <p>{vrgame}</p>
            </a>
        )
}