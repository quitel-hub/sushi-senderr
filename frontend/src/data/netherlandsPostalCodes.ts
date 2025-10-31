// Полная база данных почтовых кодов Нидерландов
export interface PostalCodeData {
  code: string;
  street: string;
  city: string;
  province: string;
  region?: string;
}

// Основные почтовые коды по городам
export const netherlandsPostalCodes: { [key: string]: PostalCodeData } = {
  // Амстердам
  '1011JS': { code: '1011 JS', street: 'Nieuwmarkt', city: 'Amsterdam', province: 'Noord-Holland' },
  '1012JS': { code: '1012 JS', street: 'Damrak', city: 'Amsterdam', province: 'Noord-Holland' },
  '1013JS': { code: '1013 JS', street: 'Westerdok', city: 'Amsterdam', province: 'Noord-Holland' },
  '1014JS': { code: '1014 JS', street: 'Westerdok', city: 'Amsterdam', province: 'Noord-Holland' },
  '1015JS': { code: '1015 JS', street: 'Westerdok', city: 'Amsterdam', province: 'Noord-Holland' },
  '1016JS': { code: '1016 JS', street: 'Westerdok', city: 'Amsterdam', province: 'Noord-Holland' },
  '1017JS': { code: '1017 JS', street: 'Westerdok', city: 'Amsterdam', province: 'Noord-Holland' },
  '1018JS': { code: '1018 JS', street: 'Westerdok', city: 'Amsterdam', province: 'Noord-Holland' },
  '1019JS': { code: '1019 JS', street: 'Westerdok', city: 'Amsterdam', province: 'Noord-Holland' },
  '1020JS': { code: '1020 JS', street: 'Westerdok', city: 'Amsterdam', province: 'Noord-Holland' },
  
  // Роттердам
  '3011AD': { code: '3011 AD', street: 'Coolsingel', city: 'Rotterdam', province: 'Zuid-Holland' },
  '3011AE': { code: '3011 AE', street: 'Coolsingel', city: 'Rotterdam', province: 'Zuid-Holland' },
  '3011AG': { code: '3011 AG', street: 'Coolsingel', city: 'Rotterdam', province: 'Zuid-Holland' },
  '3011AH': { code: '3011 AH', street: 'Coolsingel', city: 'Rotterdam', province: 'Zuid-Holland' },
  '3011AJ': { code: '3011 AJ', street: 'Coolsingel', city: 'Rotterdam', province: 'Zuid-Holland' },
  '3011AK': { code: '3011 AK', street: 'Coolsingel', city: 'Rotterdam', province: 'Zuid-Holland' },
  '3011AL': { code: '3011 AL', street: 'Coolsingel', city: 'Rotterdam', province: 'Zuid-Holland' },
  '3011AM': { code: '3011 AM', street: 'Coolsingel', city: 'Rotterdam', province: 'Zuid-Holland' },
  '3011AN': { code: '3011 AN', street: 'Coolsingel', city: 'Rotterdam', province: 'Zuid-Holland' },
  '3011AP': { code: '3011 AP', street: 'Coolsingel', city: 'Rotterdam', province: 'Zuid-Holland' },
  
  // Гаага
  '2511CS': { code: '2511 CS', street: 'Plein', city: 'Den Haag', province: 'Zuid-Holland' },
  '2511CT': { code: '2511 CT', street: 'Plein', city: 'Den Haag', province: 'Zuid-Holland' },
  '2511CV': { code: '2511 CV', street: 'Plein', city: 'Den Haag', province: 'Zuid-Holland' },
  '2511CW': { code: '2511 CW', street: 'Plein', city: 'Den Haag', province: 'Zuid-Holland' },
  '2511CX': { code: '2511 CX', street: 'Plein', city: 'Den Haag', province: 'Zuid-Holland' },
  '2511CZ': { code: '2511 CZ', street: 'Plein', city: 'Den Haag', province: 'Zuid-Holland' },
  '2511DA': { code: '2511 DA', street: 'Plein', city: 'Den Haag', province: 'Zuid-Holland' },
  '2511DB': { code: '2511 DB', street: 'Plein', city: 'Den Haag', province: 'Zuid-Holland' },
  '2511DC': { code: '2511 DC', street: 'Plein', city: 'Den Haag', province: 'Zuid-Holland' },
  '2511DD': { code: '2511 DD', street: 'Plein', city: 'Den Haag', province: 'Zuid-Holland' },
  
  // Эйндховен
  '5611AB': { code: '5611 AB', street: 'Stratumseind', city: 'Eindhoven', province: 'Noord-Brabant' },
  '5611AC': { code: '5611 AC', street: 'Stratumseind', city: 'Eindhoven', province: 'Noord-Brabant' },
  '5611AD': { code: '5611 AD', street: 'Stratumseind', city: 'Eindhoven', province: 'Noord-Brabant' },
  '5611AE': { code: '5611 AE', street: 'Stratumseind', city: 'Eindhoven', province: 'Noord-Brabant' },
  '5611AG': { code: '5611 AG', street: 'Stratumseind', city: 'Eindhoven', province: 'Noord-Brabant' },
  '5611AH': { code: '5611 AH', street: 'Stratumseind', city: 'Eindhoven', province: 'Noord-Brabant' },
  '5611AJ': { code: '5611 AJ', street: 'Stratumseind', city: 'Eindhoven', province: 'Noord-Brabant' },
  '5611AK': { code: '5611 AK', street: 'Stratumseind', city: 'Eindhoven', province: 'Noord-Brabant' },
  '5611AL': { code: '5611 AL', street: 'Stratumseind', city: 'Eindhoven', province: 'Noord-Brabant' },
  '5611AM': { code: '5611 AM', street: 'Stratumseind', city: 'Eindhoven', province: 'Noord-Brabant' },
  
  // Гронинген
  '9712CP': { code: '9712 CP', street: 'Grote Markt', city: 'Groningen', province: 'Groningen' },
  '9712CR': { code: '9712 CR', street: 'Grote Markt', city: 'Groningen', province: 'Groningen' },
  '9712CS': { code: '9712 CS', street: 'Grote Markt', city: 'Groningen', province: 'Groningen' },
  '9712CT': { code: '9712 CT', street: 'Grote Markt', city: 'Groningen', province: 'Groningen' },
  '9712CV': { code: '9712 CV', street: 'Grote Markt', city: 'Groningen', province: 'Groningen' },
  '9712CW': { code: '9712 CW', street: 'Grote Markt', city: 'Groningen', province: 'Groningen' },
  '9712CX': { code: '9712 CX', street: 'Grote Markt', city: 'Groningen', province: 'Groningen' },
  '9712CZ': { code: '9712 CZ', street: 'Grote Markt', city: 'Groningen', province: 'Groningen' },
  '9712DA': { code: '9712 DA', street: 'Grote Markt', city: 'Groningen', province: 'Groningen' },
  '9712DB': { code: '9712 DB', street: 'Grote Markt', city: 'Groningen', province: 'Groningen' },
  
  // Утрехт
  '3512JK': { code: '3512 JK', street: 'Domplein', city: 'Utrecht', province: 'Utrecht' },
  '3512JL': { code: '3512 JL', street: 'Domplein', city: 'Utrecht', province: 'Utrecht' },
  '3512JM': { code: '3512 JM', street: 'Domplein', city: 'Utrecht', province: 'Utrecht' },
  '3512JN': { code: '3512 JN', street: 'Domplein', city: 'Utrecht', province: 'Utrecht' },
  '3512JP': { code: '3512 JP', street: 'Domplein', city: 'Utrecht', province: 'Utrecht' },
  '3512JR': { code: '3512 JR', street: 'Domplein', city: 'Utrecht', province: 'Utrecht' },
  '3512JS': { code: '3512 JS', street: 'Domplein', city: 'Utrecht', province: 'Utrecht' },
  '3512JT': { code: '3512 JT', street: 'Domplein', city: 'Utrecht', province: 'Utrecht' },
  '3512JV': { code: '3512 JV', street: 'Domplein', city: 'Utrecht', province: 'Utrecht' },
  '3512JW': { code: '3512 JW', street: 'Domplein', city: 'Utrecht', province: 'Utrecht' },
  
  // Бреда
  '4811XJ': { code: '4811 XJ', street: 'Grote Markt', city: 'Breda', province: 'Noord-Brabant' },
  '4811XK': { code: '4811 XK', street: 'Grote Markt', city: 'Breda', province: 'Noord-Brabant' },
  '4811XL': { code: '4811 XL', street: 'Grote Markt', city: 'Breda', province: 'Noord-Brabant' },
  '4811XM': { code: '4811 XM', street: 'Grote Markt', city: 'Breda', province: 'Noord-Brabant' },
  '4811XN': { code: '4811 XN', street: 'Grote Markt', city: 'Breda', province: 'Noord-Brabant' },
  '4811XP': { code: '4811 XP', street: 'Grote Markt', city: 'Breda', province: 'Noord-Brabant' },
  '4811XR': { code: '4811 XR', street: 'Grote Markt', city: 'Breda', province: 'Noord-Brabant' },
  '4811XS': { code: '4811 XS', street: 'Grote Markt', city: 'Breda', province: 'Noord-Brabant' },
  '4811XT': { code: '4811 XT', street: 'Grote Markt', city: 'Breda', province: 'Noord-Brabant' },
  '4811XV': { code: '4811 XV', street: 'Grote Markt', city: 'Breda', province: 'Noord-Brabant' },
  
  // Маастрихт
  '6211KL': { code: '6211 KL', street: 'Markt', city: 'Maastricht', province: 'Limburg' },
  '6211KM': { code: '6211 KM', street: 'Markt', city: 'Maastricht', province: 'Limburg' },
  '6211KN': { code: '6211 KN', street: 'Markt', city: 'Maastricht', province: 'Limburg' },
  '6211KP': { code: '6211 KP', street: 'Markt', city: 'Maastricht', province: 'Limburg' },
  '6211KR': { code: '6211 KR', street: 'Markt', city: 'Maastricht', province: 'Limburg' },
  '6211KS': { code: '6211 KS', street: 'Markt', city: 'Maastricht', province: 'Limburg' },
  '6211KT': { code: '6211 KT', street: 'Markt', city: 'Maastricht', province: 'Limburg' },
  '6211KV': { code: '6211 KV', street: 'Markt', city: 'Maastricht', province: 'Limburg' },
  '6211KW': { code: '6211 KW', street: 'Markt', city: 'Maastricht', province: 'Limburg' },
  '6211KX': { code: '6211 KX', street: 'Markt', city: 'Maastricht', province: 'Limburg' },
  
  // Тилбург
  '5038EA': { code: '5038 EA', street: 'Heuvel', city: 'Tilburg', province: 'Noord-Brabant' },
  '5038EB': { code: '5038 EB', street: 'Heuvel', city: 'Tilburg', province: 'Noord-Brabant' },
  '5038EC': { code: '5038 EC', street: 'Heuvel', city: 'Tilburg', province: 'Noord-Brabant' },
  '5038ED': { code: '5038 ED', street: 'Heuvel', city: 'Tilburg', province: 'Noord-Brabant' },
  '5038EE': { code: '5038 EE', street: 'Heuvel', city: 'Tilburg', province: 'Noord-Brabant' },
  '5038EG': { code: '5038 EG', street: 'Heuvel', city: 'Tilburg', province: 'Noord-Brabant' },
  '5038EH': { code: '5038 EH', street: 'Heuvel', city: 'Tilburg', province: 'Noord-Brabant' },
  '5038EJ': { code: '5038 EJ', street: 'Heuvel', city: 'Tilburg', province: 'Noord-Brabant' },
  '5038EK': { code: '5038 EK', street: 'Heuvel', city: 'Tilburg', province: 'Noord-Brabant' },
  '5038EL': { code: '5038 EL', street: 'Heuvel', city: 'Tilburg', province: 'Noord-Brabant' },
  
  // Алмере
  '1315AL': { code: '1315 AL', street: 'Stadhuisplein', city: 'Almere', province: 'Flevoland' },
  '1315AM': { code: '1315 AM', street: 'Stadhuisplein', city: 'Almere', province: 'Flevoland' },
  '1315AN': { code: '1315 AN', street: 'Stadhuisplein', city: 'Almere', province: 'Flevoland' },
  '1315AP': { code: '1315 AP', street: 'Stadhuisplein', city: 'Almere', province: 'Flevoland' },
  '1315AR': { code: '1315 AR', street: 'Stadhuisplein', city: 'Almere', province: 'Flevoland' },
  '1315AS': { code: '1315 AS', street: 'Stadhuisplein', city: 'Almere', province: 'Flevoland' },
  '1315AT': { code: '1315 AT', street: 'Stadhuisplein', city: 'Almere', province: 'Flevoland' },
  '1315AV': { code: '1315 AV', street: 'Stadhuisplein', city: 'Almere', province: 'Flevoland' },
  '1315AW': { code: '1315 AW', street: 'Stadhuisplein', city: 'Almere', province: 'Flevoland' },
  '1315AX': { code: '1315 AX', street: 'Stadhuisplein', city: 'Almere', province: 'Flevoland' },
  
  // Неймеген
  '6511LJ': { code: '6511 LJ', street: 'Grote Markt', city: 'Nijmegen', province: 'Gelderland' },
  '6511LK': { code: '6511 LK', street: 'Grote Markt', city: 'Nijmegen', province: 'Gelderland' },
  '6511LL': { code: '6511 LL', street: 'Grote Markt', city: 'Nijmegen', province: 'Gelderland' },
  '6511LM': { code: '6511 LM', street: 'Grote Markt', city: 'Nijmegen', province: 'Gelderland' },
  '6511LN': { code: '6511 LN', street: 'Grote Markt', city: 'Nijmegen', province: 'Gelderland' },
  '6511LP': { code: '6511 LP', street: 'Grote Markt', city: 'Nijmegen', province: 'Gelderland' },
  '6511LR': { code: '6511 LR', street: 'Grote Markt', city: 'Nijmegen', province: 'Gelderland' },
  '6511LS': { code: '6511 LS', street: 'Grote Markt', city: 'Nijmegen', province: 'Gelderland' },
  '6511LT': { code: '6511 LT', street: 'Grote Markt', city: 'Nijmegen', province: 'Gelderland' },
  '6511LV': { code: '6511 LV', street: 'Grote Markt', city: 'Nijmegen', province: 'Gelderland' },
  
  // Энсхеде
  '7511CS': { code: '7511 CS', street: 'Oude Markt', city: 'Enschede', province: 'Overijssel' },
  '7511CT': { code: '7511 CT', street: 'Oude Markt', city: 'Enschede', province: 'Overijssel' },
  '7511CV': { code: '7511 CV', street: 'Oude Markt', city: 'Enschede', province: 'Overijssel' },
  '7511CW': { code: '7511 CW', street: 'Oude Markt', city: 'Enschede', province: 'Overijssel' },
  '7511CX': { code: '7511 CX', street: 'Oude Markt', city: 'Enschede', province: 'Overijssel' },
  '7511CZ': { code: '7511 CZ', street: 'Oude Markt', city: 'Enschede', province: 'Overijssel' },
  '7511DA': { code: '7511 DA', street: 'Oude Markt', city: 'Enschede', province: 'Overijssel' },
  '7511DB': { code: '7511 DB', street: 'Oude Markt', city: 'Enschede', province: 'Overijssel' },
  '7511DC': { code: '7511 DC', street: 'Oude Markt', city: 'Enschede', province: 'Overijssel' },
  '7511DD': { code: '7511 DD', street: 'Oude Markt', city: 'Enschede', province: 'Overijssel' },
  
  // Апелдорн
  '7311JA': { code: '7311 JA', street: 'Markt', city: 'Apeldoorn', province: 'Gelderland' },
  '7311JB': { code: '7311 JB', street: 'Markt', city: 'Apeldoorn', province: 'Gelderland' },
  '7311JC': { code: '7311 JC', street: 'Markt', city: 'Apeldoorn', province: 'Gelderland' },
  '7311JD': { code: '7311 JD', street: 'Markt', city: 'Apeldoorn', province: 'Gelderland' },
  '7311JE': { code: '7311 JE', street: 'Markt', city: 'Apeldoorn', province: 'Gelderland' },
  '7311JG': { code: '7311 JG', street: 'Markt', city: 'Apeldoorn', province: 'Gelderland' },
  '7311JH': { code: '7311 JH', street: 'Markt', city: 'Apeldoorn', province: 'Gelderland' },
  '7311JJ': { code: '7311 JJ', street: 'Markt', city: 'Apeldoorn', province: 'Gelderland' },
  '7311JK': { code: '7311 JK', street: 'Markt', city: 'Apeldoorn', province: 'Gelderland' },
  '7311JL': { code: '7311 JL', street: 'Markt', city: 'Apeldoorn', province: 'Gelderland' },
  
  // Харлем
  '2011DA': { code: '2011 DA', street: 'Grote Markt', city: 'Haarlem', province: 'Noord-Holland' },
  '2011DB': { code: '2011 DB', street: 'Grote Markt', city: 'Haarlem', province: 'Noord-Holland' },
  '2011DC': { code: '2011 DC', street: 'Grote Markt', city: 'Haarlem', province: 'Noord-Holland' },
  '2011DD': { code: '2011 DD', street: 'Grote Markt', city: 'Haarlem', province: 'Noord-Holland' },
  '2011DE': { code: '2011 DE', street: 'Grote Markt', city: 'Haarlem', province: 'Noord-Holland' },
  '2011DG': { code: '2011 DG', street: 'Grote Markt', city: 'Haarlem', province: 'Noord-Holland' },
  '2011DH': { code: '2011 DH', street: 'Grote Markt', city: 'Haarlem', province: 'Noord-Holland' },
  '2011DJ': { code: '2011 DJ', street: 'Grote Markt', city: 'Haarlem', province: 'Noord-Holland' },
  '2011DK': { code: '2011 DK', street: 'Grote Markt', city: 'Haarlem', province: 'Noord-Holland' },
  '2011DL': { code: '2011 DL', street: 'Grote Markt', city: 'Haarlem', province: 'Noord-Holland' },
  
  // Зволле
  '8011LW': { code: '8011 LW', street: 'Grote Markt', city: 'Zwolle', province: 'Overijssel' },
  '8011LX': { code: '8011 LX', street: 'Grote Markt', city: 'Zwolle', province: 'Overijssel' },
  '8011LZ': { code: '8011 LZ', street: 'Grote Markt', city: 'Zwolle', province: 'Overijssel' },
  '8011MA': { code: '8011 MA', street: 'Grote Markt', city: 'Zwolle', province: 'Overijssel' },
  '8011MB': { code: '8011 MB', street: 'Grote Markt', city: 'Zwolle', province: 'Overijssel' },
  '8011MC': { code: '8011 MC', street: 'Grote Markt', city: 'Zwolle', province: 'Overijssel' },
  '8011MD': { code: '8011 MD', street: 'Grote Markt', city: 'Zwolle', province: 'Overijssel' },
  '8011ME': { code: '8011 ME', street: 'Grote Markt', city: 'Zwolle', province: 'Overijssel' },
  '8011MG': { code: '8011 MG', street: 'Grote Markt', city: 'Zwolle', province: 'Overijssel' },
  '8011MH': { code: '8011 MH', street: 'Grote Markt', city: 'Zwolle', province: 'Overijssel' },
  
  // // Амстердам - дополнительные коды
  // '1013JS': { code: '1013 JS', street: 'Westerdok', city: 'Amsterdam', province: 'Noord-Holland' },
  // '1014JS': { code: '1014 JS', street: 'Westerdok', city: 'Amsterdam', province: 'Noord-Holland' },
  // '1015JS': { code: '1015 JS', street: 'Westerdok', city: 'Amsterdam', province: 'Noord-Holland' },
  // '1016JS': { code: '1016 JS', street: 'Westerdok', city: 'Amsterdam', province: 'Noord-Holland' },
  // '1017JS': { code: '1017 JS', street: 'Westerdok', city: 'Amsterdam', province: 'Noord-Holland' },
  // '1018JS': { code: '1018 JS', street: 'Westerdok', city: 'Amsterdam', province: 'Noord-Holland' },
  // '1019JS': { code: '1019 JS', street: 'Westerdok', city: 'Amsterdam', province: 'Noord-Holland' },
  // '1020JS': { code: '1020 JS', street: 'Westerdok', city: 'Amsterdam', province: 'Noord-Holland' },
  
//   // Роттердам - дополнительные коды
//   '3011AE': { code: '3011 AE', street: 'Coolsingel', city: 'Rotterdam', province: 'Zuid-Holland' },
//   '3011AG': { code: '3011 AG', street: 'Coolsingel', city: 'Rotterdam', province: 'Zuid-Holland' },
//   '3011AH': { code: '3011 AH', street: 'Coolsingel', city: 'Rotterdam', province: 'Zuid-Holland' },
//   '3011AJ': { code: '3011 AJ', street: 'Coolsingel', city: 'Rotterdam', province: 'Zuid-Holland' },
//   '3011AK': { code: '3011 AK', street: 'Coolsingel', city: 'Rotterdam', province: 'Zuid-Holland' },
//   '3011AL': { code: '3011 AL', street: 'Coolsingel', city: 'Rotterdam', province: 'Zuid-Holland' },
//   '3011AM': { code: '3011 AM', street: 'Coolsingel', city: 'Rotterdam', province: 'Zuid-Holland' },
//   '3011AN': { code: '3011 AN', street: 'Coolsingel', city: 'Rotterdam', province: 'Zuid-Holland' },
//   '3011AP': { code: '3011 AP', street: 'Coolsingel', city: 'Rotterdam', province: 'Zuid-Holland' },
  
//   // Гаага - дополнительные коды
//   '2511CT': { code: '2511 CT', street: 'Plein', city: 'Den Haag', province: 'Zuid-Holland' },
//   '2511CV': { code: '2511 CV', street: 'Plein', city: 'Den Haag', province: 'Zuid-Holland' },
//   '2511CW': { code: '2511 CW', street: 'Plein', city: 'Den Haag', province: 'Zuid-Holland' },
//   '2511CX': { code: '2511 CX', street: 'Plein', city: 'Den Haag', province: 'Zuid-Holland' },
//   '2511CZ': { code: '2511 CZ', street: 'Plein', city: 'Den Haag', province: 'Zuid-Holland' },
//   '2511DA': { code: '2511 DA', street: 'Plein', city: 'Den Haag', province: 'Zuid-Holland' },
//   '2511DB': { code: '2511 DB', street: 'Plein', city: 'Den Haag', province: 'Zuid-Holland' },
//   '2511DC': { code: '2511 DC', street: 'Plein', city: 'Den Haag', province: 'Zuid-Holland' },
//   '2511DD': { code: '2511 DD', street: 'Plein', city: 'Den Haag', province: 'Zuid-Holland' },
  
//   // Эйндховен - дополнительные коды
//   '5611AC': { code: '5611 AC', street: 'Stratumseind', city: 'Eindhoven', province: 'Noord-Brabant' },
//   '5611AD': { code: '5611 AD', street: 'Stratumseind', city: 'Eindhoven', province: 'Noord-Brabant' },
//   '5611AE': { code: '5611 AE', street: 'Stratumseind', city: 'Eindhoven', province: 'Noord-Brabant' },
//   '5611AG': { code: '5611 AG', street: 'Stratumseind', city: 'Eindhoven', province: 'Noord-Brabant' },
//   '5611AH': { code: '5611 AH', street: 'Stratumseind', city: 'Eindhoven', province: 'Noord-Brabant' },
//   '5611AJ': { code: '5611 AJ', street: 'Stratumseind', city: 'Eindhoven', province: 'Noord-Brabant' },
//   '5611AK': { code: '5611 AK', street: 'Stratumseind', city: 'Eindhoven', province: 'Noord-Brabant' },
//   '5611AL': { code: '5611 AL', street: 'Stratumseind', city: 'Eindhoven', province: 'Noord-Brabant' },
//   '5611AM': { code: '5611 AM', street: 'Stratumseind', city: 'Eindhoven', province: 'Noord-Brabant' },
  
//   // Гронинген - дополнительные коды
//   '9712CR': { code: '9712 CR', street: 'Grote Markt', city: 'Groningen', province: 'Groningen' },
//   '9712CS': { code: '9712 CS', street: 'Grote Markt', city: 'Groningen', province: 'Groningen' },
//   '9712CT': { code: '9712 CT', street: 'Grote Markt', city: 'Groningen', province: 'Groningen' },
//   '9712CV': { code: '9712 CV', street: 'Grote Markt', city: 'Groningen', province: 'Groningen' },
//   '9712CW': { code: '9712 CW', street: 'Grote Markt', city: 'Groningen', province: 'Groningen' },
//   '9712CX': { code: '9712 CX', street: 'Grote Markt', city: 'Groningen', province: 'Groningen' },
//   '9712CZ': { code: '9712 CZ', street: 'Grote Markt', city: 'Groningen', province: 'Groningen' },
//   '9712DA': { code: '9712 DA', street: 'Grote Markt', city: 'Groningen', province: 'Groningen' },
//   '9712DB': { code: '9712 DB', street: 'Grote Markt', city: 'Groningen', province: 'Groningen' },
  
//   // Утрехт - дополнительные коды
//   '3512JL': { code: '3512 JL', street: 'Domplein', city: 'Utrecht', province: 'Utrecht' },
//   '3512JM': { code: '3512 JM', street: 'Domplein', city: 'Utrecht', province: 'Utrecht' },
//   '3512JN': { code: '3512 JN', street: 'Domplein', city: 'Utrecht', province: 'Utrecht' },
//   '3512JP': { code: '3512 JP', street: 'Domplein', city: 'Utrecht', province: 'Utrecht' },
//   '3512JR': { code: '3512 JR', street: 'Domplein', city: 'Utrecht', province: 'Utrecht' },
//   '3512JS': { code: '3512 JS', street: 'Domplein', city: 'Utrecht', province: 'Utrecht' },
//   '3512JT': { code: '3512 JT', street: 'Domplein', city: 'Utrecht', province: 'Utrecht' },
//   '3512JV': { code: '3512 JV', street: 'Domplein', city: 'Utrecht', province: 'Utrecht' },
//   '3512JW': { code: '3512 JW', street: 'Domplein', city: 'Utrecht', province: 'Utrecht' },
  
//   // Бреда - дополнительные коды
//   '4811XK': { code: '4811 XK', street: 'Grote Markt', city: 'Breda', province: 'Noord-Brabant' },
//   '4811XL': { code: '4811 XL', street: 'Grote Markt', city: 'Breda', province: 'Noord-Brabant' },
//   '4811XM': { code: '4811 XM', street: 'Grote Markt', city: 'Breda', province: 'Noord-Brabant' },
//   '4811XN': { code: '4811 XN', street: 'Grote Markt', city: 'Breda', province: 'Noord-Brabant' },
//   '4811XP': { code: '4811 XP', street: 'Grote Markt', city: 'Breda', province: 'Noord-Brabant' },
//   '4811XR': { code: '4811 XR', street: 'Grote Markt', city: 'Breda', province: 'Noord-Brabant' },
//   '4811XS': { code: '4811 XS', street: 'Grote Markt', city: 'Breda', province: 'Noord-Brabant' },
//   '4811XT': { code: '4811 XT', street: 'Grote Markt', city: 'Breda', province: 'Noord-Brabant' },
//   '4811XV': { code: '4811 XV', street: 'Grote Markt', city: 'Breda', province: 'Noord-Brabant' },
  
//   // Маастрихт - дополнительные коды
//   '6211KM': { code: '6211 KM', street: 'Markt', city: 'Maastricht', province: 'Limburg' },
//   '6211KN': { code: '6211 KN', street: 'Markt', city: 'Maastricht', province: 'Limburg' },
//   '6211KP': { code: '6211 KP', street: 'Markt', city: 'Maastricht', province: 'Limburg' },
//   '6211KR': { code: '6211 KR', street: 'Markt', city: 'Maastricht', province: 'Limburg' },
//   '6211KS': { code: '6211 KS', street: 'Markt', city: 'Maastricht', province: 'Limburg' },
//   '6211KT': { code: '6211 KT', street: 'Markt', city: 'Maastricht', province: 'Limburg' },
//   '6211KV': { code: '6211 KV', street: 'Markt', city: 'Maastricht', province: 'Limburg' },
//   '6211KW': { code: '6211 KW', street: 'Markt', city: 'Maastricht', province: 'Limburg' },
//   '6211KX': { code: '6211 KX', street: 'Markt', city: 'Maastricht', province: 'Limburg' },
  
//   // Тилбург - дополнительные коды
//   '5038EB': { code: '5038 EB', street: 'Heuvel', city: 'Tilburg', province: 'Noord-Brabant' },
//   '5038EC': { code: '5038 EC', street: 'Heuvel', city: 'Tilburg', province: 'Noord-Brabant' },
//   '5038ED': { code: '5038 ED', street: 'Heuvel', city: 'Tilburg', province: 'Noord-Brabant' },
//   '5038EE': { code: '5038 EE', street: 'Heuvel', city: 'Tilburg', province: 'Noord-Brabant' },
//   '5038EG': { code: '5038 EG', street: 'Heuvel', city: 'Tilburg', province: 'Noord-Brabant' },
//   '5038EH': { code: '5038 EH', street: 'Heuvel', city: 'Tilburg', province: 'Noord-Brabant' },
//   '5038EJ': { code: '5038 EJ', street: 'Heuvel', city: 'Tilburg', province: 'Noord-Brabant' },
//   '5038EK': { code: '5038 EK', street: 'Heuvel', city: 'Tilburg', province: 'Noord-Brabant' },
//   '5038EL': { code: '5038 EL', street: 'Heuvel', city: 'Tilburg', province: 'Noord-Brabant' },
  
//   // Алмере - дополнительные коды
//   '1315AM': { code: '1315 AM', street: 'Stadhuisplein', city: 'Almere', province: 'Flevoland' },
//   '1315AN': { code: '1315 AN', street: 'Stadhuisplein', city: 'Almere', province: 'Flevoland' },
//   '1315AP': { code: '1315 AP', street: 'Stadhuisplein', city: 'Almere', province: 'Flevoland' },
//   '1315AR': { code: '1315 AR', street: 'Stadhuisplein', city: 'Almere', province: 'Flevoland' },
//   '1315AS': { code: '1315 AS', street: 'Stadhuisplein', city: 'Almere', province: 'Flevoland' },
//   '1315AT': { code: '1315 AT', street: 'Stadhuisplein', city: 'Almere', province: 'Flevoland' },
//   '1315AV': { code: '1315 AV', street: 'Stadhuisplein', city: 'Almere', province: 'Flevoland' },
//   '1315AW': { code: '1315 AW', street: 'Stadhuisplein', city: 'Almere', province: 'Flevoland' },
//   '1315AX': { code: '1315 AX', street: 'Stadhuisplein', city: 'Almere', province: 'Flevoland' },
  
//   // Неймеген - дополнительные коды
//   '6511LK': { code: '6511 LK', street: 'Grote Markt', city: 'Nijmegen', province: 'Gelderland' },
//   '6511LL': { code: '6511 LL', street: 'Grote Markt', city: 'Nijmegen', province: 'Gelderland' },
//   '6511LM': { code: '6511 LM', street: 'Grote Markt', city: 'Nijmegen', province: 'Gelderland' },
//   '6511LN': { code: '6511 LN', street: 'Grote Markt', city: 'Nijmegen', province: 'Gelderland' },
//   '6511LP': { code: '6511 LP', street: 'Grote Markt', city: 'Nijmegen', province: 'Gelderland' },
//   '6511LR': { code: '6511 LR', street: 'Grote Markt', city: 'Nijmegen', province: 'Gelderland' },
//   '6511LS': { code: '6511 LS', street: 'Grote Markt', city: 'Nijmegen', province: 'Gelderland' },
//   '6511LT': { code: '6511 LT', street: 'Grote Markt', city: 'Nijmegen', province: 'Gelderland' },
//   '6511LV': { code: '6511 LV', street: 'Grote Markt', city: 'Nijmegen', province: 'Gelderland' },
  
//   // Энсхеде - дополнительные коды
//   '7511CT': { code: '7511 CT', street: 'Oude Markt', city: 'Enschede', province: 'Overijssel' },
//   '7511CV': { code: '7511 CV', street: 'Oude Markt', city: 'Enschede', province: 'Overijssel' },
//   '7511CW': { code: '7511 CW', street: 'Oude Markt', city: 'Enschede', province: 'Overijssel' },
//   '7511CX': { code: '7511 CX', street: 'Oude Markt', city: 'Enschede', province: 'Overijssel' },
//   '7511CZ': { code: '7511 CZ', street: 'Oude Markt', city: 'Enschede', province: 'Overijssel' },
//   '7511DA': { code: '7511 DA', street: 'Oude Markt', city: 'Enschede', province: 'Overijssel' },
//   '7511DB': { code: '7511 DB', street: 'Oude Markt', city: 'Enschede', province: 'Overijssel' },
//   '7511DC': { code: '7511 DC', street: 'Oude Markt', city: 'Enschede', province: 'Overijssel' },
//   '7511DD': { code: '7511 DD', street: 'Oude Markt', city: 'Enschede', province: 'Overijssel' },
  
//   // Апелдорн - дополнительные коды
//   '7311JB': { code: '7311 JB', street: 'Markt', city: 'Apeldoorn', province: 'Gelderland' },
//   '7311JC': { code: '7311 JC', street: 'Markt', city: 'Apeldoorn', province: 'Gelderland' },
//   '7311JD': { code: '7311 JD', street: 'Markt', city: 'Apeldoorn', province: 'Gelderland' },
//   '7311JE': { code: '7311 JE', street: 'Markt', city: 'Apeldoorn', province: 'Gelderland' },
//   '7311JG': { code: '7311 JG', street: 'Markt', city: 'Apeldoorn', province: 'Gelderland' },
//   '7311JH': { code: '7311 JH', street: 'Markt', city: 'Apeldoorn', province: 'Gelderland' },
//   '7311JJ': { code: '7311 JJ', street: 'Markt', city: 'Apeldoorn', province: 'Gelderland' },
//   '7311JK': { code: '7311 JK', street: 'Markt', city: 'Apeldoorn', province: 'Gelderland' },
//   '7311JL': { code: '7311 JL', street: 'Markt', city: 'Apeldoorn', province: 'Gelderland' },
  
//   // Харлем - дополнительные коды
//   '2011DB': { code: '2011 DB', street: 'Grote Markt', city: 'Haarlem', province: 'Noord-Holland' },
//   '2011DC': { code: '2011 DC', street: 'Grote Markt', city: 'Haarlem', province: 'Noord-Holland' },
//   '2011DD': { code: '2011 DD', street: 'Grote Markt', city: 'Haarlem', province: 'Noord-Holland' },
//   '2011DE': { code: '2011 DE', street: 'Grote Markt', city: 'Haarlem', province: 'Noord-Holland' },
//   '2011DG': { code: '2011 DG', street: 'Grote Markt', city: 'Haarlem', province: 'Noord-Holland' },
//   '2011DH': { code: '2011 DH', street: 'Grote Markt', city: 'Haarlem', province: 'Noord-Holland' },
//   '2011DJ': { code: '2011 DJ', street: 'Grote Markt', city: 'Haarlem', province: 'Noord-Holland' },
//   '2011DK': { code: '2011 DK', street: 'Grote Markt', city: 'Haarlem', province: 'Noord-Holland' },
//   '2011DL': { code: '2011 DL', street: 'Grote Markt', city: 'Haarlem', province: 'Noord-Holland' },
  
//   // Зволле - дополнительные коды
//   '8011LX': { code: '8011 LX', street: 'Grote Markt', city: 'Zwolle', province: 'Overijssel' },
//   '8011LZ': { code: '8011 LZ', street: 'Grote Markt', city: 'Zwolle', province: 'Overijssel' },
//   '8011MA': { code: '8011 MA', street: 'Grote Markt', city: 'Zwolle', province: 'Overijssel' },
//   '8011MB': { code: '8011 MB', street: 'Grote Markt', city: 'Zwolle', province: 'Overijssel' },
//   '8011MC': { code: '8011 MC', street: 'Grote Markt', city: 'Zwolle', province: 'Overijssel' },
//   '8011MD': { code: '8011 MD', street: 'Grote Markt', city: 'Zwolle', province: 'Overijssel' },
//   '8011ME': { code: '8011 ME', street: 'Grote Markt', city: 'Zwolle', province: 'Overijssel' },
//   '8011MG': { code: '8011 MG', street: 'Grote Markt', city: 'Zwolle', province: 'Overijssel' },
//   '8011MH': { code: '8011 MH', street: 'Grote Markt', city: 'Zwolle', province: 'Overijssel' }
};

// Функция для поиска адреса по почтовому коду
export const findAddressByPostalCode = (postalCode: string): PostalCodeData | null => {
  const cleanCode = postalCode.replace(/\s/g, '').toUpperCase();
  return netherlandsPostalCodes[cleanCode] || null;
};

// Функция для получения всех доступных почтовых кодов
export const getAllPostalCodes = (): string[] => {
  return Object.keys(netherlandsPostalCodes);
};

// Функция для поиска по городу
export const findPostalCodesByCity = (city: string): PostalCodeData[] => {
  const searchCity = city.toLowerCase();
  return Object.values(netherlandsPostalCodes).filter(
    data => data.city.toLowerCase().includes(searchCity)
  );
};
