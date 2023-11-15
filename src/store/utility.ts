export const updateObject = (oldproper:any, newproper:any) => {
    return {
        ...oldproper, 
        ...newproper
    }
}