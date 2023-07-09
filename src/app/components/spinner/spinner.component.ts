import { Component , OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input() loading:boolean = false;
  @Input() animationDurationn:string = '0.7s';
  @Input() strokwindth:number = 4;

  zIndex:number = 999;

  constructor(){}

  ngOnInit(): void {
      
  }
}
