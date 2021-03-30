

        //this adds the increment on the slider to whatever number
        document.getElementById("grossInput").step = "5000";
        // document.getElementById("debtInput").step = "10";
        // document.getElementById("downPaymentInput").step = "1000";
        

    //this will add a coma to the labels on the sliders
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
        
            //this adds the dollar sign to only the mortgage amount label. 
            //adds percentage sign to the interest rate and excludes the year / term label
        if (label === grossLabel.id){
            document.getElementById(label).innerHTML = "$" + num;
        }
        else if(label === InterestLabel.id){
            document.getElementById(label).innerHTML = num + "%";
        }
        else{
        document.getElementById(label).innerHTML = num;
        }
    };

    // this adds a coma to the returned value
    function addComaToReturnedNum(finalValueToFormat) {

        let num = finalValueToFormat.toString();

       

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
            return num;
    };

    

    function addition() {

        //Mortgage amount
        const mortgage = (parseInt(document.getElementById("grossInput").value));

        // //monthly debt amount 
        // const debt = parseInt(document.getElementById("debtInput").value)

        // //down payment amount
        // const downPayment = parseInt(document.getElementById("downPaymentInput").value)

        //term in months
        const term = parseInt(document.getElementById("termInput").value) * 12;

        //interest rate
        let interestRate = document.getElementById("interestInput").value;

        //interest rate as a decimal
        let decimalInterest = interestRateFormatter(interestRate)




        //thisfunction takes the user unput percentage rate and returns the interest as a decimal
        function interestRateFormatter(interestRate)  {
            interestRatePlaceholder = 0;

            if (interestRate >= 10) {
                interestRatePlaceholder = (interestRate/100).toFixed(2)
            }
            else if(interestRate < 10) {
                interestRatePlaceholder = (interestRate/100).toFixed(2)
            }

           return parseFloat(interestRatePlaceholder) / 12
        };

     

    // This is the meat and bones of this function
    //the part one and two separation is to make it easier to read

    //P = L[c(1 + c)n]/[(1 + c)n - 1]
    // return a loan amount based on inputs
        //P = monthly payment
        //L = loan in $
        //c = interest
        //n = months

    //let returnedValue =  mortgage * (((decimalInterest * (Math.pow((1 + decimalInterest), term))) / (Math.pow((1 + decimalInterest), term)) - 1))


    const partOne = decimalInterest * (Math.pow((1 + decimalInterest), term));
    const partTwo = (Math.pow((1 + decimalInterest), term)) - 1;

    let returnedValue =  Math.ceil(mortgage * (partOne / partTwo));


    // this updates the text box for FINAL NUM !!!

    document.getElementById("final-num").textContent = `$${addComaToReturnedNum(returnedValue)}`;
 


    


    };
    
    