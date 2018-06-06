import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ROUTES } from './config/routes';
import { PageTitleComponent } from './modules/common-components/components/page-title/page-title.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(ROUTES),
                ClarityModule,
            ],
            declarations: [
                AppComponent,
                HeaderComponent,
                PageTitleComponent,
                HomePageComponent,
                PageNotFoundComponent,
            ],
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
