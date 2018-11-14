import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { config } from 'rxjs/internal/config';




@Injectable({ providedIn: 'root' })
export class UserService {

  apiUrl = 'localhost:3000/users'
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(this.apiUrl);
    }
}
