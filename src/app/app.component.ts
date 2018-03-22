import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Mon premier post',
      content: 'Sed quid est quod in hac causa maxime homines admirentur et reprehendant meum consilium, cum ego idem antea multa decreverim, que magis ad hominis dignitatem quam ad rei publicae necessitatem pertinerent?',
      loveIts: 1,
      created_at: 1521757852000
    },
    {
      title: 'Mon deuxième post',
      content: 'Rei publicae satis erat tot dierum quot C. Mario ; dis immortalibus non erat exigua eadem gratulatio quae ex maximis bellis. ',
      loveIts: -1,
      created_at: 1521657852000
    },
    {
      title: 'Mon troisième post',
      content: 'Supplicationem quindecim dierum decrevi sententia mea. Ergo ille cumulus dierum hominis est dignitati tributus',
      loveIts: 0,
      created_at: 1521557852000
    }
  ];
}
