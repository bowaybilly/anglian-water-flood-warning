import { Floodarea } from "./Floodarea";

export interface Item {
    id: string;
    description: string;
    eaAreaName: string;
    eaRegionName: string;
    floodArea: Floodarea;
    floodAreaID: string;
    isTidal: boolean;
    message: string;
    severity: string;
    severityLevel: number;
    timeMessageChanged: string;
    timeRaised: string;
    timeSeverityChanged: string;
}
