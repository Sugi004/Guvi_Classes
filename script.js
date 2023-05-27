let h1 = document.createElement("h1")
h1.style.textAlign ="center"
h1.style.fontSize = "40px"
document.body.appendChild(h1)


    
    setTimeout(()=>{
        h1.innerHTML = "10"

        setTimeout(()=>{
            h1.innerHTML = "9"

            setTimeout(()=>{
                h1.innerHTML = "8"

                setTimeout(()=>{
                    h1.innerHTML = "7"

                    setTimeout(()=>{
                        h1.innerHTML = "6"
            
                        setTimeout(()=>{
                            h1.innerHTML = "5"
            
                            setTimeout(()=>{
                                h1.innerHTML = "4"

                                setTimeout(()=>{
                                    h1.innerHTML = "3"
                        
                                    setTimeout(()=>{
                                        h1.innerHTML = "2"
                        
                                        setTimeout(()=>{
                                            h1.innerHTML = "1"

                                            setTimeout(() => {
                                                h1.innerHTML = "Happy Independence Day"
                                                h1.style.color= "green"
                                            }, 2000);
                                        },2000)
                                    },2000)
                                },2000)
                            },2000)
                        },2000)
                    },2000)
                },2000)
            },2000)
        },2000)
    },1000)