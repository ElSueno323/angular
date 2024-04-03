import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:"server",name:"Test", content:'Juste a Test!'}];


  onServerAdded(serverData: {name : string , serverContent: string}) {
      this.serverElements.push({
        type: 'server',
        name: serverData.name,
        content: serverData.serverContent
      });
  }

  onBlueprintAdded(blueprintData: {name : string , serverContent: string}) {
      this.serverElements.push({
        type: 'blueprint',
        name: blueprintData.name,
        content: blueprintData.serverContent
      });
  }

}
