export const GenerationPaginationNumbers = (currentPage: number, totalPages: number) => {

    //si el numero total de paginas es menos a 7 mostrara los puntos supensivos..

    if (totalPages <= 7){
        return Array.from({ length: totalPages},(_, i) =>i + 1);
    }

    //Mas de 7 pagina, si esta entre las primeras 3 paginas 
    //mostrara las primeras 3, puntos supensivos y las ultimas 2

    if(currentPage <= 3){
        return[1,2,3,"...", totalPages -1, totalPages];
    }

    //si la pagina actual esta entre las ultimas 3 paginas
    //que se muestren las primeras las 2
    if(currentPage >= totalPages-1){
        return[1,2,"...", totalPages -2, totalPages -1, totalPages ];
    }

    //si la pagina actual esta en otro lugar medio
    //mostrar la primera pagina, puntos supensivos, pagina actual
    return [
        1,
        "...",
        currentPage-1,
        currentPage+1,
        "...",
        totalPages
    ];


}