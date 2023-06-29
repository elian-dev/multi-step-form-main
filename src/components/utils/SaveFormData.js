// Set the data to session storage
function SaveFormData(data) {
    const dataStore = sessionStorage.getItem('data');
    const jsonData = JSON.parse(dataStore);

    if (dataStore !== null) {
        jsonData.form.name = data.name;
        jsonData.form.email = data.email;
        jsonData.form.phone = data.phone;

        // Save the data to session storage
        const stringData = JSON.stringify(jsonData);
        sessionStorage.setItem('data', stringData);
    } else {
        console.log('Data no saved');
    }
}

export default SaveFormData;