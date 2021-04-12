import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';


  isThisIngredientVital:boolean = true;

  maCondition:boolean = true;

  isAdmin:boolean = true;

  songList: string[] = ['Cité blanches', 'Je ne suis pas chasseur mais je lui mettrai bien une cartouche', 'Question / réponse'];
}
