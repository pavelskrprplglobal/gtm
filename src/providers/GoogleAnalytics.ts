import AbstractAnalytics from '../AbstractGTM/AbstractAnalytics';
import ReactGA, { EventArgs, InitializeOptions } from 'react-ga';

export type InitGoogleAnalyticsType = {
    trackingCode:string,
    options?:InitializeOptions
};

export type SendGoogleAnalyticsType = any[];

class GoogleAnalytics extends AbstractAnalytics< InitGoogleAnalyticsType, EventArgs, SendGoogleAnalyticsType>{
  provider = 'GoogleAnalytics'

  init(options: InitGoogleAnalyticsType) {
    ReactGA.initialize(options.trackingCode,options.options);
  }

  event(options: EventArgs) {
    ReactGA.event(options);
  }

  send(args: SendGoogleAnalyticsType) {
    ReactGA.ga('send',...args);
  }
}
const instance=new GoogleAnalytics();
export default instance;
