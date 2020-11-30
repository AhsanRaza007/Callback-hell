let count = 10;

let counter = document.getElementById('counter');
let happy = document.getElementById('happy');
counter.innerHTML = count;



setTimeout(()=>{
    count--;
    counter.innerHTML = count;
    setTimeout(()=>{
        count--;
        counter.innerHTML = count;
        setTimeout(()=>{
            count--;
            counter.innerHTML = count;
            setTimeout(()=>{
                count--;
                counter.innerHTML = count;
                setTimeout(()=>{
                    count--;
                    counter.innerHTML = count;
                    setTimeout(()=>{
                        count--;
                        counter.innerHTML = count;
                        setTimeout(()=>{
                            count--;
                            counter.innerHTML = count;
                            setTimeout(()=>{
                                count--;
                                counter.innerHTML = count;
                                setTimeout(()=>{
                                    count--;
                                    counter.innerHTML = count;
                                    setTimeout(()=>{
                                        count--;
                                        counter.innerHTML = count;
                                        setTimeout(()=>{
                                            counter.style = "display: none;";
                                            happy.style = "display: bolck;";
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);