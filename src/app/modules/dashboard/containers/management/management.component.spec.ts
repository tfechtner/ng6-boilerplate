import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTitleComponent } from '../../../common-components/components/page-title/page-title.component';
import { ManagementComponent } from './management.component';

describe('ManagementComponent', () => {
    let component: ManagementComponent;
    let fixture: ComponentFixture<ManagementComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ManagementComponent,
                PageTitleComponent
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ManagementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
