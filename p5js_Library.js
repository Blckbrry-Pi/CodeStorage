function WebGL_RoundedRect(WebGL_RoundedRect_xPos, WebGL_RoundedRect_yPos, WebGL_RoundedRect_width, WebGL_RoundedRect_height, WebGL_RoundedRect_radius, WebGL_RoundedRect_resolution){
    let WebGL_RoundedRect_counter1
    beginShape();
    
    vertex(WebGL_RoundedRect_xPos + WebGL_RoundedRect_radius, WebGL_RoundedRect_yPos);
    vertex(WebGL_RoundedRect_xPos + WebGL_RoundedRect_width - WebGL_RoundedRect_radius, WebGL_RoundedRect_yPos);
    
    for(WebGL_RoundedRect_counter1 = 0; WebGL_RoundedRect_counter1 < Math.PI / 2; WebGL_RoundedRect_counter1 += Math.PI / WebGL_RoundedRect_resolution) {
        vertex(WebGL_RoundedRect_xPos + WebGL_RoundedRect_width - WebGL_RoundedRect_radius + sin(WebGL_RoundedRect_counter1) * WebGL_RoundedRect_radius, WebGL_RoundedRect_yPos + WebGL_RoundedRect_radius - cos(WebGL_RoundedRect_counter1) * WebGL_RoundedRect_radius);
    }
    
    vertex(WebGL_RoundedRect_xPos + WebGL_RoundedRect_width, WebGL_RoundedRect_yPos + WebGL_RoundedRect_radius);
    vertex(WebGL_RoundedRect_xPos + WebGL_RoundedRect_width, WebGL_RoundedRect_yPos + WebGL_RoundedRect_height - WebGL_RoundedRect_radius);
    
    for(WebGL_RoundedRect_counter1 = Math.PI/2; WebGL_RoundedRect_counter1 < Math.PI; WebGL_RoundedRect_counter1 += Math.PI / WebGL_RoundedRect_resolution) {
        vertex(WebGL_RoundedRect_xPos + WebGL_RoundedRect_width - WebGL_RoundedRect_radius + sin(WebGL_RoundedRect_counter1) * WebGL_RoundedRect_radius, WebGL_RoundedRect_yPos + WebGL_RoundedRect_height - WebGL_RoundedRect_radius - cos(WebGL_RoundedRect_counter1) * WebGL_RoundedRect_radius);
    }
    
    vertex(WebGL_RoundedRect_xPos + WebGL_RoundedRect_width - WebGL_RoundedRect_radius, WebGL_RoundedRect_yPos + WebGL_RoundedRect_height);
    vertex(WebGL_RoundedRect_xPos + WebGL_RoundedRect_radius, WebGL_RoundedRect_yPos + WebGL_RoundedRect_height);
    
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
}