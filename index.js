
$(document).ready(function () {
 var cstr = ""; 
var hstr = ""; 
 var tot = ""; 
var vis = false; 
var dpoint_active = true; 
var oper_active = true;
 document.getElementById('keypad').addEventListener('click', getKey);
function getKey(k) {
 var key = k.target.id;
switch (key) {

            case 'zero': key = 0;

                break;

            case 'one': key = 1;

                break;

            case 'two': key = 2;

                break;

            case 'three': key = 3;

                break;

            case 'four': key = 4;

                break;

            case 'five': key = 5;

                break;

            case 'six': key = 6;

                break;

            case 'seven': key = 7;

                break;

            case 'eight': key = 8;

                break;

            case 'nine': key = 9;

                break;

        }

        compute(key);

    }
 function displayIt(display, history) {

        document.getElementById("display").innerHTML = display;

        document.getElementById("history").innerHTML = history;

    }

function calcIt(show, func) {

        cstr += show;

        hstr += show;

        tot += func;

        displayIt(cstr, hstr);

    }
 function deleteOne() {

        cstr = cstr.slice(0, -1);

        hstr = hstr.slice(0, -1);

        tot = tot.slice(0, -1);

        displayIt(cstr, hstr);

    }
function compute(data) {

        if (cstr === "" && data === 0) {

            return 0;

        }if (data >= 0 && data <= 9) {

            if (vis) {

                cstr = "";

                hstr = ""

                tot = "";

                vis = false;

            }
oper_active = true;
calcIt(data, data);

        }

        if (data == "decimal") {

            if (dpoint_active === false) {

                return 0;

            }

            if (vis || cstr == 0 || hstr == 0) {

                cstr = "0.";

                hstr = "0.";

                tot = "0.";

                vis = false;

                displayIt(cstr, hstr);

                dpoint_active = false;

            } else {

                calcIt(".", ".");

                dpoint_active = false;

            }

        }


        if (data == "add") {

            if (tot == "") {

                return 0;

            }

            if (oper_active == false) {

                deleteOne();

            }

            vis = false;

            dpoint_active = true;

            calcIt("+", "+");

            oper_active = false;

        }

        if (data == "subtract") {

            if (tot == "") {

                return 0;

            }

            if (oper_active == false) {

                deleteOne();

            }

            vis = false;

            dpoint_active = true;

            calcIt("-", "-");

            oper_active = false;

        }

        if (data == "multiply") {

            if (tot == "") {

                return 0;

            }

            if (oper_active == false) {

                deleteOne();

            }

            vis = false;

            dpoint_active = true;

            oper_active = false;

            calcIt("x", "*");

        }

        if (data == "divide") {

            if (tot == "") {

                return 0;

            }

            if (oper_active == false) {

                deleteOne();

            }

            vis = false;

            dpoint_active = true;

            oper_active = false;

            calcIt("/", "/");

        }

        if (data == "equals") {

            if (tot == "" || vis) {

                return 0;

            }

            vis = true;

            dpoint_active = true;

            hstr += " = \xa0" + eval(tot);

            displayIt(eval(tot), hstr);

            tot = document.getElementById("display").innerHTML;

            cstr = tot;

        }

        if (data == "clear") {

            cstr = "";

            hstr = "";

            tot = "";

            vis = false;

            dpoint_active = true;

            displayIt("0", "0");

        }

        if (data == "delete") {

            if (vis == true || cstr == "" || cstr.length == 1) {

                cstr = "0";

                hstr = "0";

                displayIt(cstr, hstr);

                return 0;

            }



            deleteOne();



        }


    }

});