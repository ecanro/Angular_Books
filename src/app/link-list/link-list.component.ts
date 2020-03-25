import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit, OnDestroy {
  @Input() linkList: Link[];
  constructor() { }

  ngOnInit() {
    console.log('Link build!')
  }
  ngOnDestroy(): void {
    console.log('Link destroyed!')
    
  }

}

export interface Link {
    title: string;
    url: string;
}
  
