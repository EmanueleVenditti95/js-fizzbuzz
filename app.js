for (let i = 0; i < 100; i++) {
    let n = (i + 1)
    // console.log(n)
   
    let rest3 = (n % 3)
    //  console.log(rest3)

    let rest5 = (n % 5)    
    // console.log(rest5)

    
    if (rest3 == 0 && rest5 == 0) {
        console.log(n = 'FizzBuzz')

    } else if (rest5 == 0) {
        console.log(n = 'Buzz')

    } else if (rest3 == 0) {
        console.log(n = 'Fizz')

    } else {
        console.log(n)
    }

    containerDOMElement = document.getElementById('container')
    containerDOMElement.append('box')

    // let container = document.createElement('div')
    // container.classList.add('container')
    // console.log(container)

	let box = document.createElement('div')
    console.log('div')
	box.classList.add('box')
    box.innerHTML = n
    console.log('box')

}
