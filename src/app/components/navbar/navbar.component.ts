import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddFormComponent } from '../add-form/add-form.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private dialog:MatDialog){}

  handleClick(){
    this.dialog.open(AddFormComponent,{
      height:'500px',
      width:'300px'
    })
  }

}
