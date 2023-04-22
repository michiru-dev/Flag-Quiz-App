const isValidLocationState = (locationState) => {
    if (typeof locationState === 'undefined' || locationState === null) return false
    //上記はこれlocation.state === null ||
    return !Object.values(locationState).some(v => typeof v === 'undefined' || v === null)
    //上記はこれ
    //location.state.countCorrectAnswer === null ||
    //location.state.howManyQue === null
}


export { isValidLocationState }
