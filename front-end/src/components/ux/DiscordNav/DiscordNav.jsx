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

        if (!apiDiscord.ok) {
            throw new Error(`Api Error: ${apiDiscord.status}`)
        }

        const dataDiscord = await apiDiscord.json()
        const membersDiscord = await dataDiscord.discord_data.members
        const countmembersDc = membersDiscord.length || 'Error'

        return (
            <nav className={styles.discord} >
                <span>
                    <Image src='/discord.svg' alt='Discord Logo' width={26} height={26}/>
                      <h4>Discord Serve</h4>
                </span>

                <span className={styles.dc_information}>
                    <h6>{dataDiscord.discord_data.name}</h6>
                        <p>Membros: {countmembersDc}</p>
                         <p>Online: {dataDiscord.discord_data.presence_count || 0 }</p>
                            <Link href={dataDiscord.discord_data.instant_invite} target='_blank' className={styles.linkdc}>
                                <button>Enter Serve</button>
                            </Link>
                </span>
            </nav>
        )

    } catch (err) {
        console.error(`Error: ${err}`)
        return (
            <nav>
                <p>Error {err}</p>
            </nav>
        )
    }
}