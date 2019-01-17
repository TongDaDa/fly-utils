import observe from './observeObject'
import Dep from './Dep'
import compile from './compile'

const dep = new Dep();

class Vue {
    constructor(){}
    _init(){

    }
    initData(){
        const data = this.data()
        observe(data,() => {

        })
    }
}
