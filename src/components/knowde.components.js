import { COMPONENTS_TYPES } from '../consts.js';

export default (editor, config = {}) => {
  const domc = editor.DomComponents;
  domc.addType(COMPONENTS_TYPES.knowde_component, {
    // Define the Model
    model: {

      defaults: {
        // Can't drop other elements inside it
        // tagName: 'latest-brands',
        droppable: false,
        stylable: false,
        copyable: false,
        editable: false,
        style: {
          width: '100%',
          display: 'block',
          padding: '5px',
          'min-height': '50px',
          'min-width': '50px'
        }
      },
    }
  });
};
