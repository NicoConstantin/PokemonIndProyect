
export function showQty (qty) {
    return {
        type: 'LIMIT',
        payload: qty
    }
};
export function show (string) {
    return {
        type: 'SHOW',
        payload: string
    }
};

export function saveAPI (pokemons) {
    return{
        type: 'SAVE_POKEMONS_API',
        payload: pokemons
    }
};
export function saveDB (pokemons) {
    return{
        type: 'SAVE_POKEMONS_DB',
        payload: pokemons
    }
};

export function saveType (types){
    return{
        type: 'SAVE_TYPES',
        payload: types
    }
}

export function FilterType (filter) {
    return{
        type: 'FILTER_TYPE',
        payload: filter
    }
}

export function OrderAlph (order){
    return {
        type: 'ORDER_ALPH',
        payload: order
    }
}
export function OrderStr (order){
    return {
        type: 'ORDER_STR',
        payload: order
    }
}
export function QtyPages (array){
    return{
        type: 'QTY_PAGES',
        payload: array
    }
}

export function actualPage (number){
    return{
        type: 'SET_PAGE',
        payload: number
    }
}
export function addedDB (object){
    return{
        type: 'ADDED_DB',
        payload: object
    }
}
