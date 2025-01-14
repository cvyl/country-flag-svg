// Adapted from https://github.com/cvyl/country-flag-svg
// Implements dynamic imports for code splitting

const flagMap = {
  AC: () => import('./flags/1f1e6-1f1e8.svg'),
  AD: () => import('./flags/1f1e6-1f1e9.svg'),
  AE: () => import('./flags/1f1e6-1f1ea.svg'),
  AF: () => import('./flags/1f1e6-1f1eb.svg'),
  AG: () => import('./flags/1f1e6-1f1ec.svg'),
  AI: () => import('./flags/1f1e6-1f1ee.svg'),
  AL: () => import('./flags/1f1e6-1f1f1.svg'),
  AM: () => import('./flags/1f1e6-1f1f2.svg'),
  AO: () => import('./flags/1f1e6-1f1f4.svg'),
  AQ: () => import('./flags/1f1e6-1f1f6.svg'),
  AR: () => import('./flags/1f1e6-1f1f7.svg'),
  AS: () => import('./flags/1f1e6-1f1f8.svg'),
  AT: () => import('./flags/1f1e6-1f1f9.svg'),
  AU: () => import('./flags/1f1e6-1f1fa.svg'),
  AW: () => import('./flags/1f1e6-1f1fc.svg'),
  AX: () => import('./flags/1f1e6-1f1fd.svg'),
  AZ: () => import('./flags/1f1e6-1f1ff.svg'),

  BA: () => import('./flags/1f1e7-1f1e6.svg'),
  BB: () => import('./flags/1f1e7-1f1e7.svg'),
  BD: () => import('./flags/1f1e7-1f1e9.svg'),
  BE: () => import('./flags/1f1e7-1f1ea.svg'),
  BF: () => import('./flags/1f1e7-1f1eb.svg'),
  BG: () => import('./flags/1f1e7-1f1ec.svg'),
  BH: () => import('./flags/1f1e7-1f1ed.svg'),
  BI: () => import('./flags/1f1e7-1f1ee.svg'),
  BJ: () => import('./flags/1f1e7-1f1ef.svg'),
  BL: () => import('./flags/1f1e7-1f1f1.svg'),
  BM: () => import('./flags/1f1e7-1f1f2.svg'),
  BN: () => import('./flags/1f1e7-1f1f3.svg'),
  BO: () => import('./flags/1f1e7-1f1f4.svg'),
  BQ: () => import('./flags/1f1e7-1f1f6.svg'),
  BR: () => import('./flags/1f1e7-1f1f7.svg'),
  BS: () => import('./flags/1f1e7-1f1f8.svg'),
  BT: () => import('./flags/1f1e7-1f1f9.svg'),
  BV: () => import('./flags/1f1e7-1f1fb.svg'),
  BW: () => import('./flags/1f1e7-1f1fc.svg'),
  BY: () => import('./flags/1f1e7-1f1fe.svg'),
  BZ: () => import('./flags/1f1e7-1f1ff.svg'),

  CA: () => import('./flags/1f1e8-1f1e6.svg'),
  CC: () => import('./flags/1f1e8-1f1e8.svg'),
  CD: () => import('./flags/1f1e8-1f1e9.svg'),
  CF: () => import('./flags/1f1e8-1f1eb.svg'),
  CG: () => import('./flags/1f1e8-1f1ec.svg'),
  CH: () => import('./flags/1f1e8-1f1ed.svg'),
  CI: () => import('./flags/1f1e8-1f1ee.svg'),
  CK: () => import('./flags/1f1e8-1f1f0.svg'),
  CL: () => import('./flags/1f1e8-1f1f1.svg'),
  CM: () => import('./flags/1f1e8-1f1f2.svg'),
  CN: () => import('./flags/1f1e8-1f1f3.svg'),
  CO: () => import('./flags/1f1e8-1f1f4.svg'),
  CP: () => import('./flags/1f1e8-1f1f5.svg'),
  CR: () => import('./flags/1f1e8-1f1f7.svg'),
  CU: () => import('./flags/1f1e8-1f1fa.svg'),
  CV: () => import('./flags/1f1e8-1f1fb.svg'),
  CW: () => import('./flags/1f1e8-1f1fc.svg'),
  CX: () => import('./flags/1f1e8-1f1fd.svg'),
  CY: () => import('./flags/1f1e8-1f1fe.svg'),
  CZ: () => import('./flags/1f1e8-1f1ff.svg'),

  DE: () => import('./flags/1f1e9-1f1ea.svg'),
  DG: () => import('./flags/1f1e9-1f1ec.svg'),
  DJ: () => import('./flags/1f1e9-1f1ef.svg'),
  DK: () => import('./flags/1f1e9-1f1f0.svg'),
  DM: () => import('./flags/1f1e9-1f1f2.svg'),
  DO: () => import('./flags/1f1e9-1f1f4.svg'),
  DZ: () => import('./flags/1f1e9-1f1ff.svg'),

  EA: () => import('./flags/1f1ea-1f1e6.svg'),
  EC: () => import('./flags/1f1ea-1f1e8.svg'),
  EE: () => import('./flags/1f1ea-1f1ea.svg'),
  EG: () => import('./flags/1f1ea-1f1ec.svg'),
  EH: () => import('./flags/1f1ea-1f1ed.svg'),
  EN: () => import('./flags/1f1ec-1f1e7.svg'), // Alias for GB
  ER: () => import('./flags/1f1ea-1f1f7.svg'),
  ES: () => import('./flags/1f1ea-1f1f8.svg'),
  ET: () => import('./flags/1f1ea-1f1f9.svg'),
  EU: () => import('./flags/1f1ea-1f1fa.svg'),

  FI: () => import('./flags/1f1eb-1f1ee.svg'),
  FK: () => import('./flags/1f1eb-1f1ef.svg'),
  FM: () => import('./flags/1f1eb-1f1f2.svg'),
  FO: () => import('./flags/1f1eb-1f1f4.svg'),
  FR: () => import('./flags/1f1eb-1f1f7.svg'),

  GA: () => import('./flags/1f1ec-1f1e6.svg'),
  GB: () => import('./flags/1f1ec-1f1e7.svg'),
  GD: () => import('./flags/1f1ec-1f1e9.svg'),
  GE: () => import('./flags/1f1ec-1f1ea.svg'),
  GF: () => import('./flags/1f1ec-1f1eb.svg'),
  GG: () => import('./flags/1f1ec-1f1ec.svg'),
  GH: () => import('./flags/1f1ec-1f1ed.svg'),
  GI: () => import('./flags/1f1ec-1f1ee.svg'),
  GL: () => import('./flags/1f1ec-1f1f1.svg'),
  GM: () => import('./flags/1f1ec-1f1f2.svg'),
  GN: () => import('./flags/1f1ec-1f1f3.svg'),
  GP: () => import('./flags/1f1ec-1f1f5.svg'),
  GQ: () => import('./flags/1f1ec-1f1f6.svg'),
  GR: () => import('./flags/1f1ec-1f1f7.svg'),
  GS: () => import('./flags/1f1ec-1f1f8.svg'),
  GT: () => import('./flags/1f1ec-1f1f9.svg'),
  GU: () => import('./flags/1f1ec-1f1fa.svg'),
  GW: () => import('./flags/1f1ec-1f1fc.svg'),
  GY: () => import('./flags/1f1ec-1f1fe.svg'),

  HK: () => import('./flags/1f1ed-1f1f0.svg'),
  HM: () => import('./flags/1f1ed-1f1f2.svg'),
  HN: () => import('./flags/1f1ed-1f1f3.svg'),
  HR: () => import('./flags/1f1ed-1f1f7.svg'),
  HT: () => import('./flags/1f1ed-1f1f9.svg'),
  HU: () => import('./flags/1f1ed-1f1fa.svg'),

  IC: () => import('./flags/1f1ee-1f1e8.svg'),
  ID: () => import('./flags/1f1ee-1f1e9.svg'),
  IE: () => import('./flags/1f1ee-1f1ea.svg'),
  IL: () => import('./flags/1f1ee-1f1f1.svg'),
  IM: () => import('./flags/1f1ee-1f1f2.svg'),
  IN: () => import('./flags/1f1ee-1f1f3.svg'),
  IO: () => import('./flags/1f1ee-1f1f4.svg'),
  IQ: () => import('./flags/1f1ee-1f1f6.svg'),
  IR: () => import('./flags/1f1ee-1f1f7.svg'),
  IS: () => import('./flags/1f1ee-1f1f8.svg'),
  IT: () => import('./flags/1f1ee-1f1f9.svg'),

  JE: () => import('./flags/1f1ef-1f1ea.svg'),
  JM: () => import('./flags/1f1ef-1f1f2.svg'),
  JO: () => import('./flags/1f1ef-1f1f4.svg'),
  JP: () => import('./flags/1f1ef-1f1f5.svg'),

  KE: () => import('./flags/1f1f0-1f1ea.svg'),
  KG: () => import('./flags/1f1f0-1f1ec.svg'),
  KH: () => import('./flags/1f1f0-1f1ed.svg'),
  KI: () => import('./flags/1f1f0-1f1ee.svg'),
  KM: () => import('./flags/1f1f0-1f1f2.svg'),
  KN: () => import('./flags/1f1f0-1f1f3.svg'),
  KP: () => import('./flags/1f1f0-1f1f5.svg'),
  KR: () => import('./flags/1f1f0-1f1f7.svg'),
  KW: () => import('./flags/1f1f0-1f1fc.svg'),
  KY: () => import('./flags/1f1f0-1f1fe.svg'),
  KZ: () => import('./flags/1f1f0-1f1ff.svg'),

  LA: () => import('./flags/1f1f1-1f1e6.svg'),
  LB: () => import('./flags/1f1f1-1f1e7.svg'),
  LC: () => import('./flags/1f1f1-1f1e8.svg'),
  LI: () => import('./flags/1f1f1-1f1ee.svg'),
  LK: () => import('./flags/1f1f1-1f1f0.svg'),
  LR: () => import('./flags/1f1f1-1f1f7.svg'),
  LS: () => import('./flags/1f1f1-1f1f8.svg'),
  LT: () => import('./flags/1f1f1-1f1f9.svg'),
  LU: () => import('./flags/1f1f1-1f1fa.svg'),
  LV: () => import('./flags/1f1f1-1f1fb.svg'),
  LY: () => import('./flags/1f1f1-1f1fe.svg'),

  MA: () => import('./flags/1f1f2-1f1e6.svg'),
  MC: () => import('./flags/1f1f2-1f1e8.svg'),
  MD: () => import('./flags/1f1f2-1f1e9.svg'),
  ME: () => import('./flags/1f1f2-1f1ea.svg'),
  MF: () => import('./flags/1f1f2-1f1eb.svg'),
  MG: () => import('./flags/1f1f2-1f1ec.svg'),
  MH: () => import('./flags/1f1f2-1f1ed.svg'),
  MK: () => import('./flags/1f1f2-1f1f0.svg'),
  ML: () => import('./flags/1f1f2-1f1f1.svg'),
  MM: () => import('./flags/1f1f2-1f1f2.svg'),
  MN: () => import('./flags/1f1f2-1f1f3.svg'),
  MO: () => import('./flags/1f1f2-1f1f4.svg'),
  MP: () => import('./flags/1f1f2-1f1f5.svg'),
  MQ: () => import('./flags/1f1f2-1f1f6.svg'),
  MR: () => import('./flags/1f1f2-1f1f7.svg'),
  MS: () => import('./flags/1f1f2-1f1f8.svg'),
  MT: () => import('./flags/1f1f2-1f1f9.svg'),
  MU: () => import('./flags/1f1f2-1f1fa.svg'),
  MV: () => import('./flags/1f1f2-1f1fb.svg'),
  MW: () => import('./flags/1f1f2-1f1fc.svg'),
  MX: () => import('./flags/1f1f2-1f1fd.svg'),
  MY: () => import('./flags/1f1f2-1f1fe.svg'),
  MZ: () => import('./flags/1f1f2-1f1ff.svg'),

  NA: () => import('./flags/1f1f3-1f1e6.svg'),
  NC: () => import('./flags/1f1f3-1f1e8.svg'),
  NE: () => import('./flags/1f1f3-1f1ea.svg'),
  NF: () => import('./flags/1f1f3-1f1eb.svg'),
  NG: () => import('./flags/1f1f3-1f1ec.svg'),
  NI: () => import('./flags/1f1f3-1f1ee.svg'),
  NL: () => import('./flags/1f1f3-1f1f1.svg'),
  NO: () => import('./flags/1f1f3-1f1f4.svg'),
  NP: () => import('./flags/1f1f3-1f1f5.svg'),
  NR: () => import('./flags/1f1f3-1f1f7.svg'),
  NU: () => import('./flags/1f1f3-1f1fa.svg'),
  NZ: () => import('./flags/1f1f3-1f1ff.svg'),

  OM: () => import('./flags/1f1f4-1f1f2.svg'),

  PA: () => import('./flags/1f1f5-1f1e6.svg'),
  PE: () => import('./flags/1f1f5-1f1ea.svg'),
  PF: () => import('./flags/1f1f5-1f1eb.svg'),
  PG: () => import('./flags/1f1f5-1f1ec.svg'),
  PH: () => import('./flags/1f1f5-1f1ed.svg'),
  PK: () => import('./flags/1f1f5-1f1f0.svg'),
  PL: () => import('./flags/1f1f5-1f1f1.svg'),
  PM: () => import('./flags/1f1f5-1f1f2.svg'),
  PN: () => import('./flags/1f1f5-1f1f3.svg'),
  PR: () => import('./flags/1f1f5-1f1f7.svg'),
  PS: () => import('./flags/1f1f5-1f1f8.svg'),
  PT: () => import('./flags/1f1f5-1f1f9.svg'),
  PW: () => import('./flags/1f1f5-1f1fc.svg'),
  PY: () => import('./flags/1f1f5-1f1fe.svg'),

  QA: () => import('./flags/1f1f6-1f1e6.svg'),

  RE: () => import('./flags/1f1f7-1f1ea.svg'),
  RO: () => import('./flags/1f1f7-1f1f4.svg'),
  RS: () => import('./flags/1f1f7-1f1f8.svg'),
  RU: () => import('./flags/1f1f7-1f1fa.svg'),
  RW: () => import('./flags/1f1f7-1f1fc.svg'),

  SA: () => import('./flags/1f1f8-1f1e6.svg'),
  SB: () => import('./flags/1f1f8-1f1e7.svg'),
  SC: () => import('./flags/1f1f8-1f1e8.svg'),
  SD: () => import('./flags/1f1f8-1f1e9.svg'),
  SE: () => import('./flags/1f1f8-1f1ea.svg'),
  SG: () => import('./flags/1f1f8-1f1ec.svg'),
  SH: () => import('./flags/1f1f8-1f1ed.svg'),
  SI: () => import('./flags/1f1f8-1f1ee.svg'),
  SJ: () => import('./flags/1f1f8-1f1ef.svg'),
  SK: () => import('./flags/1f1f8-1f1f0.svg'),
  SL: () => import('./flags/1f1f8-1f1f1.svg'),
  SM: () => import('./flags/1f1f8-1f1f2.svg'),
  SN: () => import('./flags/1f1f8-1f1f3.svg'),
  SO: () => import('./flags/1f1f8-1f1f4.svg'),
  SR: () => import('./flags/1f1f8-1f1f7.svg'),
  SS: () => import('./flags/1f1f8-1f1f8.svg'),
  ST: () => import('./flags/1f1f8-1f1f9.svg'),
  SV: () => import('./flags/1f1f8-1f1fb.svg'),
  SX: () => import('./flags/1f1f8-1f1fd.svg'),
  SY: () => import('./flags/1f1f8-1f1fe.svg'),
  SZ: () => import('./flags/1f1f8-1f1ff.svg'),

  TA: () => import('./flags/1f1f9-1f1e6.svg'),
  TC: () => import('./flags/1f1f9-1f1e8.svg'),
  TD: () => import('./flags/1f1f9-1f1e9.svg'),
  TF: () => import('./flags/1f1f9-1f1eb.svg'),
  TG: () => import('./flags/1f1f9-1f1ec.svg'),
  TH: () => import('./flags/1f1f9-1f1ed.svg'),
  TJ: () => import('./flags/1f1f9-1f1ef.svg'),
  TK: () => import('./flags/1f1f9-1f1f0.svg'),
  TL: () => import('./flags/1f1f9-1f1f1.svg'),
  TM: () => import('./flags/1f1f9-1f1f2.svg'),
  TN: () => import('./flags/1f1f9-1f1f3.svg'),
  TO: () => import('./flags/1f1f9-1f1f4.svg'),
  TR: () => import('./flags/1f1f9-1f1f7.svg'),
  TT: () => import('./flags/1f1f9-1f1f9.svg'),
  TV: () => import('./flags/1f1f9-1f1fb.svg'),
  TW: () => import('./flags/1f1f9-1f1fc.svg'),
  TZ: () => import('./flags/1f1f9-1f1ff.svg'),

  UA: () => import('./flags/1f1fa-1f1e6.svg'),
  UG: () => import('./flags/1f1fa-1f1ec.svg'),
  UM: () => import('./flags/1f1fa-1f1f2.svg'),
  UN: () => import('./flags/1f1fa-1f1f3.svg'),
  US: () => import('./flags/1f1fa-1f1f8.svg'),
  UY: () => import('./flags/1f1fa-1f1fe.svg'),
  UZ: () => import('./flags/1f1fa-1f1ff.svg'),

  VA: () => import('./flags/1f1fb-1f1e6.svg'),
  VC: () => import('./flags/1f1fb-1f1e8.svg'),
  VE: () => import('./flags/1f1fb-1f1ea.svg'),
  VG: () => import('./flags/1f1fb-1f1ec.svg'),
  VI: () => import('./flags/1f1fb-1f1ee.svg'),
  VN: () => import('./flags/1f1fb-1f1f3.svg'),
  VU: () => import('./flags/1f1fb-1f1fa.svg'),

  WF: () => import('./flags/1f1fc-1f1eb.svg'),
  WS: () => import('./flags/1f1fc-1f1f8.svg'),

  XK: () => import('./flags/1f1fd-1f1f0.svg'),

  YE: () => import('./flags/1f1fe-1f1ea.svg'),
  YT: () => import('./flags/1f1fe-1f1f9.svg'),

  ZA: () => import('./flags/1f1ff-1f1e6.svg'),
  ZM: () => import('./flags/1f1ff-1f1f2.svg'),
  ZW: () => import('./flags/1f1ff-1f1fc.svg'),
};

export default async function getFlagEmoji(locale) {
  const split = locale.toUpperCase().split(/[-_]/);
  let code = split.pop();

  if (!/^[A-Z]{2}$/.test(code)) {
      try {
          code = new Intl.Locale(locale).maximize().region.toUpperCase();
      } catch (e) {
          code = '';
      }
  }

  if (flagMap[code]) {
      const flagModule = await flagMap[code]();
      return 'data:image/svg+xml;base64,' + flagModule.default;
  }

  return '';
}
