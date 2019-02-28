export default (editor, config) => {
  const pfx = editor.getConfig('stylePrefix');
  const modal = editor.Modal;
  const codeViewer = editor.CodeManager.getViewer('CodeMirror').clone();
  const container = document.createElement('div');
  const importLabel =
    '<div style="margin-bottom: 10px; font-size: 13px;">Here you can edit your HTML/CSS directly.</div>';
  // Appear the HTML and CSS code from editor into import window
  const importCnt = editor => {
    return editor.getHtml() + '<style>' + editor.getCss() + '</style>';
  };

  let viewerEditor = codeViewer.editor;

  // Init import button
  const btnImp = document.createElement('button');
  btnImp.type = 'button';
  btnImp.innerHTML = 'Import';
  btnImp.className = `${pfx}btn-prim ${pfx}btn-import`;
  btnImp.onclick = e => {
    editor.setComponents(viewerEditor.getValue().trim());
    modal.close();
  };

  // Init code viewer
  codeViewer.set({
    ...{
      codeName: 'htmlmixed',
      theme: 'hopscotch',
      readOnly: 0
    },
    ...config.importViewerOptions
  });

  return {
    run(editor) {
      if (!viewerEditor) {
        const txtarea = document.createElement('textarea');

        if (importLabel) {
          const labelEl = document.createElement('div');
          labelEl.className = `${pfx}import-label`;
          labelEl.innerHTML = importLabel;
          container.appendChild(labelEl);
        }

        container.appendChild(txtarea);
        container.appendChild(btnImp);
        codeViewer.init(txtarea);
        viewerEditor = codeViewer.editor;
      }

      modal.setTitle('Import Template');
      modal.setContent(container);
      codeViewer.setContent(importCnt(editor) || '');
      modal.open();
      viewerEditor.refresh();
    },

    stop() {
      modal.close();
    }
  };
};
