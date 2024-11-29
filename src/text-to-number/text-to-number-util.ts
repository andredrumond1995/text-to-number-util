import { AllowedLanguageCodesEnum } from "../enums";
import { getDictionary } from "./dictionary-mapper";

export function textToNumberUtil(
  text: string,
  languageCode: AllowedLanguageCodesEnum = AllowedLanguageCodesEnum.PT_BR
): number {
  const dictionary = getDictionary(languageCode);
  const convertToNumber = (words: string[]): number => {
    let total = 0;
    let current = 0;

    for (const word of words) {
      if (word in dictionary) {
        const value = dictionary[word];
        if (value >= 1000) {
          if (current === 0) current = 1;
          total += current * value;
          current = 0;
        } else {
          current += value;
        }
      }
    }
    return total + current;
  };

  const match = text.toLowerCase().match(/(.*?)(real|reais|centavo|centavos)/g);

  let reaisPart = "";
  let centavosPart = "";

  if (match) {
    for (const part of match) {
      if (/real|reais/.test(part))
        reaisPart = part.replace(/real|reais/, "").trim();
      if (/centavo|centavos/.test(part))
        centavosPart = part.replace(/centavo|centavos/, "").trim();
    }
  }

  const realWords = reaisPart.split(/\s+/);
  const centavoWords = centavosPart.split(/\s+/);
  const reais = convertToNumber(realWords);
  let centavos = convertToNumber(centavoWords);

  if (centavos > 0) centavos = centavos / 100;

  return reais + centavos;
}
