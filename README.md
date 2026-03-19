# Call Simulator

Simulatore di chiamata in corso per browser mobile.

## A cosa serve

Mostra una schermata di chiamata in corso con timer, nome o numero del chiamante, e una homescreen fittizia al termine della simulazione. Utile quando si ha bisogno di sembrare impegnati al telefono.

## Funzionalita'

- Schermata di chiamata in corso con timer casuale nell'intervallo configurato
- Avatar con iniziali per i contatti nominali, icona edificio per i numeri di telefono
- Pulsanti muto e vivavoce con stato visivo attivo/disattivo
- Homescreen fittizia con icone decorative e status bar (orario reale, wifi, 5G, batteria)
- Scelta del wallpaper tra tre opzioni predefinite
- Accesso alle impostazioni dalla homescreen tramite icona rotellina
- Modalita' fullscreen su mobile
- Configurazione salvata tra sessioni tramite localStorage

## Stack

- Next.js 15 App Router
- TypeScript
- lucide-react

## Struttura del progetto

```
src/
  app/
    page.tsx               - orchestrazione schermate
  components/
    fake-call/
      ConfigScreen.tsx     - schermata impostazioni
      CallScreen.tsx       - schermata chiamata in corso
      HomeScreen.tsx       - homescreen fittizia
  constants/
    fakeCall.ts            - valori di default, wallpaper, icone
  styles/
    fakeCall.ts            - stili inline
  types/
    fakeCall.ts            - tipi condivisi
```

## Demo

https://call-simulator.vercel.app/

## Note

Progetto personale, sviluppato come esercizio pratico su Next.js App Router e organizzazione del codice per componenti.