export const TransportSubKinds = ['avia_lcl', 'avia_fcl', 'road_lcl', 'road_fcl', 'road_adr', 'road_ref', 'sea_teus', 'sea_lcl', 'sea_sp', 'rw_teus', 'rw_lcl', 'rw_sp'] as const;
export type TransportSubKind = typeof TransportSubKinds[number];

//Вид перевозки
export interface TransportKind {
  id: number;
  key:string;
  name: string;
}
//Тип транспорта
export interface TransportType {
  id: number;
  name: string;
}

//Перевозчик
export interface TransportCarrier {
  id?: number;
  kind_id?: number;
  name?: string;
  iata?: string;
}
