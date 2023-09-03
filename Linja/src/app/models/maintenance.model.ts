import { IMaintenanceTypeEnum } from "./enums/maintenanceTypeEnum";

export interface IMaintenance{
    id: number;
    info: string;
    timestamp: Date;
    nextMaintenanceTimestamp: Date;
    removed: boolean;
    busId: number;
    maintenanceType: IMaintenanceTypeEnum
}