# About Icons

## The problem

You need a highly reusable icon component that is 100% portable and essentially acts just like text in a span. SVG's can be notoriously time-consuming to import and use in a project, so this component should abstract away a lot of the implementation to reduce dev lift as much as possible.

## This solution

There's no universal `Icon` component, instead each new SVG Icon is its own component, but they share a `types` file and a `module.scss` file. This allows for much faster implemention of new icon components as a project grows while keeping CSS and behaviour consistent across all icons. The dev lift for adding new icons has been reduced as much as possible through the use of `plop.js` to quickly scaffold new icon components. Devs can use `npm run generate:icon` to scaffold a new icon component, but then it's up to the devs to plug the props into where they need to go after pasting in the SVG code.

## Adding a new icon

### Getting the SVG code

The first step is to find the right SVG. I like to use <a href="https://icon-sets.iconify.design/">Iconify</a> since it aggregates many of the most popular icon sets into one repository so you can search and shop for what you need very efficiently. Once you find an icon, download the SVG or simply copy the SVG code if the site/source you use allows it (another reason I prefer iconify).

For this example, we'll use <a href="https://icon-sets.iconify.design/octicon/thumbsup-16/">thumbsup-16</a> from GitHub's Design System icon set: Octicons.

Here's the code copied straight from iconify:

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
>
  <path fill="currentColor" ... />
</svg>
```

Store this copied code somewhere. We'll need it in a second. If your SVG came in the form of the download of an `.svg` file, keep it in your downloads for now.

### Scaffolding the component

Use your CLI to run `npm run generate:icon` and follow the prompts to scaffold the new icon. In this case, we're setting the new icon name to `'ThumbsUp'`.

```ps
$ npm run generate:icon

> personal-ticket-tracker@0.1.0 generate:icon
> plop icon

? What is the name of the icon? ThumbsUp
```

You should have a new folder under `src/components/icons` called `ThumbsUp`. This folder contains an `index` file with a default export and the `ThumbsUp.tsx` component file. These are the default contents of the generated icon component file:

```tsx
import React from 'react'

import styles from '../Icon.module.scss'
import { I_IconProps } from '../Icon.types'

const ThumbsUp = ({ color, size }: I_IconProps) => {
  return (
    <svg
      className={styles.icon}
      style={{
        maxWidth: size,
        maxHeight: size,
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1536 1536"
    >
      <path fill={color || 'currentColor'} ... />
    </svg>
  )
}

export default ThumbsUp
```

There's sample SVG code in the component to show how things need to be implemented after we replace it with our own SVG code. Make note of where the component props are being plugged into the SVG code.

### Plugging in the new SVG code

Copy your SVG code (if you have an SVG file, open it in your editor and copy the contents) and replace everything inside the component's `return ()` clause with the SVG code. Here's what it should look like after pasting:

```tsx
import React from 'react'

import styles from '../Icon.module.scss'
import { I_IconProps } from '../Icon.types'

const ThumbsUp = ({ color, size }: I_IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        ...
      />
    </svg>
  )
}

export default ThumbsUp
```

First thing's first: remove the `height` and `width` attributes from the `<svg>` tag, we want this to be dynamically set through our `props`.

Next, add back the attributes `className` and `style` like how they were in the original file. Notice that we're setting the `maxWidth` and `maxHeight`, not `width` and `height`. This will prevent any oversizing issues breaking flow and it also means that the sizing of the icon will be responsive relative to its parent if needed.

<!-- prettier-ignore-start -->
```html
<svg
  className={styles.icon}
  style={{
    maxWidth: size,
    maxHeight: size,
  }}
  ...
>
  ...
</svg>
```
<!-- prettier-ignore-end -->

Lastly, on any children of the svg element (e.g. `<path>`), look for color attributes, often it'll be a `fill` attribute. Depending on the site you got your SVG from, this may be a hard-coded hexcode color, or `currentColor`. We want to keep this attribute, but replace its value the color prop:

<!-- prettier-ignore-start -->
```html
<path fill={color} ... />
```
<!-- prettier-ignore-end -->

This gives the user of the component the ability to override the color of the icon with the `color` prop, with a default fallback of `currentColor`, which corresponds the font `color` of its parent.

Here's the final code for our new icon component:

```tsx
import React from 'react'

import styles from '../Icon.module.scss'
import { I_IconProps } from '../Icon.types'

const ThumbsUp = ({ color = 'currentColor', size }: I_IconProps) => {
  return (
    <svg
      className={styles.icon}
      style={{
        maxWidth: size,
        maxHeight: size,
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <path
        fill={color}
        d="M8.834.066c.763.087 1.5.295 2.01.884c.505.581.656 1.378.656 2.3c0 .467-.087 1.119-.157 1.637L11.328 5h1.422c.603 0 1.174.085 1.668.333c.508.254.911.679 1.137 1.2c.453.998.438 2.447.188 4.316l-.04.306c-.105.79-.195 1.473-.313 2.033c-.131.63-.315 1.209-.668 1.672C13.97 15.847 12.706 16 11 16c-1.848 0-3.234-.333-4.388-.653c-.165-.045-.323-.09-.475-.133c-.658-.186-1.2-.34-1.725-.415A1.75 1.75 0 0 1 2.75 16h-1A1.75 1.75 0 0 1 0 14.25v-7.5C0 5.784.784 5 1.75 5h1a1.75 1.75 0 0 1 1.514.872c.258-.105.59-.268.918-.508C5.853 4.874 6.5 4.079 6.5 2.75v-.5c0-1.202.994-2.337 2.334-2.184M4.5 13.3c.705.088 1.39.284 2.072.478l.441.125c1.096.305 2.334.598 3.987.598c1.794 0 2.28-.223 2.528-.549c.147-.193.276-.505.394-1.07c.105-.502.188-1.124.295-1.93l.04-.3c.25-1.882.189-2.933-.068-3.497a.921.921 0 0 0-.442-.48c-.208-.104-.52-.174-.997-.174H11c-.686 0-1.295-.577-1.206-1.336c.023-.192.05-.39.076-.586c.065-.488.13-.97.13-1.328c0-.809-.144-1.15-.288-1.316c-.137-.158-.402-.304-1.048-.378C8.357 1.521 8 1.793 8 2.25v.5c0 1.922-.978 3.128-1.933 3.825a5.831 5.831 0 0 1-1.567.81ZM2.75 6.5h-1a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25"
      />
    </svg>
  )
}

export default ThumbsUp
```

Save your work and your new icon is ready to use!

## Usage

```tsx
import ThumbsUp from '@/components/icons/ThumbsUp'

const Container = () => {
  return (
    <div className="container">
      <ThumbsUp />
    </div>
  )
}

export default Container
```

## Props

### color

> `string` / _optional, defaults to `'currentColor'`_

Override the color of the icon with any valid HTML/CSS color value (hex, name, rgba, etc.), or leave it blank and it'll inherit the `color` of its parent.

### size

> `number` / _optional, no useful default_

Provide a pixel value to override the default sizing behaviour. By default, it'll grow to fill its container.
