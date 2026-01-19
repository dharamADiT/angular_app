import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-indian-client',
  templateUrl: './indian-client.component.html',
  styleUrls: ['./indian-client.component.scss']
})
export class IndianClientComponent implements OnInit, OnChanges,DoCheck,AfterContentChecked,AfterViewInit, AfterViewChecked {
  constructor(){
    console.log("constructor called first line")
  }

  @Input() names!:string;
 
  ngOnInit(): void {
    console.log("ng oninit called second")
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes['names'].currentValue)
    console.log("ng on changes called here")
  }

  ngDoCheck(): void {
    console.log("dochecked called")
  }

  ngAfterContentInit(): void {
    console.log("contentInit called here")
  }
  ngAfterContentChecked(): void {
    console.log("after-content-Checked called")
  }
  ngAfterViewChecked(): void {
    console.log("after-view-checked called")
  }
  ngAfterViewInit(): void {
    console.log("after-view-init called")
  }

}
