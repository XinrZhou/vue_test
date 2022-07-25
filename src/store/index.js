//该文件用于创建vuex中最为核心的store
import { setTimeout } from 'core-js'
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//使用vuex插件
Vue.use(Vuex)

//准备actions--用于响应组件中的动作
const actions = {
    /* add(context,value){
        console.log('actions中的add被调用了')
        context.commit('ADD',value)
    },
    minus(context,value){
        console.log('actions中的minus被调用了')
        context.commit('MINUS',value)
    }, */
    addOdd(context,value){
        console.log('actions中的addOdd被调用了')
        if(context.state.sum % 2){
            context.commit('ADD',value)
        }
    },
    addWait(context,value){
        console.log('actions中的addWait被调用了')
        setTimeout(()=>{
            context.commit('ADD',value)
        },500)
    },
}
//准备mutations--用于操作数据（state）
const mutations = {
    ADD(state,value){
        console.log('mutats中的ADD被调用了')
        state.sum += value
    },
    MINUS(state,value){
        console.log('mutats中的MINUS被调用了')
        state.sum -= value
    },
}
//准备state--用于存储数据
const state = {
    sum:0,  //当前的和
    school:'尚硅谷',
    subject:'前端'
}
//准备getters--用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
