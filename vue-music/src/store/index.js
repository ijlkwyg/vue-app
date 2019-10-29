import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        isLogin:false,
        recommend:{id:null,list:null}
        
    },
    getters:{

    },
    mutations:{
        changeLogin(state){
            state.isLogin = true 
        },
        quitLogin(state){
            state.isLogin = false
        }
    },
    actions:{
        
    }
})
export default store