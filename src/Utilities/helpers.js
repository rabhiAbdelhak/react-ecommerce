export const formatPrice = (number) => {
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(number / 100);

}

export const uniqueValues = (products, group) => {
   let newArray = []
   if(group === 'colors'){
       newArray = products.reduce((acc, pr) => {
           return [...acc , ...pr.colors];
       }, [])
   }

   return [...new Set(newArray)]
} 

export const intersect = (arr1 , arr2)=>{
   const arr3 = arr1.filter(item => arr2.includes(item));
   return arr3.length > 0 ? true : false;
}