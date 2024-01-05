import React from 'react'

import Button from '@/components/atoms/Button'
import { H1, P } from '@/components/atoms/Text'
import Card from '@/components/molecules/Card'
import CardGroup from '@/components/organisms/CardGroup'

import styles from './DemoPage.module.scss'

const DemoPage = () => {
  return (
    <>
      <nav className={styles.backButton}>
        <Button variant="text" href="/" icon="caret-left">
          Go Back Home
        </Button>
      </nav>
      <article className={styles.preamble}>
        <H1>What is Atomic Design?</H1>
        <P>
          No one-paragraph explanation will do it justice, so it&apos;s best to
          get it from the&nbsp;source:{' '}
          <a
            className={styles.anchor}
            href="https://bradfrost.com/blog/post/atomic-web-design/"
            target="_blank"
          >
            https://bradfrost.com/blog/post/atomic-web-design/
          </a>
        </P>
        <P>
          This template doesn&apos;t follow Brad Frost&apos;s guide to the
          letter. It focuses on implementing the 3 basic parts:{' '}
          <strong>Atoms</strong>, <strong>Molecules</strong>, and&nbsp;
          <strong>Organisms</strong>. Because of the way Next.js projects are
          structured, implementing <strong>Templates</strong> and{' '}
          <strong>Pages</strong> is a bit redundant since this is basically what
          layout components and app routes&nbsp;accomplish.
        </P>
      </article>

      <CardGroup
        title="This is an Organism"
        subtitle="Organisms will be a collection of molecules (e.g.: Cards) and atoms (e.g.: Text, Buttons) that come together to form some significant UI element on a&nbsp;page."
      >
        <Card
          title="Molecule"
          subtitle="Molecules will be a collection of a few atoms. These tend to be fairly simple elements on a page and tend to serve a single purpose."
        >
          <Button className={styles.cardButton}>Atom</Button>
        </Card>
        <Card
          title="Molecule"
          subtitle="If you find yourself adding a bunch of features and extra functionality to a molecule, it may be a sign to to break it out into multiple molecules and group them as a new Organism."
        >
          <Button className={styles.cardButton}>Atom</Button>
        </Card>
        <Card
          title="Molecule"
          subtitle="The text and buttons found throughout this demo are Atoms. These are simple, reusable elements that should serve a single purpose and ideally will render as a single HTML element."
        >
          <Button className={styles.cardButton}>Atom</Button>
        </Card>
      </CardGroup>
    </>
  )
}

export default DemoPage
