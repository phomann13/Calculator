
let curr_func = ""
let prev_func = ""
let flag = -1
let answer = Number.MAX_SAFE_INTEGER
function input(element){
   
    if(curr_func.length >= 25){
        alert("Max Function Length Reached")
        curr_func = curr_func.substring(0, curr_func.length - 1)
        document.getElementById("Curr").textContent = curr_func
    }
    if (flag == 1){
        document.getElementById("Curr").textContent = ""
    }
    flag = 0
    if (element == 'CE'){
        curr_func = curr_func.substring(0, curr_func.length - 1)
        document.getElementById("Curr").textContent = curr_func
    }else if (element == 'AC'){
        curr_func = ""
        document.getElementById("Curr").textContent = ""
        document.getElementById("Prev").textContent = ""
    }else{
    if (element != '='){
        if (element == 'x'){
            element = '*'
        }
        console.log(curr_func)
        curr_func += element
        if (document.getElementById("Curr").textContent == answer && curr_func[0] != '+' && curr_func[0] != '-' && curr_func[0] != '/' &&curr_func[0] != '*' && curr_func[0] != '%'){
            document.getElementById("Curr").textContent = ""
            document.getElementById("Prev").textContent = "Answer = " + answer

        }
        if (document.getElementById("Curr").textContent == answer && curr_func[0] == '+' || curr_func[0] == '-' || curr_func[0] == '/' || curr_func[0] == '*' || curr_func[0] == '%' && answer != Number.MAX_SAFE_INTEGER){
            temp_func = curr_func
            curr_func == ""
            curr_func = answer + temp_func
    }
    
        
        let text
        text = document.getElementById("Curr").textContent 
        //console.log(text)
        text = text + element 
        document.getElementById("Curr").textContent = text
    } else {
    if (curr_func.length == 0){
        alert("There has been no change in input")
        return
    }
        try{
        answer = eval(curr_func)
        } catch (SyntaxError) {
            document.getElementById("Prev").textContent = "Error"
            document.getElementById("Curr").textContent = ""
            alert("There has been a syntax error with your equation")
            curr_func = ""
            answer = Number.MAX_SAFE_INTEGER
            return;
        } 
        if(prev_func.length != 0){
        document.getElementById("Prev").textContent = prev_func
        }else {
        document.getElementById("Prev").textContent = curr_func 
        }

        document.getElementById("Curr").textContent = answer
        if(answer > Number.MAX_SAFE_INTEGER){
             alert("Number is too large for IEEE-754 double-precision floating point and will be rounded ")
        }
        curr_func = ""
        }
        //console.log(text)
        
        //console.log("The final answer is:" + final_answer)
    }
}
    