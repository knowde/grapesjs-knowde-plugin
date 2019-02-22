export const COMPONENTS_TYPES = {
  knowde_component: 'knowde-component',
  knowde_latest_brands: 'knowde-latest-brands',
  layout_container_component: 'layout_container',
  layout_row_component: 'layout_row',
  layout_column_component: 'layout_column'
};

export const DEFAULT_BLOCKS = {
  //knowde_components
  latest_brands: true,

  // LAYOUT
  layout_container: true,
  layout_row: true,
  layout_column: true,

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
  paragraph: true
};

export const DEFAULT_LABELS = {
  // Knowde components
  knowde_components: 'Knowde Components',
  knowde_latest_brands: 'Latest Brands',
  latest_brands: 'Latest brands',
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

  // container: 'Container',
  // row: 'Row',
  // column: 'Column',
  // column_break: 'Column Break',
  // COMPONENTS
  button: 'Button',
  button_group: 'Button Group',
  button_toolbar: 'Button Toolbar',
  // TYPOGRAPHY
  text: 'Text',
  header: 'Header',
  paragraph: 'Paragraph',
  // BASIC
  image: 'Image',
  link: 'Link'
};

export const DEFAULT_CATEGORIES = {
  knowde_components: true,
  layout_basic: true,
  layout_predefined_sets: true,
  bootstrap_layout: false,
  bootstrap_components: false, // TODO: disable for now...
  typography: true,
  basic: false
};
