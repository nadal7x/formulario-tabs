export const changingSelector = () => {
    let selectChoose = document.querySelector("[name='aficiones']");
    let selectOption
    let selectChanged = document.querySelector("#selectChange");
    let options = document.querySelectorAll("#selectChange option");
    let deportes = ["deportes","futbol","baloncesto","tenis","judo"];
    let materias = ["materias","matematicas","lengua","quimica","historia"];
    let musica = ["musica","rock","pop","tecno","reggeton"];
    let vehiculos = ["vehiculos","coche","moto","barco","avion"];
    let selectValues = [deportes,materias,musica,vehiculos];
    selectChoose.addEventListener("change", () => {

        if (selectChoose.value == selectValues[0][0]){
            selectOption = 0;
        }
        else if (selectChoose.value == selectValues[1][0]){
            selectOption = 1;
        }
        else if (selectChoose.value == selectValues[2][0]){
            selectOption = 2;
        }
        else if (selectChoose.value == selectValues[3][0]){
            selectOption = 3;
        }

            selectChanged.name = selectValues[selectOption][0];

            options.forEach( function(option, index) {
            option.value = selectValues[selectOption][index+1];
            option.textContent= selectValues[selectOption][index+1];
            });
            
        });
}

export const appearSelector = () => {
    let selectChoose = document.querySelector("[name='escoge']");
    let selectLocalidades = document.querySelectorAll(".localidades");
    let selectAficiones = document.querySelectorAll(".aficiones");
    selectLocalidades.forEach(element => {
        element.classList.add("hidden-element");
    });
    selectAficiones.forEach(element => {
        element.classList.add("hidden-element");
    });
    selectChoose.addEventListener("change", () => {
        if(selectChoose.value == "localidades"){
            selectLocalidades.forEach(element => {
                element.classList.remove("hidden-element");
            });
            selectAficiones.forEach(element => {
                element.classList.add("hidden-element");
            }); 
        }
        if(selectChoose.value == "aficiones"){
            selectLocalidades.forEach(element => {
                element.classList.add("hidden-element");
            });
            selectAficiones.forEach(element => {
                element.classList.remove("hidden-element");
            }); 
        }
    });
}
export const locationSelector = () => {
    let selectLocation = document.querySelector("[name='localidades']");
    let options = document.querySelectorAll(".related-options");
    let firstOption = true;
    
    selectLocation.addEventListener("change", () => {
        document.querySelector("#selectLocation").disabled = false;
        options.forEach(element => {
            element.classList.add("hidden-element");
            if(selectLocation.value == element.dataset.location){
                element.classList.remove("hidden-element"); 
                if(firstOption){
                    element.selected = true;
                    firstOption = false;
                }
            }
        }); 
        firstOption = true;
    }); 

}
