export function toggleTheme(theme = false){

    if(theme===false){
        return{
            type: 'TOGGLE_THEME'
        }
    }

    return{
        type: 'CUSTOM_THEME',
        theme: theme
    }

}

export function updateSite(payload = false){
    return{
        type: 'UPDATE_SITE',
        payload: payload
    }
}