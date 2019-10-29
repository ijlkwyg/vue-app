import axios from 'axios'

import {HOST} from '../common/js/config'
//获取官方排行榜
export function getRank(id){
    const url = HOST + '/top/list?idx=' + id
    return axios.get(url)
}
