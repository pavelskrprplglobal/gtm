import Abstract from '../AbstractGTM/AbstractAnalytics';
import GA4, { EventGA4Type, InitGA4Type } from './GA4';
import GoogleAnalytics, {
  InitGoogleAnalyticsType,
  SendGoogleAnalyticsType,
} from './GoogleAnalytics';
import GoogleTagManager from './GoogleTagManager';
import { TagManagerArgs } from 'react-gtm-module';
import { EventArgs as EventGAType } from 'react-ga';

export type InitOptionsType = {
  GA4Options?: InitGA4Type;
  GAOptions?: InitGoogleAnalyticsType;
  GTMOptions?: TagManagerArgs;
};

export type SendOptionsType = {
  GA4Options?: SendGoogleAnalyticsType;
  GAOptions?: any;
};

export type EventOptionsType = {
  GA4Options?: EventGA4Type;
  GAOptions?: EventGAType;
};

class Analytics extends Abstract {
  provider = 'Analytics';

  init({ GA4Options, GAOptions, GTMOptions }: InitOptionsType) {
    if (GA4Options) {
      GA4.init(GA4Options);
    }
    if (GAOptions) {
      GoogleAnalytics.init(GAOptions);
    }
    if (GTMOptions) {
      GoogleTagManager.init(GTMOptions);
    }
  }

  send({ GA4Options, GAOptions }: SendOptionsType) {
    if (GA4Options) {
      GA4.send(GA4Options);
    }
    if (GAOptions) {
      GoogleAnalytics.send(GAOptions);
    }
  }

  event({ GA4Options, GAOptions }: EventOptionsType) {
    if (GA4Options) {
      GA4.event(GA4Options);
    }
    if (GAOptions) {
      GoogleAnalytics.event(GAOptions);
    }
  }
}

const BUYMEAnalytics= new Analytics();
export default BUYMEAnalytics;