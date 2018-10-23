import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {

  size = 8;

  constructor(private http: HttpClient) {}

  setSize(size) {
    this.size = size;
  }

  getUsers() {
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=' + this.size + '&nat=gb')
      .pipe(map(function (res) {
        return res.results;
      }))
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
