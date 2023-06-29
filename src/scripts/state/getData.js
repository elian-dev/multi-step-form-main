export function getData() {
    const dataStore = sessionStorage.getItem('data');
    const jsonData = JSON.parse(dataStore);

    if (dataStore !== null) {
        return jsonData;
    } else {
        console.log('No data found in session storage');
    }
}