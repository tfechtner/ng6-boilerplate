import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ROUTES } from './config/routes';
import { AppComponent } from './app.component';

// Clarity
import { ClarityModule } from '@clr/angular';

// Pages
import { HomePageComponent } from './pages/home/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { PageTitleComponent } from './components/page-title/page-title.component';

@NgModule({
    declarations: [
        AppComponent,
        // Pages
        HomePageComponent,
        PageNotFoundComponent,
        HeaderComponent,
        PageTitleComponent
    ],
    imports: [
        BrowserModule,
        ClarityModule,
        RouterModule.forRoot(ROUTES),
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent],
})
export class AppModule {
}
