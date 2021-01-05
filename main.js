<body onload="add"></body>
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

function add(){

    background_img_Tag = new Image();
    background_img_Tag.onload=uploadbackground;
background_img_Tag.src=background_image;

car1_img_Tag = new Image();
    car1_img_Tag.onload=uploadcar1;
car1_img_Tag.src=rover_image;

}

function add(){

    background_img_Tag = new Image();
    background_img_Tag.onload=uploadbackground;
background_img_Tag.src=background_image;

car2_img_Tag = new Image();
    car2_img_Tag.onload=uploadcar2;
car2_img_Tag.src=rover_image;

}

function uploadbackground() {

    ctx.drawImage(background_img_Tag,0,0,canvas.width,canvas.height);
    
    
    }
    function uploadcar1() {
    
    ctx.drawImage(car1_img_Tag,car1_x,car1_y,car1_width, car1_height);
    
    
        }

        function uploadbackground() {

            ctx.drawImage(background_img_Tag,0,0,canvas.width,canvas.height);
            
            
            }
            function uploadcar2() {
            
            ctx.drawImage(car2_img_Tag,car2_x,car2_y,car2_width, car2_height);
            
            
                }   
                
                

                window.addEventListener("keydown",my_keydown);

                function my_keydown(e){
                
                    keypressed=e.keyCode;
                
                console.log(keypressed);
                
                if (keypressed  == '38'){
                car1_up();
                console.log("up");        
                    }
                    if (keypressed  == "40"){
                        car1_down();
                        console.log("down");
                        
                        
                        }
                        if (keypressed  == "37"){
                            car1_left();
                            console.log("left");
                            
                            
                            }
                            if (keypressed  == "39"){
                                car1_right();
                                console.log("right");
                                
                                
                                }
                }
                

















                function my_keydown(e){
                
                    keypressed=e.keyCode;
                
                console.log(keypressed);
                
                if (keypressed  == '38'){
                car2_up();
                console.log("up");        
                    }
                    if (keypressed  == "40"){
                        car2_down();
                        console.log("down");
                        
                        
                        }
                        if (keypressed  == "37"){
                            car2_left();
                            console.log("left");
                            
                            
                            }
                            if (keypressed  == "39"){
                                car2_right();
                                console.log("right");
                                
                                
                                }
                }