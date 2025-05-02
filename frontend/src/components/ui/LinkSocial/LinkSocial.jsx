import Image from 'next/image'
import styles from './Linksocial.module.css'

export default function LinkSocial({link, children}) {
    
    const vlink = `${link}`
    
    return (
        <a href={vlink} target='_blank' className={` ${styles.sociallink} textcolor`}>
            {children}
        </a>
    )
}