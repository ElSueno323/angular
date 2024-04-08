
export class CounterService {


  constructor(private activeToInactiveCounter , private inactiveToInactiveCounter) {
  }
  incrementActiveToInactive(){
    this.activeToInactiveCounter++;
    this.inactiveToInactiveCounter--;
    console.log('ACTIVE  :'+this.activeToInactiveCounter);
  }
  incrementInactiveToActive(){
    this.inactiveToInactiveCounter++;
    this.activeToInactiveCounter--;
    console.log('INACTIVE :'+this.inactiveToInactiveCounter);
  }

}
