import React from 'react'

import classNames from '@/utils/classNames'

import styles from './Card.module.scss'
import { I_CardProps } from './Card.types'

const Card = ({ greeting }: I_CardProps) => {
  return (
    <div className={classNames(styles.container, 'another-class')}>
      {greeting}
    </div>
  )
}

export default Card
