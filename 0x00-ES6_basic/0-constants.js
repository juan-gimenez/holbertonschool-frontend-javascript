export function taskFirst() {
    const phrase = 'I prefer const when I can.';
    return phrase;
}

export function getLast() {
    return ' is okay';
}

export function taskNext() {
    let i = 'But sometimes let';
    i += getLast();

    return i;
}
