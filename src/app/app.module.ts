import { isPlatformBrowser } from '@angular/common';
import { APP_ID, CUSTOM_ELEMENTS_SCHEMA, Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Clarity
import { ClarityModule } from '@clr/angular';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { CommonComponentsModule } from './modules/common-components/common-components.module';

// Pages
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        // Pages
        HomePageComponent,
        PageNotFoundComponent,
        // Components
        HeaderComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng6-boilerplate' }),
        ClarityModule,
        AppRoutingModule,
        CommonComponentsModule
    ],
    providers: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    bootstrap: [ AppComponent ],
})
export class AppModule {
    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        @Inject(APP_ID) private appId: string) {
        const platform = isPlatformBrowser(platformId) ?
            'in the browser' : 'on the server';
        console.log(`Running ${platform} with appId=${appId}`);
    }
}
