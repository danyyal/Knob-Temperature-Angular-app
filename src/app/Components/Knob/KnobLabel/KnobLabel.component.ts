import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-knob-label',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './KnobLabel.component.html',
  styleUrls: ['./KnobLabel.component.scss'],
})
export class KnobLabelComponent {

  @Input() temperature: number = 0;
  @Input() tempUnit: 'C' | 'F' = 'C';
}
