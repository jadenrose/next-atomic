import React from 'react'

import classNames from '@/utils/classNames'

import styles from './Button.module.scss'
import { I_ButtonProps } from './Button.types'

const Button = ({ children, variant = 'primary' }: I_ButtonProps) => {
  return (
    <button className={classNames(styles.button, styles[variant])}>
      <span className={styles.inner}>{children}</span>
    </button>
  )
}

export default Button
