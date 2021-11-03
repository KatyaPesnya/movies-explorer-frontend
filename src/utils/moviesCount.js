export default function moviesCount(){

    const innerWidth = window.innerWidth;
   
    if(innerWidth >=1280) {
       return {
          moviesCount: 12,
          newMoviesCount: 3
       };
    } else if ( innerWidth>= 768 && innerWidth < 1280) {
       return  {
         moviesCount: 8,
         newMoviesCount: 2
      };
    } else {
      return {
         moviesCount: 5,
         newMoviesCount: 1
      };
    }
   }