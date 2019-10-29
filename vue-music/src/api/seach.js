import axios from 'axios'

import {HOST} from '../common/js/config'
//获取默认搜索关键字
export function getDefaultSeach(){
    const url = HOST + '/search/default'
    return axios(url)
}