import remarkGfm from 'remark-gfm'
import remarkPresetLintConsistent from 'remark-preset-lint-consistent'
import remarkPresetLintRecommended from 'remark-preset-lint-recommended'

import remarkLintNoTodosAllowed from './rules/no-todos-allowed.js'

/**
 * @typedef {import('unified').Preset} Preset
 */

/** @type {Preset} */
const preset = {
  plugins: [
    remarkPresetLintConsistent,
    remarkPresetLintRecommended,
    remarkGfm,
    remarkLintNoTodosAllowed,
  ],
}

export default preset
