          var ac = 0;
                        var j = 0;
                        var FeedArr = new Array();
                        function activity(){
                            ac++;
                            var objP = document.getElementById("ac");
                            objP.innerHTML = ac+" Activity";
                        }
                        function Save(){
                            FeedArr[j] = ac;
                            j+=1;
                            ac = 0;
                            var objP = document.getElementById("ac");
                            objP.innerHTML = ac+" Activity";
                            let leng = FeedArr.length;
                            for(var i =0;i<=leng;i++){
                                console.log(FeedArr[i]);
                            }
                            
                        }
                        function Create(){
                            let  alertObj = document.createElement("div");
                            alertObj.className = "alert alert-dark";
                            let leng = FeedArr.length;
                            for(var i = 0; i < j;i++){
                        alertObj.innerHTML = "<div class='alert alert-dark'>"
                        +FeedArr[i]+" Activity </div>";
                            }
                            document.getElementById("feed").appendChild(alertObj);
                        }

                        function Add(){
                            // ac * 10 = top
                            // ac * 5 = left
                            let pointObj = document.createElement('div');
                            pointObj.id = 'point';     
                    
                     for(var i=0;i<ac;i++){
    pointObj.innerHTML = "<div id='point' class='point dark' style='bottom:"
        +ac*1+"%;left:"+ac*2+"%;'>"+ac+"</div>";
                            }
                     document.getElementById("chart").appendChild(pointObj);
           
                    }
                     