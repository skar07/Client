// @flow

import i18n from 'i18next'
import { reactI18nextModule } from 'react-i18next'
import { Localization } from 'expo-localization'

const languageDetector = {
	type: 'languageDetector',
	async: true,
	detect: callback => {
		return Localization.getLocalizationAsync().then(({ locale }) => {
			callback(false)
		})
	},
	init: () => {},
	cacheUserLanguage: () => {}
}

i18n
	.use(languageDetector)
	.use(reactI18nextModule)
	.init({
		fallbackLng: 'en',
		resources: {
			// .. load Languages
		},
		ns: ['common'],
		defaultNS: ['common'],
		debug: false,
		interpolation: {
			escapeValue: false
		}
	})

export default i18n