import Abstract from '../AbstractGTM/AbstractAnalytics';
import { EventGA4Type, InitGA4Type } from './GA4';
import { InitGoogleAnalyticsType, SendGoogleAnalyticsType } from './GoogleAnalytics';
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
declare class Analytics extends Abstract {
    provider: string;
    init({ GA4Options, GAOptions, GTMOptions }: InitOptionsType): void;
    send({ GA4Options, GAOptions }: SendOptionsType): void;
    event({ GA4Options, GAOptions }: EventOptionsType): void;
}
declare const BUYMEAnalytics: Analytics;
export default BUYMEAnalytics;
