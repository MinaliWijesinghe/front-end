//import { SupplyAd } from './../../shared/supply-ad.model';
//import { SupplyAdService } from './../../shared/supply-ad.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SupplyAdService } from '../../shared/supply-ad.service';
import { SupplyAd } from '../../shared/supply-ad.model';


@Component({
  selector: 'app-display-supply-ad',
  templateUrl: './display-supply-ad.component.html',
  styleUrls: ['./display-supply-ad.component.css'],
  //providers:[SupplyAd[]]
})
export class DisplaySupplyAdComponent implements OnInit {
  supplyAds: SupplyAd[];
  selectedSupplyAd: SupplyAd;
  constructor(private supplyAdService: SupplyAdService,
    private _router: Router) { }

  ngOnInit() {
    this.supplyAdService.getSupplyAdList().subscribe((res) => {
      this.supplyAdService.supplyAds = res as SupplyAd[];

    });
  }

  onEdit(event: string) {
    this.supplyAdService.getSupplyAd(event).subscribe((res) => {
      this.supplyAdService.selectedSupplyAd = res as SupplyAd;
      this._router.navigate(['/DesSup']);
      localStorage.setItem('_ID', event);
      console.log("event" + event);
      console.log("response supply add" + res);

    });

  }
}
