import { Component, VERSION } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { map, Observable, tap, timer } from 'rxjs';
import { ProfileService } from './profile.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  profile$: Observable<string>;

  constructor(
    private profileService: ProfileService,
    private loadingCtrl: LoadingController
  ) {}

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({ message: 'Loading..' });
    loading.present();

    this.profile$ = this.profileService.getProfile().pipe(
      map(() => 'Test'),
      tap((profile) => {
        loading.dismiss(); //this is never dismissed and keep loading
        console.log(profile);
      })
    );
  }
}
