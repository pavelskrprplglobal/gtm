import AbstractAnalytics from '../AbstractGTM/AbstractAnalytics';
import ReactGA4 from 'react-ga4';
import { InitOptions, UaEventOptions } from 'react-ga4/types/ga4';

export type InitGA4Type={
    GA_MEASUREMENT_ID: InitOptions[] | string,
    options?: {nonce?: string, testMode?: boolean, gaOptions?: any, gtagOptions?: any}
};

export type EventGA4Type = {
    optionsOrName: UaEventOptions | string,
    params?: any
};

class GA4 extends AbstractAnalytics{
  provider = 'GA4';

  init({GA_MEASUREMENT_ID,options}: InitGA4Type) {
    ReactGA4.initialize(GA_MEASUREMENT_ID,options)
  }

  send(options: any) {
    ReactGA4.send(options);
  }

  event({optionsOrName,params}: EventGA4Type) {
    ReactGA4.event(optionsOrName,params)
  }
}
const instance = new GA4();
export default instance;