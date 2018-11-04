import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {UserService} from './shared/user/user.service';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import { AgmCoreModule } from '@agm/core';



import {
  MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule,
  MatMenuModule, MatIconModule, MatTableModule, MatProgressSpinnerModule, MatSortModule, MatPaginatorModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {AppService} from './service/app.service';
import {HomeComponent} from './home/home.component'
import {LoginComponent} from './login/login.component';
import {
  SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, LinkedinLoginProvider,
  FacebookLoginProvider
} from "angular5-social-auth";
import { UserComponent } from './user/user.component';
import { TherapyListComponent } from './therapy-list/therapy-list.component';
import { SessionListComponent } from './session-list/session-list.component';
import { RssFeedComponent } from './rss-feed/rss-feed.component';
import {EmbedVideo} from "ngx-embed-video/dist";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sessions/:username', component: SessionListComponent}
];


// Configs
export function getAuthServiceConfigs() {

  let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("90400942676-n62eslcr39fha9i7g7610p1l0c0o7cfa.apps.googleusercontent.com")
      },
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("203064913467897")
      },
      {
        id: LinkedinLoginProvider.PROVIDER_ID,
        provider: new LinkedinLoginProvider("787wfhme5zdyew")
      }
    ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    TherapyListComponent,
    SessionListComponent,
    RssFeedComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    SocialLoginModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFgM81Qz-SwfTzUsr4F51AgDj0HdN88CQ'
    }),
    EmbedVideo.forRoot()
  ],
  providers: [UserService, AppService, {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
