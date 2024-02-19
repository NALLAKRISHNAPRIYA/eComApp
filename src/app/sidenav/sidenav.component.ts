import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  companyList: any = [];
  typeId: string = '';
  constructor(private activatedRoute: ActivatedRoute,
    private itemService: ItemService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.typeId = params.typeId;
      this.getCompanyList();      
      this.getItemList();
    });
  }

  getCompanyList() {
    this.itemService.getCompanyList(this.typeId).subscribe((items) => {
      this.companyList = items;
    });
  }

  getItemList() {
    this.itemService.getItemList(this.typeId);
  }

}
