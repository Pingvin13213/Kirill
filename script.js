let isStopped = false;

function game() {
  let healthbar = document.querySelector(".healthbar");
  let q1 = document.querySelector(".q1");
  const pers = document.querySelector(".img");

  // let w4 = document.querySelector();
  let wb1 = document.querySelector(".wb1");
  let wb2 = document.querySelector(".wb2");
  let wb3 = document.querySelector(".wb3");
  let b1 = document.querySelector(".b1");
  // block vars
  let block1 = false;
  let block2 = false;

  let health = 100;

  // Attac 2 player
  function healthMinus(dmg) {
    if (block1) {
      console.log("1 player");
    } else {
      health -= dmg;
      q1.style.width = `${health}%`;
    }
  }

  let lightAttackAnim = [
    "02__1_-removebg-preview.png",
    "03__1_-removebg-preview.png",
    "04__1_-removebg-preview.png",
    "06__1_-removebg-preview.png",
    "01__1_-removebg-preview.png",
  ];

  function lightAttack() {
    let interval = 130;
    let index = 0;
    wb1.classList.add("ww1");

    window.addEventListener("keyup", (e) => {
      if (e.key === "w") {
        pers.src = lightAttackAnim[lightAttackAnim.length - 1];
        wb1.classList.remove("ww1");
      }
    });
    console.log();

    let myAudio = new Audio("/light.mp3");
    myAudio.play().catch(() => console.log("audi er"));

    function showFrame() {
      pers.src = lightAttackAnim[index];
      index++;
      if (index < lightAttackAnim.length) {
        setTimeout(showFrame, interval);
      }
      if (hp < 4) {
        b1.classList.add("ww2");
        console.log("asdadad");
        let myAudio = new Audio("/yeahboy.mp3");
        myAudio.play().catch(() => console.log("audi er"));
      } else {
        hpMinus(4);
      }
    }

    showFrame();
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "w") {
      lightAttack();
    }
  });

  let blockAnim = "08__2_-removebg-preview.png";

  function block() {
    wb2.classList.add("ww1");
    function showFrame() {
      pers.src = blockAnim;
      block1 = true;
    }
    showFrame();
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "a") {
      block();
    }
  });

  window.addEventListener("keyup", (e) => {
    if (e.key === "a") {
      pers.src = lightAttackAnim[lightAttackAnim.length - 1];
      block1 = false;
      wb2.classList.remove("ww1");
    }
  });
  let HeadAnim = [
    "01__3_-removebg-preview.png",
    "02__3_-removebg-preview.png",
    "03__3_-removebg-preview.png",
    "04__3_-removebg-preview.png",
    "05__3_-removebg-preview.png",
    "06__4_-removebg-preview.png",
    "01__1_-removebg-preview.png",
  ];

  function Head() {
    let interval = 130;
    let index = 0;
    wb3.classList.add("ww1");

    let myAudio = new Audio("/head.mp3");
    myAudio.play().catch(() => console.log("audi er"));

    function showFrame() {
      pers.src = HeadAnim[index];
      index++;
      if (index < HeadAnim.length) {
        setTimeout(showFrame, interval);
      }
      if (hp < 4) {
        b1.classList.add("ww2");
        console.log("asdadad");
        let myAudio = new Audio("/yeahboy.mp3");
        myAudio.play().catch(() => console.log("audi er"));
      } else {
        hpMinus(2);
      }
    }

    showFrame();
  }
  window.addEventListener("keydown", (e) => {
    if (e.key === "d") {
      Head();
    }
  });
  window.addEventListener("keyup", (e) => {
    if (e.key === "d") {
      pers.src = lightAttackAnim[lightAttackAnim.length - 1];
      wb3.classList.remove("ww1");
    }
  });

  let hp = document.querySelector(".hp");
  let q2 = document.querySelector(".q2");
  const pers2 = document.querySelector(".img1");

  let wb4 = document.querySelector(".wb4");
  let wb5 = document.querySelector(".wb5");
  let wb6 = document.querySelector(".wb6");
  let b2 = document.querySelector(".b2");

  // health bar of second player
  hp = 100;
  //Attac 1 player
  function hpMinus(dmg) {
    if (block2) {
      console.log("2 player");
    } else {
      hp -= dmg;
      q2.style.width = `${hp}%`;
    }
  }

  let FirstAttackAnim = [
    "imgonline-com-ua-ReplaceColor-Qy38sIwxyM2Ie-removebg-preview.png",
    "imgonline-com-ua-ReplaceColor-HpeXJpjKXaQEnI-removebg-preview.png",
    "imgonline-com-ua-ReplaceColor-2F2TLWUmECrQ-removebg-preview.png",
    "imgonline-com-ua-ReplaceColor-oXcUqaaZygDT-removebg-preview.png",
    "imgonline-com-ua-Replace-color-Cq0Grn3aHE-removebg-preview.png",
  ];
  function FirstAttack() {
    let interval = 130;
    let index = 0;
    wb4.classList.add("ww1");

    let myAudio = new Audio("/light.mp3");
    myAudio.play().catch(() => console.log("audi er"));

    function showFrame() {
      pers2.src = FirstAttackAnim[index];
      index++;
      if (index < FirstAttackAnim.length) {
        setTimeout(showFrame, interval);
      }
      if (health < 4) {
        b2.classList.add("ww3");
        console.log("fsssfsfs");
        let myAudio = new Audio("/yeahboy.mp3");
        myAudio.play().catch(() => console.log("audi er"));
        isStopped = true;
      } else {
        healthMinus(4);
      }
    }

    showFrame();
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "8") {
      FirstAttack();
    }
  });
  window.addEventListener("keyup", (e) => {
    if (e.key === "8") {
      pers2.src = FirstAttackAnim[FirstAttackAnim.length - 1];
      wb4.classList.remove("ww1");
    }
  });
  let blocirAnim =
    "imgonline-com-ua-Replace-color-PFmDShn64JfnJCw-removebg-preview.png";

  function blocir() {
    function showFrame() {
      pers2.src = blocirAnim;
      block2 = true;
      wb5.classList.add("ww1");
    }
    showFrame();
  }

  console.log(block2);

  window.addEventListener("keydown", (e) => {
    if (e.key === "4") {
      blocir();
    }
  });

  window.addEventListener("keyup", (e) => {
    if (e.key === "4") {
      pers2.src = FirstAttackAnim[FirstAttackAnim.length - 1];
      block2 = false;
      wb5.classList.remove("ww1");
    }
  });
  let golovaAnim = [
    "imgonline-com-ua-Replace-color-PfeMU6e7OKGffp4M-removebg-preview.png",
    "imgonline-com-ua-Replace-color-ZB0yE7fu4nWzW-removebg-preview.png",
    "imgonline-com-ua-Replace-color-EbNVfXxFiGpQu-removebg-preview.png",
    "imgonline-com-ua-Replace-color-5iVz9xCl8E5C-removebg-preview.png",
    "imgonline-com-ua-Replace-color-qDogPi4zldKA7HS-removebg-preview.png",
    "imgonline-com-ua-Replace-color-x9gdKAaZoTezq6-removebg-preview.png",
    "imgonline-com-ua-Replace-color-Cq0Grn3aHE-removebg-preview.png",
  ];

  function golova() {
    let interval = 130;
    let index = 0;
    wb6.classList.add("ww1");

    let myAudio = new Audio("/head.mp3");
    myAudio.play().catch(() => console.log("audi er"));

    function showFrame() {
      pers2.src = golovaAnim[index];
      index++;
      if (index < golovaAnim.length) {
        setTimeout(showFrame, interval);
      }
      if (health < 4) {
        b2.classList.add("ww3");
        console.log("fsssfsfs");
        let myAudio = new Audio("/yeahboy.mp3");
        myAudio.play().catch(() => console.log("audi er"));
      } else {
        healthMinus(2);
      }
    }

    showFrame();
  }
  window.addEventListener("keydown", (e) => {
    if (e.key === "6") {
      golova();
    }
  });
  window.addEventListener("keyup", (e) => {
    if (e.key === "6") {
      pers2.src = FirstAttackAnim[FirstAttackAnim.length - 1];
      wb6.classList.remove("ww1");
    }
  });
}

document.addEventListener("click", () => {
  document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    let myAudio = new Audio("/mortal.mp3");
    myAudio.play().catch(() => console.log("audi error"));
  });

  if (isStopped) {
    console.log(d);
  } else {
    game();
  }
});
  