# Webengineering Projekt


## Authors

Matrikelnummer: 1824595

Email: inf20180@lehre.dhbw-stuttgart.de


## How to run

Der Ordner aus der Zip datei wird auf dem Rechner abgelegt (z.B. auf dem Desktop).

In dem Ordner öffnet man per Rechtsklich das Menü und drückt auf "Öffnen in WIndows-Terminal", wie im folgenend Bild zu sehen.
<p align="center">
  <img src="Bilder Doku/Screenshot 2021-12-12 181247.png">
</p>

Als nächstes gibt man dort den Befehl "node .\myWebServer.js" ein, wie im folgenen Bild zu sehen. Darauf solle man dann die Rückgabe "listening: 6001" erhalten.
<p align="center">
  <img src="Bilder Doku/Screenshot 2021-12-12 181413.png">
</p>

Wenn das funktioniert hat, kann man in seinem Internet Browser (ich habe Opera verwendent) mit "http://localhost:6001" die Website erreichen. Das sollte wie im folgeneden Bild aussehen.
<p align="center">
  <img src="Bilder Doku/Screenshot 2021-12-12 181722.png">
</p>


## Description

### Navigation

Man kann zu den Menüpunkten gelangen, indem man auf sie in der Navigationsleiste klickt.
<p align="center">
  <img src="Bilder Doku/Screenshot 2021-12-12 183636.png">
</p>

Bei kleineren Fenstergrößen ändert sich die Navigationsleiste in ein Drop-Down-Menü.
<p align="center">
  <img src="Bilder Doku/Screenshot 2021-12-12 183740.png">
</p>
<p align="center">
  <img src="Bilder Doku/Screenshot 2021-12-12 183758.png">
</p>

### Wetter

Man öffnet das Wetter-Pop-up, indem man zu "Wetter" navigiert und den Knopf "open" drückt.
<p align="center">
  <img src="Bilder Doku/Screenshot 2021-12-12 184441.png">
</p>

In dem Pop-up kann man nun eine beliebige Stadt oder Land eingeben (Länder in englischer Schreibweise! z.B. Germany). Wenn man eine Stadt oder Land eingegeben hat drückt man auf "submit".
<p align="center">
  <img src="Bilder Doku/Screenshot 2021-12-12 184510.png">
</p>

Es werden das aktuelle Wetter und das Wetter der folgenden 4 Tage angezeigt. Die aktuellen Wetterdaten und die Vorhersage für die nächsten Tage werden mit Hilfe der openweathermap Api bezogen.
<p align="center">
  <img src="Bilder Doku/Screenshot 2021-12-12 184539.png">
</p>

### Aktienverlauf

Es werden die Verläufe von Apple, Microsoft und Google angezeigt. Dabei werden die dcf (Discounted-Cashflow) Werte der letzten 100 Tage angezeigt. Dazu wurde die Api von financialmodelingprep.com verwendet, die den historischen Verauf der letzen hundert Tage bereitstellt.
Um die Werte als Graph darzustellen, wird chart.js verwendet.
<p align="center">
  <img src="Bilder Doku/Screenshot 2021-12-12 185559.png">
</p>

Bei Apple funktioniert die Api einwandfrei und gibt die Werte der letzen huntert Tage an (siehe: "https://financialmodelingprep.com/api/v3/historical-daily-discounted-cash-flow/AAPL?limit=100&apikey=af8f594febb387c6a4ef3560e0e9b351").

Bei den anderen Firmen gibt die Api leider nur ein paar Werte zurück und nicht die letzten hundert. (siehe: "https://financialmodelingprep.com/api/v3/historical-daily-discounted-cash-flow/GOOG?limit=100&apikey=af8f594febb387c6a4ef3560e0e9b351")

Bedauerlicherweise habe ich das erst gemerkt, als die Api und die Anzeige der Daten schon komplett implementiert war.

### Wikipedia mit Text to Speech

### News


## Erfahrungsbericht


## Flussdiagramm
