import { IMaintenance } from "./maintenance.model";

export interface IBus {
    id: number;
    maker: string;
    regNumber: string;
    removed: boolean;
    maintenances: IMaintenance[];
}