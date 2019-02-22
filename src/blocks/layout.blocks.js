import { COMPONENTS_TYPES, DEFAULT_LABELS } from '../consts';

export default (editor, config = {}) => {
  const bm = editor.BlockManager;
  const c = config;
  let blocks = c.blocks;
  let cats = c.blockCategories;

  if (cats.layout_basic) {
    loadLayoutBasicBlocks(editor, config);
  }
  if (cats.layout_predefined_sets) {
    loadLayoutPredefinedSetsBlocks(editor, config);
  }
};

/**
 * Load basic blocks (container, row, column)
 * @param editor
 * @param config
 */
function loadLayoutBasicBlocks(editor, config) {
  const bm = editor.BlockManager,
    category_basic = { id: 'layout_basic', label: DEFAULT_LABELS.layout_category };

  let blocks = config.blocks;

  if (blocks.layout_container) {
    bm.add('layout_basic-container-block', {
      label: config.labels.layout_container,
      category: category_basic,
      attributes: { class: 'fa fa-square-o' },
      content: {
        type: COMPONENTS_TYPES.layout_container_component,
        classes: ['container']
      }
    });
  }

  if (blocks.layout_row) {
    bm.add('layout_basic-row-block', {
      label: config.labels.layout_row,
      category: category_basic,
      attributes: { class: 'fa fa-table' },
      content: {
        type: COMPONENTS_TYPES.layout_row_component,
        classes: ['row']
      }
    });
  }

  if (blocks.layout_column) {
    bm.add('layout_basic-column-block', {
      label: config.labels.layout_column,
      category: category_basic,
      attributes: { class: 'fa fa-table' },
      content: {
        type: COMPONENTS_TYPES.layout_column_component,
        classes: ['col']
      }
    });
  }
}

/**
 * Load predefined sets blocks (2/3 columns layouts etc)
 * @param editor
 * @param config
 */
function loadLayoutPredefinedSetsBlocks(editor, config) {
  const bm = editor.BlockManager,
    category_predefined = { id: 'layout_predefined', label: DEFAULT_LABELS.layout_predefined_sets };

  let blocks = config.blocks;

  if (blocks.layout_column) {
    bm.add('layout_basic-template-2-column-block', {
      label: DEFAULT_LABELS.layout_predefined_2_cols,
      category: category_predefined,
      content: `
            <div class="container" data-gjs-type="${COMPONENTS_TYPES.layout_container_component}">
                <div class="row" data-gjs-type="${COMPONENTS_TYPES.layout_row_component}">
                    <div class="col" data-gjs-type="${COMPONENTS_TYPES.layout_column_component}"></div>
                    <div class="col" data-gjs-type="${COMPONENTS_TYPES.layout_column_component}"></div>
                </div>
            </div>`
    });
  }

  if (blocks.layout_column) {
    bm.add('layout_basic-template-3-column-block', {
      label: DEFAULT_LABELS.layout_predefined_3_cols,
      category: category_predefined,
      content: `
            <div class="container" data-gjs-type="${COMPONENTS_TYPES.layout_container_component}">
                <div class="row" data-gjs-type="${COMPONENTS_TYPES.layout_row_component}">
                    <div class="col" data-gjs-type="${COMPONENTS_TYPES.layout_column_component}"></div>
                    <div class="col" data-gjs-type="${COMPONENTS_TYPES.layout_column_component}"></div>
                    <div class="col" data-gjs-type="${COMPONENTS_TYPES.layout_column_component}"></div>
                </div>
            </div>`
    });
  }
}
