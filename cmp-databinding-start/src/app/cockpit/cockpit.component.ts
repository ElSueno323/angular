import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{name : string , serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{name : string , serverContent: string}>();
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;




  onAddServer(nameInput:HTMLInputElement) {
    this.serverCreated.emit(
      {name: nameInput.value,
        serverContent: this.serverContentInput.nativeElement.value}
    );
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    this.blueprintCreated.emit(
      {name: nameInput.value,
        serverContent: this.serverContentInput.nativeElement.value}
    );
  }
}
