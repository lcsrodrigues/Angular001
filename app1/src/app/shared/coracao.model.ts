export default class Coracao {
  public isFill: string;
  public heartEmpty: string = 'bi bi-balloon-heart';
  public heartFill: string = 'bi bi-balloon-heart-fill';

  constructor(isFill: boolean) {
    if (isFill) {
      this.isFill = this.heartFill;
    } else {
      this.isFill = this.heartEmpty;
    }
  }
}
