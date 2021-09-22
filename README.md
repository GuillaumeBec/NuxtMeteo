
# Nuxt-Meteo

## Librairies utilisées :

- Vuejs :
  Vuex : vuex-typed modules : https://github.com/victorgarciaesgi/vuex-typed-modules
  Nuxt/TS : https://typescript.nuxtjs.org/
  Nuxt Composition API : https://composition-api.nuxtjs.org/getting-started/introduction
  Props: https://github.com/dwightjack/vue-types

- Js:
  Date-fns : https://date-fns.org/docs/Getting-Started
  Lodash: https://lodash.com/

- CSS :
  TailwindCSS : https://tailwindcss.nuxtjs.org/
  PostCSS : https://tailwindcss.nuxtjs.org/examples/postcss-plugin/

- API :
  Communication API : Axios : https://axios.nuxtjs.org/
  API Météo : OpenWeather : https://openweathermap.org/api

* déploiement : https://vercel.com/docs

## Commentaires dans le code

Les annotations de code sont trouvables avec la mention "//?"

## Difficultées rencontrées

Données API

Je n'ai trouvé que des prévisions toutes les 3 heures sur le format gratuit de l'API. J'ai essayé de les recouper toutes les huits échéances pour donner des prévisions journalières, mais le format horaire était trop variable selon l'heure à laquelle on donne la requête. Cependant ça me semble faisable.

Formatage des dates pour le navigateur

Certains navigateurs ne peuvent pas compiler des formats de date si des caractères spéciaux sont imbriqués dedans, j'ai fais un fonction générique en utilisant une regex.

Design du loader :

N'ayant jamais fais de responsive avec mon composant spinner, j'ai remarqué que ses calculs de dimensions avaient un mauvais rendu sur certaines tailles d'écran.
