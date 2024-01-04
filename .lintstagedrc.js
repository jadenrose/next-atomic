import path from 'path'

const buildEslintCommand = (filenames) =>
  `next lint --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

const lintStagedConfig = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '*.md': (filenames) =>
    filenames.map((filename) => {
      console.log(filename)
      return `npx remark ${filename}`
    }),
}

export default lintStagedConfig
