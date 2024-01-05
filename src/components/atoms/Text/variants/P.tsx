import React from 'react'

import Text from '@/components/atoms/Text'
import styles from '@/components/atoms/Text/Text.module.scss'
import classNames from '@/utils/classNames'

import { I_TextProps } from '../Text.types'

const P = ({ as = 'p', className, ...rest }: I_TextProps) => {
  return <Text className={classNames(styles.p, className)} as={as} {...rest} />
}

export default P
