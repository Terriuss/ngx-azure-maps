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
