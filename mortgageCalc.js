
    // This function updates the slider number shown

        // let num = document.getElementById("gross-income-input").value;
        

        //this adds the increment on the slider to whatever number
        document.getElementById("grossInput").step = "5000";
        document.getElementById("debtInput").step = "10";
        document.getElementById("downPaymentInput").step = "1000";
        


    function addComa(input,label)   {  
        
        
        let num = document.getElementById(input).value;
       

        if (num > 999 && num < 10000) {
            
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
    };

    function addition() {
        //monthly gross income
        const grossIncome = (parseInt(document.getElementById("grossInput").value)) / 12;

        //monthly debt amount 
        const debt = parseInt(document.getElementById("debtInput").value)

        //down payment amount
        const downPayment = parseInt(document.getElementById("downPaymentInput").value)

        //term in years
        const term = parseInt(document.getElementById("termInput").value)

        //interest rate
        const interestRate = parseInt(document.getElementById("interestInput").value)


        //L[c(1 + c)n]/[(1 + c)n - 1]
        let returnedNumber = (grossIncome * 0.28)
        
        

        // this updates the text box for FINAL NUM !!!

      document.getElementById("final-num").textContent = returnedNumber;


        

    };
    
    