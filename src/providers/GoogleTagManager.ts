import AbstractAnalytics from '../AbstractGTM/AbstractAnalytics';
import TagManager, { TagManagerArgs } from 'react-gtm-module';

class GoogleTagManager extends AbstractAnalytics {
  provider = 'GTM'

  init(options: TagManagerArgs) {
    TagManager.initialize(options);
  }

  send() {
    //no needed to describe
  }

  event() {
    //no needed to describe
  }
}

const instance = new GoogleTagManager();
export default instance;
