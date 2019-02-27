import { COMPONENTS_TYPES, DEFAULT_LABELS } from '../consts.js';

export default (editor, config = {}) => {
  const domc = editor.DomComponents;
  domc.addType(COMPONENTS_TYPES.knowde_latest_brands, {
    isComponent: el => {
      if (el && el.tagName == 'LATEST-BRANDS') {
        return { type: COMPONENTS_TYPES.knowde_latest_brands };
      }
    },
    // Define the Model
    model: {
      defaults: {
        'custom-name': DEFAULT_LABELS.knowde_components_latest_brands,
        tagName: 'latest-brands',
        droppable: false,
        stylable: false,
        copyable: false,
        editable: false
      }
    }
  });

  domc.addType(COMPONENTS_TYPES.knowde_counter, {
    isComponent: el => {
      if (el && el.tagName == 'SIMPLE-COUNTER') {
        return { type: COMPONENTS_TYPES.knowde_counter };
      }
    },
    // <simple-counter start="0" end="1290" decimals="2" groupingSeparator="," decimalSeparator="." duration="7" useGrouping="true" prefix="" suffix=""></simple-counter>
    // Define the Model
    model: {
      defaults: {
        'custom-name': DEFAULT_LABELS.knowde_components_counter,
        tagName: 'simple-counter',
        attributes: {
          start: 0,
          end: 100,
          decimals: 0,
          groupingSeparator: ',',
          decimalSeparator: '.',
          duration: 7,
          useGrouping: true,
          prefix: '',
          suffix: ''
        },
        droppable: false,
        stylable: true,
        copyable: false,
        editable: false,
        traits: [
          {
            type: 'number',
            label: 'Start',
            name: 'start'
          },
          {
            type: 'number',
            label: 'End',
            name: 'end'
          },
          {
            type: 'number',
            label: 'Duration (sec)',
            name: 'duration'
          },
          {
            type: 'number',
            label: 'Decimals',
            name: 'decimals'
          },
          {
            type: 'text',
            label: 'Prefix',
            name: 'prefix'
          },
          {
            type: 'text',
            label: 'Suffix',
            name: 'suffix'
          }
          // {
          //   type: 'select',
          //   label: 'Grouping separator',
          //   name: 'groupingSeparator',
          //   options: [{ value: ',', name: 'Comma' }, { value: ' ', name: 'Space' }]
          // }
        ]
      }
    }
  });
};
