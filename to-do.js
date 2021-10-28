class ToDoApp {

    constructor(){

        this.form = document.getElementById("form")
        this.input = document.getElementById("input")
        this.btn = document.getElementById("button-addon2")
        this.list = document.getElementById("list")
        this.count = 1 
        this.addTask()

    }

    addTask(){
        this.btn.addEventListener("click", function(){
            let text1 = document.createElement("li")
            if (input.value === ""){
                alert("You must enter a task")
            } else{
                // Opcion#1 agregar elementos a list
                text1.classList.add("lista")
                const text = input.value
                console.log(text)
                text1.innerHTML = `<li id="li" class="list-group-item list-group-item-action list-group-item-info">
                                <input id="box" class="form-check-input me-1" type="checkbox" name="lista" value="${this.id}" aria-label="...">
                                ${text}
                                </li>`

                //Opcion 2 agregar elementos a list                
                // document.getElementById("list").innerHTML = list.innerHTML + `<li id="li" class="list-group-item list-group-item-action list-group-item-info">
                // <input id="box" class="form-check-input me-1" type="checkbox" value="" aria-label="...">
                // ${text}
                // </li>`
                document.getElementById("list").appendChild(text1)
                // list.innerHTML = list.innerHTML + item
                this.id += 1
                form.reset()
            }

            text1.addEventListener("dblclick", function(){

                document.getElementById("list").removeChild(text1)
    
            })

            let check = document.getElementById("box")
            console.log(check.checked)

            text1.addEventListener("click", function(){
                // let check = document.getElementById("box")
                if (check.checked === true) {
                    text1.style.textDecoration="line-through"
                }
            })
        })

        

    }
}

let ToDo = new ToDoApp()





