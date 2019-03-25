import loadKnowdeBlocks from './blocks/knowde.blocks';
import loadLayoutBlocks from './blocks/layout.blocks';
import loadBasicsBlocks from './blocks/basics.blocks';

export default (editor, config = {}) => {
  loadLayoutBlocks(editor, config);
  loadBasicsBlocks(editor, config);
  loadKnowdeBlocks(editor, config);
};
