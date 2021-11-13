var numberOfAnimalsButtons = document.querySelectorAll(".animals").length;

for (var i = 0; i < numberOfAnimalsButtons; i++) {

    document.querySelectorAll(".animals")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });

}

document.addEventListener("keypress", function (event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});


function makeSound(key) {

    switch (key) {
        case "w":
            var dog = new Audio("sounds/Digital Toy Dog - QuickSounds.com.mp3");
            dog.play();
            break;

        case "a":
            var cat = new Audio("sounds/Cat Meow 6 - QuickSounds.com.mp3");
            cat.play();
            break;

        case "s":
            var cow = new Audio('sounds/ES_Cow Moo 3 - SFX Producer.mp3');
            cow.play();
            break;

        case "d":
            var horse = new Audio('sounds/Horse Neighing 1 - QuickSounds.com.mp3');
            horse.play();
            break;

        case "j":
            var chicken = new Audio('sounds/Chicken Crow - QuickSounds.com.mp3');
            chicken.play();
            break;

        case "k":
            var sheep = new Audio('sounds/ES_Sheep Baa 4 - SFX Producer.mp3');
            sheep.play();
            break;

        case "l":
            var pig = new Audio('sounds/ES_Pig Oink 1 - SFX Producer.mp3');
            pig.play();
            break;

            case "Enter":
                var song = new Audio ('sounds/Old-macdonald-had-a-farm.mp3');
                song.play();
                break;

        default: console.log(key);

    }
}
function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}