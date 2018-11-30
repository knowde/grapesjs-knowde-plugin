import _ from 'underscore';
import _s from 'underscore.string';

export default (editor, config = {}) => {
  const img_src_default = 'https://dummyimage.com/450x250/999/222';

  const contexts = ['brand', 'primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];

  const contexts_w_white = contexts.concat(['white']);

  const sizes = {
    lg: 'Large',
    sm: 'Small'
  };

  const c = config;
  let domc = editor.DomComponents;
  let blocks = c.blocks;
  let cats = c.blockCategories;

  var defaultType = domc.getType('default');
  var defaultModel = defaultType.model;
  var defaultView = defaultType.view;

  var textType = domc.getType('text');
  var textModel = textType.model;
  var textView = textType.view;

  var linkType = domc.getType('link');
  var linkModel = linkType.model;
  var linkView = linkType.view;

  var imageType = domc.getType('image');
  var imageModel = imageType.model;
  var imageView = imageType.view;

  if (cats.basic) {
    if (blocks.default) {
      domc.addType('default', {
        model: defaultModel.extend({
          defaults: Object.assign({}, defaultModel.prototype.defaults, {
            tagName: 'div',
            traits: [
              {
                type: 'class_select',
                options: [
                  { value: '', name: 'Default' },
                  ...contexts_w_white.map(function(v) {
                    return { value: 'text-' + v, name: _s.capitalize(v) };
                  })
                ],
                label: 'Text color'
              },
              {
                type: 'class_select',
                options: [
                  { value: '', name: 'Default' },
                  ...contexts_w_white.map(function(v) {
                    return { value: 'bg-' + v, name: _s.capitalize(v) };
                  })
                ],
                label: 'Background color'
              },
              {
                type: 'class_select',
                options: [
                  { value: '', name: 'Default' },
                  { value: 'border', name: 'Full' },
                  { value: 'border-top-0', name: 'No top' },
                  { value: 'border-right-0', name: 'No right' },
                  { value: 'border-bottom-0', name: 'No bottom' },
                  { value: 'border-left-0', name: 'No left' },
                  { value: 'border-0', name: 'None' }
                ],
                label: 'Border width'
              },
              {
                type: 'class_select',
                options: [
                  { value: '', name: 'Default' },
                  ...contexts_w_white.map(function(v) {
                    return { value: 'border border-' + v, name: _s.capitalize(v) };
                  })
                ],
                label: 'Border color'
              },
              {
                type: 'class_select',
                options: [
                  { value: '', name: 'Default' },
                  { value: 'rounded', name: 'Rounded' },
                  { value: 'rounded-top', name: 'Rounded top' },
                  { value: 'rounded-right', name: 'Rounded right' },
                  { value: 'rounded-bottom', name: 'Rounded bottom' },
                  { value: 'rounded-left', name: 'Rounded left' },
                  { value: 'rounded-circle', name: 'Circle' },
                  { value: 'rounded-0', name: 'Square' }
                ],
                label: 'Border radius'
              },
              {
                type: 'text',
                label: 'ID',
                name: 'id',
                placeholder: 'my_element'
              },
              {
                type: 'text',
                label: 'Title',
                name: 'title',
                placeholder: 'My Element'
              }
            ] //.concat(defaultModel.prototype.defaults.traits)
          }),
          init() {
            const classes = this.get('classes');
            classes.bind('add', this.classesChanged.bind(this));
            classes.bind('change', this.classesChanged.bind(this));
            classes.bind('remove', this.classesChanged.bind(this));
            this.init2();
          },
          /* BS comps use init2, not init */
          init2() {},
          /* method where we can check if we should changeType */
          classesChanged() {},
          /* replace the comp with a copy of a different type */
          changeType(new_type) {
            const coll = this.collection;
            const at = coll.indexOf(this);
            const button_opts = {
              type: new_type,
              style: this.getStyle(),
              attributes: this.getAttributes(),
              content: this.view.el.innerHTML
            };
            coll.remove(this);
            coll.add(button_opts, { at });
            this.destroy();
          }
        }),
        view: defaultView
      });
      defaultType = domc.getType('default');
      defaultModel = defaultType.model;
      defaultView = defaultType.view;
    }

    if (blocks.text) {
      domc.addType('text', {
        model: defaultModel.extend(
          {
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
              'custom-name': 'Text',
              tagName: 'div',
              droppable: true,
              editable: true
            })
          },
          {
            /*isComponent(el) {
            if(el && el.dataset && el.dataset.bsText) {
              return {type: 'text'};
            }
          }*/
          }
        ),
        view: textView
      });
      textType = domc.getType('text');
      textModel = textType.model;
      textView = textType.view;
    }

    if (blocks.link) {
      domc.addType('link', {
        model: textModel.extend(
          {
            defaults: Object.assign({}, textModel.prototype.defaults, {
              'custom-name': 'Link',
              tagName: 'a',
              droppable: true,
              editable: true,
              traits: [
                {
                  type: 'text',
                  label: 'Href',
                  name: 'href',
                  placeholder: 'https://www.knowde.com'
                },
                {
                  type: 'select',
                  options: [{ value: '', name: 'This window' }, { value: '_blank', name: 'New window' }],
                  label: 'Target',
                  name: 'target'
                }
              ].concat(textModel.prototype.defaults.traits)
            }),

            classesChanged(e) {
              if (this.attributes.type == 'link') {
                if (
                  this.attributes.classes.filter(function(klass) {
                    return klass.id == 'btn';
                  }).length > 0
                ) {
                  this.changeType('button');
                }
              }
            }
          },
          {
            isComponent(el) {
              if (el && el.tagName && el.tagName == 'A') {
                return { type: 'link' };
              }
            }
          }
        ),
        view: linkView
      });
      linkType = domc.getType('link');
      linkModel = linkType.model;
      linkView = linkType.view;
    }

    if (blocks.image) {
      domc.addType('image', {
        model: defaultModel.extend(
          {
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
              'custom-name': 'Image',
              tagName: 'img',
              resizable: 1,
              attributes: {
                src: img_src_default
              },
              traits: [
                {
                  type: 'text',
                  label: 'Source (URL)',
                  name: 'src'
                },
                {
                  type: 'text',
                  label: 'Alternate text',
                  name: 'alt'
                }
              ].concat(defaultModel.prototype.defaults.traits)
            })
          },
          {
            isComponent: function(el) {
              if (el && el.tagName == 'IMG') {
                return { type: 'image' };
              }
            }
          }
        ),
        view: defaultView
      });
      imageType = domc.getType('image');
      imageModel = imageType.model;
      imageView = imageType.view;
    }
  }

  // Bootstrap LAYOUT

  if (cats.bootstrap_layout) {
    // Container

    if (blocks.container) {
      domc.addType('container', {
        model: defaultModel.extend(
          {
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
              'custom-name': 'Container',
              tagName: 'div',
              droppable: true,
              traits: [
                {
                  type: 'class_select',
                  options: [{ value: 'container', name: 'Fixed' }, { value: 'container-fluid', name: 'Fluid' }],
                  label: 'Width'
                }
              ].concat(defaultModel.prototype.defaults.traits)
            })
          },
          {
            isComponent(el) {
              if (
                el &&
                el.classList &&
                (el.classList.contains('container') || el.classList.contains('container-fluid'))
              ) {
                return { type: 'container' };
              }
            }
          }
        ),
        view: defaultView
      });
    }

    // Row

    if (blocks.row) {
      domc.addType('row', {
        model: defaultModel.extend(
          {
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
              'custom-name': 'Row',
              tagName: 'div',
              draggable: '.container, .container-fluid',
              droppable: true,
              traits: [
                {
                  type: 'class_select',
                  options: [{ value: '', name: 'Yes' }, { value: 'no-gutters', name: 'No' }],
                  label: 'Gutters?'
                }
              ].concat(defaultModel.prototype.defaults.traits)
            })
          },
          {
            isComponent(el) {
              if (el && el.classList && el.classList.contains('row')) {
                return { type: 'row' };
              }
            }
          }
        ),
        view: defaultView
      });
    }

    // Column & Column Break

    if (blocks.column) {
      domc.addType('column', {
        model: defaultModel.extend(
          {
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
              'custom-name': 'Column',
              draggable: '.row',
              droppable: true,
              traits: [
                {
                  type: 'class_select',
                  options: [
                    { value: 'col', name: 'Equal' },
                    { value: 'col-auto', name: 'Variable' },
                    ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function(i) {
                      return { value: 'col-' + i, name: i + '/12' };
                    })
                  ],
                  label: 'XS Width'
                },
                {
                  type: 'class_select',
                  options: [
                    { value: '', name: 'None' },
                    { value: 'col-sm', name: 'Equal' },
                    { value: 'col-sm-auto', name: 'Variable' },
                    ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function(i) {
                      return { value: 'col-sm-' + i, name: i + '/12' };
                    })
                  ],
                  label: 'SM Width'
                },
                {
                  type: 'class_select',
                  options: [
                    { value: '', name: 'None' },
                    { value: 'col-md', name: 'Equal' },
                    { value: 'col-md-auto', name: 'Variable' },
                    ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function(i) {
                      return { value: 'col-md-' + i, name: i + '/12' };
                    })
                  ],
                  label: 'MD Width'
                },
                {
                  type: 'class_select',
                  options: [
                    { value: '', name: 'None' },
                    { value: 'col-lg', name: 'Equal' },
                    { value: 'col-lg-auto', name: 'Variable' },
                    ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function(i) {
                      return { value: 'col-lg-' + i, name: i + '/12' };
                    })
                  ],
                  label: 'LG Width'
                },
                {
                  type: 'class_select',
                  options: [
                    { value: '', name: 'None' },
                    { value: 'col-xl', name: 'Equal' },
                    { value: 'col-xl-auto', name: 'Variable' },
                    ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function(i) {
                      return { value: 'col-xl-' + i, name: i + '/12' };
                    })
                  ],
                  label: 'XL Width'
                },
                {
                  type: 'class_select',
                  options: [
                    { value: '', name: 'None' },
                    ...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function(i) {
                      return { value: 'offset-' + i, name: i + '/12' };
                    })
                  ],
                  label: 'XS Offset'
                },
                {
                  type: 'class_select',
                  options: [
                    { value: '', name: 'None' },
                    ...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function(i) {
                      return { value: 'offset-sm-' + i, name: i + '/12' };
                    })
                  ],
                  label: 'SM Offset'
                },
                {
                  type: 'class_select',
                  options: [
                    { value: '', name: 'None' },
                    ...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function(i) {
                      return { value: 'offset-md-' + i, name: i + '/12' };
                    })
                  ],
                  label: 'MD Offset'
                },
                {
                  type: 'class_select',
                  options: [
                    { value: '', name: 'None' },
                    ...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function(i) {
                      return { value: 'offset-lg-' + i, name: i + '/12' };
                    })
                  ],
                  label: 'LG Offset'
                },
                {
                  type: 'class_select',
                  options: [
                    { value: '', name: 'None' },
                    ...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function(i) {
                      return { value: 'offset-xl-' + i, name: i + '/12' };
                    })
                  ],
                  label: 'XL Offset'
                }
              ].concat(defaultModel.prototype.defaults.traits)
            })
          },
          {
            isComponent(el) {
              let match = false;
              if (el && el.classList) {
                el.classList.forEach(function(klass) {
                  if (klass == 'col' || klass.match(/^col-/)) {
                    match = true;
                  }
                });
              }
              if (match) return { type: 'column' };
            }
          }
        ),
        view: defaultView
      });

      domc.addType('column_break', {
        model: defaultModel.extend(
          {
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
              'custom-name': 'Column Break',
              tagName: 'div',
              classes: ['w-100']
            })
          },
          {
            isComponent(el) {
              if (el && el.classList && el.classList.contains('w-100')) {
                // also check if parent is `.row`
                return { type: 'column_break' };
              }
            }
          }
        ),
        view: defaultView
      });
    }
  }

  // Bootstrap COMPONENTS

  if (cats.bootstrap_components) {
    // Button
    if (blocks.button) {
      domc.addType('button', {
        model: linkModel.extend(
          {
            defaults: Object.assign({}, linkModel.prototype.defaults, {
              'custom-name': 'Button',
              attributes: {
                role: 'button'
              },
              classes: ['btn'],
              traits: [
                {
                  type: 'class_select',
                  options: [
                    { value: '', name: 'None' },
                    ...contexts.map(function(v) {
                      return { value: 'btn-' + v, name: _s.capitalize(v) };
                    }),
                    ...contexts.map(function(v) {
                      return { value: 'btn-outline-' + v, name: _s.capitalize(v) + ' (Outline)' };
                    })
                  ],
                  label: 'Context'
                },
                {
                  type: 'class_select',
                  options: [
                    { value: '', name: 'Default' },
                    ...Object.keys(sizes).map(function(k) {
                      return { value: 'btn-' + k, name: sizes[k] };
                    })
                  ],
                  label: 'Size'
                },
                {
                  type: 'class_select',
                  options: [{ value: '', name: 'Inline' }, { value: 'btn-block', name: 'Block' }],
                  label: 'Width'
                }
              ].concat(linkModel.prototype.defaults.traits)
            }),
            /*init2() {
            linkModel.prototype.init2.call(this); // call parent init in this context.
          },*/
            afterChange(e) {
              if (this.attributes.type == 'button') {
                if (
                  this.attributes.classes.filter(function(klass) {
                    return klass.id == 'btn';
                  }).length == 0
                ) {
                  this.changeType('link');
                }
              }
            }
          },
          {
            isComponent(el) {
              if (el && el.classList && el.classList.contains('btn')) {
                return { type: 'button' };
              }
            }
          }
        ),
        view: linkView
      });
    }

    // Button group

    if (blocks.button_group) {
      domc.addType('button_group', {
        model: defaultModel.extend(
          {
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
              'custom-name': 'Button Group',
              tagName: 'div',
              classes: ['btn-group'],
              droppable: '.btn',
              attributes: {
                role: 'group'
              },
              traits: [
                {
                  type: 'class_select',
                  options: [
                    { value: '', name: 'Default' },
                    ...Object.keys(sizes).map(function(k) {
                      return { value: 'btn-group-' + k, name: sizes[k] };
                    })
                  ],
                  label: 'Size'
                },
                {
                  type: 'class_select',
                  options: [{ value: '', name: 'Horizontal' }, { value: 'btn-group-vertical', name: 'Vertical' }],
                  label: 'Size'
                },
                {
                  type: 'Text',
                  label: 'ARIA Label',
                  name: 'aria-label',
                  placeholder: 'A group of buttons'
                }
              ].concat(defaultModel.prototype.defaults.traits)
            })
          },
          {
            isComponent(el) {
              if (el && el.classList && el.classList.contains('btn-group')) {
                return { type: 'button_group' };
              }
            }
          }
        ),
        view: defaultView
      });
    }

    // Button toolbar

    if (blocks.button_toolbar) {
      domc.addType('button_toolbar', {
        model: defaultModel.extend(
          {
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
              'custom-name': 'Button Toolbar',
              tagName: 'div',
              classes: ['btn-toolbar'],
              droppable: '.btn-group',
              attributes: {
                role: 'toolbar'
              },
              traits: [
                {
                  type: 'Text',
                  label: 'ARIA Label',
                  name: 'aria-label',
                  placeholder: 'A toolbar of button groups'
                }
              ].concat(defaultModel.prototype.defaults.traits)
            })
          },
          {
            isComponent(el) {
              if (el && el.classList && el.classList.contains('btn-toolbar')) {
                return { type: 'button_toolbar' };
              }
            }
          }
        ),
        view: defaultView
      });
    }
  }

  // TYPOGRAPHY

  if (cats.typography) {
    // Header
    if (blocks.header) {
      domc.addType('header', {
        model: textModel.extend(
          {
            defaults: Object.assign({}, textModel.prototype.defaults, {
              'custom-name': 'Header',
              tagName: 'h1',
              traits: [
                {
                  type: 'select',
                  options: [
                    { value: 'h1', name: 'One (largest)' },
                    { value: 'h2', name: 'Two' },
                    { value: 'h3', name: 'Three' },
                    { value: 'h4', name: 'Four' },
                    { value: 'h5', name: 'Five' },
                    { value: 'h6', name: 'Six (smallest)' }
                  ],
                  label: 'Size',
                  name: 'tagName',
                  changeProp: 1
                },
                {
                  type: 'class_select',
                  options: [
                    { value: '', name: 'None' },
                    { value: 'display-1', name: 'One (largest)' },
                    { value: 'display-2', name: 'Two ' },
                    { value: 'display-3', name: 'Three ' },
                    { value: 'display-4', name: 'Four (smallest)' }
                  ],
                  label: 'Display Heading'
                }
              ].concat(textModel.prototype.defaults.traits)
            })
          },
          {
            isComponent(el) {
              if (el && ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(el.tagName)) {
                return { type: 'header' };
              }
            }
          }
        ),
        view: textView
      });
    }

    if (blocks.paragraph) {
      domc.addType('paragraph', {
        model: textModel.extend(
          {
            defaults: Object.assign({}, textModel.prototype.defaults, {
              'custom-name': 'Paragraph',
              tagName: 'p',
              traits: [
                {
                  type: 'class_select',
                  options: [{ value: '', name: 'No' }, { value: 'lead', name: 'Yes' }],
                  label: 'Lead?'
                }
              ].concat(textModel.prototype.defaults.traits)
            })
          },
          {
            isComponent(el) {
              if (el && el.tagName && el.tagName == 'P') {
                return { type: 'paragraph' };
              }
            }
          }
        ),
        view: textView
      });
    }
  }
};
