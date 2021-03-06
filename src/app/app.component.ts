import {Component} from '@angular/core';
import {AppService} from './service/app.service';
import {Router} from '@angular/router';
import 'rxjs/add/operator/finally';
import {
  AuthService, LinkedinLoginProvider, GoogleLoginProvider,
  FacebookLoginProvider
} from "angular5-social-auth";
import {UserService} from "./shared/user/user.service";
import {EmbedVideoService} from "ngx-embed-video/dist";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  youtubeUrl = "https://www.youtube.com/watch?v=iHhcHTlGtRs";
  youtubeId = "iHhcHTlGtRs";

  constructor(private embedService: EmbedVideoService, private app: AppService, private userService: UserService, private router: Router, private socialAuthService: AuthService) {
    console.log(this.embedService.embed(this.youtubeUrl));
    console.log(this.embedService.embed_youtube(this.youtubeId));


  }


  authenticated() {
    return localStorage.getItem('jwt');
  }
  logout() {
    if (this.authenticated()) {
      this.socialAuthService.signOut();
      this.app.logout();
    }
    this.router.navigateByUrl('/login');
  }


  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "linkedin") {
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    }
    /**
     this.app.authenticateSocial(() => {
      console.log(" sign in data google *******: ");
      this.router.navigateByUrl('/');
    })
     **/
// this.socialAuthService.signOut();
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {


        console.log(socialPlatform + " sign in data : ", userData);

        var credentials = {provider: socialPlatformProvider, token: userData['token']};
        console.log(credentials + " credentials *******");
        this.app.authenticateSocial(credentials, () => {
          this.router.navigate(['/home']);
        });


      }
    );
  }


  redirect(pagename: string) {
    this.router.navigate(['/' + pagename]);
  }

}
