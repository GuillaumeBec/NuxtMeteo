// - ALERTS

export enum AlertTypes {
  Error = 'error',
  Confirm = 'confirm',
  Succes = 'success',
  Info = 'info',
}

export interface Alert {
  type: AlertTypes;
  text?: String;
  order: Number;
}

// - AUTH

export interface AuthInfos {
  email: string;
  password: string;
}

export enum UserRole {
  USER,
  RESPONSABLE,
  ADMIN,
}

enum Job {
  ELECTRICIAN,
  SOLAR_PANEL_INSTALLER,
  PARQUETEUR,
  PAINTER,
  VENTILIST,
  TILESETTER,
  CARPENTER,
  HEATING_ENGINEER,
  WATERPROOFING_SPECIALIST,
  ROOFER,
  FACADE,
  MASON,
  WOODWORKER,
  PLATE_MAKER,
  PLASTERER,
  PLUMBER,
  LOCKSMITH,
  SOLIER_MOQUETTIST,
}

export interface User {
  createdAt: string;
  updatedAt: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: String;
  job: [Job];
  role: UserRole;
  firstConnection: Boolean;
  userActivated: Boolean;
}
