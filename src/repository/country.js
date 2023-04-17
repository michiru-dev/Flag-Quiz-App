const getNationalData = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const jsonData = await response.json()
    return jsonData
}

export { getNationalData }