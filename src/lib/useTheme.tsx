"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from "next-themes"

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            {...props}
        >
            {children}
        </NextThemesProvider>
    )
}

export function useTheme() {
    const { theme, setTheme, resolvedTheme } = useNextTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    // During SSR and first client render, use the default theme to avoid hydration mismatch
    const activeTheme = mounted ? (resolvedTheme as "dark" | "light") : "dark"

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }

    return {
        theme: activeTheme,
        setTheme: (theme: "dark" | "light") => setTheme(theme),
        toggleTheme,
        resolvedTheme,
        mounted
    }
}
