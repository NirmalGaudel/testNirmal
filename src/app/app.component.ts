import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmpListComponent } from './emp-list/emp-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "test";
  data: any[] = [];
  fb: any ;

  @ViewChild('EMPLIST') employees_list: EmpListComponent;
  
  constructor(private formBuilder: FormBuilder, private _http: HttpClient){}



  ngOnInit(): void {
    this.fb = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['']
    })
    this.getData();
    
  }

  async getData(){
    this._http.get("https://dummy.restapiexample.com/api/v1/employees").toPromise().then((res: any)=>{
      this.data = res.data;
      // this.employees_list.data = this.data;
    }).catch((err:any)=>{
      console.error(err);
    })
    
  }

  onSubmit(event:any){
    console.log(event);
    console.log(this.fb)
  }

  deleteData(index){
    console.log('delete', index);
    this.data.splice(index, 1);
  }

}
