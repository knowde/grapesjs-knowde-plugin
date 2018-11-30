export default (editor, config = {}) => {
  const panels = editor.Panels;

  panels.addButton('options', [
    { id: 'save-db', className: 'fa fa-floppy-o', command: 'save-db', attributes: { title: 'Save' } }
  ]);
};
