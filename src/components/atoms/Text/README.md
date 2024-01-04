# Component: `Text` (Atom)

## The problem

You need a highly portable, highly configurable text component. The base component without any arguments should act just like a span and should support semantic markup by having a configurable `tagname`. The component should include some basic global styles to achieve consistent typography site-wide.

## This solution

`Text` is a catch-all atom to help with consistent typography across the app. It keeps things like `font-family` and `letter-spacing` consistent while allowing for full configuration to fit any situation where text needs to be displayed. By default this renders a native `span` element, but passing in the `as` prop allows you to choose any native HTML tag supported by the `React.ElementType` enum. Semantic markup best practices would suggest sticking to tags that are generally used for text (`'p'`, `'h1'`, `'strong'`), but nothing's stopping you from making it a `div` or a `table`.

## Usage

```tsx
import React from 'react'

import Text from '@/components/atoms/Text'

const Container = () => {
  return (
    <div className="container">
      <Text>Hello from a span!</Text>
    </div>
  )
}

export default Container
```

## Props

### children

> `ReactNode` / _required_

Typical implementation of a React component's `children` prop. Whatever is passed in here will be rendered as the direct child of the resulting HTML element.

### as

> `string` / _optional, defaults to `'span'`_

Pass a value to this prop to override the default `<span>` tag for better semantic markup.

```tsx
import React from 'react'

import Text from '@/components/atoms/Text'

const Container = () => {
  return (
    <div className="container">
      <Text as="p">Hello from a paragraph!</Text>
    </div>
  )
}

export default Container
```

### className

> `string` / _optional, no useful default_

This is **not** an override of any default classes on the component, a string supplied via the className prop will be appended to the default className prop. You can pass in multiple classNames like any other HTML element with a space-delimited string:

```tsx
<>
  <Text className="one-class another-class" />
</>
```
