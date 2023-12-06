import axios from "axios";

const key="d4f204cfc76f4e5ab858a00e11b1c940";
const axiosCreate=axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getGenreList=axiosCreate.get('/genres?key='+key);
const getAllGames=axiosCreate.get('/games?key='+key);
const getGameListByGenreId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id);


export default{
    getGenreList,
    getAllGames,
    getGameListByGenreId

}