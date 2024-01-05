import React from 'react'

import Text from '@/components/atoms/Text'
import styles from '@/components/atoms/Text/Text.module.scss'
import classNames from '@/utils/classNames'

import { I_TextProps } from '../Text.types'

const H5 = ({ as = 'h5', className, ...rest }: I_TextProps) => {
  return <Text className={classNames(styles.h5, className)} as={as} {...rest} />
}

export default H5
