const styles = require('./DiscordNav.module.css')

import Image from 'next/image'
import Link from 'next/link'

export default async function DiscordNav() {
    try {
        const apiDiscord = await fetch('http://localhost:8000/discord/', {
            headers: {
                Key: process.env.TOKENAPI
            }
        })

        if (!apiDiscord.ok) return null

        const dataDiscord = await apiDiscord.json()
        const membersDiscord = await dataDiscord.discord_data.members
        const countmembersDc = membersDiscord.length

        return (
            <nav className={styles.discord} >
                <span>
                    <Image src='/discord.svg' alt='Discord Logo' width={26} height={26}/>
                      <h4>Discord Serve</h4>
                </span>

                <span className={styles.dc_information}>
                    <Image className={styles.logoChikitaverse} src='/chikitaverse_logo.jpg' alt='Logo Chikitaverse' width={100} height={100}/>
                    <h6>{dataDiscord.discord_data.name}</h6>
                        <p>Membros: {countmembersDc}</p>
                         <p>Online: {dataDiscord.discord_data.presence_count || 'Error' }</p>
                            <Link href={dataDiscord.discord_data.instant_invite || '#'} target='_blank' className={styles.linkdc}>
                                <button>Enter Serve</button>
                            </Link>
                </span>
            </nav>
        )

    } catch (err) {
        return (
            <nav>
                <p>Error {err}</p>
            </nav>
        )
    }
}