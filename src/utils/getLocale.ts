export async function getLocaleFromLang(lang: string) {
  try {
    const file = await import(`../../locales/${lang}/locale.json`)
    return file.default
  } catch {
    return {}
  }
}
