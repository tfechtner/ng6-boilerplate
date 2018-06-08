import { async, TestBed } from '@angular/core/testing';

import { PageTitleComponent } from '../../common-modules/common-components/components/page-title/page-title.component';
import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HomePageComponent,
                PageTitleComponent
            ],
        }).compileComponents();
    }));
    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(HomePageComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
