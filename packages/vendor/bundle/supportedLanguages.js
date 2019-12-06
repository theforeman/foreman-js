const supportedLanguages = [
  'ca',
  'cs',
  'de',
  'en',
  'es',
  'fr',
  'gl',
  'it',
  'ja',
  'ko',
  'nl',
  'pl',
  'pt',
  'ru',
  'sv',
  'zh',
];

const supportedLanguagesRE = new RegExp(`/(${supportedLanguages.join('|')})$`);

module.exports = {
  supportedLanguages,
  supportedLanguagesRE,
};
