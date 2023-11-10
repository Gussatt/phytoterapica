import { Montserrat } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Phytoterapica Loja',
  description: 'Loja da Phytoterapica',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
