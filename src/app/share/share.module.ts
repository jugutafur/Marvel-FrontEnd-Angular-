import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations:[
        BannerComponent,
        FooterComponent,
    ],
    exports:[
        CommonModule,
        BannerComponent,
        FooterComponent,
    ],
    imports:[
        CommonModule,
        RouterModule
    ]
})

export class ShareModule {}