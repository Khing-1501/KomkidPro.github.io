import { Component, OnInit } from '@angular/core';
import { LoadingStateService } from '../services/loading-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{

  constructor(
    private loadingStateService:LoadingStateService
  ) {}

  ngOnInit(): void {
    
  }

  test(){
    this.loadingStateService.startloading ()
  }

}
