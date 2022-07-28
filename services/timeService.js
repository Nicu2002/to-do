

export const getDay = ()=> {
    const date = new Date();
    return date.toLocaleString('en-us', {weekday:'long'});
}

export const getExplicitDate = () => {
    const date = new Date();
    return date.getDate() + date.toLocaleString('en-us', {month:'long'});
}