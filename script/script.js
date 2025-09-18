const levelLoad = () =>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res => res.json())
    .then(json => lessonData(json.data));
}


const loadLevelWord = (id) =>{
    const url = `https://openapi.programming-hero.com/api/level/${id}`

    fetch(url)
    .then(res => res.json())
    .then(data =>displayLevelWork(data.data))


}


const displayLevelWork = (words) => {
    const wordContainer = document.getElementById("word-container");

    wordContainer.innerHTML = "";

    words.forEach(word => {
        const card = document.createElement("div");
        card.innerHTML = `
            <div class="bg-white rounded-sm text-center p-10">
            <h2 class="text-[32px] font-bold mb-2">${word.word}</h2>
            <p class="text-[20] font-medium mb-2">Meaning /Pronounciation</p>
            <div class="font-bangla text-[32px] mb-5">${word.meaning} / ${word.pronunciation}</div>

            <div class="flex justify-between items-center">
                <button class="btn"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn"><i class="fa-solid fa-volume-high"></i></button>
                
            </div>
        </div>
        `
        wordContainer.appendChild(card)
    });
}
const lessonData = (lessons) => {
    const lessonDivCall = document.getElementById("level-container");


    lessonDivCall.innerHTML = "";

    for(let lesson of lessons){
        const btnDiv = document.createElement("div");

        btnDiv.innerHTML = `
            <button onClick = "loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}</button>
        `
        lessonDivCall.appendChild(btnDiv)
    }
}


levelLoad();