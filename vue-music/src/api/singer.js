import jsonp from '../common/js/jsonp'
import {params,options} from './config'

/**
 * 
 * @param {*} params 默认参数
 */
export function getSingerList(params){
    const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
    const data = Object.assign({},params,{
        g_tk:1664029744,
        channel:'singer',
        page:'list',
        key:'all_all_all',
        pagesize: 100,
        pagenum:1,
        hostUin:0,
        needNewCode:0,
        platform:'yqq'
    })
    return jsonp(url,data,options)
}
