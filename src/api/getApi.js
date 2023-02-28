 import axios from "axios";
 const BASE_URL="https://api.themoviedb.org/3/";
 export const BASE_IMG_URL="https://image.tmdb.org/t/p/w500";
 const API_KEY="?api_key=68bc8f2587d307cdd95fbf9f8320ddc0";

 export const fetchTrending = () =>{
    return axios.get(`${BASE_URL}/trending/movie/week${API_KEY}`)
 };
 export const fetchMovieByName = (query) =>{
    return axios.get(`${BASE_URL}search/movie${API_KEY}&query=${query}`)
 }
 export const fetchDetailedById = (id) =>{
    return axios.get(`${BASE_URL}movie/${id}${API_KEY}`)
 }
 export const fetchReviewsById = (id) =>{
    return axios.get(`${BASE_URL}movie/${id}/reviews${API_KEY}`)
 }
 export const fetchCastById = (id) =>{
    return axios.get(`${BASE_URL}movie/${id}/credits${API_KEY}`)
 }