'use client'

import { ThemeProvider } from "next-themes"

export default function ProviderTheme({ children }) {
    
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}