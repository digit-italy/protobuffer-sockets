// package: feed
// file: feed.proto

import * as jspb from "google-protobuf";

export class security_trade extends jspb.Message {
  hasUniqueId(): boolean;
  clearUniqueId(): void;
  getUniqueId(): number | undefined;
  setUniqueId(value: number): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): number | undefined;
  setPrice(value: number): void;

  hasSize(): boolean;
  clearSize(): void;
  getSize(): number | undefined;
  setSize(value: number): void;

  hasCrossOrderFlag(): boolean;
  clearCrossOrderFlag(): void;
  getCrossOrderFlag(): boolean | undefined;
  setCrossOrderFlag(value: boolean): void;

  hasTradeTs(): boolean;
  clearTradeTs(): void;
  getTradeTs(): string | undefined;
  setTradeTs(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): security_trade.AsObject;
  static toObject(includeInstance: boolean, msg: security_trade): security_trade.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: security_trade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): security_trade;
  static deserializeBinaryFromReader(message: security_trade, reader: jspb.BinaryReader): security_trade;
}

export namespace security_trade {
  export type AsObject = {
    uniqueId?: number,
    price?: number,
    size?: number,
    crossOrderFlag?: boolean,
    tradeTs?: string,
  }
}

export class security_order_depth_elem extends jspb.Message {
  hasSide(): boolean;
  clearSide(): void;
  getSide(): side_enumMap[keyof side_enumMap] | undefined;
  setSide(value: side_enumMap[keyof side_enumMap]): void;

  hasLevel(): boolean;
  clearLevel(): void;
  getLevel(): number | undefined;
  setLevel(value: number): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): number | undefined;
  setPrice(value: number): void;

  hasDisplaySize(): boolean;
  clearDisplaySize(): void;
  getDisplaySize(): number | undefined;
  setDisplaySize(value: number): void;

  hasUserCode(): boolean;
  clearUserCode(): void;
  getUserCode(): string | undefined;
  setUserCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): security_order_depth_elem.AsObject;
  static toObject(includeInstance: boolean, msg: security_order_depth_elem): security_order_depth_elem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: security_order_depth_elem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): security_order_depth_elem;
  static deserializeBinaryFromReader(message: security_order_depth_elem, reader: jspb.BinaryReader): security_order_depth_elem;
}

export namespace security_order_depth_elem {
  export type AsObject = {
    side?: side_enumMap[keyof side_enumMap],
    level?: number,
    price?: number,
    displaySize?: number,
    userCode?: string,
  }
}

export class security_ref_price extends jspb.Message {
  hasReferencePrice(): boolean;
  clearReferencePrice(): void;
  getReferencePrice(): number | undefined;
  setReferencePrice(value: number): void;

  hasDynamicPrice(): boolean;
  clearDynamicPrice(): void;
  getDynamicPrice(): number | undefined;
  setDynamicPrice(value: number): void;

  hasReferenceTs(): boolean;
  clearReferenceTs(): void;
  getReferenceTs(): string | undefined;
  setReferenceTs(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): security_ref_price.AsObject;
  static toObject(includeInstance: boolean, msg: security_ref_price): security_ref_price.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: security_ref_price, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): security_ref_price;
  static deserializeBinaryFromReader(message: security_ref_price, reader: jspb.BinaryReader): security_ref_price;
}

export namespace security_ref_price {
  export type AsObject = {
    referencePrice?: number,
    dynamicPrice?: number,
    referenceTs?: string,
  }
}

export class security_status extends jspb.Message {
  hasTradingSessionId(): boolean;
  clearTradingSessionId(): void;
  getTradingSessionId(): string | undefined;
  setTradingSessionId(value: string): void;

  hasTradingStatus(): boolean;
  clearTradingStatus(): void;
  getTradingStatus(): trading_status_enumMap[keyof trading_status_enumMap] | undefined;
  setTradingStatus(value: trading_status_enumMap[keyof trading_status_enumMap]): void;

  hasReopenTime(): boolean;
  clearReopenTime(): void;
  getReopenTime(): string | undefined;
  setReopenTime(value: string): void;

  hasStatusTs(): boolean;
  clearStatusTs(): void;
  getStatusTs(): string | undefined;
  setStatusTs(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): security_status.AsObject;
  static toObject(includeInstance: boolean, msg: security_status): security_status.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: security_status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): security_status;
  static deserializeBinaryFromReader(message: security_status, reader: jspb.BinaryReader): security_status;
}

export namespace security_status {
  export type AsObject = {
    tradingSessionId?: string,
    tradingStatus?: trading_status_enumMap[keyof trading_status_enumMap],
    reopenTime?: string,
    statusTs?: string,
  }
}

export class security_volume extends jspb.Message {
  hasCumulativeSize(): boolean;
  clearCumulativeSize(): void;
  getCumulativeSize(): number | undefined;
  setCumulativeSize(value: number): void;

  hasCumulativeAmount(): boolean;
  clearCumulativeAmount(): void;
  getCumulativeAmount(): number | undefined;
  setCumulativeAmount(value: number): void;

  hasNoExecutedTrades(): boolean;
  clearNoExecutedTrades(): void;
  getNoExecutedTrades(): number | undefined;
  setNoExecutedTrades(value: number): void;

  hasAveragePrice(): boolean;
  clearAveragePrice(): void;
  getAveragePrice(): number | undefined;
  setAveragePrice(value: number): void;

  hasVolumeTs(): boolean;
  clearVolumeTs(): void;
  getVolumeTs(): string | undefined;
  setVolumeTs(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): security_volume.AsObject;
  static toObject(includeInstance: boolean, msg: security_volume): security_volume.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: security_volume, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): security_volume;
  static deserializeBinaryFromReader(message: security_volume, reader: jspb.BinaryReader): security_volume;
}

export namespace security_volume {
  export type AsObject = {
    cumulativeSize?: number,
    cumulativeAmount?: number,
    noExecutedTrades?: number,
    averagePrice?: number,
    volumeTs?: string,
  }
}

export class update_payload extends jspb.Message {
  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): security_order_depth_elem | undefined;
  setOrder(value?: security_order_depth_elem): void;

  hasTrade(): boolean;
  clearTrade(): void;
  getTrade(): security_trade | undefined;
  setTrade(value?: security_trade): void;

  hasRefPrice(): boolean;
  clearRefPrice(): void;
  getRefPrice(): security_ref_price | undefined;
  setRefPrice(value?: security_ref_price): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): security_status | undefined;
  setStatus(value?: security_status): void;

  hasVolume(): boolean;
  clearVolume(): void;
  getVolume(): security_volume | undefined;
  setVolume(value?: security_volume): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): update_payload.AsObject;
  static toObject(includeInstance: boolean, msg: update_payload): update_payload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: update_payload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): update_payload;
  static deserializeBinaryFromReader(message: update_payload, reader: jspb.BinaryReader): update_payload;
}

export namespace update_payload {
  export type AsObject = {
    order?: security_order_depth_elem.AsObject,
    trade?: security_trade.AsObject,
    refPrice?: security_ref_price.AsObject,
    status?: security_status.AsObject,
    volume?: security_volume.AsObject,
  }
}

export class update_snapshot extends jspb.Message {
  hasUpdateType(): boolean;
  clearUpdateType(): void;
  getUpdateType(): update_typeMap[keyof update_typeMap] | undefined;
  setUpdateType(value: update_typeMap[keyof update_typeMap]): void;

  hasService(): boolean;
  clearService(): void;
  getService(): string | undefined;
  setService(value: string): void;

  hasKey(): boolean;
  clearKey(): void;
  getKey(): string | undefined;
  setKey(value: string): void;

  hasSigmas(): boolean;
  clearSigmas(): void;
  getSigmas(): update_payload | undefined;
  setSigmas(value?: update_payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): update_snapshot.AsObject;
  static toObject(includeInstance: boolean, msg: update_snapshot): update_snapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: update_snapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): update_snapshot;
  static deserializeBinaryFromReader(message: update_snapshot, reader: jspb.BinaryReader): update_snapshot;
}

export namespace update_snapshot {
  export type AsObject = {
    updateType?: update_typeMap[keyof update_typeMap],
    service?: string,
    key?: string,
    sigmas?: update_payload.AsObject,
  }
}

export class update_ticker extends jspb.Message {
  hasSubscriptionId(): boolean;
  clearSubscriptionId(): void;
  getSubscriptionId(): number | undefined;
  setSubscriptionId(value: number): void;

  hasUpdateType(): boolean;
  clearUpdateType(): void;
  getUpdateType(): update_typeMap[keyof update_typeMap] | undefined;
  setUpdateType(value: update_typeMap[keyof update_typeMap]): void;

  hasService(): boolean;
  clearService(): void;
  getService(): string | undefined;
  setService(value: string): void;

  hasSequence(): boolean;
  clearSequence(): void;
  getSequence(): number | undefined;
  setSequence(value: number): void;

  hasKey(): boolean;
  clearKey(): void;
  getKey(): string | undefined;
  setKey(value: string): void;

  hasSigmas(): boolean;
  clearSigmas(): void;
  getSigmas(): update_payload | undefined;
  setSigmas(value?: update_payload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): update_ticker.AsObject;
  static toObject(includeInstance: boolean, msg: update_ticker): update_ticker.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: update_ticker, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): update_ticker;
  static deserializeBinaryFromReader(message: update_ticker, reader: jspb.BinaryReader): update_ticker;
}

export namespace update_ticker {
  export type AsObject = {
    subscriptionId?: number,
    updateType?: update_typeMap[keyof update_typeMap],
    service?: string,
    sequence?: number,
    key?: string,
    sigmas?: update_payload.AsObject,
  }
}

export class service_status extends jspb.Message {
  hasService(): boolean;
  clearService(): void;
  getService(): string | undefined;
  setService(value: string): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): svc_statusMap[keyof svc_statusMap] | undefined;
  setStatus(value: svc_statusMap[keyof svc_statusMap]): void;

  hasDetails(): boolean;
  clearDetails(): void;
  getDetails(): string | undefined;
  setDetails(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): service_status.AsObject;
  static toObject(includeInstance: boolean, msg: service_status): service_status.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: service_status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): service_status;
  static deserializeBinaryFromReader(message: service_status, reader: jspb.BinaryReader): service_status;
}

export namespace service_status {
  export type AsObject = {
    service?: string,
    status?: svc_statusMap[keyof svc_statusMap],
    details?: string,
  }
}

export class feed_event extends jspb.Message {
  hasSnapshot(): boolean;
  clearSnapshot(): void;
  getSnapshot(): update_snapshot | undefined;
  setSnapshot(value?: update_snapshot): void;

  hasTicker(): boolean;
  clearTicker(): void;
  getTicker(): update_ticker | undefined;
  setTicker(value?: update_ticker): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): service_status | undefined;
  setStatus(value?: service_status): void;

  getEventTypeCase(): feed_event.EventTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): feed_event.AsObject;
  static toObject(includeInstance: boolean, msg: feed_event): feed_event.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: feed_event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): feed_event;
  static deserializeBinaryFromReader(message: feed_event, reader: jspb.BinaryReader): feed_event;
}

export namespace feed_event {
  export type AsObject = {
    snapshot?: update_snapshot.AsObject,
    ticker?: update_ticker.AsObject,
    status?: service_status.AsObject,
  }

  export enum EventTypeCase {
    EVENT_TYPE_NOT_SET = 0,
    SNAPSHOT = 1,
    TICKER = 2,
    STATUS = 3,
  }
}

export interface side_enumMap {
  NONE: 0;
  BUY: 1;
  SELL: 2;
}

export const side_enum: side_enumMap;

export interface update_typeMap {
  SNAPSHOT: 1;
  VARIATIONS: 2;
}

export const update_type: update_typeMap;

export interface svc_statusMap {
  ONLINE: 0;
  OFFLINE: 1;
  BROKEN: 2;
}

export const svc_status: svc_statusMap;

export interface trading_status_enumMap {
  OPEN_DELAY: 1;
  TRAD_HALT: 2;
  RESUME: 3;
  NO_OPEN: 4;
  PRICE_INDICATION: 5;
  TRAD_RNG_IND: 6;
  MKT_IMB_BUY: 7;
  MKT_IMB_SELL: 8;
  MOC_IMB_BUY: 9;
  MOC_IMB_SELL: 10;
  NOT_ASSIGNED: 11;
  NO_MKT_IMB: 12;
  NO_MOC_IMB: 13;
  ITS_PRE_OP: 14;
  NEW_PRICE_IND: 15;
  TRAD_DISS_TIME: 16;
  TRADING: 17;
  TRADING_HALT: 18;
  NOT_TRADED: 19;
  UNKNOWN: 20;
  SUSPENDED: 99;
}

export const trading_status_enum: trading_status_enumMap;

