import Papa from 'papaparse';

const eventsURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSoMz0sXeYxPF1II8ArlPvAleK3IQmGQF-t8pmlpgYdCA8PaHONC8EjpsWKGalbQYcwnVFH8yncClK-/pub?gid=0&single=true&output=csv";

const parseEventData = (eventData) => {
    eventData.forEach(event => {
        if (event.date === '-') {
            event.date = null;
        } else {
            event.date = new Date(event.date);
        }
    });
    console.log(eventData)

    return eventData;
}

export const fetchEvents = new Promise((resolve, reject) => {
    Papa.parse(eventsURL, {
        download: true,
        header: true,
        complete: (results) => {
            resolve(parseEventData(results.data));
        }
    })
})