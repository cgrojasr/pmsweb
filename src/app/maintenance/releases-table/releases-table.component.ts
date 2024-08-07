import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReleaseItem } from 'src/app/models/release-model';
import { ReleasesService } from 'src/app/services/release/releases.service';

@Component({
  selector: 'app-releases-table',
  templateUrl: './releases-table.component.html',
  styleUrls: ['./releases-table.component.css']
})
export class ReleasesTableComponent implements OnInit {
  @Input() id_proyecto: number = 0
  releases: ReleaseItem[]=[]
  /**
   *
   */
  constructor(
    private releaseService: ReleasesService,
  ) {
  }

  ngOnInit(): void {
    this.releaseService.listarPorProyecto(this.id_proyecto).subscribe(
      result=>{
        this.releases = result
      }
    )
  }
}
