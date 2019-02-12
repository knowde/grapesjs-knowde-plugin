import { COMPONENTS_TYPES } from '../consts.js';

export default (editor, config = {}) => {
  const domc = editor.DomComponents;
  const defaultType = domc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;

  domc.addType(COMPONENTS_TYPES.knowde_component, {
    // Define the Model
    model: defaultModel.extend(
      {
        // Extend default properties
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
          // Can't drop other elements inside it
          // tagName: 'latest-brands',
          droppable: false,
          stylable: false,
          copyable: false,
          style: {
            width: '100%',
            display: 'inline-block',
            padding: '5px',
            'min-height': '50px',
            'min-width': '50px'
          }
        })
      },
      // The second argument of .extend are static methods and we'll put inside our
      // isComponent() method. As you're putting a new Component type on top of the stack,
      // not declaring isComponent() might probably break stuff, especially if you extend
      // the default one.
      {
        isComponent: function(el) {
          if (el.tagName === COMPONENTS_TYPES.knowde_component.toUpperCase()) {
            return { type: COMPONENTS_TYPES.knowde_component };
          }
        }
      }
    ),
    // Define the View
    view: defaultType.view
  });
};
