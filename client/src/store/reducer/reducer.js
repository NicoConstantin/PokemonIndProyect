let initialState = {
    limit: 12,
    pokemonsAPI: [],
    pokemonsDB: [],
    types:[],
    filterType: '',
    orderAlph:'',
    orderStr:'',
    pages:[],
    actualPage:1,
    show: 'All'
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case 'LIMIT':
            return{
                ...state,
                limit: action.payload,
                actualPage:1
            }
        case 'SHOW':
            return{
                ...state,
                show: action.payload,
                actualPage:1
            }
        case 'SAVE_POKEMONS_API':
            return{
                ...state,
                pokemonsAPI: action.payload
            }
        case 'SAVE_POKEMONS_DB':
            return{
                ...state,
                pokemonsDB: action.payload
            }
        case 'SAVE_TYPES':
            return{
                ...state,
                types: action.payload
            }
        case 'ADDED_DB':{
            return{
                ...state,
                pokemonsDB: [...state.pokemonsDB,action.payload]
            }
        }
        case 'FILTER_TYPE':
            return{
                ...state,
                filterType: action.payload,
                actualPage:1
            }
        case 'ORDER_ALPH':
            return{
                ...state,
                orderAlph: action.payload,
                actualPage:1
            }
        case 'ORDER_STR':
            return{
                ...state,
                orderStr: action.payload,
                actualPage:1
            }
        case 'QTY_PAGES':
            return{
                ...state,
                pages: action.payload
            }
        case 'SET_PAGE':
            return{
                ...state,
                actualPage: action.payload
            }
        default: return state
    }
}