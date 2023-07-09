import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, debounceTime, distinctUntilChanged, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingStateService {

  _loading$ = new BehaviorSubject<boolean>(false);

  // _loading$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loading$ = this._loading$.pipe(
    debounceTime(0),
    distinctUntilChanged(),
    shareReplay(1)
    )

  constructor() { }

  startloading(){
    console.log('startloading');
    console.log('loading$',this._loading$);
    this._loading$.next(true);
  }

  stoploading(){
    console.log('startloading');
    console.log('loading$',this._loading$);
    this._loading$.next(false);
  }
}
