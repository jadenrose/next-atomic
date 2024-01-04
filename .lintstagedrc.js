import path from 'path'

const ignorePatterns = {
  md: ['plop-templates'],
}

const buildEslintCommand = (filenames) =>
  `next lint --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

const lintStagedConfig = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '*.md': (filenames) =>
    filenames
      .filter((filename) => {
        let ignored = false
        for (const pattern of ignorePatterns.md)
          if (filename.includes(pattern)) ignored = true
        return !ignored
      })
      .map((filename) => {
        console.log('Linting Markdown File:', filename)
        return `npx remark ${filename}`
      }),
}

export default lintStagedConfig
