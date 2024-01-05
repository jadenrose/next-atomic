import React from 'react'

import { P } from '@/components/atoms/Text'
import classNames from '@/utils/classNames'

import styles from './Card.module.scss'
import { I_CardProps } from './Card.types'

const Card = ({ title, subtitle, children }: I_CardProps) => {
  return (
    <div className={classNames(styles.container, 'another-class')}>
      <div className={styles.cardIntro}>
        <P className={styles.cardTitle}>{title}</P>
        <P className={styles.cardSubtitle}>{subtitle}</P>
      </div>
      {children}
    </div>
  )
}

export default Card
