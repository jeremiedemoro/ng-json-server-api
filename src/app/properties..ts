export class Properties {
    propertyId: string;
    createdOn: string;
    address: string;
    occupiedStats: string;
    owner: string;
    ownerStatus: string;
    tenant: any;
    tenantContactId: string;
    tenantFirstName: string;
    tenantLastName: string;
    tenantStatus: any;
    plan: string;


    constructor(propertyId: string, createdOn: string, address: string, occupiedStats: string, owner: string, ownerStatus: string, tenant: string, tenantContactId: string, tenantFirstName: string, tenantLastName: string, tenantStatus: string, plan: string){
        this.propertyId = propertyId;
        this.createdOn = createdOn;
        this.address = address;
        this.occupiedStats = occupiedStats;
        this.owner = owner;
        this.ownerStatus = ownerStatus;
        this.tenant = tenant;
        this.tenantContactId = tenantContactId;
        this.tenantFirstName = tenantFirstName;
        this.tenantLastName = tenantLastName;
        this.tenantStatus = tenantStatus;
        this.plan = plan;
    };
}