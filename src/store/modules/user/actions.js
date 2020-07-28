export default{
    getParamSync(context,str){
        setTimeout(()=>{
            context.commit('getParam',str)
        },1000)
    },
    getParamSyncPromise(context,str){
        return new Promise((reslove,_reject)=>
            setTimeout(()=>{
                context.commit('getParam',str)
                reslove('成功')
            },2000)
        )
    }
}