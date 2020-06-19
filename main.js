document.querySelector(".control-button span").onclick = function(){
    let yourName = prompt("Whats Your Name?");
    if(yourName == null || yourName == "")
    {
        document.querySelector(".name span").innerHTML='UnKnown';
    }else
    {
        document.querySelector(".name span").innerHTML=yourName;
    }
        document.querySelector(".control-button ").remove();
};
//effect duration
let duration = 1000;
//select blocks container
let blockContainer = document.querySelector(".memory-game-block");
//creat array from game block
let blocks = Array.from(blockContainer.children);
//add order range 
let orderRange =[...Array( blocks.length).keys()];

shuffle(orderRange);

//add order css property to game blocks
blocks.forEach((block , index)=>{
   
    block.style.order=orderRange[index];

    block.addEventListener('click' , function(){
        
        flipBlock(block);
    });

});

//filb block function
function flipBlock(selectedBlock){
    //add class filpped
    selectedBlock.classList.add('is-flipped');
    //collect all flipped cards
    let allFlippedBlocks =blocks.filter(FlippedBlocks => FlippedBlocks.classList.contains('is-flipped'));
    
     //if theres two selected blocks
     if(allFlippedBlocks.length === 2)
     {
        
        //stop clicking function
        stopClicking();
      //check matched block function
      checkMatchedBlocks(allFlippedBlocks[0] , allFlippedBlocks[1])
     }
 

};
//function stop clicking on the 
function stopClicking()
{
    blockContainer.classList.add('no-clicking');

    setTimeout(()=>{
        //remove class  no clicking after the duration
    blockContainer.classList.remove('no-clicking');
    }, duration)
};
//check function blocked
function checkMatchedBlocks(firstBlock , secondBlock)
{
    let triseElement=document.querySelector(".trise span");
    if(firstBlock.dataset.technologey === secondBlock.dataset.technologey)
    {
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');


        firstBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');
    }
    else
    {
        triseElement.innerHTML=parseInt(triseElement.innerHTML) +1;

        setTimeout(()=>{
            firstBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');
        }, duration);
    };
};

//shuffle function
function shuffle(array)
{
    let current = array.length,
        temp,
        random;

        while(current > 0)
        {
            //get random number
            random=Math.floor(Math.random()*current);

            //decrease lenght by one
            current--;

            //1- save current elemants in stash 
            temp=array[current];
            //2- currnet element = random element
            array[current]=array[random];
            //3-random element =get element from statsh
            array[random]=temp;
        }
        return array;
};