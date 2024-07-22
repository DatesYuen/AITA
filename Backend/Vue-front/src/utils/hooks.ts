export const truncateText=(text:string,length:number)=>{
    if(!text){
        return text
    }
    if(text.length>length){
        return text.slice(0,length)+'...'
    }
    return text
}