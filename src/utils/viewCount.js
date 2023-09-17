 export const getViewCount=(number)=> {
    if (number >= 1000000) {
   
        var millionTerms = (number / 1000000).toFixed(1);
    
      millionTerms = Math.round(millionTerms * 100) / 100;
      return millionTerms + " M";
    } else {
     
        var kTerms = (number / 1000).toFixed(1);
      kTerms = Math.round(kTerms * 100) / 100;
      return kTerms + "K";
    }
  }