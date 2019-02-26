import loadKnowdeBlocks from './blocks/knowde.blocks';
import loadLayoutBlocks from './blocks/layout.blocks';
import loadTypographyBlocks from './blocks/typography.blocks';

export default (editor, config = {}) => {
  loadKnowdeBlocks(editor, config);
  loadLayoutBlocks(editor, config);
  loadTypographyBlocks(editor, config);
};
