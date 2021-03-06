import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { AlertiftyService } from '../_services/alertifty.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { error } from 'protractor';

@Injectable()
export class MemberDatailResolver implements Resolve<User> {
    constructor(private userService: UserService, private router: Router, private alertyfy: AlertiftyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this.userService.getUser(route.params['id']).pipe(
            catchError(error => {
                this.alertyfy.error('Problem retrieving data');
                this.router.navigate(['/members']);
                return of(null);
            })
        );
    }
}