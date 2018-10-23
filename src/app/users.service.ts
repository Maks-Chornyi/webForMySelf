import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {}

  users = [
    {name: 'WFM1', desc: 'desc1'},
    {name: 'WFM2', desc: 'desc2'},
    {name: 'WFM3', desc: 'desc3'},
    {name: 'WFM4', desc: 'desc4'},
    {name: 'WFM5', desc: 'desc5'},
    {name: 'WFM6', desc: 'desc6'}
  ];

  getUsers() {
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb')

      .pipe(map(response => response.results))
      .pipe(map(users => {
        return users.map(user => {
          return {
            name: user.name.first + ' ' + user.name.last,
            picture: user.picture.large,
            geo: user.location.city + ' ' + user.location.state + ' ' + user.location.street
          };
        });
      }));


  }
}
