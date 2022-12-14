import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularproject';
  check = false;

  tableArray = [
    {
      productName: 'News Mobile App...',
      status: 'Active',
      sold: '10',
      view: '100',
    },
    {
      productName: '40+ Landing Page Template...',
      status: 'Active',
      sold: '10',
      view: '100',
    },
    {
      productName: 'SmartTVDoctor consultant UI KIT...',
      status: 'Active',
      sold: '10',
      view: '100',
    },
    {
      productName: 'Startup Illlustration KIT Ve...',
      status: 'Active',
      sold: '10',
      view: '100',
    }
  ];

  searchform() {
    this.check = true;
    console.log('hi');
  }

  submitForm(item: any) {
    console.log(this.check);    
    this.tableArray.push(item);
    // console.log(this.tableArray);
    
    this.cancel();
  }

  cancel() {
    this.check = false;
  }

  // delete item from the table
  del(index: any) {
    console.log(index);
    this.tableArray.splice(index, 1);
    // delete this.tableArray[i];
    console.log(this.tableArray);
  }
}
