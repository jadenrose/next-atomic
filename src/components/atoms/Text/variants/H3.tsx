import React from 'react'

import Text from '@/components/atoms/Text'
import styles from '@/components/atoms/Text/Text.module.scss'
import classNames from '@/utils/classNames'

import { I_TextProps } from '../Text.types'

const H3 = ({ as = 'h3', className, ...rest }: I_TextProps) => {
  return <Text className={classNames(styles.h3, className)} as={as} {...rest} />
}

export default H3
