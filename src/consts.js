// TODO: refactor this to objects...
// knowde_counter: {
//  id: '',
//  label: 'ACasd',
//  tagName: 'simple-counter'
//  enabled: boolean
//
// }
export const COMPONENTS_TYPES = {
  knowde_component: 'knowde-component',
  knowde_latest_brands: 'knowde-latest-brands',
  knowde_counter: 'knowde-counter',
  knowde_slider: 'knowde-slider',
  layout_container_component: 'layout-container',
  layout_row_component: 'layout-row',
  layout_column_component: 'layout-column',
  paragraph_component: 'paragraph'
};

export const DEFAULT_BLOCKS = {
  //knowde_components
  knowde_components_latest_brands: true,
  knowde_components_counter: true,
  knowde_components_slider: true,

  // LAYOUT
  layout_container: true,
  layout_row: true,
  layout_column: true,

  layout_predefined_2_cols: true,
  layout_predefined_3_cols: true,
  layout_predefined_4_cols: true,

  //
  default: false,
  text: true,
  link: true,
  image: true,

  button: true,
  button_group: true,
  button_toolbar: true,

  // TYPOGRAPHY
  header: true,
  paragraph: true,
  google_map: true
};

export const DEFAULT_LABELS = {
  // Knowde components
  knowde_components: 'Knowde Components',
  knowde_components_latest_brands: 'Latest brands',
  knowde_components_counter: 'Counter',
  knowde_components_slider: 'Slider',

  // LAYOUT
  // BASIC
  layout_category: 'Layout',
  layout_container: 'Container',
  layout_row: 'Row',
  layout_column: 'Column',
  // PREDEFINED SETS
  //'2 Columns Layout'
  layout_predefined_sets: 'Predefined Sets',
  layout_predefined_2_cols: '2 Columns',
  layout_predefined_3_cols: '3 Columns',
  layout_predefined_4_cols: '4 Columns',

  // TYPO
  basics: 'Basics',
  google_map: 'Map',
  paragraph: 'Paragraph',
  heading: 'heading'
};

export const DEFAULT_CATEGORIES = {
  knowde_components: true,
  layout_basic: true,
  layout_predefined_sets: true,
  basics: true
};
