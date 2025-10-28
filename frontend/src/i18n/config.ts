import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import de from "./locales/de.json";
import nl from "./locales/nl.json";
import da from "./locales/da.json";
import pl from "./locales/pl.json";
import ru from "./locales/ru.json";
import fr from "./locales/fr.json";
import es from "./locales/es.json";
import it from "./locales/it.json";
import pt from "./locales/pt.json";
import sv from "./locales/sv.json";
import no from "./locales/no.json";
import fi from "./locales/fi.json";
import cs from "./locales/cs.json";
import hu from "./locales/hu.json";
import el from "./locales/el.json";
import uk from "./locales/uk.json";
import bg from "./locales/bg.json";
import ro from "./locales/ro.json";
import hr from "./locales/hr.json";
import sk from "./locales/sk.json";
import sl from "./locales/sl.json";
import lt from "./locales/lt.json";
import lv from "./locales/lv.json";
import et from "./locales/et.json";
import mt from "./locales/mt.json";
import is from "./locales/is.json";
import ga from "./locales/ga.json";
import cy from "./locales/cy.json";
import ca from "./locales/ca.json";
import bs from "./locales/bs.json";
import sq from "./locales/sq.json";
import mk from "./locales/mk.json";
import sr from "./locales/sr.json";
import me from "./locales/me.json";
import lb from "./locales/lb.json";
import fo from "./locales/fo.json";
import tr from "./locales/tr.json";
import be from "./locales/be.json";
import enUs from "./locales/en-us.json";
import frCa from "./locales/fr-ca.json";
import ptBr from "./locales/pt-br.json";
import esMx from "./locales/es-mx.json";
import esAr from "./locales/es-ar.json";
import zh from "./locales/zh.json";
import ja from "./locales/ja.json";
import ko from "./locales/ko.json";
import vi from "./locales/vi.json";
import th from "./locales/th.json";
import id from "./locales/id.json";
import ms from "./locales/ms.json";
import hi from "./locales/hi.json";
import ur from "./locales/ur.json";
import fa from "./locales/fa.json";
import ar from "./locales/ar.json";
import ka from "./locales/ka.json";
import hy from "./locales/hy.json";
import kk from "./locales/kk.json";
import uz from "./locales/uz.json";
import az from "./locales/az.json";
import tk from "./locales/tk.json";
import ky from "./locales/ky.json";
import arEg from "./locales/ar-eg.json";
import am from "./locales/am.json";
import so from "./locales/so.json";
import arMa from "./locales/ar-ma.json";
import arDz from "./locales/ar-dz.json";
import af from "./locales/af.json";
import enAu from "./locales/en-au.json";
import enNz from "./locales/en-nz.json";
import mi from "./locales/mi.json";

const resources = {
  en: { translation: en },
  de: { translation: de },
  nl: { translation: nl },
  da: { translation: da },
  pl: { translation: pl },
  ru: { translation: ru },
  fr: { translation: fr },
  es: { translation: es },
  it: { translation: it },
  pt: { translation: pt },
  sv: { translation: sv },
  no: { translation: no },
  fi: { translation: fi },
  cs: { translation: cs },
  hu: { translation: hu },
  el: { translation: el },
  uk: { translation: uk },
  bg: { translation: bg },
  ro: { translation: ro },
  hr: { translation: hr },
  sk: { translation: sk },
  sl: { translation: sl },
  lt: { translation: lt },
  lv: { translation: lv },
  et: { translation: et },
  mt: { translation: mt },
  is: { translation: is },
  ga: { translation: ga },
  cy: { translation: cy },
  ca: { translation: ca },
  bs: { translation: bs },
  sq: { translation: sq },
  mk: { translation: mk },
  sr: { translation: sr },
  me: { translation: me },
  lb: { translation: lb },
  fo: { translation: fo },
  tr: { translation: tr },
  be: { translation: be },
  "en-us": { translation: enUs },
  "fr-ca": { translation: frCa },
  "pt-br": { translation: ptBr },
  "es-mx": { translation: esMx },
  "es-ar": { translation: esAr },
  zh: { translation: zh },
  ja: { translation: ja },
  ko: { translation: ko },
  vi: { translation: vi },
  th: { translation: th },
  id: { translation: id },
  ms: { translation: ms },
  hi: { translation: hi },
  ur: { translation: ur },
  fa: { translation: fa },
  ar: { translation: ar },
  ka: { translation: ka },
  hy: { translation: hy },
  kk: { translation: kk },
  uz: { translation: uz },
  az: { translation: az },
  tk: { translation: tk },
  ky: { translation: ky },
  "ar-eg": { translation: arEg },
  am: { translation: am },
  so: { translation: so },
  "ar-ma": { translation: arMa },
  "ar-dz": { translation: arDz },
  af: { translation: af },
  "en-au": { translation: enAu },
  "en-nz": { translation: enNz },
  mi: { translation: mi },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "uk", // Украинский язык по умолчанию
    lng: "uk", // Устанавливаем украинский как начальный язык
    supportedLngs: ["en", "de", "nl", "da", "pl", "ru", "fr", "es", "it", "pt", "sv", "no", "fi", "cs", "hu", "el", "uk", "bg", "ro", "hr", "sk", "sl", "lt", "lv", "et", "mt", "is", "ga", "cy", "ca", "bs", "sq", "mk", "sr", "me", "lb", "fo", "tr", "be", "en-us", "fr-ca", "pt-br", "es-mx", "es-ar", "zh", "ja", "ko", "vi", "th", "id", "ms", "hi", "ur", "fa", "ar", "ka", "hy", "kk", "uz", "az", "tk", "ky", "ar-eg", "am", "so", "ar-ma", "ar-dz", "af", "en-au", "en-nz", "mi"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "querystring", "navigator"], // Сначала проверяем localStorage (выбор пользователя)
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng", // Ключ для хранения выбранного языка
    },
  });

export default i18n;
