import { Component, OnInit, Renderer2, Input, Output, EventEmitter } from '@angular/core';
import { EmbedOptions } from './models/embed-options.model';

declare var Vimeo: any;

@Component({
  selector: 'vp-vmplayer',
  template: `
    <div id="vmplayer-container"></div>
  `,
  styles: []
})
export class VmplayerComponent implements OnInit {

  player: any;
  @Input('embedOptions') embedOptions: EmbedOptions;
  @Input('volume') volume: number;
  @Output() onEvent:EventEmitter<any> =  new EventEmitter();
  @Output() onPlay =  new EventEmitter();
  @Output() onPause =  new EventEmitter();
  @Output() onEnded =  new EventEmitter();
  @Output() onSeeked =  new EventEmitter();
  @Output() onChangeProgress =  new EventEmitter();
  @Output() onError =  new EventEmitter();
  @Output() onTimeUpdate =  new EventEmitter();
  @Input() currentTime: number;
  constructor(private renderer: Renderer2) { 
  }

  ngOnInit() {
    this.player = new Vimeo.Player('vmplayer-container', this.embedOptions);
    this.player.setVolume(this.volume ? this.volume : 1);
    if(this.currentTime && this.currentTime > 0) {
      this.player.setCurrentTime(this.currentTime)
      .then((seconds) => {
        this.player.pause();
      })
      .catch((error) => {
        console.log("add current time", error);
      });
    }
      
    this.player.play().then((data) => {
      this.onPlay.emit(data);
      this.onEvent.emit({event: 'play', data: data});
    });
    this.player.pause((data) => {
      this.onEvent.emit({event: 'pause', data: data});
      this.onPause.emit(data);
    });
    this.player.on('ended', (data) => {
      this.onEvent.emit({event: 'ended', data: data});
      this.onEnded.emit(data);
    });
    this.player.on('progress', (data) => {
      this.onChangeProgress.emit(data);
    });
    this.player.on('seeked', (data) => {
      this.onEvent.emit({event: 'seeked', data: data});
      this.onSeeked.emit(data);
    });
    this.player.on('error', (error) => {
      this.onEvent.emit({event: 'error', data: error});
      this.onError.emit(error);
    });
    this.player.on('timeupdate', (data) => {
      this.onEvent.emit({event: 'timeUpdate', data: data});
      this.onTimeUpdate.emit(data);
    });
  }

  ngAfterViewInit() {
    
  }

}

