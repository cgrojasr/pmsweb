import { Component } from '@angular/core';
import { ReleaseItem } from 'src/app/models/release-model';

@Component({
  selector: 'app-releases-item',
  templateUrl: './releases-item.component.html',
  styleUrls: ['./releases-item.component.css']
})
export class ReleasesItemComponent {
  release_item: ReleaseItem = {
    id_release: 0,
    nombre: '',
    fecha_inicio: new Date(),
    fecha_final: new Date()
  }
}
