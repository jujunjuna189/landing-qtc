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
// Language
export const setLocalLanguage = (value) => {
    if (value === undefined) return;
    if (value === null) return;
    if (value === '') return;
    localStorage.setItem('qtc.language', JSON.stringify(value));
}

export const getLocalLanguage = () => {
    if (!localStorage.getItem('qtc.language')) return { display: 'English', key: 'en' };
    return JSON.parse(localStorage.getItem('qtc.language'));
}