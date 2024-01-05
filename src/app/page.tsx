import Image from 'next/image'

import Button from '@/components/atoms/Button'
import Text, { H1, P } from '@/components/atoms/Text'

import styles from './Home.module.scss'

const Home = () => {
  return (
    <section className={styles.welcomeSection}>
      <div className={styles.spinContainer}>
        <Image
          className={styles.logo}
          alt="next atomic logo"
          src="/atom_logo.png"
          width={219}
          height={200}
        />
      </div>
      <H1>Welcome to Next.js Atomic!</H1>
      <P className={styles.welcomeParagraph}>
        This is an opinionated project template for Next.js that lets you start
        building apps from scratch quickly while maintaining consistent coding
        and design practices.
      </P>
      <div className={styles.buttonContainer}>
        <Button variant="primary" href="https://google.com" target="_blank">
          <Text>Read Docs</Text>
        </Button>
        <Button variant="secondary" href="/demo">
          <Text>Atomic Demo</Text>
        </Button>
      </div>
    </section>
  )
}

export default Home
