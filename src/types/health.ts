export interface WHORecord {
    SpatialDim: string;
    TimeDim?: number | string;
    NumericValue?: number;
    [key: string]: any; 
}

export interface HealthSummary {
    country: string;
    year: number | string;
    value: number;
    indicator: string;
}