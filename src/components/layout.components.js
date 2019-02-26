import { COMPONENTS_TYPES } from '../consts.js';
import { DEFAULT_LABELS } from '../consts';

export default (editor, config = {}) => {
  const domc = editor.DomComponents;
  const c = config;
  let blocks = c.blocks;
  let cats = c.blockCategories;

  if (!cats.layout_basic) {
    return;
  }

  // Set classes to private to avoid changing styles for global classes
  const selectorClasses = [
    'container',
    'container-fluid',
    'row',
    'col',
    ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(v => 'col-' + v)
  ];
  const privateCls = selectorClasses.map(v => '.' + v);

  editor.on('selector:add', selector => privateCls.indexOf(selector.getFullName()) >= 0 && selector.set('private', 1));

  // DIV .container
  if (blocks.layout_container) {
    domc.addType(COMPONENTS_TYPES.layout_container_component, {
      isComponent: el => {
        const isContainer =
          el &&
          el.tagName == 'DIV' &&
          el.classList &&
          (el.classList.contains('container') || el.classList.contains('container-fluid'));

        if (isContainer) {
          return { type: COMPONENTS_TYPES.layout_container_component };
        }
      },
      // Define the Model
      model: {
        defaults: {
          'custom-name': DEFAULT_LABELS.layout_container,
          tagName: 'div',
          droppable: true,
          traits: [
            {
              type: 'class_select',
              options: [{ value: 'container', name: 'Fixed' }, { value: 'container-fluid', name: 'Fluid' }],
              label: 'Width'
            }
          ]
        }
      }
    });
  }

  // ROW
  if (blocks.layout_row) {
    domc.addType(COMPONENTS_TYPES.layout_row_component, {
      isComponent: el => {
        const isContainer = el && el.tagName == 'DIV' && el.classList && el.classList.contains('row');

        if (isContainer) {
          return { type: COMPONENTS_TYPES.layout_row_component };
        }
      },
      // Define the Model
      model: {
        defaults: {
          'custom-name': DEFAULT_LABELS.layout_row,
          tagName: 'div',
          draggable: '.container, .container-fluid',
          droppable: true
        }
      }
    });
  }

  if (blocks.layout_column) {
    domc.addType(COMPONENTS_TYPES.layout_column_component, {
      isComponent: el => {
        let match = false;
        if (el && el.tagName == 'DIV' && el.classList) {
          el.classList.forEach(function(className) {
            if (className == 'col' || className.match(/^col-/)) {
              match = true;
            }
          });
        }
        if (match) return { type: COMPONENTS_TYPES.layout_column_component };
      },
      // Define the Model
      model: {
        defaults: {
          'custom-name': DEFAULT_LABELS.layout_column,
          tagName: 'div',
          draggable: '.row',
          droppable: true,
          stylable: true
        }
      }
    });
  }
};
