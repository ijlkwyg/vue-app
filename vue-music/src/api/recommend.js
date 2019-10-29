import axios from 'axios'

import {HOST} from '../common/js/config'
//获取banner图
export function getBanner(){
    const url = HOST + '/banner'
    return axios.get(url)
}
//获取歌单
export function getRecommendList(){
    const url = HOST + '/personalized'
    return axios.get(url)
}
//获取歌单详情
export function getRecommendDetail(id){
    const url = HOST + `/playlist/detail?id=${id}`
    return axios.get(url)
}