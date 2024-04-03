import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{name : string , serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{name : string , serverContent: string}>();
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverCreated.emit(
      {name: this.newServerName, serverContent: this.newServerContent}
    );
  }

  onAddBlueprint() {
    this.blueprintCreated.emit(
      {name: this.newServerName, serverContent: this.newServerContent}
    );
  }
}
