const initState={
    posts: [ 
        { id: '1', title: 'Squirtle laid an Egg', body:'lOREN IPSUM '},
        { id: '2', title: 'Charmander laid an Egg', body:'lOREN IPSUM '},
        { id: '3', title: 'a Helix Fossil was Found', body:'lOREN IPSUM '}
    ]
}

const rootReducer = (state= initState,action) => {
    return state;
}

export default rootReducer