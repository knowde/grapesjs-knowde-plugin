export default (editor, config = {}) => {
  const bm = editor.BlockManager;
  const c = config;
  let blocks = c.blocks;
  let cats = c.blockCategories;

  // LAYOUT
  if (cats.bootstrap_layout) {
    if (blocks.container) {
      bm.add('container').set({
        label: c.labels.container,
        category: 'Layout',
        attributes: { class: 'fa fa-columns' },
        content: {
          type: 'container',
          classes: ['container']
        }
      });
    }

    if (blocks.row) {
      bm.add('row').set({
        label: c.labels.row,
        category: 'Layout',
        attributes: { class: 'fa fa-columns' },
        content: {
          type: 'row',
          classes: ['row']
        }
      });
    }

    if (blocks.column) {
      bm.add('column').set({
        label: c.labels.column,
        category: 'Layout',
        attributes: { class: 'fa fa-columns' },
        content: {
          type: 'column',
          classes: ['col']
        }
      });
    }

    if (blocks.column_break) {
      bm.add('column_break').set({
        label: c.labels.column_break,
        category: 'Layout',
        attributes: { class: 'fa fa-columns' },
        content: {
          type: 'column_break'
        }
      });
    }
  }

  // COMPONENTS
  if (cats.bootstrap_components) {
    if (blocks.button) {
      bm.add('button', {
        label: c.labels.button,
        category: 'Components',
        attributes: { class: 'fa fa-link' },
        content: {
          type: 'button',
          content: 'Click me!'
        }
      });
    }

    if (blocks.button_group) {
      bm.add('button_group', {
        label: c.labels.button_group,
        category: 'Components',
        attributes: { class: 'fa fa-link' },
        content: {
          type: 'button_group'
        }
      });
    }

    if (blocks.button_toolbar) {
      bm.add('button_toolbar', {
        label: c.labels.button_toolbar,
        category: 'Components',
        attributes: { class: 'fa fa-link' },
        content: {
          type: 'button_toolbar'
        }
      });
    }
  }

  // TYPOGRAPHY

  if (cats.typography) {
    if (blocks.text) {
      bm.add('text', {
        label: c.labels.text,
        category: 'Typography',
        attributes: { class: 'fa fa-font' },
        content: {
          type: 'text',
          content: 'Insert your text here'
        }
      });
    }

    if (blocks.header) {
      bm.add('header', {
        label: c.labels.header,
        category: 'Typography',
        attributes: { class: 'fa fa-header' },
        content: {
          type: 'header',
          content: 'Bootstrap heading'
        }
      });
    }

    if (blocks.paragraph) {
      bm.add('paragraph', {
        label: c.labels.paragraph,
        category: 'Typography',
        attributes: { class: 'fa fa-paragraph' },
        content: {
          type: 'paragraph',
          content: 'In eu tristique magna. Nulla imperdiet lacinia neque fringilla volutpat.'
        }
      });
    }
  }

  // BASIC

  if (cats.basic) {
    if (blocks.link) {
      bm.add('link', {
        label: c.labels.link,
        category: 'Basic',
        attributes: { class: 'fa fa-link' },
        content: {
          type: 'link',
          content: 'Link text'
        }
      });
    }

    if (blocks.image) {
      bm.add('image', {
        label: c.labels.image,
        category: 'Basic',
        attributes: { class: 'fa fa-picture-o' },
        content: {
          type: 'image'
        }
      });
    }
  }
};
