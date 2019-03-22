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
        ]
      }
    }
  });

  // todo: TMP...
  const slidesList = [1, 2, 3, 4], // no. of slides
    slidesProperties = ['image', 'title', 'buttonText', 'buttonAction'];

  const slidesAttrs = {};
  // Fill attributes for slides
  slidesList.forEach(slideNo => {
    slidesProperties.forEach(optionName => {
      slidesAttrs[`slide-${slideNo}-${optionName}`] = '';
    });
  });

  // generate traits

  // console.log(slidesAttrs);
  /// TODO: END OF TMP>...

  domc.addType(COMPONENTS_TYPES.knowde_slider, {
    isComponent: el => {
      if (el && el.tagName == 'SIMPLE-SLIDER') {
        return { type: COMPONENTS_TYPES.knowde_slider };
      }
    },
    model: {
      defaults: {
        'custom-name': DEFAULT_LABELS.knowde_components_slider,
        tagName: 'simple-slider',
        attributes: { ...slidesAttrs },
        droppable: false,
        stylable: true,
        copyable: false,
        editable: false,
        traits: [
          //
          ...slidesList
            .map(slideNo => {
              return slidesProperties.map(optionName => {
                return {
                  type: optionName === 'image' ? 'text' : 'text',
                  label: `Slide ${slideNo} ${optionName}`,
                  name: `slide-${slideNo}-${optionName}`
                };
              });
            })
            .flat(1)
        ]
      }
    }
  });
};
