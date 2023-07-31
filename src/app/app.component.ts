import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddFormComponent } from './components/add-form/add-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud';
  constructor(private dialog:MatDialog){}

  handleClick(){
    this.dialog.open(AddFormComponent)
  }
}
