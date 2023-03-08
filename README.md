# BUYME-lib-analytics

This library was created for identical usage libraries for analytics 

## Instaling

Add in your `package.json`
```json
    "@buymetech/gtm": "github:pavelskrprplglobal/gtm#TAG",
```

Current avaliable TAGs:
- `v1`

and run `npm i`

## Basic usage

Add next code in your `index` file.
```js
    import Analytics from "@buymetech/gtm";
    
    Analytics.init({
      GA4Options: {
        GA_MEASUREMENT_ID: "YOURID",
      },
    });
```

## Reference

### Analytics.init(GA4Options, GAOptions, GTMOptions)

#### GA4Options {GA_MEASUREMENT_ID, options}

| Parameter           | Notes                                                                                                                   |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| GA_MEASUREMENT_ID   | `string` Required                                                                                                       |
| options.nonce       | `string` Optional Used for Content Security Policy (CSP) [more](https://developers.google.com/tag-manager/web/csp)      |
| options.testMode    | `boolean` Default false                                                                                                 |
| options.gtagUrl     | `string` Default `https://www.googletagmanager.com/gtag/js`                                                             |
| options.gaOptions   | `object` Optional [Reference](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference) |
| options.gtagOptions | `object` Optional                                                                                                       |

#### GAOptions {trackingCode, options}


| Value                              | Notes                                                                                                                                                                             |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| trackingCode                       | `String`. Required. GA Tracking ID like `UA-000000-01`.                                                                                                                           |
| options.debug                      | `Boolean`. Optional. If set to `true`, will output additional feedback to the console.                                                                                            |
| options.titleCase                  | `Boolean`. Optional. Defaults to `true`. If set to `false`, strings will not be converted to title case before sending to GA.                                                     |
| options.gaOptions                  | `Object`. Optional. [GA configurable create only fields.](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference)                               |
| options.gaAddress                  | `String`. Optional. If you are self-hosting your `analytics.js`, you can specify the URL for it here.                                                                             |
| options.alwaysSendToDefaultTracker | `Boolean`. Optional. Defaults to `true`. If set to `false` _and_ using multiple trackers, the event will not be send to the default tracker.                                      |
| options.testMode                   | `Boolean`. Optional. Defaults to `false`. Enables test mode. See [here](https://github.com/react-ga/react-ga#test-mode) for more information.                                     |
| options.standardImplementation     | `Boolean`. Optional. Defaults to `false`. Enables loading GA as google expects it. See [here](https://github.com/react-ga/react-ga#standard-implementation) for more information. |
| options.useExistingGa              | `Boolean`. Optional. Skips call to `window.ga()`, assuming you have manually run it.                                                                                              |
| options.redactEmail                | `Boolean`. Optional. Defaults to `true`. Enables redacting a email as the string that in "Event Category" and "Event Action".                                                     |

#### GTMOptions { TagManagerArgs }
| Value                              | Notes                                                                                                                                                                             |
|------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| gtmId                              | `String`. Required. GTM id, must be something like GTM-000000.                                                                                                                    |
| events                             | `Object`. Optional. Additional events such as 'gtm.start': new Date().getTime(),event:'gtm.js                                                                                     | undefined`. Optional. If set to `true`, will output additional feedback to the console.                                                                                            |
| auth                               | `String`. Optional. Used to set environments.                                                                                                                                     |
| preview                            | `String`. Optional. Used to set environments, something like env-00                               |

### Analytics.send(GA4Options, GAOptions)

#### GAOptions : `any`

#### GA4Options : `any[]`

### Analytics.event(GA4Options, GAOptions)

#### GA4Options {optionsOrName,params}
This method signature are NOT for `UA-XXX`

| Parameter     | Notes                                                                                                                         |
|---------------| ----------------------------------------------------------------------------------------------------------------------------- |
| optionsOrName | `string` Required A [recommended event](https://developers.google.com/tag-platform/gtagjs/reference/events) or a custom event |
| params        | `object` Optional                                                                                                             |
 or 

| Parameter              | Notes                               |
| ---------------------- | ----------------------------------- |
| optionsOrName                | `object` Required                   |
| optionsOrName.action         | `string` Required                   |
| optionsOrName.category       | `string` Required                   |
| optionsOrName.label          | `string` Optional                   |
| optionsOrName.value          | `number` Optional                   |
| optionsOrName.nonInteraction | `boolean` Optional                  |
| optionsOrName.transport      | `'beacon'\|'xhr'\|'image'` Optional |

#### GAOptions

Tracking in-page `event` interactions is key to understanding the use of any interactive web property. This is how we record user interactions that don't trigger a change in URL.
###### Examples

```js
{
  category: 'User',
  action: 'Created an Account'
}

{
  category: 'Social',
  action: 'Rated an App',
  value: 3
}

{
  category: 'Editing',
  action: 'Deleted Component',
  label: 'Game Widget'
}

{
  category: 'Promotion',
  action: 'Displayed Promotional Widget',
  label: 'Homepage Thing',
  nonInteraction: true
}
```

| Value               | Notes                                                                                                                                                                                                        |
|---------------------| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| options.category    | `String`. Required. A top level category for these events. E.g. 'User', 'Navigation', 'App Editing', etc.                                                                                                    |
| options.action         | `String`. Required. A description of the behaviour. E.g. 'Clicked Delete', 'Added a component', 'Deleted account', etc.                                                                                      |
| options.label          | `String`. Optional. More precise labelling of the related action. E.g. alongside the 'Added a component' action, we could add the name of a component as the label. E.g. 'Survey', 'Heading', 'Button', etc. |
| options.value          | `Int`. Optional. A means of recording a numerical value against an event. E.g. a rating, a score, etc.                                                                                                       |
| options.nonInteraction | `Boolean`. Optional. If an event is not triggered by a user interaction, but instead by our code (e.g. on page load), it should be flagged as a `nonInteraction` event to avoid skewing bounce rate data.     |
| options.transport      | `String`. Optional. This specifies the transport mechanism with which hits will be sent. Valid values include 'beacon', 'xhr', or 'image'.                                                                   |



## Another providers 

For adding another providers you need to import `AbstractAnalytics`.

```js
import { AbstractAnalytics } from "@buymetech/gtm";

//creating own provider

class OwnProvider extends AbstractAnalytics{
    provider = 'your name'
    
    init(yourArguments){
        //realisation
    }

    send(yourArguments){
        //realisation
    }

    event(yourArguments){
        //realisation
    }
    
}

const instatce = new OwnProvider();
export default instatce;
```

