import { COMPONENTS_TYPES, DEFAULT_LABELS } from '../consts';

export default (editor, config = {}) => {
  const bm = editor.BlockManager;
  const c = config;
  const category = { id: 'basics', label: DEFAULT_LABELS.basics };
  let blocks = c.blocks;
  let cats = c.blockCategories;

  if (!cats.basics) {
    return;
  }

  if (blocks.paragraph) {
    bm.add('typography-paragraph-block', {
      label: config.labels.paragraph,
      category,
      attributes: { class: 'fa fa-paragraph' },
      content: {
        type: COMPONENTS_TYPES.paragraph_component,
        content: 'Double click to edit text...'
      }
    });
  }

  if (blocks.google_map) {
    bm.add('map', {
      label: 'Map',
      category,
      attributes: { class: 'fa fa-map-o' },
      content: {
        type: 'map',
        style: { height: '350px', width: '100%' },
        mapType: 'q', // q - Roadmap / w - Satellite
        address: '',
        zoom: 1 // max 20
      }
    });
  }

  if (blocks.image) {
    bm.add('image', {
      label: 'Image',
      category,
      attributes: { class: 'fa fa-picture-o' },
      content: {
        style: { color: 'black' },
        type: 'image',
        activeOnRender: 1
      }
    });
  }

  bm.add('video', {
    label: config.labels.video,
    category,
    attributes: { class: 'fa fa-youtube-play' },
    content: {
      type: 'video',
      provider: 'yt',
      src: 'vTIIMJ9tUc8',
      style: {
        height: '350px',
        width: '615px'
      }
    }
  });
};
