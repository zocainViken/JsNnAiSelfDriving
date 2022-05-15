class Controls{
    constructor(controlType){
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;
        self.controlType = controlType

        switch(controlType){
            case "KEYS":
                this.#addKeyboardListener();
                // # mean Private methods and we can't use it outside of this function
                break;
            case "DUMMY":
                this.forward = true;
                // # mean Private methods and we can't use it outside of this function
                break;
         }
    }

    #addKeyboardListener(){
        document.onkeydown=(event)=>{//(event)=> is similar to function(event) same things
            switch(event.key){
                case 'ArrowLeft':
                    this.left = true;
                    break;
                case 'ArrowRight':
                    this.right = true;
                    break;
                case 'ArrowUp':
                    this.forward = true;
                    break;
                case 'ArrowDown':
                    this.reverse = true;
                    break;
            }
            //debugging key down
            //console.table(this);
        }
        document.onkeyup=(event)=>{
            switch(event.key){
                case 'ArrowLeft':
                    this.left = false;
                    break;
                case 'ArrowRight':
                    this.right = false;
                    break;
                case 'ArrowUp':
                    this.forward = false;
                    break;
                case 'ArrowDown':
                    this.reverse = false;
                    break;
            }
        }
        //debugging key up
        //console.table(this);
    }
}