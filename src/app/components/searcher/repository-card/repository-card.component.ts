import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IRepository } from '../../../interfaces/repository-interface';

@Component({
  selector: 'repository-card',
  templateUrl: './repository-card.component.html',
  styleUrls: ['./repository-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepositoryCardComponent {
  @Input() item: IRepository | undefined;
}
