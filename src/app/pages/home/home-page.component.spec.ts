import { TestBed, async } from '@angular/core/testing';
import { HomePageComponent } from './home-page.component';
import { PageTitleComponent } from '../../components/page-title/page-title.component';

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
