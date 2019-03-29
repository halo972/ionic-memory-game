import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private cardList: Array<{name: string, img: string, revealed: boolean}> = [];

  private numberOfDistinctCards = 6;

  private questionMarkUrl = '/assets/img/question-mark.png';

  private generateDeck(){
    for(let i =0; i < this.numberOfDistinctCards; i++){
      let imgUrl = '/assets/img/cards/' + i + '.png';
      this.cardList.push({img: this.questionMarkUrl, name: imgUrl, revealed: false });
      this.cardList.push({img: this.questionMarkUrl, name: imgUrl, revealed: false });
    }
  }

  constructor(){
    this.generateDeck();
    console.log(this.cardList);
  }



}
