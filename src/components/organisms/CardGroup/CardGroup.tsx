import React from 'react'

import { H2, P } from '@/components/atoms/Text'
import classNames from '@/utils/classNames'

import styles from './CardGroup.module.scss'
import { I_CardGroupProps } from './CardGroup.types'

const CardGroup = ({ title, subtitle, children }: I_CardGroupProps) => {
  return (
    <section className={classNames(styles.section)}>
      <H2>{title}</H2>
      <P className={styles.subtitle}>{subtitle}</P>
      <div className={styles.cardContainer}>{children}</div>
    </section>
  )
}

export default CardGroup
