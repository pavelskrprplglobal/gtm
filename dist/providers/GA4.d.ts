import AbstractAnalytics from '../AbstractGTM/AbstractAnalytics';
import { InitOptions, UaEventOptions } from 'react-ga4/types/ga4';
export type InitGA4Type = {
    GA_MEASUREMENT_ID: InitOptions[] | string;
    options?: {
        nonce?: string;
        testMode?: boolean;
        gaOptions?: any;
        gtagOptions?: any;
    };
};
export type EventGA4Type = {
    optionsOrName: UaEventOptions | string;
    params?: any;
};
declare class GA4 extends AbstractAnalytics {
    provider: string;
    init({ GA_MEASUREMENT_ID, options }: InitGA4Type): void;
    send(options: any): void;
    event({ optionsOrName, params }: EventGA4Type): void;
}
declare const instance: GA4;
export default instance;
