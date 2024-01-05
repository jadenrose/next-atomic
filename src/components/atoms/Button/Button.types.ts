import { HTMLAttributeAnchorTarget, ReactNode } from 'react'

import { Url } from 'next/dist/shared/lib/router/router'

export interface I_ButtonProps {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'text'
  href?: Url
  target?: HTMLAttributeAnchorTarget
  icon?: 'caret-left'
}
