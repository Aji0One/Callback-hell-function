
var res=document.getElementById("slide");
var count=10;
setTimeout(()=>{
    res.innerHTML=count;
        count--;
    setTimeout(()=>{
        res.innerHTML=count;
            count--;
        setTimeout(()=>{
            res.innerHTML=count;
            count--;
            setTimeout(() => {
                res.innerHTML=count;
                count--;
                setTimeout(()=>{
                    res.innerHTML=count;
                    count--;
                    setTimeout(()=>{
                        res.innerHTML=count;
                        count--;
                        setTimeout(()=>{
                            res.innerHTML=count;
                            count--;
                            setTimeout(()=>{
                                res.innerHTML=count;
                                count--;
                                setTimeout(()=>{
                                    res.innerHTML=count;
                                    count--;
                                    setTimeout(()=>{
                                        res.innerHTML=count;
                                        setTimeout(()=>{
                                            res.innerHTML="Happy Independence Day";
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)

                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)