# vmplayer
Modulo de Angular para incrustar videos de vimeo

Para instalarse ejecutar:
npm i vmplayer

En el app.module.ts agregar para cargar el script de Vimeo:

export function loadScript(
  service: VmplayerService) {
  return () => 
    service.loadScript();
}

imports: [
  VmplayerModule
]

providers: [
  VmplayerService, 
  {
    provide: APP_INITIALIZER,
    useFactory: loadScript,
    deps: [
      VmplayerService
    ],
    multi: true
  }
]

o en su caso agregar al index.html el siguiente script:

<script src="https://player.vimeo.com/api/player.js"></script>


Para usar el componente es de la siguiente manera:

<vp-vmplayer [embedOptions]="{url:'https://vimeo.com/76979871', autoplay:false, width: 640}" (onEvent)="onEvent($event)" [currentTime]="0" (onPause)="onVideoPaused($event)"></vp-vmplayer>


  
  
