import { AllowedLanguageCodesEnum } from "../enums";
import { ptBrNumericWordsDictionary } from "./pt-br-numeric-words-dictionary";

const dictionaries = {
  [AllowedLanguageCodesEnum.PT_BR]: ptBrNumericWordsDictionary,
};

export const getDictionary = (
  languageCode: AllowedLanguageCodesEnum
): Record<string, number> => {
  const dictionary = dictionaries[languageCode];

  if (!dictionary)
    throw `'${languageCode}' not supported yet. Please, use one of the following: ${Object.values(
      AllowedLanguageCodesEnum
    ).join(", ")}`;

  return dictionary;
};
