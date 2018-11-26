import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VmplayerService {

  renderer: Renderer2;
  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
   }

  loadScript() {
    return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://player.vimeo.com/api/player.js';
    this.renderer.appendChild(document.body, script);
    script.onload= () => {
      console.log("Script Vimeo Loaded");
      resolve(true);
    };
    
    //return script;
    });
  }
}
