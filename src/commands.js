export default (editor, config = {}) => {
  const commands = editor.Commands;

  commands.add('save-db', (editor, sender) => {
    sender && sender.set('active'); // turn off the button
    editor.store();
  });
};
