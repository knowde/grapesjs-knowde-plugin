import loadBootstrapComponents from './components/bootstrap.components';
import loadKnowdeComponents from './components/knowde.components';

export default (editor, config = {}) => {
  loadKnowdeComponents(editor, config);
  loadBootstrapComponents(editor, config);
};
