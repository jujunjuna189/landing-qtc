export const getLocalToken = () => {
    return JSON.parse(localStorage.getItem('qtc.user'))?.accessToken;
}

export const setLocalUser = (value) => {
    if (value === undefined) return;
    if (value === null) return;
    if (value === '') return;
    localStorage.setItem('qtc.user', JSON.stringify(value));
}

export const getLocalUser = () => {
    return JSON.parse(localStorage.getItem('qtc.user')).user;
}

export const clearLocal = () => {
    localStorage.clear();
}