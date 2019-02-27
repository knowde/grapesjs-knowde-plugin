export default (editor, config = {}) => {
  const commands = editor.Commands;

  commands.add('save-db', (e, sender) => {
    sender && sender.set('active'); // turn off the button
    e.store();
  });

  commands.add('clear-all', (e, sender) => {
    sender && sender.set('active'); // turn off the button
    const agree = confirm('Are you sure to clean the canvas?');
    if (!agree) {
      return;
    }
    e.DomComponents.clear();
  });
};
