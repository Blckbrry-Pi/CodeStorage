let p5Library = {
    
    //There is no built-in way to make rounded rectangles in WebGL with p5.js. This could technically be used regularly too, but there is really no point.
    WebGL_RoundedRect:
    function(WebGL_RoundedRect_xPos, WebGL_RoundedRect_yPos, WebGL_RoundedRect_width, WebGL_RoundedRect_height, WebGL_RoundedRect_radius, WebGL_RoundedRect_resolution){
        let WebGL_RoundedRect_tempStore = _renderer.textureMode;
        
        textureMode(NORMAL);
        
        let WebGL_RoundedRect_counter1;
        beginShape();

        vertex(WebGL_RoundedRect_xPos + WebGL_RoundedRect_radius, WebGL_RoundedRect_yPos, WebGL_RoundedRect_radius/WebGL_RoundedRect_width, 0);
        vertex(WebGL_RoundedRect_xPos + WebGL_RoundedRect_width - WebGL_RoundedRect_radius, WebGL_RoundedRect_yPos, 1 - WebGL_RoundedRect_radius/WebGL_RoundedRect_width, 0);

        for(WebGL_RoundedRect_counter1 = 0; WebGL_RoundedRect_counter1 < Math.PI / 2; WebGL_RoundedRect_counter1 += Math.PI / WebGL_RoundedRect_resolution) {
            vertex(WebGL_RoundedRect_xPos + WebGL_RoundedRect_width - WebGL_RoundedRect_radius + sin(WebGL_RoundedRect_counter1) * WebGL_RoundedRect_radius, WebGL_RoundedRect_yPos + WebGL_RoundedRect_radius - cos(WebGL_RoundedRect_counter1) * WebGL_RoundedRect_radius);
        }

        vertex(WebGL_RoundedRect_xPos + WebGL_RoundedRect_width, WebGL_RoundedRect_yPos + WebGL_RoundedRect_radius);
        vertex(WebGL_RoundedRect_xPos + WebGL_RoundedRect_width, WebGL_RoundedRect_yPos + WebGL_RoundedRect_height - WebGL_RoundedRect_radius);

        for(WebGL_RoundedRect_counter1 = Math.PI/2; WebGL_RoundedRect_counter1 < Math.PI; WebGL_RoundedRect_counter1 += Math.PI / WebGL_RoundedRect_resolution) {
            vertex(WebGL_RoundedRect_xPos + WebGL_RoundedRect_width - WebGL_RoundedRect_radius + sin(WebGL_RoundedRect_counter1) * WebGL_RoundedRect_radius, WebGL_RoundedRect_yPos + WebGL_RoundedRect_height - WebGL_RoundedRect_radius - cos(WebGL_RoundedRect_counter1) * WebGL_RoundedRect_radius);
        }

        vertex(WebGL_RoundedRect_xPos + WebGL_RoundedRect_width - WebGL_RoundedRect_radius, WebGL_RoundedRect_yPos + WebGL_RoundedRect_height, WebGL_RoundedRect_radius/WebGL_RoundedRect_width, 1);
        vertex(WebGL_RoundedRect_xPos + WebGL_RoundedRect_radius, WebGL_RoundedRect_yPos + WebGL_RoundedRect_height, 1 - WebGL_RoundedRect_radius/WebGL_RoundedRect_width, 1);

        for(WebGL_RoundedRect_counter1 = Math.PI; WebGL_RoundedRect_counter1 < Math.PI / 2 * 3; WebGL_RoundedRect_counter1 += Math.PI / WebGL_RoundedRect_resolution) {
            vertex(WebGL_RoundedRect_xPos + WebGL_RoundedRect_radius + sin(WebGL_RoundedRect_counter1) * WebGL_RoundedRect_radius, WebGL_RoundedRect_yPos + WebGL_RoundedRect_height - WebGL_RoundedRect_radius - cos(WebGL_RoundedRect_counter1) * WebGL_RoundedRect_radius);
        }

        vertex(WebGL_RoundedRect_xPos, WebGL_RoundedRect_yPos + WebGL_RoundedRect_height - WebGL_RoundedRect_radius);
        vertex(WebGL_RoundedRect_xPos, WebGL_RoundedRect_yPos + WebGL_RoundedRect_radius);

        for(WebGL_RoundedRect_counter1 = Math.PI / 2 * 3; WebGL_RoundedRect_counter1 < Math.PI * 2; WebGL_RoundedRect_counter1 += Math.PI / WebGL_RoundedRect_resolution) {
            vertex(WebGL_RoundedRect_xPos + WebGL_RoundedRect_radius + sin(WebGL_RoundedRect_counter1) * WebGL_RoundedRect_radius, WebGL_RoundedRect_yPos + WebGL_RoundedRect_radius - cos(WebGL_RoundedRect_counter1) * WebGL_RoundedRect_radius);
        }

        vertex(WebGL_RoundedRect_xPos + WebGL_RoundedRect_radius, WebGL_RoundedRect_yPos);

        endShape();
        
        _renderer.textureMode = WebGL_RoundedRect_tempStore;
    },
    
}
