# nightwatch

Instalacja
=============

Node.js do pobrania ze strony (zalecana wersja LTS):

- http://nodejs.org/

Uruchamiamy: 
```js
npm install
```

Uruchomienie testów
====================
1) Wszystkie testy
```js
npm run test
```

2) Test z katalogu `googleGroup`
```js
npm run test .\spec\sauce
```

3) Wszystkie testy w 4 wątkach
```js
npm run test -- --workers 4
```

Przeglądanie raportów
=======================

Raporty znajdują się w katalogu `reports` w projekcie

Przeglądanie zrzutów ekranu
============================

Raporty znajdują się w katalogu `screenshots` w projekcie



