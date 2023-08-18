import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { TempObj } from 'src/app/Utils/Types';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-input-controls',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './InputControls.component.html',
  styleUrls: ['./InputControls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputControls implements OnInit {
  @Output() updateDataEvent = new EventEmitter<TempObj>();
  @Input() defaultValues!: TempObj;
  public minTemperature: number = 0;
  public maxTemperature: number = 0;
  public targetTemperature: number = 0;

  private minTemperatureSubject = new Subject<number>();
  private maxTemperatureSubject = new Subject<number>();
  private targetTemperatureSubject = new Subject<number>();
  ngOnInit() {
    this.minTemperature = this.defaultValues.minTemperature;
    this.maxTemperature = this.defaultValues.maxTemperature;
    this.targetTemperature = this.defaultValues.targetTemperature;
    this.minTemperatureSubject.pipe(debounceTime(2000)).subscribe(() => {
      this.updateMinTemperature();
      this.updateParentData();
    });
    this.maxTemperatureSubject.pipe(debounceTime(2000)).subscribe(() => {
      this.updateMaxTemperature();
      this.updateParentData();
    });
    this.targetTemperatureSubject.pipe(debounceTime(2000)).subscribe(() => {
      this.updateTargetTemperature();
      this.updateParentData();
    });
  }

  updateMinTemperature() {
    this.minTemperatureSubject.next(this.minTemperature);
  }

  updateMaxTemperature() {
    this.maxTemperatureSubject.next(this.maxTemperature);
  }

  updateTargetTemperature() {
    this.targetTemperatureSubject.next(this.targetTemperature);
  }

  updateParentData() {
    var obj = {
      minTemperature: this.minTemperature,
      maxTemperature: this.maxTemperature,
      targetTemperature: this.targetTemperature,
    };
    this.updateDataEvent.emit(obj);
  }
}
