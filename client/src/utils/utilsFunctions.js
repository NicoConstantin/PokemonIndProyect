function Alph (array,orderAlph) {
    array.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    if(orderAlph === "alphreverse"){
        array = array.reverse();
    }
}

function Str (array,orderStr) {
    array.sort(function (a, b) {
        if (a.str > b.str) {
          return 1;
        }
        if (a.str < b.str) {
          return -1;
        }
        return 0;
      });
    if(orderStr === "strong"){
        array.reverse();
    }
}


export function FilterAndOrder (array,orderAlph,orderStr,filter) {
    if(filter){
        array = array.filter(pokemon=>pokemon.type.includes(filter));
    }
    if(orderAlph && orderStr){
        Str(array,orderStr)
        Alph(array,orderAlph)
    }
    if(orderAlph){
       Alph(array,orderAlph)
    }
    if(orderStr){
        Str(array,orderStr)
    }
    return array
}

export function paginetedResults(array,page,limit){
    const startIndex = ((page || 1) - 1) * (limit || 12); 
    const endIndex = (page || 1) * (limit || 12);
    const cantPages = Math.ceil((array.length) / (limit|| 12));
    const result = {};

    let arrayPages= [];
    for (let i = 1; i < cantPages+1; i++){
        arrayPages.push(i);
    }
    result.cantPages = arrayPages;

    result.results = array.slice(startIndex,endIndex);
    return result;
}
export function checkSubmit (pokeCreated) {
    for (const key in pokeCreated){
        if(!pokeCreated[key] || pokeCreated[key].length===0){
            return true;
        }
    }
    return false;
}

export function validateNumber (e,setError,error,setTemp,temp){
    if(/^[0-9]*$/.test(e.target.value)){
        setError({
            ...error,
            [e.target.name] : ''
        });
        setTemp({
            ...temp,
            [e.target.name] : e.target.value
        });
    }else {
        setError({
            ...error,
            [e.target.name] : "Only numbers"
        });
        setTemp({
            ...temp,
            [e.target.name] : e.target.value
        });
    }
}

export function validateChar (e,setError,error,setTemp,temp){
    if(/^[a-zA-Z]*$/.test(e.target.value)){
        setError({
            ...error,
            [e.target.name] : ''
        });
        setTemp({
            ...temp,
            [e.target.name] : e.target.value
        });
    }else {
        setError({
            ...error,
            [e.target.name] : "Only alphabetic characters"
        });
        setTemp({
            ...temp,
            [e.target.name] : e.target.value
        });
    }
}

export function validateType(e,setTemp,temp){
    if(e.target.checked){ //esta tildado
        if(!temp[e.target.name].includes(e.target.value)){
            setTemp({
                ...temp,
                [e.target.name] : [...temp[e.target.name],e.target.value]
            });
        }
        else{
            setTemp({
                ...temp,
                [e.target.name] : [...temp[e.target.name]]
            });
        }
    }
    else{ //esta destildado
        if(temp[e.target.name].includes(e.target.value)){
            setTemp({
                ...temp,
                [e.target.name] : [...temp[e.target.name]].filter(elem=>elem !== (e.target.value))
            });
        }
        else{
            setTemp({
                ...temp,
                [e.target.name] : [...temp[e.target.name]]
            });
        }
    }
}