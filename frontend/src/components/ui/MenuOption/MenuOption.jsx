import Link from "next/link"

export default function MenuOption({ children, link }) {

    const vrlink = `${link}`

    return (
        <li>
            <Link href={vrlink}>
                {children}
            </Link>
        </li>
    )
}