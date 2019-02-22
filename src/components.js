import loadKnowdeComponents from './components/knowde.components';
import loadLayoutComponents from './components/layout.components';

export default (editor, config = {}) => {
  loadKnowdeComponents(editor, config);
  loadLayoutComponents(editor, config);
};
