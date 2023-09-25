import { Component } from '@angular/core';
import { LoadingStateService } from './services/loading-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loading$ = this.loadingStateService._loading$.value
  constructor(private loadingStateService: LoadingStateService) {}

  title = 'KomkidPro.github.io';

  ngOnInit(): void {
    this.loadingStateService.loading$.subscribe((res:boolean) =>
      this.loading$ = res
    );
    console.log('loading$: ' , this.loading$)
  }
}
