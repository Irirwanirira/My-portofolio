const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

const form = document.getElementById("form");
const Email = document.getElementById("email");
const Error_msg = document.getElementById("error");

function invalidEmail(e) {
  if (Email.value !== Email.value.toLowerCase()) {
    Error_msg.innerHTML =
      "Please Enter your Email in lowerCase. Ex: hello@example.com";
    Error_msg.style.display = "block";
    e.preventDefault();
  } else {
    Error_msg.style.display = "none";
  }
}

form.addEventListener("click", invalidEmail);

const Project = [
  {
    id: 1,
    title: "Todo",
    info: {
      client: "CANOPY",
      role: "Back End Dev",
      img: "images/Counter.png",
      year: 2022,
    },
    src: "images/Screenshot-2020-10.png",
    desription: {
      descDesktop:
        "Todo app helps you to keep on track of your activities, give you some options of editing or deleting the completed tasks.  ",
      descPopup:
        "Todo app helps you to keep on track of your activities, give you some options of editing or deleting the completed tasks. ",
    },
    technologies: ["html", "css", "javaScript"],
    seeProject: "See Project",
    seeLiveLink: "https://irirwanirira.github.io/To-do-List/",
    seeSourceLink: "https://github.com/Irirwanirira/To-do-List",
  },
  {
    id: 2,
    title: "Multi-Post Stories",
    info: {
      client: "CANOPY",
      role: "Back End Dev",
      img: "images/Counter.png",
      year: 2015,
    },
    src: "images/calculator.png",
    desription: {
      descDesktop:
        "A daily selection of privately personalized reads; no accounts or sign-ups required.",
      descPopup:
        "Lorem Ipsum is simply dummy text of the printing and typesetting make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    },
    technologies: ["html", "css", "javaScript"],
    seeProject: "See Project",
    seeLiveLink: "https://imaginative-scone-fa9020.netlify.app/",
    seeSourceLink: "https://github.com/Irirwanirira/math-magician",
  },
  {
    id: 3,
    title: "Multi-Post Stories",
    info: {
      client: "CANOPY",
      role: "Back End Dev",
      img: "images/Counter.png",
      year: 2015,
    },
    src: "images/Falcon.png",
    desription: {
      descDesktop:
        "A daily selection of privately personalized reads; no accounts or sign-ups required.",
      descPopup:
        "Lorem Ipsum is simply dummy text of the printing and typesetting make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    },
    technologies: ["html", "css", "javaScript"],
    seeProject: "See Project",
    seeLiveLink:
      "https://deploy-preview-32--strong-heliotrope-adde83.netlify.app/",
    seeSourceLink: "https://github.com/Irirwanirira/space-x-react-project",
  },
  {
    id: 4,
    title: "Multi-Post Stories",
    info: {
      client: "CANOPY",
      role: "Back End Dev",
      img: "images/Counter.png",
      year: 2015,
    },
    src: "images/ccc.png",
    desription: {
      descDesktop:
        "This a simple app that displays an event of celebration, which includes names of speakers and the avenue where the celebration will occur.",
      descPopup:
        "Lorem Ipsum is simply dummy text of the printing and typesetting make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    },
    technologies: ["html", "css", "javaScript"],
    seeProject: "see Project",
    seeLiveLink: "https://eclectic-gumption-fb13ce.netlify.app/",
    seeSourceLink: "https://github.com/Irirwanirira/Capstone-project-1",
  },
];

const computerCards = document.querySelector(".computer-html");
const mobileCards = document.querySelector("#mobile-html");

const displayComputerHtml = Project.map(
  (works) => `
  <section class="computer">
    <div class="grid-container">

      <div class="cards">


        <img class="pic1" src= ${works.src} alt=" project-snipped-picture">

        <div class="descript">

          <h3 class="tonic">${works.title}</h3>

          <div class="type">
              <p class="canopy">${works.info.client}</p>
              <ul>

                  <li><img src=${works.info.img} alt="Nature catchy look inspiring "></li>
                  <li class="opt-period"> ${works.info.role} </li>
                  <li> <img src=${works.info.img} alt="dot"></li>

                  <li class="opt-period"> ${works.info.year} </li>
              </ul>
          </div>

          <p class="explanations"> ${works.desription.descDesktop}</p>

          <div class="css-html-js">
              <ul>
                  <li> <button class="all">${works.technologies[0]}</button> </li>
                  <li><button class="all">${works.technologies[1]}</button></li>
                  <li><button class="all">${works.technologies[2]}</button></li>
              </ul>
          </div>
          <a href="${Project.seeProject}" class="button" id="buttonC" >${works.seeProject}</a>

        </div>
      </div>
    </div>
  </div>
  
`
).join("");

const displayMobileHtml = Project.map(
  (mobile) => `  

  <section class="work">

    <div class="grid-container">

      <div class="cards">


        <img class="pic1" src=${mobile.src} alt="project-snipped-picture">

        <div class="description">

          <h3 class="tonic">${mobile.title}</h3>

            <div class="type">
                  <p class="canopy">${mobile.info.client}</p>
                  <ul>
                      <li><img src=${mobile.info.img} alt="Explore what design and code have in general"></li>
                      <li class="opt-period"> ${mobile.info.role} </li>
                      <li> <img src=${mobile.info.img} alt="Dot"></li>
                    
                      <li class="opt-period">${mobile.info.year}</li>
                  </ul>
            </div>

            <p class="explanations">${mobile.desription.descDesktop}</p>

            <div class="css-html-js">
                  <ul>
                    <li> <button class="all">${mobile.technologies[0]}</button> </li>
                    <li><button class="all">${mobile.technologies[1]}</button></li>
                    <li><button class="all">${mobile.technologies[2]}</button></li>
                  </ul>
            </div>

            <a href="#" class="button" id="seeProject"> ${mobile.seeProject}</a>

        </div>      
      </div>
    </div>
  </div>
  `
).join("");

computerCards.innerHTML = displayComputerHtml;
mobileCards.innerHTML = displayMobileHtml;

const seeProject = document.querySelectorAll("#seeProject");
const allbutton = Array.from(seeProject);
const projectPopUp = document.getElementById("projectPopUP");
const buttonC = document.querySelectorAll("#buttonC");
const buttonCc = Array.from(buttonC);

function popUp(projectNmuber) {
  const popupWindow = document.createElement("div");
  popupWindow.className = "modal-container";
  popupWindow.innerHTML = `
    <div class = 'wholeModal'>
        
      <div class = 'tonicClose' >
        <h3 class="tonic-pop"> ${Project[projectNmuber].title}</h3>
        <button id = 'closebtn'>&times</button>
      </div>
      <div class="type-pop">
            <p class="canopy">CANOPY</p>
            <ul>
                <img src="images/Counter.png" alt="Dot">
                <li class="opt-period-pop"> Back End Dev </li>
                <li img src="images/Counter.png" alt="Dot"></li>
                <img src="images/Counter.png" alt="Dot">
                <li class="opt-period-pop"> 2015</li>

            </ul>
        </div>
        

          <div id="pic1-pop"> 

            <img  class="pic1-pop" src=${Project[projectNmuber].src} alt="project-snipped-picture">

          </div>
          
        <div class="expl-link"> 

          <p class="explanations-pop"> ${Project[projectNmuber].desription.descPopup} </p>

          <div class = 'html-link' >
                <div class="css-html-js " id = 'css-html-js-pop'>
                <ul>
                  <li class="all-pop"> ${Project[projectNmuber].technologies[0]} </li>
                  <li class="all-pop"> ${Project[projectNmuber].technologies[1]} </li>
                  <li class="all-pop"> ${Project[projectNmuber].technologies[2]} </li>

                </ul>
            </div>

            <div class = 'liveLink' >

              <a href="${Project[projectNmuber].seeLiveLink}" class="button-1" id = 'btn--1' > See Live  <img src="/images/Icon-arrow.png" alt="arrow"></a>
              
              <a href="${Project[projectNmuber].seeSourceLink}" class="button-1"  id = 'btn--1' > SeeLiveLink <img src="/images/Vector-git.png" alt="github">
              </a>

            </div>
          </div>

          
        </div>
        

    </div>
    
    `;
  projectPopUp.append(popupWindow);

  document.addEventListener("click", (event) => {
    if (event.target.id === "closebtn") {
      popupWindow.style.display = "none";
    }
  });
}

for (let i = 0; i < allbutton.length; i++) {
  allbutton[i].addEventListener("click", () => {
    popUp(i);
  });
}

for (let i = 0; i < buttonCc.length; i++) {
  buttonCc[i].addEventListener("click", () => {
    popUp(i);
  });
}

const fullNameForm = document.getElementById("name");
const emailForm = document.getElementById("email");
const commentForm = document.getElementById("Message");

function saveLocally() {
  const formData = {
    fullName: fullNameForm.value,
    email: emailForm.value,
    comment: commentForm.value,
  };
  localStorage.setItem("form", JSON.stringify(formData));
}
saveLocally();
