export const saveListToLocalStorage = (tasks) =>{
    localStorage.setItem('reviews', JSON.stringify(tasks))
   }