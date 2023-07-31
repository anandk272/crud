import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit{
  constructor(private http:HttpClient){
    console.log('loaded')
  }

  name:string=''
  salary:number=0
  experience:number=0

  $employee=new BehaviorSubject([])
  employee:any 
  
  handleSubmit(){
    this.http.post('https://64bf664d5ee688b6250d5cd1.mockapi.io/api/employee',{
      "name":this.name,
      "salary":this.salary,
      "experience":this.experience

    }).subscribe(
      (val)=>{
        console.log(val)
      },(error)=>{
        console.log('error',error)
      }
    )
  }
  delEmp(id:number){
    this.http.delete(`https://64bf664d5ee688b6250d5cd1.mockapi.io/api/employee/${id}`)
    .subscribe((res)=>{
      console.log('deleted emply')
    })
  }

  editEmp(emp:any){
    const headers = new HttpHeaders()
    .set("Content-Type", "application/json");

    this.name=emp.name
    this.salary=emp.salary
    this.experience=emp.experience
    this.http.put(`https://64bf664d5ee688b6250d5cd1.mockapi.io/api/employee/${emp.id}`,{
      "name":this.name+'edited',
      "salary":this.salary,
      "experience":this.experience
    },{headers}).subscribe(
      (val)=>{
        console.log('success',val)
      }
    )

  }

  ngOnInit(): void {
    this.$employee.subscribe((res)=>{
      console.log('employee observer subscribed')
      this.employee=res
    })
      this.http.get('https://64bf664d5ee688b6250d5cd1.mockapi.io/api/employee').subscribe((res:any)=>{
        this.$employee.next(res)
      })
  }


  

}
