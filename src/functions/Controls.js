export let controls = {
  // * Named Controls
    up: false,
    down: false,
    left: false,
    right: false,
  //*WASD Controls
    KeyW: false,
    KeyS: false,
    KeyA: false,
    KeyD: false,
  //*Arrow Controls
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
  //*MouseControls
    click: false,
  //*Key Controls
    KeyR:false,
  normalize(){
    (this.KeyW || this.ArrowUp)?this.up = true:this.up=false;
    (this.KeyA || this.ArrowLeft)?this.left = true:this.left=false;
    (this.KeyD || this.ArrowRight)?this.right = true:this.right=false;
    (this.KeyS || this.ArrowDown)?this.down = true:this.down=false;
  },

    addControls() {
        document.addEventListener("keydown", event => {
            if (Object.keys(this).includes(`${event.code}`)) {
                event.preventDefault();
                this[event.code] = true;
            }
        });

        document.addEventListener("keyup", event => {
            if (Object.keys(this).includes(`${event.code}`)) {
                event.preventDefault();
                this[event.code] = false;
            }
        });
        document.addEventListener("click", () => {
            this.click = true;
        });
    },
};
