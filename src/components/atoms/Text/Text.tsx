'use client'
import React from 'react'

import classNames from '@/utils/classNames'

import styles from './Text.module.scss'
import { I_TextProps } from './Text.types'

const Text = ({ className, as: DynamicTag = 'span', ...rest }: I_TextProps) => {
  return <DynamicTag className={classNames(styles.base, className)} {...rest} />
}

export default Text
