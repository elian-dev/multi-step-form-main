export function setData() {
    // Data store
    const store = {
        // Data
        data: {
            // Form
            form: {
                name: '',
                email: '',
                phone: '',
            },

            // Plans
            planSelected: {
                id: '',
                name: '',
                category: '',
            },

            // Addons	
            addonsSelected: null
        }
    };

    // Save data to session storage
    sessionStorage.setItem('data', JSON.stringify(store.data));
}