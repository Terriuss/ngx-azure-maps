# ngx-azure-maps
An angular library for microsoft azure maps functionalities like autocomplete

## Installation

Install the npm module:

```sh
npm install ngx-azure-maps
```

Supports angular 9+ (ivy ready).

---

## Usage

#### 1. Import the `AzureMapsModule` Module:

You have to import `AzureMapsMpdule.forRoot({
'clientID':"yourAzureMapsClientID",
'secretKey':"yourAzureMapsSecretKey"
})` in the root NgModule of your application to setup and configure the application


```ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AzureMapsModule} from '@ngx-azure-maps';

@NgModule({
    imports: [
        BrowserModule,
        AzureMapsModule.forRoot({
        'clientID':"yourAzureMapsClientID",
        'secretKey':"yourAzureMapsSecretKey"
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

#### 2. Use the directive:

```html
<azure-maps [value]="address"></azure-maps>
```

#### Properties:

- `value`: Holds the azure address object

##### The following properties can also be set on a global level in the forRoot import

- `delay`: (In ms) Typing delay before an azure search is triggered. Don't this too low to prevent high azure costs (default 500ms).
- `minLength`: Minimum length before search is triggered. (default 3).
- `countries`: String array of countries to restrict the search to only look for addressse in those countries. Leave empty for world wide search.

#### Events:

- `(onValueChanged($event))`: Fired when the user changed the search value. Event contains the search string.
- `(onAddressSelected($event))`: Fired when the user selects an address from the azure search results. Event contains the azure address object

#### Models:

Import the `AzureMapsAddress` from 'ngx-azure-maps' to have access to the typed azure maps object definitions.
