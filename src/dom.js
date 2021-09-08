window.dom ={
    find(selector,scope){
        return (scope || document).querySelectorAll(selector)
      },
      style(node,name,value){
        if(arguments.length === 3){
            node.style[name] = value
        }else if(arguments.length === 2){
            if(name === String){
                return node.style[name]
            }else if(name instanceof Object){
                for(let key in object){
                    const object = name
                    node.style[key] = name[key]
                }
            }
        }
        },
        each(nodeList,fn){
            for(let i = 0;i<nodeList.length;i++){
                fn.call(null,nodeList[i])
            }
        }
};