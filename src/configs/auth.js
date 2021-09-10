export const isAuthenticated = () => {
    const user = localStorage.getItem('@user_id')
    if(user){
        return true
    }
    return false
}