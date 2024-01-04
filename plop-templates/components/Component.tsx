import React from 'react'

import classNames from '@/utils/classNames'

import styles from './{{componentName}}.module.scss'
import { I_{{componentName}}Props } from './{{componentName}}.types'

const {{componentName}} = ({ greeting }: I_{{componentName}}Props) => {
  return (
    <div className={classNames(styles.container, 'another-class')}>
      {greeting}
    </div>
  )
}

export default {{componentName}}
