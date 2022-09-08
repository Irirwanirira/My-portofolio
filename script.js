const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener ("click", () =>{
    
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach( n => n. 
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");

    })
)

const form = document.getElementById('form');
const Email = document.getElementById('email');
const Error_msg = document.getElementById('error');


function invalidEmail(e){

    if ( Email.value !== Email.value.toLowerCase()){
        Error_msg.innerHTML = 'Please Enter your Email in lowerCase. Ex: hello@example.com';
        Error_msg.style.display = 'block';
        e.preventDefault();
    }else {
        Error_msg.style.display = 'none';
    }
}


form.addEventListener('click', invalidEmail)


const Project = [
    {
      title: "Tonic ",
      src: "images/picture1.png",
      desription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      technologies: ["html", "css", "javaScript"],
      seeLiveLink: "https://irirwanirira.github.io/My-portofolio/",
      seeSourceLink: "https://irirwanirira.github.io/My-portofolio/",
    },
    {
      title: "Multi-Post Stories ",
      src: "images/Snapshoot-Portfolio-2.png",
      desription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      technologies: ["html", "css", "javaScript"],
      seeLive: "https://irirwanirira.github.io/My-portofolio/",
      seeSourceLink: "https://irirwanirira.github.io/My-portofolio/",
    },
    {
      title: "Multi-Post Stories ",
      src: "images/Snapshoot-Portfolio-3.png",
      desription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      technologies: ["html", "css", "javaScript"],
      seeLive: "https://irirwanirira.github.io/My-portofolio/",
      seeSourceLink: "https://irirwanirira.github.io/My-portofolio/",
    },
    {
      title: "Multi-Post Stories ",
      src: "images/Snapshoot-Portfolio-4.png",
      desription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      technologies: ["html", "css", "javaScript"],
      seeLive: "https://irirwanirira.github.io/My-portofolio/",
      seeSourceLink: "https://irirwanirira.github.io/My-portofolio/",
    },
  ];
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
  
            <p class="explanations-pop"> ${Project[projectNmuber].desription} </p>
  
            <div class = 'html-link' >
                  <div class="css-html-js " id = 'css-html-js-pop'>
                  <ul>
                    <li class="all-pop"> ${Project[projectNmuber].technologies[0]} </li>
                    <li class="all-pop"> ${Project[projectNmuber].technologies[1]} </li>
                    <li class="all-pop"> ${Project[projectNmuber].technologies[2]} </li>
  
                  </ul>
              </div>
  
              <div class = 'liveLink' >
  
                <a href="${Project[projectNmuber].seeLive}" class="button-1" id = 'btn--1' > See Live  <img src="/images/Icon-arrow.png" alt="arrow"></a>
                
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

