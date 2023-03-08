import AbstractAnalytics from '../AbstractGTM/AbstractAnalytics';
import { TagManagerArgs } from 'react-gtm-module';
declare class GoogleTagManager extends AbstractAnalytics {
    provider: string;
    init(options: TagManagerArgs): void;
    send(): void;
    event(): void;
}
declare const instance: GoogleTagManager;
export default instance;
