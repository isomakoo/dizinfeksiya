const kirish = document.querySelector(".nav__button")
const header2 = document.querySelector(".header2")
const x = document.querySelector(".hidden")

// kirish.addEventListener("click", (e) =>{
//     header2.style.display = "block"
// })

// x.addEventListener("click", (e) =>{
//     header2.style.display = "none"
// })

function changeLanguage(lang){
    console.log(changeLanguage);
    location.hash = lang;
    location.reload();
}
let language = {
    rus: {
        welcome: "Служба дезинфекции",
        infor:"Наша компания, работающая уже много лет, нами довольна.",
        herobutton:"связь",
        h1:"Наши преимущества",
        skilh2:"Быстрое обслуживание",
        skillp:"Наша компания, работающая уже много лет, нами довольна.",
        skilh3:"Наши опытные специалисты",
        skilp1:"Наша компания, работающая уже много лет, нами довольна.",
        skilh4:"Когда вам будет удобно",
        skilp2:"Наша компания, работающая уже много лет, нами довольна.",
        menuh1:"Считай клапан и вредных насекомых больше нет!!!",
        menup:"Наша компания, работающая уже много лет, нами довольна.",
        navl1:"услуга",
        navl2:"о нас",
        navl3:"Чзв",
        navl4:"контакт",
        cenh1:"услуга",
        cenh2:"Базовые концепты",
        cenh3:"Оьрта",
        cenh4:"высокий",
        cenp:"Эти уроки помогут вам получить более высокий ранг.",
        cenp1:"С теоретическими знаниями",
        cenp2:"16 уроков",
        cenp3:"Теоретические и практические знания",
        cenp4:"23 уроков",
        iten2:"Что я получу из этого курса?",
        iten3:"Что я получу из этого курса?",
        iten31:"Что я получу из этого курса?",
        iten4:"Это запись урока будет предоставлена вашей группе после его окончания.",
        iten5: "Конфиденциальность и безопасность",
        cenp5:"Практические знания",
        sendtotelegram:"Отправить",
        cenp6:"16 уроков",
        reah2:"Многие люди доверяют нам на протяжении многих лет",
        endh2:"Оставьте свою информацию",
        endp:"Многие люди доверяют нам на протяжении многих лет",
    },
    ozb:{
       welcome:"Dizinfeksiya xizmati",
       infor: "Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun",
       herobutton:"bog'lanish",
       h1:"Afzalliklarimiz",
       skilh2:"Tezda xizmat ko’rsatish",
       skillp:"Bizning ko’p yillardan beri o'z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun",
       skilh3:"Yetuk mutahasislarimiz",
       skilp1:"Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun",
       skilh4:"Sizga maqul vaqtda",
       skilp2:"Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun",
       menuh1:"Klapa va zararli hashorot endi yo’q deb hisoblang !!!",
       menup:"Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun",
       navl1:"service",
       navl2:"about",
       navl3:"FAQ",
       navl4:"contact",
       cenh1:"service",
       cenh2:"Boshlang'ich tushunchalar",
       cenh3:"O'rta",
       cenh4:"yuqori",
       cenp:"Bu darsliklari sizning yuqori daraja olishingizga yordam beradi",
       cenp1:"Nazariy bilimlar",
       cenp2:"16 dars",
       cenp3:"Nazariy va amaliy bilimlar",
       cenp4:"23 dars",
       cenp5:"Amaliy bilimlar",
       cenp6:"16 dars",
       reah2:"Bizga ko'p yillardan beri kompaniyamizga ishonch bildirganlar talaygina",
       endh2:"Malumotlaringizni qoldiring",
       endp:"Bizga ko'p yillardan beri kompaniyamizga ishonch bildirganlar talaygina",
    },
     
         eng: {
            welcome: "Disinfection Service",
            infor: "Our company, serving for many years, is satisfied with us.",
            herobutton: "contact",
            h1: "Our Advantages",
            skilh2: "Fast Service",
            skillp: "Our company, serving for many years, is satisfied with us.",
            skilh3: "Our Experienced Specialists",
            skilp1: "Our company, serving for many years, is satisfied with us.",
            skilh4: "At Your Convenient Time",
            skilp2: "Our company, serving for many years, is satisfied with us.",
            menuh1: "Consider the cockroach and pests no more!!!",
            menup: "Our company, serving for many years, is satisfied with us.",
            navl1: "service",
            navl2: "about",
            navl3: "FAQ",
            navl4: "contact",
            cenh1: "service",
            cenh2: "Basic Concepts",
            cenh3: "Intermediate",
            cenh4: "advanced",
            cenp: "These lessons will help you achieve a higher rank.",
            cenp1: "Theoretical knowledge",
            cenp2: "16 lessons",
            cenp3: "Theoretical and practical knowledge",
            cenp4: "23 lessons",
            cenp5: "Practical knowledge",
            cenp6: "16 lessons",
            iten2: "What will I learn from the course?",
            iten3: "What will I learn from the course?",
            iten31: "What will I learn from the course?",
            sendtotelegram: "Submit",
            iten5:"Privacy Policy",
            iten4: "If you miss a lesson like this, a recording of the Zoom session will be provided to your group after the lesson.",
            reah2: "Many people have trusted us for many years",
            endh2: "Leave your information",
            endp: "Many people have trusted us for many years",
        },
}

if(window.location.hash == "#rus"){
    h1content.textContent = language.rus.welcome;
    pcontent.textContent = language.rus.infor;
    herobutton.textContent = language.rus.herobutton;
    skilh1.textContent = language.rus.h1;
    skilh2.textContent = language.rus.skilh2;
    skillp.textContent = language.rus.skillp;
    skilh3.textContent = language.rus.skilh3;
    skilp1.textContent = language.rus.skilp1;    
    skilh4.textContent = language.rus.skilh4;
    skilp2.textContent = language.rus.skilp2;
    menuh1.textContent = language.rus.menuh1;
    menup.textContent = language.rus.menup;
    navl1.textContent = language.rus.navl1;
    navl2.textContent = language.rus.navl2;
    navl3.textContent = language.rus.navl3;
    navl4.textContent = language.rus.navl4;
    cenh1.textContent = language.rus.cenh1;
    cenh2.textContent = language.rus.cenh2;
    cenh3.textContent = language.rus.cenh3;
    cenh4.textContent = language.rus.cenh4;
    cenp.textContent = language.rus.cenp;
    cenp1.textContent = language.rus.cenp1;
    cenp2.textContent = language.rus.cenp2;
    iten2.textContent =language.rus.iten2
    iten3.textContent =language.rus.iten3
    iten5.textContent =language.rus.iten5
    iten31.textContent =language.rus.iten31
    iten4.textContent =language.rus.iten4
    sendtotelegram.textContent =language.rus.sendtotelegram
    cenp3.textContent = language.rus.cenp3;
    cenp4.textContent = language.rus.cenp4;
    cenp5.textContent = language.rus.cenp5;
    cenp6.textContent = language.rus.cenp6;
    reah2.textContent = language.rus.reah2;
    endh2.textContent = language.rus.endh2;
    endp.textContent = language.rus.endp;
    herobutton1.textContent = language.rus.herobutton;
    herobutton2.textContent = language.rus.herobutton;
}
else if(window.location.hash == "#ozb"){
    h1content.textContent = language.ozb.welcome;
    pcontent.textContent = language.ozb.infor;
    herobutton.textContent = language.ozb.herobutton;
    skilh2.textContent = language.ozb.skilh2;
    skilh1.textContent = language.ozb.h1;
    skillp.textContent = language.ozb.skillp;
    skilh3.textContent = language.ozb.skilh3;
    skilp1.textContent = language.ozb.skilp1;    
    skilh4.textContent = language.ozb.skilh4;
    skilp2.textContent = language.ozb.skilp2;
    menuh1.textContent = language.ozb.menuh1;
    menup.textContent = language.ozb.menup;
    navl1.textContent = language.ozb.navl1;
    navl2.textContent = language.ozb.navl2;
    navl3.textContent = language.ozb.navl3;
    navl4.textContent = language.ozb.navl4;
    cenh1.textContent = language.ozb.cenh1;
    cenh2.textContent = language.ozb.cenh2;
    cenh3.textContent = language.ozb.cenh3;
    cenh4.textContent = language.ozb.cenh4;
    cenp.textContent = language.ozb.cenp;
    cenp1.textContent = language.ozb.cenp1;
    cenp2.textContent = language.ozb.cenp2;
    cenp3.textContent = language.ozb.cenp3;
    cenp4.textContent = language.ozb.cenp4;
    cenp5.textContent = language.ozb.cenp5;
    cenp6.textContent = language.ozb.cenp6;
    reah2.textContent = language.ozb.reah2;
    endh2.textContent = language.ozb.endh2;
    endp.textContent = language.ozb.endp;
    herobutton1.textContent = language.ozb.herobutton;
    herobutton2.textContent = language.ozb.herobutton;    

}
else{
    h1content.textContent = language.eng.welcome;
    pcontent.textContent = language.eng.infor;
    herobutton.textContent = language.eng.herobutton;
    skilh2.textContent = language.eng.skilh2;
    skilh1.textContent = language.eng.h1;
    skillp.textContent = language.eng.skillp;
    skilh3.textContent = language.eng.skilh3;
    skilp1.textContent = language.eng.skilp1;    
    skilh4.textContent = language.eng.skilh4;
    skilp2.textContent = language.eng.skilp2;
    menuh1.textContent = language.eng.menuh1;
    menup.textContent = language.eng.menup;
    navl1.textContent = language.eng.navl1;
    navl2.textContent = language.eng.navl2;
    navl3.textContent = language.eng.navl3;
    navl4.textContent = language.eng.navl4;
    cenh1.textContent = language.eng.cenh1;
    cenh2.textContent = language.eng.cenh2;
    cenh3.textContent = language.eng.cenh3;
    cenh4.textContent = language.eng.cenh4;
    cenp.textContent = language.eng.cenp;
    cenp1.textContent = language.eng.cenp1;
    cenp2.textContent = language.eng.cenp2;
    cenp3.textContent = language.eng.cenp3;
    iten2.textContent = language.eng.iten2;
    iten3.textContent = language.eng.iten3;
    iten31.textContent = language.eng.iten31;
    iten4.textContent = language.eng.iten4
    sendtotelegram.textContent = language.eng.sendtotelegram
    iten5.textContent = language.eng.iten5
    cenp4.textContent = language.eng.cenp4;
    cenp5.textContent = language.eng.cenp5;
    cenp6.textContent = language.eng.cenp6;
    reah2.textContent = language.eng.reah2;
    endh2.textContent = language.eng.endh2;
    endp.textContent = language.eng.endp;
    herobutton1.textContent = language.eng.herobutton;
    herobutton2.textContent = language.eng.herobutton;
    
}

const form = document.getElementById('telegramform');
form.addEventListener("submit", function(event){
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message =  `ism ${name} \ntelefon ${phone}`;
    sendtotelegram(message)
})
function sendtotelegram(message){
    const token ="7079304090:AAHz0hdemV3kKxzSiksKthyugnQ3oGpBadU";
    const chat_id = 6914657739;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const params = {
        chat_id: chat_id,
        text: message
    }
fetch(url,{
    method:'POST',
    headers: {
        'Content-Type':'application/json',},
    body: JSON.stringify(params)
})
.then((response)=>response.json())
.then((res)=>{
    alert("Yuborildi")
})
.catch((error)=>{
    console.log("Error",error);
})
}

