import { lintRule } from 'unified-lint-rule'
import { visit } from 'unist-util-visit'

const noTodosAllowed = lintRule(
  'remark-lint:no-todos-allowed',
  (tree, file) => {
    visit(tree, 'text', (node) => {
      if (/@TODO/i.test(node.value)) {
        file.message(
          'Replace TODO with the appropriate documentation for this section',
          node
        )
      }
    })
  }
)

export default noTodosAllowed
