import { useEffect } from "react"

export default function Profile() {
    
    useEffect(() => {
        document.title = 'Chikitaverse - Profile'
    })
    
    return (
        <>
        <h1>Profile</h1>
        </>
    )
}