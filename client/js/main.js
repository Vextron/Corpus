function handle_submit(e) {

    e.preventDefault();

    let input = document.querySelector('#textarea1').value;

    document.querySelector('#output').textContent= convert(input);
    document.querySelector('#textarea1').value = '';
}


function convert(name) {
    
    name = name.toUpperCase();

    const corpus_alphabet = {

        'A': 'A',
        'B': 'T',
        'C': 'Y',
        'D': 'P',
        'E': 'E',
        'F': 'T',
        'G': 'J',
        'H': 'K',
        'I': 'I',
        'J': 'T',
        'K': 'K',
        'L': 'P',
        'M': 'S',
        'N': 'T',
        'O': 'O',
        'P': 'K',
        'Q': 'R',
        'R': 'T',
        'S': 'Y',
        'T': 'P',
        'U': 'U',
        'V': 'T',
        'W': 'J',
        'X': 'K',
        'Y': 'Y',
        'Z': 'B',
        ' ': ' ',
        ',': ',',
        ';': ';',
        '.': '.',
        "'": "'",
        '?': '?',
        '!': '!',
        '"': '"'

    }

    let res = ''

    for(let i = 0; i < name.length; i++) {

        res += corpus_alphabet[name[i]]
    }

    return res;
}

