import { createContext, useContext, useState, useEffect } from 'react'
import { getLang, setLang as saveLang } from '../utils/storage'

const I18nContext = createContext()

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(getLang() || 'ru')

  useEffect(() => {
    saveLang(lang)
  }, [lang])

  const t = (key) => {
    return dict[lang]?.[key] || key
  }

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}

const dict = {
  ru: {
    brand: 'IZ HAIR TREND',
    nav_calendar: 'Календарь',
    nav_my: 'Мои записи',
    nav_admin: 'Админ',
  },
  lt: {
    brand: 'IZ HAIR TREND',
    nav_calendar: 'Kalendorius',
    nav_my: 'Mano vizitai',
    nav_admin: 'Admin',
  },
  en: {
    brand: 'IZ HAIR TREND',
    nav_calendar: 'Calendar',
    nav_my: 'My bookings',
    nav_admin: 'Admin',
  }
}
