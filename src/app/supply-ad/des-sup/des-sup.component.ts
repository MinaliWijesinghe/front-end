import { SupplyAd } from './../../shared/supply-ad.model';
import { SupplyAdService } from './../../shared/supply-ad.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-des-sup',
  templateUrl: './des-sup.component.html',
  styleUrls: ['./des-sup.component.css'],
  providers: [SupplyAdService]
})
export class DesSupComponent implements OnInit {
  supplyAds: SupplyAd[];
  selectedSupplyAd: SupplyAd;
  id: string;

  constructor(private supplyAdService: SupplyAdService) { }


  ngOnInit() {

    this.id = localStorage.getItem('_ID');
    this.getId();
    this.supplyAdService.getSupplyAd(this.id).subscribe((res) => {
      //this.supplyAdService.selectedSupplyAd = res as SupplyAd;
      console.log("event" + event);
      console.log("response supply add" + res);
    });
  }
  getId() {
    this.id = localStorage.getItem('_ID');

  }
}

