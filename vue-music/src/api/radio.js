import axios from 'axios'

import {HOST} from '../common/js/config'

//获取电台Banner
export function getRadioBanner(){
    const url = HOST + '/banner'
    return axios.get(url)
}
//获取优选电台列表
export function getRadioList(){
    const url = HOST + '/dj/recommend'
    return axios.get(url)
}
//获取付费精品列表
export function getPerfectList(){
    const url = HOST + '/dj/paygift'
    return axios.get(url)
}
