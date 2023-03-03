import { Component } from '@angular/core';
import { ProgramService } from './service/program.service';
import { User } from './user';
import { MatSelectChange } from '@angular/material/select';
import { VirualProject } from '../app/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Test_2';
  allData: User[] = [];
  projectData: VirualProject[] = [];
  selectProgram: string[] = [];
  selectProject: string[] = [];
  FilterData: VirualProject[] = [];

  constructor(private servcie: ProgramService) {
    this.servcie.getPrograms().subscribe((res) => {
      this.allData = res;
    });
    this.servcie.getProject().subscribe((result) => {
      this.projectData = result;
    });
  }

  data() {
    this.servcie.getPrograms().subscribe((res) => {
      this.allData = res;
    });
    this.servcie.getProject().subscribe((result) => {
      this.projectData = result;
    });
    console.log(this.allData);
    console.log(this.projectData);
    console.log('function');
  }

  change(event: MatSelectChange) {
    this.selectProgram = event.value;

    console.log(this.selectProgram);

    // this.projectData.forEach((data) => {
    //   this.selectProgram.forEach((program) => {
    //     if (data.programID == program) {
    //       this.FilterData.push(data);
    //     }
    //   });
    // });
    console.log('change');

    this.FilterData = this.projectData.filter((obj) => {
      return this.selectProgram.some((o) => obj.programID == o);
    }).filter((obj,index,array) =>{
        return array.findIndex((i)=>i.projectName === obj.projectName) === index
    });


    console.log('filter', this.FilterData);
  }
}
