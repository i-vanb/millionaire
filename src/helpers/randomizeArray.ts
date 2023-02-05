export const randomizeArray = <T>(array:Array<T>):Array<T> => {
    let arr = new Array(array.length);

    for(let i=0; i<arr.length; i++) {
        arr[i] = {order: Math.random(), item: array[i]}
    }

    return arr.sort((a, b)=>a.order-b.order).map(i => i.item);
}
