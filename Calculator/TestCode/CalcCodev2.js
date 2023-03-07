let curr_func = ""
let prev_func = ""
let flag = -1
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
        curr_func += element
        left_num = left(curr_func, 0, 0)
        console.log("Left NUMBER IS: " + left_num)

        if (curr_func[0] == '+' || curr_func[0] == '-' && (!(isNaN(left[0])))   || curr_func[0] == '/' || curr_func[0] == 'x' || curr_func[0] == '%'){
            
            temp_func = curr_func
            curr_func == ""
            //console.log("Current dfunction: " + curr_func)
            //console.log("Temp function: " + temp_func)
            if (final_answer[0] == '-'){
                console.log("Result was a negative number")
                    temp = final_answer.substring(1)
                    curr_func = "(0-"
                    curr_func += temp + ")"
             
            } else {
            curr_func = final_answer.toString()
            }
            //console.log("Current dfunction: " + curr_func)
            curr_func += temp_func
            //console.log("Current dfunction: " + curr_func)
            //console.log("Arithmetic first: " + curr_func)
            document.getElementById("Prev").textContent = "Answer = "+ final_answer
            document.getElementById("Curr").textContent = curr_func
            
        } else{
    let text
    text = document.getElementById("Curr").textContent 
    //console.log(text)
    text = text + element 
    document.getElementById("Curr").textContent = text
   
        }
    } else {
        flag = 1;
    if (curr_func.length == 0){
        alert("There has been no change in input")
        return
    }
    
    // if (curr_func.indexOf('(') != -1){
    //    // console.log("In Paren If: " + curr_func)
    //    prev_func = curr_func
    //    curr_func = answer(curr_func)  
    // } 
        //console.log("result")
        v = result(curr_func)
        if(v.indexOf('.' == -1)){
            v = parseFloat(v) 
        } else {
        v = parseFloat(v).toFixed(10);
        }
        if (isNaN(v) || v == undefined || v === undefined || v == null){
            document.getElementById("Curr").textContent = "Error"
            curr_func = ""
            final_answer = ""
        } else {
        final_answer = v.toString()
       
        curr_func = curr_func + element 
        if(prev_func.length != 0){
        document.getElementById("Prev").textContent = prev_func
        }else {
        document.getElementById("Prev").textContent = curr_func 
        }

        document.getElementById("Curr").textContent = final_answer
        curr_func = ""
        }
        //console.log(text)
        
        //console.log("The final answer is:" + final_answer)
      
    }
}
    
}

// function answer(func){
//     console.log("Ansewr function")
    
    
//     while(true){
//     let openings_index = [] //push pop
//     let closings_index = [] //push shift
//     for (let i = 0; i < func.length; i++){
//         if(func[i] == '('){
//             openings_index.push(i)
//         } 
//         if (func[i] == ')') {
//             closings_index.push(i)
//         }
//     }
//     if(openings_index.length == 0){
//         break;
//     }
//     if (openings_index.length != closings_index.length){
//         alert("Invalid Experssion, parenthesis do not match")
//         closings_index = []
//         openings_index = []
//         return
//     }
//     let open_index = openings_index.pop()
//     let close_index = -1
//     for(let i = 0; i < closings_index.length; i++){
//         if(closings_index[i] > open_index){
//             close_index = closings_index[i]
//             break;
//         }
//     }
//     console.log("Open INdex is:" + open_index)
//     console.log("Close INdex is:" + close_index)
//     console.log("String that is going into result: " + func.substring(open_index + 1, close_index))
//     func = func.substring(0, open_index) + result(func.substring(open_index + 1, close_index)) + func.substring(close_index + 1)
//     //+ result(func.substring(open_index + 1, close_index) ) + func.slice(lastIndex-1))
    
//     console.log("Calling result in answer results in: ")
//     console.log(func)
    
//     }
//     return func;


// }
// function result(func){
//     //console.log(func)
//     //func = func.split(/['x', '/', '+', '-'']/)
//     while(func.indexOf('x') != -1 || func.indexOf('/') != -1 || func.indexOf('+') != -1 || func.indexOf('-') != -1 ){
    
//     if (func.indexOf('x') != -1 && func.indexOf('/') != -1 ){ // have multiply and divide
//         if (func.indexOf('x') < func.indexOf('/')) { 
//         //console.log("mult")
//         func = multiply(func)
//         //console.log("Multiply retruned: " + func)
//         }
//         //console.log("divide")
//         func = divide(func)
//         //console.log("Divide retruned: " + func)
        
//     }
//     if (func.indexOf('x') == -1 && func.indexOf('/') != -1 ){ //have just divide
//         //console.log("divide1")
//         func = divide(func)
//         //console.log("Divide retruned: " + func)
//     }
//     if (func.indexOf('x') != -1 && func.indexOf('/') == -1 ){ //have just multiply
//        // console.log("multiply")
//         func = multiply(func)
//         //console.log("Multiply retruned: " + func)
//         }
    
//     if (func.indexOf('+') != -1 && func.indexOf('-') != -1 ){ //have add and subtract
//         if (func.indexOf('+') < func.indexOf('-')) {
//         //console.log("add")
//         func = add(func)
//         }
//         //console.log("minus")
//         func = subtract(func)
//     }
//     if (func.indexOf('+') == -1 && func.indexOf('-') != -1 ){ //have just subtract
//         //console.log("subtract")
//         func = subtract(func)
//     }
//     if (func.indexOf('+') != -1 && func.indexOf('-') == -1 ){ //have just add
//         //console.log("add")
//         func = add(func)
//     }
//     console.log("The current function after all operations once: " + func)
//     if(func.indexOf('x') == -1 && func.indexOf('/') == -1 && func.indexOf('+') == -1 && func.indexOf('-') != -1  ){
//         if (check_negative(func)){
//             console.log("NEGATIVE")
//             break;
//         }
//     }
//     console.log("The current function is: " + func)
//     if (isNaN(func) || func === undefined || func == undefined || func == null){
//         document.getElementById("Curr").textContent = "Error"
//         func = ""
//         return;
//     }
// }
//         console.log("No arithmetics left")
//         console.log(func)
//         return func;
     
   
    
// }
// function check_negative(func){
//     let count = 0
//     for(let i = 0; i < func.length; i++){
//         if (func[i] == '-'){
//             count++
//         }
//     }
//     if (count == 1){
//         return true
//     }
//     return false
// }
// function subtract(func){
//     let left_end = -1
//     let right_end = -1
//     index = func.indexOf('-')
//     left_val = left(func, index - 1, left_end)
//     right_val = right(func, index + 1, right_end)
//     //console.log("Right end: " + right_val[1])
//     if (left_val[1] != 0){
//         left_val[1] += 1
//     }
//     if (right_val[1] == func.length - 1){
//         right_val[1] += 1
//     } 
//     //console.log("This left number mult is:" + left_val[0])
//     replace_search = func.substring(left_val[1], right_val[1]) 
//     //console.log("Replace: " + replace_search)
//     replace_value = left_val[0] - right_val[0]
//     //console.log("After Subtracting the value is: " + replace_value)
//     // if (replace_value < 0){
//     //     rv = replace_value.toString() 
//     //     rv = rv.replace('-', '*')
//     //     func = func.replace(replace_search, rv)
//     //     return func;
//     // }
//     func = func.replace(replace_search, replace_value)
//     return func;
//     //console.log("result of mult: " + left_val[0] * right_val[0])
//     //console.log(func)
// }
// function add(func){
//     let left_end = -1
//     let right_end = -1
//     index = func.indexOf('+')
//     left_val = left(func, index - 1, left_end)
//     right_val = right(func, index + 1, right_end)
//     //console.log("Right end: " + right_val[1])
//     if (left_val[1] != 0){
//         left_val[1] += 1
//     }
//     if (right_val[1] == func.length - 1){
//         right_val[1] += 1
//     } 
//     //console.log("This left number mult is:" + left_val[0])
//     replace_search = func.substring(left_val[1], right_val[1]) 
//     //console.log("Replace: " + replace_search)
//     replace_value = left_val[0] + right_val[0]
//     func = func.replace(replace_search, replace_value)
//     return func;
//     //console.log("result of mult: " + left_val[0] * right_val[0])
//     //console.log(func)
// }

// function multiply(func){
//     let left_end = -1
//     let right_end = -1
//     index = func.indexOf('x')
//     left_val = left(func, index - 1, left_end)
//     right_val = right(func, index + 1, right_end)
//     //console.log("Right end: " + right_val[1])
//     if (left_val[1] != 0){
//         left_val[1] += 1
//     }
//     if (right_val[1] == func.length - 1){
//         right_val[1] += 1
//     } 
//    // console.log("This left number mult is:" + left_val[0])
//     replace_search = func.substring(left_val[1], right_val[1]) 
//     //console.log("Replace: " + replace_search)
//     replace_value = left_val[0] * right_val[0]
//     func = func.replace(replace_search, replace_value)
//     return func;
//     //console.log("result of mult: " + left_val[0] * right_val[0])
//     //console.log(func)
// }
// function divide(func){
//     let left_end = -1
//     let right_end = -1
//     index = func.indexOf('/')
//     left_val = left(func, index - 1, left_end)
//     right_val = right(func, index + 1, right_end)
//     //console.log("Right end: " + right_val[1])
//     if (left_val[1] != 0){
//         left_val[1] += 1
//     }
//     if (right_val[1] == func.length - 1){
//         right_val[1] += 1
//     } 
    
//     replace_search = func.substring(left_val[1], right_val[1]) 
//     //console.log("Replace: " + replace_search)
//     replace_value = (left_val[0] / right_val[0])
    
//     func = func.replace(replace_search, replace_value)
//     return func;
//     //console.log("result of mult: " + left_val[0] * right_val[0])
//     //console.log(func)
// }
// function left(func, index, left_end){
//     numb = ""
//     findex = -1 
    
//     for(let i = index; i >= 0 ; i--){
//         findex = i
//         if(func[i] == 'x' || func[i] == '/' || func[i] == '-' || func[i] == '+'  ) {
//             //console.log("Result of left call: " + reverse(numb))
//             results = [parseFloat(reverse(numb)), findex]
//             return results
//     }
    
//     numb += (func[i])
// }
// //console.log("Result of left call: " + reverse(numb))

// int = parseFloat(reverse(numb))
// if(int > Number.MAX_SAFE_INTEGER){
//     alert("Number is too large for IEEE-754 double-precision floating point and will be rounded ")
// }
// //console.log("Result of left call: " + int)

// results = [int, findex]
// return results;
// }

// function right(func, index, right_end){
//     numb = ""
//     findex = -1
//     for(let i = index; i < func.length ; i++){
//         findex = i
//         if(func[i] == 'x' || func[i] == '/' || func[i] == '-' || func[i] == '+'  ) {
//             //console.log("Result of right call: " + numb)
//             results = [parseFloat(numb), findex]
//             return results
//     }
//     numb += (func[i])
// }
// //console.log("Result of right call: " + numb)
// int = parseFloat(numb)
// results = [int, findex]
// return results
// }
// function reverse(s){
//     return s.split("").reverse().join("");
// }
