
 document.addEventListener('DOMContentLoaded', () => {
    let users = [
      {
        userImage:
          "https://i.pinimg.com/736x/ff/fb/ad/fffbad4514fb3494d35b90886488cf4b.jpg",
        name: "helo",
        jobPosition: "Data analyt",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, natus quod. Facilis dolores molestias illum magnam nostrum id, vel quasi earum, voluptate labore, dicta totam!",
      },
      {
        userImage:
          "https://i.pinimg.com/736x/59/55/d0/5955d0dcd9d4f2fce36e2797b1daa11a.jpg",
        name: "helrhje",
        jobPosition: "Backend engineer",
        message:
          "ajflkdjflkdjklfjkljdfkljldklfjkdd jkfjsdkljf;akljflksdjf;lkasj jfklddjf;klakjfkla;sdjf;lkasdjl jfkljf;lajflk;ja",
      },
      {
        userImage:
          "https://i.pinimg.com/736x/98/b1/12/98b11253bad4aacfaed7381a96362324.jpg",
        name: "Arjun Bhtrai ",
        jobPosition: "fox",
        message: "jsdlkfjsdlkj jlkdjfkljd jlkdjflk; jl;kjdfkd",
      },
      {
        userImage:
          "https://i.pinimg.com/736x/97/ef/24/97ef241b207714a81b26d15d7371dd10.jpg",
        name: "ApplE banana",
        jobPosition: "zebra",
        message:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tempora.",
      },
    ];

    let userImage = document.querySelector('img');
    let userName = document.querySelector('.name');
    let userJobPosition = document.querySelector('.job-position');
    let userMessage = document.querySelector('.message');
    let sliders = document.querySelectorAll('.slider')
    let surpriseButton = document.querySelector('.surprise-button');
    let index = 0;


    surpriseButton.addEventListener('click', () => {
      let randomNumber = Math.floor(Math.random() * users.length)
      console.log(randomNumber);
      
      index = randomNumber;
      userImage.src = users[index].userImage;
      userName.textContent = users[index].name;
      userJobPosition.textContent = users[index].jobPosition;
      userMessage.textContent = users[index].message;
       
    })

    sliders.forEach(slider => {
        
        slider.addEventListener('click', () => {
            
            
           if(slider.classList.contains('right-slider')){
                index++;
                if(index>users.length-1){
                    index = 0;
                }
                userImage.src = users[index].userImage;
                userName.textContent = users[index].name;
                userJobPosition.textContent = users[index].jobPosition;
                userMessage.textContent = users[index].message;        
           } else if(slider.classList.contains('left-slider')){
                index--;
                if(index<0){
                    index = users.length-1;
                }
                userImage.src = users[index].userImage;
                userName.textContent = users[index].name;
                userJobPosition.textContent = users[index].jobPosition;
                userMessage.textContent = users[index].message;          
           } 
        })
    })




})