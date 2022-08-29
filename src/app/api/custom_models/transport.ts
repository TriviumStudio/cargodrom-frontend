export const TransportSubKinds = ['avia_lcl', 'avia_fcl', 'road_lcl', 'road_fcl', 'road_adr', 'road_ref', 'sea_teus', 'sea_lcl', 'sea_sp', 'rw_teus', 'rw_lcl', 'rw_sp'] as const;
export const TransportSubKindsWithAll = [...TransportSubKinds, 'all'] as const;
export type TransportSubKind = typeof TransportSubKinds[number];