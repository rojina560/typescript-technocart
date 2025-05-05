{
    // ternary operator || optional chaining || nulish coalescing
    const age: number = 24;
    // if(age >=25){
    //     console.log('buri');
    // }else{
    //     console.log('young');
    // }
    const isBuri = age <= 23 ?'buri':'young'
    console.log({isBuri});
    // nullish coalescing operator
    //
    const authenticate =null
    const isAuthenticate = authenticate ?? 'gest'
    console.log(isAuthenticate);

}