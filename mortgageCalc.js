
    // This function updates the slider number shown

        // let num = document.getElementById("gross-income-input").value;
        

        //this adds the increment on the slider to whatever number
        document.getElementById("grossInput").step = "1000";


    function addComa(input,label)   {  
        
        
        let num = document.getElementById(input).value;
       

        if (num > 1000 && num < 10000) {
            
            let x = num.split('');
 
            x.splice(1, 0, ",")

            num = x.join('').toString(); 
        }
        else if (num > 9999 && num < 100000) {
            let x = num.split('');

            x.splice(2, 0, ",")

            num = x.join('').toString();
        }
        else if (num > 99999 && num < 999999) {
            let x = num.split('');

            x.splice(3, 0, ",")

            num = x.join('').toString();
        }
        else if (num > 999999) {
            let x = num.split('');

            x.splice(1, 0, ",")
            x.splice(5, 0, ",")


            num = x.join('').toString();
            }
        

        document.getElementById(label).innerHTML = num;
    }
    