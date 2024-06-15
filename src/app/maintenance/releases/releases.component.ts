import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.css']
})
export class ReleasesComponent implements OnInit {
  id_proyecto: number = 0
  
  /**
   *
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params=>{
        this.id_proyecto = params["id_proyecto"]
      }
    )
  }

  btnRegistrar_Click(): void {
    this.router.navigateByUrl('maintenance/release-item')
  }
}
