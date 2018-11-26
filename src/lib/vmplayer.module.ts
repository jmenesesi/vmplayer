import { NgModule, APP_INITIALIZER, Renderer2, RendererFactory2 } from '@angular/core';
import { VmplayerComponent } from './vmplayer.component';
import { VmplayerService } from './vmplayer.service';

@NgModule({
  imports: [
  ],
  declarations: [VmplayerComponent],
  exports: [VmplayerComponent]
})
export class VmplayerModule { }


