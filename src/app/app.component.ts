import { Component } from '@angular/core';
import { COMMON_NAMES } from './common-names';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: string[] = COMMON_NAMES;
  multiItems: any[] = [];

  mentionFilter: (triggerChar: string, triggerCharIndex: number, items: any[], searchString: string) => (any) = 
    (triggerChar: string, triggerCharIndex: number, items: any[], searchString: string) => {
      return items[triggerCharIndex].filter(e => e.toLowerCase().startsWith(searchString));
    }

  constructor() {
    let newList1 = [];
    for (let i = 0; i < COMMON_NAMES.length; i++) {
      newList1.push(`${COMMON_NAMES[i]}_item1`);
    }
    let newList2 = [];
    for (let i = 0; i < COMMON_NAMES.length; i++) {
      newList2.push(`${COMMON_NAMES[i]}_item2`);
    }
    this.multiItems = [newList1, newList2];
  }
}
