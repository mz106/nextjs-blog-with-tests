

const myObj = {
    myName: "michael",
    isAwesome: true,
    myAge: 38,
};

const { myName, isAwesome, myAge } = myObj;

// console.log("with destructuring: ", isAwesome)
// console.log("with dot notation: ", myObj.isAwesome)

myName = "dave";
console.log(myName)
console.log(myObj.myName)

//useState

const [ thing, setMything ] = useState();