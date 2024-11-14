import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrl: './edit-button.component.scss'
})
export class EditButtonComponent {
  @Input() label: string = ''; // Button label
  @Input() type: string = 'button';
  @Input() buttonColor: string = '';
  @Input() textColor: string = '';
  @Input() buttonWidth: string='';
  @Input() labelColor: string = '';
  @Input() classname = "";
  @Input() icon: string = '';
  @Input() buttoncolor: string = '';
}
