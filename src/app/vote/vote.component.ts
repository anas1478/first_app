import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  template:`
  <h4>{{name}}</h4>
  <button (click)="vote(true)" [disabled]="didVote">Oui</button>
  <button (click)="vote(false)" [disabled]="didVote">Non</button>
  `
 })
export class VoterComponent {
  @Input() name:string;
  // ici l 'event vote permet de savoir si on a voté

  @Output () voted = new EventEmitter<boolean>();
  didVote =false;
  vote(agreed: boolean){
    this.voted.emit(agreed);
    this.didVote =true;
  }
 
 }