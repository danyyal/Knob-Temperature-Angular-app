import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnobLabelComponent } from './KnobLabel/KnobLabel.component';
import { InputControls } from '../InputControls/InputControls.component';
import { TempObj } from 'src/app/Utils/Types';
import { getError, getKnobPosition } from 'src/app/Utils/helper';
@Component({
  selector: 'app-knob',
  standalone: true,
  imports: [CommonModule, KnobLabelComponent, InputControls],
  templateUrl: './Knob.component.html',
  styleUrls: ['./Knob.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KnobComponent implements OnInit {
  ngOnInit(): void {
    this.knobStyle = getKnobPosition(
      this.minTemperature,
      this.maxTemperature,
      this.targetTemperature
    );

    this.isError = getError(
      this.minTemperature,
      this.maxTemperature,
      this.targetTemperature
    );
  }

  public knobStyle!: number;
  public isError!: string | null;

  @Input() minTemperature: number = 0;
  @Input() maxTemperature: number = 100;
  @Input() targetTemperature: number = 50;

  public paramObj: TempObj = {
    minTemperature: this.minTemperature,
    maxTemperature: this.maxTemperature,
    targetTemperature: this.targetTemperature,
  };
  updateParentData(data: TempObj) {
    this.minTemperature = data.minTemperature;
    this.maxTemperature = data.maxTemperature;
    this.targetTemperature = data.targetTemperature;
    this.isError = getError(
      this.minTemperature,
      this.maxTemperature,
      this.targetTemperature
    );
    this.knobStyle = getKnobPosition(
      this.minTemperature,
      this.maxTemperature,
      this.targetTemperature
    );
  }
}
