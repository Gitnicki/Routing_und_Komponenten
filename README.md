# Routing_und_Komponenten
# Umsetzung einer React-App mit Routing und statischen Layout-Komponenten

Entwickle eine React-App, die der HTML-Vorlage im Anhang folgt und über grundlegendes Routing verfügt. Die App soll vier Seiten (Home, About, Contact, Login) haben und ein konsistentes Layout aus Header, Footer und Hauptinhalt (main) auf allen Seiten beibehalten. Auf der Startseite soll zusätzlich eine Liste von sections aus einer Datenstruktur mittels einer Schleife erstellt werden.

# Funktionen:
- Tailwind ist in der React App integriert
- Jede Seite soll über die Navigation aufrufbar sein
- Auf der Startseite erscheint eine dynamische Liste mit section aus dem Tailwind - Beispiel von heute vormittag
- Wenn ein Navigationspunkt aktiv ist, soll dies erkenntlich sein - verwende dafür einen Tailwind Style
# Hinweise:
- Erstelle die grundlegenden Komponenten: `Header`, `Footer` und `Main`.
- Erstelle die Komponenten `Home`, `About`, `Contact` und `Login`. Jede Komponente soll einfache Platzhalterinhalte anzeigen, die später angepasst werden können.
- Verwende `NavLink` von `react-router-dom` und seine `activeClassName`-Eigenschaft, um den aktiven Link zu stylen.
- Definiere eine Datenstruktur in `Home.jsx`, die mehrere Objekte enthält, und nutze eine `map()`-Funktion, um über die Datenstruktur zu iterieren und für jedes Objekt eine HTML-Section zu erstellen.
- Stelle sicher, dass die Navigation durch `Link` oder `NavLink` von `react-router-dom` implementiert wird, um unnötige Seitenneuladungen zu vermeiden und eine flüssige Benutzererfahrung zu gewährleisten.
- Achte darauf, dass deine Webanwendung barrierefrei ist, z.B. durch die Verwendung von semantisch korrektem HTML und ARIA-Attributen.
