'use strict';
(function () {
    
        function Button(text) {
            this.text = text || 'Hello';
        }

        Button.prototype = {
            create: function () {
                var self = this;
                this.element = document.createElement('button');
                this.element.innerText = this.text;
                this.element.addEventListener('click', function () {
                    alert(self.text);
                });
                document.body.appendChild(this.element);
            }
        }

        var btn1 = new Button('Hello!');
        btn1.create();


//To samo w ES6
/*
    class Button {
        constructor(text) {
            this.text = text || 'Hello';
            
        }
        create() {
            this.element = document.createElement('button');
            this.element.innerText = this.text;
            this.element.addEventListener('click', function () {
                alert(this.text);
            });
            document.body.appendChild(this.element);
        }
    }
    const btn1 = new Button('Hello !');
    btn1.create();
    const btn2 = new Button('Hello Too!');
    btn2.create();
    const btn3 = new Button();
    btn3.create();
    */
    
})();