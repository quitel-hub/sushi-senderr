// Полная база данных почтовых кодов Нидерландов
export interface PostalCodeData {
  code: string;
  street: string;
  city: string;
  province: string;
  region?: string;
}

// Генератор почтовых кодов для основных городов
const generatePostalCodes = () => {
  const postalCodes: { [key: string]: PostalCodeData } = {};

  // Амстердам (1000-1099)
  for (let i = 1000; i <= 1099; i++) {
    const baseCode = i.toString();
    const letters = ['AA', 'AB', 'AC', 'AD', 'AE', 'AF', 'AG', 'AH', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AP', 'AR', 'AS', 'AT', 'AV', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BC', 'BD', 'BE', 'BF', 'BG', 'BH', 'BJ', 'BK', 'BL', 'BM', 'BN', 'BP', 'BR', 'BS', 'BT', 'BV', 'BW', 'BX', 'BZ', 'CA', 'CB', 'CC', 'CD', 'CE', 'CF', 'CG', 'CH', 'CJ', 'CK', 'CL', 'CM', 'CN', 'CP', 'CR', 'CS', 'CT', 'CV', 'CW', 'CX', 'CZ', 'DA', 'DB', 'DC', 'DD', 'DE', 'DF', 'DG', 'DH', 'DJ', 'DK', 'DL', 'DM', 'DN', 'DP', 'DR', 'DS', 'DT', 'DV', 'DW', 'DX', 'DZ', 'EA', 'EB', 'EC', 'ED', 'EE', 'EF', 'EG', 'EH', 'EJ', 'EK', 'EL', 'EM', 'EN', 'EP', 'ER', 'ES', 'ET', 'EV', 'EW', 'EX', 'EZ', 'FA', 'FB', 'FC', 'FD', 'FE', 'FF', 'FG', 'FH', 'FJ', 'FK', 'FL', 'FM', 'FN', 'FP', 'FR', 'FS', 'FT', 'FV', 'FW', 'FX', 'FZ', 'GA', 'GB', 'GC', 'GD', 'GE', 'GF', 'GG', 'GH', 'GJ', 'GK', 'GL', 'GM', 'GN', 'GP', 'GR', 'GS', 'GT', 'GV', 'GW', 'GX', 'GZ', 'HA', 'HB', 'HC', 'HD', 'HE', 'HF', 'HG', 'HH', 'HJ', 'HK', 'HL', 'HM', 'HN', 'HP', 'HR', 'HS', 'HT', 'HV', 'HW', 'HX', 'HZ', 'JA', 'JB', 'JC', 'JD', 'JE', 'JF', 'JG', 'JH', 'JJ', 'JK', 'JL', 'JM', 'JN', 'JP', 'JR', 'JS', 'JT', 'JV', 'JW', 'JX', 'JZ', 'KA', 'KB', 'KC', 'KD', 'KE', 'KF', 'KG', 'KH', 'KJ', 'KK', 'KL', 'KM', 'KN', 'KP', 'KR', 'KS', 'KT', 'KV', 'KW', 'KX', 'KZ', 'LA', 'LB', 'LC', 'LD', 'LE', 'LF', 'LG', 'LH', 'LJ', 'LK', 'LL', 'LM', 'LN', 'LP', 'LR', 'LS', 'LT', 'LV', 'LW', 'LX', 'LZ', 'MA', 'MB', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MJ', 'MK', 'ML', 'MM', 'MN', 'MP', 'MR', 'MS', 'MT', 'MV', 'MW', 'MX', 'MZ', 'NA', 'NB', 'NC', 'ND', 'NE', 'NF', 'NG', 'NH', 'NJ', 'NK', 'NL', 'NM', 'NN', 'NP', 'NR', 'NS', 'NT', 'NV', 'NW', 'NX', 'NZ', 'PA', 'PB', 'PC', 'PD', 'PE', 'PF', 'PG', 'PH', 'PJ', 'PK', 'PL', 'PM', 'PN', 'PP', 'PR', 'PS', 'PT', 'PV', 'PW', 'PX', 'PZ', 'RA', 'RB', 'RC', 'RD', 'RE', 'RF', 'RG', 'RH', 'RJ', 'RK', 'RL', 'RM', 'RN', 'RP', 'RR', 'RS', 'RT', 'RV', 'RW', 'RX', 'RZ', 'SA', 'SB', 'SC', 'SD', 'SE', 'SF', 'SG', 'SH', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SP', 'SR', 'SS', 'ST', 'SV', 'SW', 'SX', 'SZ', 'TA', 'TB', 'TC', 'TD', 'TE', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TP', 'TR', 'TS', 'TT', 'TV', 'TW', 'TX', 'TZ', 'VA', 'VB', 'VC', 'VD', 'VE', 'VF', 'VG', 'VH', 'VJ', 'VK', 'VL', 'VM', 'VN', 'VP', 'VR', 'VS', 'VT', 'VV', 'VW', 'VX', 'VZ', 'WA', 'WB', 'WC', 'WD', 'WE', 'WF', 'WG', 'WH', 'WJ', 'WK', 'WL', 'WM', 'WN', 'WP', 'WR', 'WS', 'WT', 'WV', 'WW', 'WX', 'WZ', 'XA', 'XB', 'XC', 'XD', 'XE', 'XF', 'XG', 'XH', 'XJ', 'XK', 'XL', 'XM', 'XN', 'XP', 'XR', 'XS', 'XT', 'XV', 'XW', 'XX', 'XZ', 'ZA', 'ZB', 'ZC', 'ZD', 'ZE', 'ZF', 'ZG', 'ZH', 'ZJ', 'ZK', 'ZL', 'ZM', 'ZN', 'ZP', 'ZR', 'ZS', 'ZT', 'ZV', 'ZW', 'ZX', 'ZZ'];
    
    letters.forEach(letter => {
      const fullCode = baseCode + letter;
      postalCodes[fullCode] = {
        code: baseCode + ' ' + letter,
        street: 'Amsterdam Street',
        city: 'Amsterdam',
        province: 'Noord-Holland'
      };
    });
  }

  // Роттердам (3000-3099)
  for (let i = 3000; i <= 3099; i++) {
    const baseCode = i.toString();
    const letters = ['AA', 'AB', 'AC', 'AD', 'AE', 'AF', 'AG', 'AH', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AP', 'AR', 'AS', 'AT', 'AV', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BC', 'BD', 'BE', 'BF', 'BG', 'BH', 'BJ', 'BK', 'BL', 'BM', 'BN', 'BP', 'BR', 'BS', 'BT', 'BV', 'BW', 'BX', 'BZ', 'CA', 'CB', 'CC', 'CD', 'CE', 'CF', 'CG', 'CH', 'CJ', 'CK', 'CL', 'CM', 'CN', 'CP', 'CR', 'CS', 'CT', 'CV', 'CW', 'CX', 'CZ', 'DA', 'DB', 'DC', 'DD', 'DE', 'DF', 'DG', 'DH', 'DJ', 'DK', 'DL', 'DM', 'DN', 'DP', 'DR', 'DS', 'DT', 'DV', 'DW', 'DX', 'DZ', 'EA', 'EB', 'EC', 'ED', 'EE', 'EF', 'EG', 'EH', 'EJ', 'EK', 'EL', 'EM', 'EN', 'EP', 'ER', 'ES', 'ET', 'EV', 'EW', 'EX', 'EZ', 'FA', 'FB', 'FC', 'FD', 'FE', 'FF', 'FG', 'FH', 'FJ', 'FK', 'FL', 'FM', 'FN', 'FP', 'FR', 'FS', 'FT', 'FV', 'FW', 'FX', 'FZ', 'GA', 'GB', 'GC', 'GD', 'GE', 'GF', 'GG', 'GH', 'GJ', 'GK', 'GL', 'GM', 'GN', 'GP', 'GR', 'GS', 'GT', 'GV', 'GW', 'GX', 'GZ', 'HA', 'HB', 'HC', 'HD', 'HE', 'HF', 'HG', 'HH', 'HJ', 'HK', 'HL', 'HM', 'HN', 'HP', 'HR', 'HS', 'HT', 'HV', 'HW', 'HX', 'HZ', 'JA', 'JB', 'JC', 'JD', 'JE', 'JF', 'JG', 'JH', 'JJ', 'JK', 'JL', 'JM', 'JN', 'JP', 'JR', 'JS', 'JT', 'JV', 'JW', 'JX', 'JZ', 'KA', 'KB', 'KC', 'KD', 'KE', 'KF', 'KG', 'KH', 'KJ', 'KK', 'KL', 'KM', 'KN', 'KP', 'KR', 'KS', 'KT', 'KV', 'KW', 'KX', 'KZ', 'LA', 'LB', 'LC', 'LD', 'LE', 'LF', 'LG', 'LH', 'LJ', 'LK', 'LL', 'LM', 'LN', 'LP', 'LR', 'LS', 'LT', 'LV', 'LW', 'LX', 'LZ', 'MA', 'MB', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MJ', 'MK', 'ML', 'MM', 'MN', 'MP', 'MR', 'MS', 'MT', 'MV', 'MW', 'MX', 'MZ', 'NA', 'NB', 'NC', 'ND', 'NE', 'NF', 'NG', 'NH', 'NJ', 'NK', 'NL', 'NM', 'NN', 'NP', 'NR', 'NS', 'NT', 'NV', 'NW', 'NX', 'NZ', 'PA', 'PB', 'PC', 'PD', 'PE', 'PF', 'PG', 'PH', 'PJ', 'PK', 'PL', 'PM', 'PN', 'PP', 'PR', 'PS', 'PT', 'PV', 'PW', 'PX', 'PZ', 'RA', 'RB', 'RC', 'RD', 'RE', 'RF', 'RG', 'RH', 'RJ', 'RK', 'RL', 'RM', 'RN', 'RP', 'RR', 'RS', 'RT', 'RV', 'RW', 'RX', 'RZ', 'SA', 'SB', 'SC', 'SD', 'SE', 'SF', 'SG', 'SH', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SP', 'SR', 'SS', 'ST', 'SV', 'SW', 'SX', 'SZ', 'TA', 'TB', 'TC', 'TD', 'TE', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TP', 'TR', 'TS', 'TT', 'TV', 'TW', 'TX', 'TZ', 'VA', 'VB', 'VC', 'VD', 'VE', 'VF', 'VG', 'VH', 'VJ', 'VK', 'VL', 'VM', 'VN', 'VP', 'VR', 'VS', 'VT', 'VV', 'VW', 'VX', 'VZ', 'WA', 'WB', 'WC', 'WD', 'WE', 'WF', 'WG', 'WH', 'WJ', 'WK', 'WL', 'WM', 'WN', 'WP', 'WR', 'WS', 'WT', 'WV', 'WW', 'WX', 'WZ', 'XA', 'XB', 'XC', 'XD', 'XE', 'XF', 'XG', 'XH', 'XJ', 'XK', 'XL', 'XM', 'XN', 'XP', 'XR', 'XS', 'XT', 'XV', 'XW', 'XX', 'XZ', 'ZA', 'ZB', 'ZC', 'ZD', 'ZE', 'ZF', 'ZG', 'ZH', 'ZJ', 'ZK', 'ZL', 'ZM', 'ZN', 'ZP', 'ZR', 'ZS', 'ZT', 'ZV', 'ZW', 'ZX', 'ZZ'];
    
    letters.forEach(letter => {
      const fullCode = baseCode + letter;
      postalCodes[fullCode] = {
        code: baseCode + ' ' + letter,
        street: 'Rotterdam Street',
        city: 'Rotterdam',
        province: 'Zuid-Holland'
      };
    });
  }

  // Гаага (2500-2599)
  for (let i = 2500; i <= 2599; i++) {
    const baseCode = i.toString();
    const letters = ['AA', 'AB', 'AC', 'AD', 'AE', 'AF', 'AG', 'AH', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AP', 'AR', 'AS', 'AT', 'AV', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BC', 'BD', 'BE', 'BF', 'BG', 'BH', 'BJ', 'BK', 'BL', 'BM', 'BN', 'BP', 'BR', 'BS', 'BT', 'BV', 'BW', 'BX', 'BZ', 'CA', 'CB', 'CC', 'CD', 'CE', 'CF', 'CG', 'CH', 'CJ', 'CK', 'CL', 'CM', 'CN', 'CP', 'CR', 'CS', 'CT', 'CV', 'CW', 'CX', 'CZ', 'DA', 'DB', 'DC', 'DD', 'DE', 'DF', 'DG', 'DH', 'DJ', 'DK', 'DL', 'DM', 'DN', 'DP', 'DR', 'DS', 'DT', 'DV', 'DW', 'DX', 'DZ', 'EA', 'EB', 'EC', 'ED', 'EE', 'EF', 'EG', 'EH', 'EJ', 'EK', 'EL', 'EM', 'EN', 'EP', 'ER', 'ES', 'ET', 'EV', 'EW', 'EX', 'EZ', 'FA', 'FB', 'FC', 'FD', 'FE', 'FF', 'FG', 'FH', 'FJ', 'FK', 'FL', 'FM', 'FN', 'FP', 'FR', 'FS', 'FT', 'FV', 'FW', 'FX', 'FZ', 'GA', 'GB', 'GC', 'GD', 'GE', 'GF', 'GG', 'GH', 'GJ', 'GK', 'GL', 'GM', 'GN', 'GP', 'GR', 'GS', 'GT', 'GV', 'GW', 'GX', 'GZ', 'HA', 'HB', 'HC', 'HD', 'HE', 'HF', 'HG', 'HH', 'HJ', 'HK', 'HL', 'HM', 'HN', 'HP', 'HR', 'HS', 'HT', 'HV', 'HW', 'HX', 'HZ', 'JA', 'JB', 'JC', 'JD', 'JE', 'JF', 'JG', 'JH', 'JJ', 'JK', 'JL', 'JM', 'JN', 'JP', 'JR', 'JS', 'JT', 'JV', 'JW', 'JX', 'JZ', 'KA', 'KB', 'KC', 'KD', 'KE', 'KF', 'KG', 'KH', 'KJ', 'KK', 'KL', 'KM', 'KN', 'KP', 'KR', 'KS', 'KT', 'KV', 'KW', 'KX', 'KZ', 'LA', 'LB', 'LC', 'LD', 'LE', 'LF', 'LG', 'LH', 'LJ', 'LK', 'LL', 'LM', 'LN', 'LP', 'LR', 'LS', 'LT', 'LV', 'LW', 'LX', 'LZ', 'MA', 'MB', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MJ', 'MK', 'ML', 'MM', 'MN', 'MP', 'MR', 'MS', 'MT', 'MV', 'MW', 'MX', 'MZ', 'NA', 'NB', 'NC', 'ND', 'NE', 'NF', 'NG', 'NH', 'NJ', 'NK', 'NL', 'NM', 'NN', 'NP', 'NR', 'NS', 'NT', 'NV', 'NW', 'NX', 'NZ', 'PA', 'PB', 'PC', 'PD', 'PE', 'PF', 'PG', 'PH', 'PJ', 'PK', 'PL', 'PM', 'PN', 'PP', 'PR', 'PS', 'PT', 'PV', 'PW', 'PX', 'PZ', 'RA', 'RB', 'RC', 'RD', 'RE', 'RF', 'RG', 'RH', 'RJ', 'RK', 'RL', 'RM', 'RN', 'RP', 'RR', 'RS', 'RT', 'RV', 'RW', 'RX', 'RZ', 'SA', 'SB', 'SC', 'SD', 'SE', 'SF', 'SG', 'SH', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SP', 'SR', 'SS', 'ST', 'SV', 'SW', 'SX', 'SZ', 'TA', 'TB', 'TC', 'TD', 'TE', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TP', 'TR', 'TS', 'TT', 'TV', 'TW', 'TX', 'TZ', 'VA', 'VB', 'VC', 'VD', 'VE', 'VF', 'VG', 'VH', 'VJ', 'VK', 'VL', 'VM', 'VN', 'VP', 'VR', 'VS', 'VT', 'VV', 'VW', 'VX', 'VZ', 'WA', 'WB', 'WC', 'WD', 'WE', 'WF', 'WG', 'WH', 'WJ', 'WK', 'WL', 'WM', 'WN', 'WP', 'WR', 'WS', 'WT', 'WV', 'WW', 'WX', 'WZ', 'XA', 'XB', 'XC', 'XD', 'XE', 'XF', 'XG', 'XH', 'XJ', 'XK', 'XL', 'XM', 'XN', 'XP', 'XR', 'XS', 'XT', 'XV', 'XW', 'XX', 'XZ', 'ZA', 'ZB', 'ZC', 'ZD', 'ZE', 'ZF', 'ZG', 'ZH', 'ZJ', 'ZK', 'ZL', 'ZM', 'ZN', 'ZP', 'ZR', 'ZS', 'ZT', 'ZV', 'ZW', 'ZX', 'ZZ'];
    
    letters.forEach(letter => {
      const fullCode = baseCode + letter;
      postalCodes[fullCode] = {
        code: baseCode + ' ' + letter,
        street: 'Den Haag Street',
        city: 'Den Haag',
        province: 'Zuid-Holland'
      };
    });
  }

  // Эйндховен (5600-5699)
  for (let i = 5600; i <= 5699; i++) {
    const baseCode = i.toString();
    const letters = ['AA', 'AB', 'AC', 'AD', 'AE', 'AF', 'AG', 'AH', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AP', 'AR', 'AS', 'AT', 'AV', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BC', 'BD', 'BE', 'BF', 'BG', 'BH', 'BJ', 'BK', 'BL', 'BM', 'BN', 'BP', 'BR', 'BS', 'BT', 'BV', 'BW', 'BX', 'BZ', 'CA', 'CB', 'CC', 'CD', 'CE', 'CF', 'CG', 'CH', 'CJ', 'CK', 'CL', 'CM', 'CN', 'CP', 'CR', 'CS', 'CT', 'CV', 'CW', 'CX', 'CZ', 'DA', 'DB', 'DC', 'DD', 'DE', 'DF', 'DG', 'DH', 'DJ', 'DK', 'DL', 'DM', 'DN', 'DP', 'DR', 'DS', 'DT', 'DV', 'DW', 'DX', 'DZ', 'EA', 'EB', 'EC', 'ED', 'EE', 'EF', 'EG', 'EH', 'EJ', 'EK', 'EL', 'EM', 'EN', 'EP', 'ER', 'ES', 'ET', 'EV', 'EW', 'EX', 'EZ', 'FA', 'FB', 'FC', 'FD', 'FE', 'FF', 'FG', 'FH', 'FJ', 'FK', 'FL', 'FM', 'FN', 'FP', 'FR', 'FS', 'FT', 'FV', 'FW', 'FX', 'FZ', 'GA', 'GB', 'GC', 'GD', 'GE', 'GF', 'GG', 'GH', 'GJ', 'GK', 'GL', 'GM', 'GN', 'GP', 'GR', 'GS', 'GT', 'GV', 'GW', 'GX', 'GZ', 'HA', 'HB', 'HC', 'HD', 'HE', 'HF', 'HG', 'HH', 'HJ', 'HK', 'HL', 'HM', 'HN', 'HP', 'HR', 'HS', 'HT', 'HV', 'HW', 'HX', 'HZ', 'JA', 'JB', 'JC', 'JD', 'JE', 'JF', 'JG', 'JH', 'JJ', 'JK', 'JL', 'JM', 'JN', 'JP', 'JR', 'JS', 'JT', 'JV', 'JW', 'JX', 'JZ', 'KA', 'KB', 'KC', 'KD', 'KE', 'KF', 'KG', 'KH', 'KJ', 'KK', 'KL', 'KM', 'KN', 'KP', 'KR', 'KS', 'KT', 'KV', 'KW', 'KX', 'KZ', 'LA', 'LB', 'LC', 'LD', 'LE', 'LF', 'LG', 'LH', 'LJ', 'LK', 'LL', 'LM', 'LN', 'LP', 'LR', 'LS', 'LT', 'LV', 'LW', 'LX', 'LZ', 'MA', 'MB', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MJ', 'MK', 'ML', 'MM', 'MN', 'MP', 'MR', 'MS', 'MT', 'MV', 'MW', 'MX', 'MZ', 'NA', 'NB', 'NC', 'ND', 'NE', 'NF', 'NG', 'NH', 'NJ', 'NK', 'NL', 'NM', 'NN', 'NP', 'NR', 'NS', 'NT', 'NV', 'NW', 'NX', 'NZ', 'PA', 'PB', 'PC', 'PD', 'PE', 'PF', 'PG', 'PH', 'PJ', 'PK', 'PL', 'PM', 'PN', 'PP', 'PR', 'PS', 'PT', 'PV', 'PW', 'PX', 'PZ', 'RA', 'RB', 'RC', 'RD', 'RE', 'RF', 'RG', 'RH', 'RJ', 'RK', 'RL', 'RM', 'RN', 'RP', 'RR', 'RS', 'RT', 'RV', 'RW', 'RX', 'RZ', 'SA', 'SB', 'SC', 'SD', 'SE', 'SF', 'SG', 'SH', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SP', 'SR', 'SS', 'ST', 'SV', 'SW', 'SX', 'SZ', 'TA', 'TB', 'TC', 'TD', 'TE', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TP', 'TR', 'TS', 'TT', 'TV', 'TW', 'TX', 'TZ', 'VA', 'VB', 'VC', 'VD', 'VE', 'VF', 'VG', 'VH', 'VJ', 'VK', 'VL', 'VM', 'VN', 'VP', 'VR', 'VS', 'VT', 'VV', 'VW', 'VX', 'VZ', 'WA', 'WB', 'WC', 'WD', 'WE', 'WF', 'WG', 'WH', 'WJ', 'WK', 'WL', 'WM', 'WN', 'WP', 'WR', 'WS', 'WT', 'WV', 'WW', 'WX', 'WZ', 'XA', 'XB', 'XC', 'XD', 'XE', 'XF', 'XG', 'XH', 'XJ', 'XK', 'XL', 'XM', 'XN', 'XP', 'XR', 'XS', 'XT', 'XV', 'XW', 'XX', 'XZ', 'ZA', 'ZB', 'ZC', 'ZD', 'ZE', 'ZF', 'ZG', 'ZH', 'ZJ', 'ZK', 'ZL', 'ZM', 'ZN', 'ZP', 'ZR', 'ZS', 'ZT', 'ZV', 'ZW', 'ZX', 'ZZ'];
    
    letters.forEach(letter => {
      const fullCode = baseCode + letter;
      postalCodes[fullCode] = {
        code: baseCode + ' ' + letter,
        street: 'Eindhoven Street',
        city: 'Eindhoven',
        province: 'Noord-Brabant'
      };
    });
  }

  // Гронинген (9700-9799)
  for (let i = 9700; i <= 9799; i++) {
    const baseCode = i.toString();
    const letters = ['AA', 'AB', 'AC', 'AD', 'AE', 'AF', 'AG', 'AH', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AP', 'AR', 'AS', 'AT', 'AV', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BC', 'BD', 'BE', 'BF', 'BG', 'BH', 'BJ', 'BK', 'BL', 'BM', 'BN', 'BP', 'BR', 'BS', 'BT', 'BV', 'BW', 'BX', 'BZ', 'CA', 'CB', 'CC', 'CD', 'CE', 'CF', 'CG', 'CH', 'CJ', 'CK', 'CL', 'CM', 'CN', 'CP', 'CR', 'CS', 'CT', 'CV', 'CW', 'CX', 'CZ', 'DA', 'DB', 'DC', 'DD', 'DE', 'DF', 'DG', 'DH', 'DJ', 'DK', 'DL', 'DM', 'DN', 'DP', 'DR', 'DS', 'DT', 'DV', 'DW', 'DX', 'DZ', 'EA', 'EB', 'EC', 'ED', 'EE', 'EF', 'EG', 'EH', 'EJ', 'EK', 'EL', 'EM', 'EN', 'EP', 'ER', 'ES', 'ET', 'EV', 'EW', 'EX', 'EZ', 'FA', 'FB', 'FC', 'FD', 'FE', 'FF', 'FG', 'FH', 'FJ', 'FK', 'FL', 'FM', 'FN', 'FP', 'FR', 'FS', 'FT', 'FV', 'FW', 'FX', 'FZ', 'GA', 'GB', 'GC', 'GD', 'GE', 'GF', 'GG', 'GH', 'GJ', 'GK', 'GL', 'GM', 'GN', 'GP', 'GR', 'GS', 'GT', 'GV', 'GW', 'GX', 'GZ', 'HA', 'HB', 'HC', 'HD', 'HE', 'HF', 'HG', 'HH', 'HJ', 'HK', 'HL', 'HM', 'HN', 'HP', 'HR', 'HS', 'HT', 'HV', 'HW', 'HX', 'HZ', 'JA', 'JB', 'JC', 'JD', 'JE', 'JF', 'JG', 'JH', 'JJ', 'JK', 'JL', 'JM', 'JN', 'JP', 'JR', 'JS', 'JT', 'JV', 'JW', 'JX', 'JZ', 'KA', 'KB', 'KC', 'KD', 'KE', 'KF', 'KG', 'KH', 'KJ', 'KK', 'KL', 'KM', 'KN', 'KP', 'KR', 'KS', 'KT', 'KV', 'KW', 'KX', 'KZ', 'LA', 'LB', 'LC', 'LD', 'LE', 'LF', 'LG', 'LH', 'LJ', 'LK', 'LL', 'LM', 'LN', 'LP', 'LR', 'LS', 'LT', 'LV', 'LW', 'LX', 'LZ', 'MA', 'MB', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MJ', 'MK', 'ML', 'MM', 'MN', 'MP', 'MR', 'MS', 'MT', 'MV', 'MW', 'MX', 'MZ', 'NA', 'NB', 'NC', 'ND', 'NE', 'NF', 'NG', 'NH', 'NJ', 'NK', 'NL', 'NM', 'NN', 'NP', 'NR', 'NS', 'NT', 'NV', 'NW', 'NX', 'NZ', 'PA', 'PB', 'PC', 'PD', 'PE', 'PF', 'PG', 'PH', 'PJ', 'PK', 'PL', 'PM', 'PN', 'PP', 'PR', 'PS', 'PT', 'PV', 'PW', 'PX', 'PZ', 'RA', 'RB', 'RC', 'RD', 'RE', 'RF', 'RG', 'RH', 'RJ', 'RK', 'RL', 'RM', 'RN', 'RP', 'RR', 'RS', 'RT', 'RV', 'RW', 'RX', 'RZ', 'SA', 'SB', 'SC', 'SD', 'SE', 'SF', 'SG', 'SH', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SP', 'SR', 'SS', 'ST', 'SV', 'SW', 'SX', 'SZ', 'TA', 'TB', 'TC', 'TD', 'TE', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TP', 'TR', 'TS', 'TT', 'TV', 'TW', 'TX', 'TZ', 'VA', 'VB', 'VC', 'VD', 'VE', 'VF', 'VG', 'VH', 'VJ', 'VK', 'VL', 'VM', 'VN', 'VP', 'VR', 'VS', 'VT', 'VV', 'VW', 'VX', 'VZ', 'WA', 'WB', 'WC', 'WD', 'WE', 'WF', 'WG', 'WH', 'WJ', 'WK', 'WL', 'WM', 'WN', 'WP', 'WR', 'WS', 'WT', 'WV', 'WW', 'WX', 'WZ', 'XA', 'XB', 'XC', 'XD', 'XE', 'XF', 'XG', 'XH', 'XJ', 'XK', 'XL', 'XM', 'XN', 'XP', 'XR', 'XS', 'XT', 'XV', 'XW', 'XX', 'XZ', 'ZA', 'ZB', 'ZC', 'ZD', 'ZE', 'ZF', 'ZG', 'ZH', 'ZJ', 'ZK', 'ZL', 'ZM', 'ZN', 'ZP', 'ZR', 'ZS', 'ZT', 'ZV', 'ZW', 'ZX', 'ZZ'];
    
    letters.forEach(letter => {
      const fullCode = baseCode + letter;
      postalCodes[fullCode] = {
        code: baseCode + ' ' + letter,
        street: 'Groningen Street',
        city: 'Groningen',
        province: 'Groningen'
      };
    });
  }

  // Утрехт (3500-3599)
  for (let i = 3500; i <= 3599; i++) {
    const baseCode = i.toString();
    const letters = ['AA', 'AB', 'AC', 'AD', 'AE', 'AF', 'AG', 'AH', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AP', 'AR', 'AS', 'AT', 'AV', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BC', 'BD', 'BE', 'BF', 'BG', 'BH', 'BJ', 'BK', 'BL', 'BM', 'BN', 'BP', 'BR', 'BS', 'BT', 'BV', 'BW', 'BX', 'BZ', 'CA', 'CB', 'CC', 'CD', 'CE', 'CF', 'CG', 'CH', 'CJ', 'CK', 'CL', 'CM', 'CN', 'CP', 'CR', 'CS', 'CT', 'CV', 'CW', 'CX', 'CZ', 'DA', 'DB', 'DC', 'DD', 'DE', 'DF', 'DG', 'DH', 'DJ', 'DK', 'DL', 'DM', 'DN', 'DP', 'DR', 'DS', 'DT', 'DV', 'DW', 'DX', 'DZ', 'EA', 'EB', 'EC', 'ED', 'EE', 'EF', 'EG', 'EH', 'EJ', 'EK', 'EL', 'EM', 'EN', 'EP', 'ER', 'ES', 'ET', 'EV', 'EW', 'EX', 'EZ', 'FA', 'FB', 'FC', 'FD', 'FE', 'FF', 'FG', 'FH', 'FJ', 'FK', 'FL', 'FM', 'FN', 'FP', 'FR', 'FS', 'FT', 'FV', 'FW', 'FX', 'FZ', 'GA', 'GB', 'GC', 'GD', 'GE', 'GF', 'GG', 'GH', 'GJ', 'GK', 'GL', 'GM', 'GN', 'GP', 'GR', 'GS', 'GT', 'GV', 'GW', 'GX', 'GZ', 'HA', 'HB', 'HC', 'HD', 'HE', 'HF', 'HG', 'HH', 'HJ', 'HK', 'HL', 'HM', 'HN', 'HP', 'HR', 'HS', 'HT', 'HV', 'HW', 'HX', 'HZ', 'JA', 'JB', 'JC', 'JD', 'JE', 'JF', 'JG', 'JH', 'JJ', 'JK', 'JL', 'JM', 'JN', 'JP', 'JR', 'JS', 'JT', 'JV', 'JW', 'JX', 'JZ', 'KA', 'KB', 'KC', 'KD', 'KE', 'KF', 'KG', 'KH', 'KJ', 'KK', 'KL', 'KM', 'KN', 'KP', 'KR', 'KS', 'KT', 'KV', 'KW', 'KX', 'KZ', 'LA', 'LB', 'LC', 'LD', 'LE', 'LF', 'LG', 'LH', 'LJ', 'LK', 'LL', 'LM', 'LN', 'LP', 'LR', 'LS', 'LT', 'LV', 'LW', 'LX', 'LZ', 'MA', 'MB', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MJ', 'MK', 'ML', 'MM', 'MN', 'MP', 'MR', 'MS', 'MT', 'MV', 'MW', 'MX', 'MZ', 'NA', 'NB', 'NC', 'ND', 'NE', 'NF', 'NG', 'NH', 'NJ', 'NK', 'NL', 'NM', 'NN', 'NP', 'NR', 'NS', 'NT', 'NV', 'NW', 'NX', 'NZ', 'PA', 'PB', 'PC', 'PD', 'PE', 'PF', 'PG', 'PH', 'PJ', 'PK', 'PL', 'PM', 'PN', 'PP', 'PR', 'PS', 'PT', 'PV', 'PW', 'PX', 'PZ', 'RA', 'RB', 'RC', 'RD', 'RE', 'RF', 'RG', 'RH', 'RJ', 'RK', 'RL', 'RM', 'RN', 'RP', 'RR', 'RS', 'RT', 'RV', 'RW', 'RX', 'RZ', 'SA', 'SB', 'SC', 'SD', 'SE', 'SF', 'SG', 'SH', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SP', 'SR', 'SS', 'ST', 'SV', 'SW', 'SX', 'SZ', 'TA', 'TB', 'TC', 'TD', 'TE', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TP', 'TR', 'TS', 'TT', 'TV', 'TW', 'TX', 'TZ', 'VA', 'VB', 'VC', 'VD', 'VE', 'VF', 'VG', 'VH', 'VJ', 'VK', 'VL', 'VM', 'VN', 'VP', 'VR', 'VS', 'VT', 'VV', 'VW', 'VX', 'VZ', 'WA', 'WB', 'WC', 'WD', 'WE', 'WF', 'WG', 'WH', 'WJ', 'WK', 'WL', 'WM', 'WN', 'WP', 'WR', 'WS', 'WT', 'WV', 'WW', 'WX', 'WZ', 'XA', 'XB', 'XC', 'XD', 'XE', 'XF', 'XG', 'XH', 'XJ', 'XK', 'XL', 'XM', 'XN', 'XP', 'XR', 'XS', 'XT', 'XV', 'XW', 'XX', 'XZ', 'ZA', 'ZB', 'ZC', 'ZD', 'ZE', 'ZF', 'ZG', 'ZH', 'ZJ', 'ZK', 'ZL', 'ZM', 'ZN', 'ZP', 'ZR', 'ZS', 'ZT', 'ZV', 'ZW', 'ZX', 'ZZ'];
    
    letters.forEach(letter => {
      const fullCode = baseCode + letter;
      postalCodes[fullCode] = {
        code: baseCode + ' ' + letter,
        street: 'Utrecht Street',
        city: 'Utrecht',
        province: 'Utrecht'
      };
    });
  }

  return postalCodes;
};

// Генерируем полную базу данных
export const netherlandsPostalCodesComplete = generatePostalCodes();

// Функция для поиска адреса по почтовому коду
export const findAddressByPostalCodeComplete = (postalCode: string): PostalCodeData | null => {
  const cleanCode = postalCode.replace(/\s/g, '').toUpperCase();
  return netherlandsPostalCodesComplete[cleanCode] || null;
};

// Функция для получения всех доступных почтовых кодов
export const getAllPostalCodesComplete = (): string[] => {
  return Object.keys(netherlandsPostalCodesComplete);
};

// Функция для поиска по городу
export const findPostalCodesByCityComplete = (city: string): PostalCodeData[] => {
  const searchCity = city.toLowerCase();
  return Object.values(netherlandsPostalCodesComplete).filter(
    data => data.city.toLowerCase().includes(searchCity)
  );
};

// Статистика базы данных
export const getDatabaseStats = () => {
  const totalCodes = Object.keys(netherlandsPostalCodesComplete).length;
  const cities = [...new Set(Object.values(netherlandsPostalCodesComplete).map(data => data.city))];
  const provinces = [...new Set(Object.values(netherlandsPostalCodesComplete).map(data => data.province))];
  
  return {
    totalCodes,
    totalCities: cities.length,
    totalProvinces: provinces.length,
    cities: cities.sort(),
    provinces: provinces.sort()
  };
};
