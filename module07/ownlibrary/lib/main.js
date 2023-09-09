let counter = 0

const increment = () => {
    counter += 1
}

const decrement = () => {
    counter -= 1
}

const value = () => {
    return counter
}

export default { increment, decrement, value }
