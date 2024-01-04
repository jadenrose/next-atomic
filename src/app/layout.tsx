import { ReactNode } from 'react'

import { Ubuntu } from 'next/font/google'

import classNames from '@/utils/classNames'

import styles from './layout.module.scss'
import './global.scss'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '700'] })

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Next.js Atomic</title>
      </head>
      <body className={classNames(ubuntu.className, styles.body)}>
        <header></header>
        <main className={styles.main}>{children}</main>
        <footer></footer>
      </body>
    </html>
  )
}

export default RootLayout
