import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';
import { VirualProject } from '../project';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgramService {
  url =
    'http://cmi-ofm.azurewebsites.net/api/Program/GetAllActiveVirtualPrograms';

  virualProject =
    'http://cmi-ofm.azurewebsites.net/api/Program/GetVirtualProjects';
  constructor(private http: HttpClient) {}

  getPrograms() {
    return this.http.get<{ virtualProgramList: User[] }>(this.url).pipe(
      map((res) => {
        return res.virtualProgramList;
      })
    );
  }

  getProject() {
    // return this.http.get(`http://yourapi.com/childdata?parentId=${parentId}`);
    return this.http
      .get<{ virtualProgramDetails: VirualProject[] }>(this.virualProject)
      .pipe(
        map((res) => {
          return res.virtualProgramDetails;
        })
      );
  }
}
