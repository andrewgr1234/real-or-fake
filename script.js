function realPic() {
  let id = Math.floor((Math.random() * 6 + 1) * 10000);
  let img = `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;
  return img;
}

const fakePic = "https://thispersondoesnotexist.com/";

function game() {
  const imageCon = document.getElementById("images");
  const resultCon = document.getElementById("result");
  const scoreCon = document.getElementById("score1");
  const score1 = document.getElementById("score2");
  const resCon = document.getElementById("res");
  const closePopupBtn = document.getElementById("closePopup");
  let score = 0;

  function draw() {
    imageCon.innerHTML = "";
    resultCon.innerHTML = "";
    const againBtn = document.createElement("button");
    againBtn.textContent = "Play Again!";
    againBtn.id = "againBtn";

    againBtn.onclick = function () {
      draw();
      score = 0;
      imageCon.style.pointerEvents = "auto";
      scoreCon.innerHTML = `Score: ${score}`;
      scoreCon.style.fontSize = "16px";
    };

    const rand = Math.random() > 0.5;
    const arr = [rand, !rand];
    for (const isReal of arr) {
      const img = document.createElement("img");
      img.src = isReal ? realPic() : fakePic;
      img.onclick = function () {
        if (isReal) {
          score++;
          draw();
        } else {
          resultCon.innerHTML = "Try again";
          imageCon.style.pointerEvents = "none";
          scoreCon.style.fontSize = "50px";
          popup();
        }
        scoreCon.innerHTML = `Score: ${score}`;
      };
      imageCon.appendChild(img);
    }
  }

  function popup() {
    score1.innerHTML = `Score: ${score}`;
    resCon.style.display = "block";
  }

  closePopupBtn.onclick = function () {
    resCon.style.display = "none";
    imageCon.style.pointerEvents = "auto";
  };

  draw();
}

game();
