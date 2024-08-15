function checkOutputFields(asParameter) {
    if (asParameter.length < requiredLength) {
        throw new Error('The "as" parameter has too few output field names.');
    }
    // continue with your logic
}
