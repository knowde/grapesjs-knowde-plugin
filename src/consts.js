export const COMPONENTS_TYPES = {
  knowde_component: 'knowde-component'
};

export const DEFAULT_BLOCKS = {
  //knowde_components
  latest_brands: true,
  //
  default: true,
  text: true,
  link: true,
  image: true,
  // LAYOUT
  container: true,
  row: true,
  column: true,
  column_break: true,
  // COMPONENTS
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
  latest_brands: 'Latest brands',
  // LAYOUT
  container: 'Container',
  row: 'Row',
  column: 'Column',
  column_break: 'Column Break',
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
  bootstrap_layout: true,
  bootstrap_components: false, // TODO: disable for now...
  typography: true,
  basic: true
};
