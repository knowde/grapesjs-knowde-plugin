import loadLayoutBlocks from './blocks/layout.blocks';
import loadBootstrapBlocks from './blocks/bootstrap.blocks';
import loadKnowdeBlocks from './blocks/knowde.blocks';

export default (editor, config = {}) => {
  loadLayoutBlocks(editor, config);

  loadKnowdeBlocks(editor, config);

  // loadBootstrapBlocks(editor, config);
};
