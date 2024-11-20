interface KPI {
  balance: KPIItem[];
  units: KPIItem[];
  month_end: KPIItem[];
}

interface KPIItem {
  icon_url: string;
  title: string;
  value: string;
  is_active: boolean;
}

export interface PreDeliquency {
  duration_interval: string;
  tile1: Tile;
  tile2: Tile;
}

export interface PreDelinquency {
  stage: string;
  balances: TileNew;
  units: TileNew;
  hotspots: TileNew;
  roi: TileNew;
  stp: TileNew;
}

interface TileNew {
  name: string;
  amount: number;
  growth: any;
  is_positive: boolean;
}

export interface CollectionNew {
  stage: string;
  balances: TileNew;
  units: TileNew;
  hotspots: TileNew;
  roi: TileNew;
  stp: TileNew;
}

export interface RecoveryNew {
  stage: string;
  balances: TileNew;
  units: TileNew;
  hotspots: TileNew;
  roi: TileNew;
  stp: TileNew;
}

export interface Collections {
  duration_interval: string;
  tile1: Tile;
  tile2: Tile;
}



export interface Recovery {
  duration_interval: string;
  tile1: Tile;
  tile2: Tile;
}

interface Tile {
  Balance: Metric;
  Units: Metric;
  Hotspots: Metric;
  ROI: Metric;
  STP: Metric;
}

interface Metric {
  value: string;
  growth: string;
  direction: string;
  color: string;
}

export interface IDashboardState {
  kpi: {
    balance: KPIItem[];
    units: KPIItem[];
    month_end: KPIItem[];
  };
  pre_deliquency: PreDeliquency;
  collections: Collections;
  recovery: Recovery;
}

// Define types for the nested objects
export interface ExclusionCriteria {
  dpd: number;
  min_balance: number;
  min_score: number | null;
  flag: null | string;
}

export interface Overall {
  total_accounts: number;
  total_accounts_allocated: number;
  in_house_exclusion: number;
  total_balance: number;
  total_balance_allocated: number;
}

interface ResolveRate {
  base: number;
  increment: number;
}

interface Cost {
  value: number;
  increment: number;
}

export interface Allocation {
  agency_name: string;
  previous_month_allocated_percentage: number;
  current_month_allocated_percentage: number;
  resolve_rate: number;
  commission_rate: number;
  accounts: number;
  balance: number;
}

export interface ImpactAnalysis {
  resolve_rate: ResolveRate;
  cost_rate_on_resolved_amount: Cost;
}

export interface IAllocationData {
  city: string;
  code: string;
  bucket: string;
  exclusion_criteria: ExclusionCriteria;
  overall: Overall;
  impact_analysis: ImpactAnalysis;
  allocations: Allocation[];
}
