import React from 'react';

import {Simpson} from "./Simpson";

const Simpsons = () => {

    const simpsons = [
        {
            id: 1,
            name: 'Homer Jay Simpson',
            info: 'He is the nominal foreman of the paternally eponymous family. ' +
                'He and his wife Marge have three children: Bart, Lisa and Maggie.',
            img: 'https://www.onthisday.com/images/people/homer-simpson.jpg?w=360'
        },
        {
            id: 2,
            name: 'Marjorie Jacqueline "Marge" Simpson',
            info: 'Marge is the matriarch of the Simpson family. Marge is the moralistic force in her family and ' +
                'often provides a grounding voice in the midst of her family\'s antics by trying to maintain ' +
                'order in the Simpson household.',
            img: 'https://pbs.twimg.com/profile_images/2750984347/03edf5ef844a2f7e345d9c090c59b8af_400x400.png'
        },
        {
            id: 3,
            name: 'Bartholomew Jojo "Bart" Simpson',
            info: 'At ten years old, Bart is the eldest child and only son of Homer and Marge, and the brother of ' +
                'Lisa and Maggie. Bart\'s most prominent and popular character traits are his mischievousness, ' +
                'rebelliousness and disrespect for authority.',
            img: 'https://media.entertainmentearth.com/assets/images/3e36d0664eae4a4bb38eb21bbcacdaf1xl.jpg'
        },
        {
            id: 4,
            name: 'Lisa Marie Simpson',
            info: 'Lisa is the second child of Homer and Marge, the younger sister of Bart, and the older sister of Maggie. ' +
                'Lisa\'s high intellect and left-wing political stance creates a barrier between her and other children her age.',
            img: 'https://i.pinimg.com/564x/c8/5d/98/c85d9886bc076faa25f081634b9592ec.jpg'
        },
        {
            id: 5,
            name: 'Margaret Evelyn Lenny "Maggie" Simpson',
            info: 'Maggie is the youngest child of Homer and Marge, and the younger sister to Bart and Lisa. ' +
                'She is often seen sucking on her orange pacifier and, when she walks, she trips over her clothing ' +
                'and falls on her face.',
            img: 'https://media.entertainmentearth.com/assets/images/ad29594ee82f4ff2b1e2a8b00717f58dxl.jpg'
        },
    ]

    return (
        <div>
            {simpsons.map(simpson => <Simpson key={simpson.id} simpson={simpson}/>)}
        </div>
    );
};

export {Simpsons};