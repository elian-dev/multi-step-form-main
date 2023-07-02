function IsEmpty(data) {
    // Check if data Object have empty values

    const errors = [];

    for (var key in data) {
        if (data[key] === "") {
            errors.push(key);
        }
    }
    
    return errors;
}

export default IsEmpty;