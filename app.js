document.addEventListener('DOMContentLoaded', () => {

    const bird = document.querySelector('.bird');
    const gameDisplay = document.querySelector('.game-container')
    const ground = document.querySelector(".ground")
    const scores = document.querySelector(".score")
    let birdleft = 220
    let birdbottom = 100
    let gravity = 2
    let isgameover = false;
    let gap = 430
    let score = 0
    scores.innerHTML = score
    function startGame() {


        birdbottom -= gravity
        scores.innerHTML = score
        bird.style.bottom = birdbottom + "px"
        bird.style.left = birdleft + "px"
    }
    var gravitySet = setInterval(startGame, 20)

    function getspacebar(e) {
        if (e.keyCode == 32) {
            jumpbird()
        }

    }
    function jumpbird() {
        if (birdbottom < 400) {
            birdbottom += 50
        }


        bird.style.bottom = birdbottom + "px"
        console.log(birdbottom)


    }
    function generateobs() {
        let obsleft = 1500;
        let randomHeight = Math.random() * 60;
        console.log(randomHeight)
        let obsbottom = randomHeight;
        const obstacle = document.createElement("div")
        const topObstacle = document.createElement("div")
        if (!isgameover) {

            obstacle.classList.add("obstacle")
            topObstacle.classList.add("topObstacle")
        }
        gameDisplay.appendChild(obstacle)
        gameDisplay.appendChild(topObstacle)
        obstacle.style.left = obsleft + "px"
        topObstacle.style.left = obsleft + "px"
        obstacle.style.bottom = obsbottom + "px"
        topObstacle.style.bottom = obsbottom + gap + "px"

        function moveobs() {

            obsleft -= 2
            if (!isgameover) {
                obstacle.style.left = obsleft + "px";
                topObstacle.style.left = obsleft + "px";
            }
            if (obsleft == -60) {
                gameDisplay.removeChild(obstacle)
            }
            if (obsleft > 200 && obsleft < 280 && birdleft == 220 && (birdbottom < obsbottom + 155 || birdbottom > obsbottom + gap - 193) || birdbottom == 0) {
                gameover()
                clearInterval(startmoving)
            }
            if (obsleft == 280 && birdleft) {
                score += 1


            }
        }
        let startmoving = setInterval(moveobs, 20)
        if (!isgameover) setTimeout(generateobs, 3000)
    }
    generateobs()
    function gameover() {
        clearInterval(gravitySet)
        isgameover = true
        document.removeEventListener("keyup", getspacebar)
    }

    document.addEventListener("keyup", getspacebar)



})
