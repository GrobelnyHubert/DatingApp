import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { PreventUnsavedChanges} from './_guards/prevent-unsaved-changes.guards';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MemberDatailResolver } from './_resolvers/member-detals.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { ListsResolver } from './_resolvers/lists.resolvers';
import { MessagesResolver } from './_resolvers/messages.resolver';

export const appRoutes: Routes = [
    {  path: '', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {  path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver} },
            {  path: 'members/:id', component: MemberDetailsComponent, resolve: {user: MemberDatailResolver} },
            {  path: 'member/edit', component: MemberEditComponent,
            resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges]},
            {  path: 'messages', component: MessagesComponent , resolve: { messages: MessagesResolver}},
            {  path: 'lists', component: ListsComponent, resolve: {users: ListsResolver} },
        ]
    },
    {  path: '**', redirectTo: '', pathMatch: 'full' },
];
