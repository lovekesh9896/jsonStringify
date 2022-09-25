window.onload = function () {
    const convertBtn = document.getElementById("convert-btn");
    const resetBtn = document.getElementById("reset-btn");
    const squareBracketSelection = document.getElementById("squareBracketSelection");
    const inputTextarea = document.getElementById('input'); 
    const outputTextarea = document.getElementById('output');
    let isSquareBracketSelection = checkSquraBracketSelection();

    convertBtn.addEventListener('click', () => {
        let inputText = inputTextarea.value;
        const covertedText = convertText(inputText);
        outputTextarea.value = covertedText;
    })

    resetBtn.addEventListener('click', () => {
        inputTextarea.value = "";
        outputTextarea.value = "";
        inputTextarea.focus();
    })

    squareBracketSelection.addEventListener('click', () => {
        window.localStorage.setItem('isSquareBracketSelection', !isSquareBracketSelection);
        isSquareBracketSelection = !isSquareBracketSelection;
    })

    /**
     * Converts input text into stringified string
     * @param {string} input 
     * @returns string
     */
    function convertText(input) {
        input = input.replace(/\"/g, "\\\"").replaceAll(" ", "").replaceAll("\n", "");
        input = replaceFirstSquareBracket(input);
        return input;
    }

    function replaceFirstSquareBracket(input){
        let idx = input.indexOf("{")
        if(isSquareBracketSelection && idx != -1){
            input = input.substring(idx);
            input = input.substring(0, input.lastIndexOf("}")+1);
        }
        return input;
    }

    function checkSquraBracketSelection(){
        let temp = window.localStorage.getItem('isSquareBracketSelection');
        console.log(temp)
        if(temp != null && temp === true){
            squareBracketSelection.checked = true;
        }else{
            squareBracketSelection.checked = false;
        }
        return squareBracketSelection.checked;
    }
}

