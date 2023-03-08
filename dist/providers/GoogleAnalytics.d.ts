import AbstractAnalytics from '../AbstractGTM/AbstractAnalytics';
import { EventArgs, InitializeOptions } from 'react-ga';
export type InitGoogleAnalyticsType = {
    trackingCode: string;
    options?: InitializeOptions;
};
export type SendGoogleAnalyticsType = any[];
declare class GoogleAnalytics extends AbstractAnalytics<InitGoogleAnalyticsType, EventArgs, SendGoogleAnalyticsType> {
    provider: string;
    init(options: InitGoogleAnalyticsType): void;
    event(options: EventArgs): void;
    send(args: SendGoogleAnalyticsType): void;
}
declare const instance: GoogleAnalytics;
export default instance;
