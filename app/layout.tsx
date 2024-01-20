import { Navbar } from "@/features/navbar/components/Navbar"
import "../styles/globals.css"
import { Providers } from "./providers"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="text-stone-900 dark:text-slate-50 bg-slate-50 dark:bg-stone-900">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
