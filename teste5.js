
function RevertString(string)
{
    splittedString = string.split("");

    returnedString = ""

    for(let i = splittedString.length - 1; i>=0; i--)
    {
        returnedString += splittedString[i]
    }
    return returnedString;
}


console.log(RevertString("Target Sistemas"));
