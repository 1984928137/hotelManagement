let carts = []

let dayTimes = []

function cartValues(params) {
    carts.push(params)
}

function closeCart(params) {
    for(let i = 0;i<carts.length;i++){
        if(i == params){
            carts.splice(i,1);
            
        }
    }
    
}

function dayTimesValues(params) {
    dayTimes=[]
    for (let index = 0; index < 2; index++) {
        dayTimes.push(params[index])
    }
    
    console.log(dayTimes)
}
// function closeCart(params) {
//     for(let i = 0;i<carts.length;i++){
//         if(carts[i].id == params){
//             carts.splice(i,1);
//             i--;
//         }
//     }
    
// }

export {
    cartValues,
    carts,
    closeCart,
    dayTimes,
    dayTimesValues
}