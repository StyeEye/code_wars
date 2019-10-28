function func(numbers) {
    const oldest = Math.max(...numbers);
    const youngest = Math.min(...numbers);
    const difference = oldest - youngest;

    return [youngest, oldest, difference];
}

console.log(func([19, 18, 15, 14, 11]))


function test(books) {
    const unread = books.filter(e => !e.readingStatus);
    const out = unread.map(e => ({ author: e.author, title: e.title }));
    return out;
}

const library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Mistborn',
        author: 'Brandon Sanderson',
        readingStatus: false
    },
    {
        title: 'Mockingjay',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

console.log(test(library))