//export Date function 
exports.Date = () => {
    const today = new Date()
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }
    return today.toLocaleDateString('en-US', options)
}

const getDay = () => {
    const today = new Date()
    const options = {
        weekday: 'long',
    }
    return today.toLocaleDateString('en-US', options)

}

//export getDay function 
exports.getDay = getDay