"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from "next-themes"

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
            {...props}
        >
            {children}
        </NextThemesProvider>
    )
}

export function useTheme() {
    const { setTheme, resolvedTheme } = useNextTheme()
    // Use useEffect to properly detect client-side mounting after hydration
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    // Always return "dark" during SSR and hydration to avoid mismatch
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
