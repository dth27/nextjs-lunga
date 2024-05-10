import links from './links.json'
import title from './title.json'
import roles from './roles.json'
import applicationLinks from './applicationLinks.json'
import applicationDeadline from './applicationDeadline.json'
import subtexts from './subtexts.json'
import application from './application.json'
import aboutlunga from './aboutlunga.json'
import workshops from './workshops.json'
import tattooconvention from './tattooconvention.json'
import lungalab from './lungalab.json'
import youthexchange from './youthexchange.json'
import concerts from './concerts.json'
import eventindex from './eventindex.json'
import frontpage from './concerts.json'
import shop from './shop.json'

interface Translation {
  namespace: string
  resources: {
    en: { [key: string]: string }
    is: { [key: string]: string }
  }
}

const translations: Translation[] = [
  links,
  title,
  roles,
  applicationLinks,
  applicationDeadline,
  subtexts,
  application,
  aboutlunga,
  workshops,
  tattooconvention,
  lungalab,
  youthexchange,
  concerts,
  eventindex,
  frontpage,
  shop,
]

interface TranslationsOptions {
  ns: string[]
  resources: {
    en: { [key: string]: { [key: string]: string } }
    is: { [key: string]: { [key: string]: string } }
  }
}

const options: TranslationsOptions = {
  ns: [],
  resources: {
    en: {},
    is: {},
  },
}

for (const { namespace, resources } of translations) {
  Object.entries(resources).forEach(([lang, trans]) => {
    //@ts-ignore
    options.resources[lang][namespace] = { ...trans }
  })

  options.ns.push(namespace)
}

export { options as translationsOptions }
