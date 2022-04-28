export const formatPrice = (number) => {
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(number / 100);

}

export const uniqueValues = (array, type) => {
   let uniqueValuesArray = array.map(item => item[type]);
   if(type==='colors') uniqueValuesArray = uniqueValuesArray.flat();
   return [...new Set(uniqueValuesArray)];
} 

export const intersect = (arr1 , arr2)=>{
   const arr3 = arr1.filter(item => arr2.includes(item));
   return arr3.length > 0 ? true : false;
}