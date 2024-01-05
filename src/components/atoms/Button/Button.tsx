import React from 'react'

import Link from 'next/link'

import CaretLeft from '@/components/icons/CaretLeft'
import { accentGreen } from '@/scss/colors'
import classNames from '@/utils/classNames'

import styles from './Button.module.scss'
import { I_ButtonProps } from './Button.types'

const Button = ({
  children,
  className,
  variant = 'primary',
  href,
  target,
  icon,
}: I_ButtonProps) => {
  const label = (
    <>
      {icon === 'caret-left' && <CaretLeft size={24} color={accentGreen} />}
      <span className={styles.inner}>{children}</span>
    </>
  )

  if (href)
    return (
      <Link
        href={href}
        target={target}
        className={classNames(styles.button, styles[variant], className)}
      >
        {label}
      </Link>
    )

  return (
    <button className={classNames(styles.button, styles[variant], className)}>
      {label}
    </button>
  )
}

export default Button
