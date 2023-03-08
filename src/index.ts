import GA4 from './providers/GA4';
import GoogleTagManager from './providers/GoogleTagManager';
import GoogleAnalytics from './providers/GoogleAnalytics';
import AbstractAnalytics from './AbstractGTM/AbstractAnalytics';
import BUYMEAnalytics from './providers/BUYMEAnalytics';

//types
export * from './providers/GA4';
export * from './providers/GoogleAnalytics';
export * from './providers/GoogleTagManager';
export * from './providers/BUYMEAnalytics';
export * from './AbstractGTM/AbstractAnalytics';

export { GA4,GoogleTagManager,GoogleAnalytics,AbstractAnalytics };

export default BUYMEAnalytics;