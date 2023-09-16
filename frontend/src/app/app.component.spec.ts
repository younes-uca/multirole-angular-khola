import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { AppMainComponent } from './config/app.main.component';
import { AppConfigComponent } from './config/app.config.component';

import { AppTopBarComponent } from './menu/app.topbar.component';
import { AppRightMenuComponent } from './menu/app.right-menu.component';
import { AppFooterComponent } from './menu/app.footer.component';
import { AppMenuComponent } from './menu/app.menu.component';

import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { ProgressBarModule } from 'primeng/progressbar';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, RouterTestingModule, ScrollPanelModule, AccordionModule,
                PanelModule, TabViewModule, ProgressBarModule],
            declarations: [
                AppComponent,
                AppMainComponent,
                AppConfigComponent,
                AppTopBarComponent,
                AppMenuComponent,
                AppRightMenuComponent,
                AppFooterComponent,
            ]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
