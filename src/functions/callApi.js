export default async function callApi(nombre){
        try{
                const {stats, sprites}= await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
                .then(respose=>respose.json());
                return {stats,sprites};
        }catch(e){
                return null
        }     
}