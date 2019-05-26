import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courseGoals = [
    { title: 'Master Angular Styles', isActiveGoal: true },
    { title: 'Learn Angular Animations', isActiveGoal: false },
    { title: 'Master Angular Animations', isActiveGoal: false }
  ];
  public divClicked: boolean;
}
