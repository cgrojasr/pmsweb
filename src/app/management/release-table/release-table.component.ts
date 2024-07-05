import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReleaseItem } from 'src/app/models/release-model';
import { ReleasesService } from 'src/app/services/release/releases.service';

@Component({
  selector: 'app-release-table',
  templateUrl: './release-table.component.html',
  styleUrls: ['./release-table.component.css']
})
export class ReleaseTableComponent implements OnInit {
  releases: ReleaseItem[] = []
  id_proyecto: number = 0
  /**
   *
   */
  constructor(
    private releaseService: ReleasesService,
    private activedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(
      params => {
        if(params["id_proyecto"] !== undefined){
          this.id_proyecto = params["id_proyecto"]
          this.releaseService.listarPorProyecto(this.id_proyecto).subscribe(
            result=>{
              this.releases = result
            }
          )
        }
      }
    )
  }
}
