export function deleteData() {
    // Delete data from session storage
    const dataStore = sessionStorage.getItem('data');
    const jsonData = JSON.parse(dataStore);

    if (dataStore !== null) {
        sessionStorage.removeItem('data');
        console.log('Data removed from session storage');
    } else {
        console.log('No data found in session storage');
    }
}