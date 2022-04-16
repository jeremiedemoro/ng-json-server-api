import { Component, OnInit } from '@angular/core';
import { Properties } from '../properties.';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.scss']
})
export class PropertiesListComponent implements OnInit {
  public showDialog: boolean = true;
  public listInfo: any;
  public listStatus: any;
  public listComplementInfo: any;
  public isSearchingData: boolean = false;
  public propertySelected: any = 'All';
  public tenantSelected: any = 'All';
  public selectedStatus: any;
  public linkColor: string | undefined;
  public isDataLoaded: boolean = false;
  p: number = 1;

  constructor(private rest: RestService) { }

  columns = ["Created", "Property", "Property Status", "Plan", "Owner", "Owner Status", "Tenant", "Tenant Status"];
  propertyStatusFilter = ["All", "occupied", "vacant", "inactive"];
  tenantStatusFilter = ["All", "active", "inactive"];

  properties: Properties[] = [];

  ngOnInit(): void {
    this.rest.getProperties().subscribe
      (
        (response) => {
          this.isDataLoaded = false;
          setTimeout(() => {
            this.isDataLoaded = true;
            this.properties = response;
            this.selectedStatus = this.properties;
          }, 0);

        }
      )
  }

  searchPropertyStatus(selectedValue: any) {
    if (selectedValue == 'All') {
      this.isSearchingData = false;
    } else {
      this.isSearchingData = true;
      this.selectedStatus = this.properties.filter(selectedProperty => selectedProperty.occupiedStats == selectedValue);
    }
  }

  searchTenantStatus(selectedValue: any) {
    if (selectedValue == 'All') {
      this.isSearchingData = false;
    } else {
      this.isSearchingData = true;

      // this.selectedStatus = this.properties.filter((selectedTenant) => selectedTenant.tenant == selectedValue);

      this.selectedStatus = this.properties.filter((element) => {
        if (element.tenant != null && element.tenant.lastName != null) {
          element.tenant.tenantStatus == selectedValue
          console.log(element.tenant.tenantStatus)
        }
      })
    }
  }

  callDialog(listInfo: any, listStatus: any) {
    this.listInfo = listInfo;
    this.listStatus = listStatus;
    this.showDialog = true;
  }
}
