import React from 'react';
import BricksDatePicker from './components/BricksDatePicker';
import {addLocale, locale} from 'primereact/api';

export default function TailwindDemo() {
    addLocale(
        'de', {
            accept: 'Ja',
            addRule: 'Regel hinzufügen',
            am: 'AM',
            apply: 'Anwenden',
            cancel: 'Abbrechen',
            choose: 'Auswählen',
            chooseDate: 'Datum wählen',
            chooseMonth: 'Monat wählen',
            chooseYear: 'Jahr wählen',
            clear: 'Löschen',
            completed: 'Abgeschlossen',
            contains: 'Enthält',
            custom: 'Benutzerdefiniert',
            dateAfter: 'Datum ist nach',
            dateBefore: 'Datum ist vor',
            dateFormat: 'dd.mm.yy',
            dateIs: 'Datum ist',
            dateIsNot: 'Datum ist nicht',
            dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
            dayNamesMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
            dayNamesShort: ['Son', 'Mon', 'Die', 'Mit', 'Don', 'Fre', 'Sam'],
            emptyFilterMessage: 'Keine Ergebnisse gefunden',
            emptyMessage: 'Keine verfügbaren Optionen',
            emptySearchMessage: 'Keine Ergebnisse gefunden',
            emptySelectionMessage: 'Kein ausgewähltes Element',
            endsWith: 'Endet mit',
            equals: 'Gleich',
            fileSizeTypes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            filter: 'Filter',
            firstDayOfWeek: 0,
            gt: 'Größer als',
            gte: 'Größer oder gleich',
            lt: 'Weniger als',
            lte: 'Weniger oder gleich',
            matchAll: 'Alle erfüllen',
            matchAny: 'Beliebige erfüllen',
            medium: 'Mittel',
            monthNames: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
            monthNamesShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
            nextDecade: 'Nächstes Jahrzehnt',
            nextHour: 'Nächste Stunde',
            nextMinute: 'Nächste Minute',
            nextMonth: 'Nächster Monat',
            nextSecond: 'Nächste Sekunde',
            nextYear: 'Nächstes Jahr',
            noFilter: 'Kein Filter',
            notContains: 'Enthält nicht',
            notEquals: 'Ungleich',
            now: 'Jetzt',
            passwordPrompt: 'Passwort eingeben',
            pending: 'Ausstehend',
            pm: 'PM',
            prevDecade: 'Vorheriges Jahrzehnt',
            prevHour: 'Vorherige Stunde',
            prevMinute: 'Vorherige Minute',
            prevMonth: 'Vorheriger Monat',
            prevSecond: 'Vorherige Sekunde',
            prevYear: 'Vorheriges Jahr',
            reject: 'Nein',
            removeRule: 'Regel entfernen',
            searchMessage: '{0} Ergebnisse verfügbar',
            selectionMessage: '{0} Elemente ausgewählt',
            showMonthAfterYear: false,
            startsWith: 'Beginnt mit',
            strong: 'Stark',
            today: 'Heute',
            upload: 'Hochladen',
            weak: 'Schwach',
            weekHeader: 'Wo',
            aria: {
                cancelEdit: 'Bearbeitung abbrechen',
                close: 'Schließen',
                collapseRow: 'Zeile eingeklappt',
                editRow: 'Zeile bearbeiten',
                expandRow: 'Zeile ausgeklappt',
                falseLabel: 'Falsch',
                filterConstraint: 'Filterbedingung',
                filterOperator: 'Filteroperator',
                firstPageLabel: 'Erste Seite',
                gridView: 'Rasteransicht',
                hideFilterMenu: 'Filtermenü ausblenden',
                jumpToPageDropdownLabel: 'Gehe zu Seiten-Dropdown',
                jumpToPageInputLabel: 'Gehe zu Seiten-Eingabe',
                lastPageLabel: 'Letzte Seite',
                listView: 'Listenansicht',
                moveAllToSource: 'Alles zur Quelle verschieben',
                moveAllToTarget: 'Alles zum Ziel verschieben',
                moveBottom: 'Nach unten bewegen',
                moveDown: 'Abwärts bewegen',
                moveToSource: 'Zur Quelle verschieben',
                moveToTarget: 'Zum Ziel verschieben',
                moveTop: 'Nach oben bewegen',
                moveUp: 'Aufwärts bewegen',
                navigation: 'Navigation',
                next: 'Nächster',
                nextPageLabel: 'Nächste Seite',
                nullLabel: 'Nicht ausgewählt',
                pageLabel: 'Seite {page}',
                otpLabel: 'Bitte geben Sie das Einmalpasswortzeichen {0} ein',
                passwordHide: 'Passwort ausblenden',
                passwordShow: 'Passwort anzeigen',
                previous: 'Vorheriger',
                previousPageLabel: 'Vorherige Seite',
                rotateLeft: 'Nach links drehen',
                rotateRight: 'Nach rechts drehen',
                rowsPerPageLabel: 'Zeilen pro Seite',
                saveEdit: 'Bearbeitung speichern',
                scrollTop: 'Nach oben scrollen',
                selectAll: 'Alle Elemente ausgewählt',
                selectRow: 'Zeile ausgewählt',
                showFilterMenu: 'Filtermenü anzeigen',
                slide: 'Folien',
                slideNumber: 'Foliennummer {slideNumber}',
                star: '1 Stern',
                stars: '{star} Sterne',
                trueLabel: 'Wahr',
                unselectAll: 'Alle Elemente abwählen',
                unselectRow: 'Zeile abgewählt',
                zoomImage: 'Bild vergrößern',
                zoomIn: 'Vergrößern',
                zoomOut: 'Verkleinern'
            }
        }
    )
    locale('de');

    return (
        <div className="flex">

            <div
                className="
              bg-white
              dark:bg-gray-800
              p-10
              rounded-xl
              flex flex-col
              gap-8
              max-w-3xl
              mx-auto
              "
            >
                <h1 className="text-4xl text-black dark:text-white font-bold text-center">
                    Alasco + PrimeReact
                </h1>
                <div className="w-96">
                    <BricksDatePicker showIcon placeholder="Single selection"/>
                </div>
                <div className="w-96">
                    <BricksDatePicker showIcon selectionMode="range" placeholder="Range selection"/>
                </div>
                <div className="w-96">
                    <BricksDatePicker showIcon selectionMode="multiple" placeholder="Multiple selections"/>
                </div>
                <div className="w-96">
                    <BricksDatePicker showIcon selectionMode="range" view="month" placeholder="Range month selection"/>
                </div>
                <div className="w-96">
                    <BricksDatePicker showIcon selectionMode="single" view="year" placeholder="Single year selection"/>
                </div>
            </div>
        </div>

    );
}
