import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTitleComponent } from './page-title.component';

describe('PageTitleComponent', () => {
    let component: PageTitleComponent;
    let fixture: ComponentFixture<PageTitleComponent>;

    const TEST_DATA: {
        title: 'Test title',
        differentTitle: 'Test different title'
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageTitleComponent],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageTitleComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display input title', () => {
        component.title = TEST_DATA.title;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('h1').innerText).toEqual(TEST_DATA.title);
    });

    it('should display a different input title', () => {
        component.title = TEST_DATA.differentTitle;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('h1').innerText).toEqual(TEST_DATA.differentTitle);
    });

});
