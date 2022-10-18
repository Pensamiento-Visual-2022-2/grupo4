$(document).ready(function(){
    $("ul.tabs li a:first").addClass("active");
    $('.secciones article').hide(); 
    $('.secciones article:first').show();

    $('ul.tabs li a').click(function(){
        $('ul.tabs li a').removeClass('active');
        $(this).addClass('active');
        $('.secciones article').hide();

        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;
    });  

});
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
}
d3.selectAll("p").style("color", "blue");
//funciones sección STEM //
function cambiar1(){
    document.getElementById('matrix').src="./imagenes/cienca.png";
    document.getElementById('s1_p_stem').style.display = "none";
    document.getElementById('s1_p_s').style.display = "block";
}
function volver(){
    document.getElementById('matrix').src="./imagenes/principal.jpg";
    document.getElementById('s1_p_stem').style.display = "block";
    document.getElementById('s1_p_s').style.display = "none";
    document.getElementById('s1_p_t').style.display = "none";
    document.getElementById('s1_p_e').style.display = "none";
    document.getElementById('s1_p_m').style.display = "none";
    document.getElementById('s1_p_porcent').style.display = "none";
}
function cambiar2(){
    document.getElementById('matrix').src="./imagenes/tecnología.png";
    document.getElementById('s1_p_stem').style.display = "none";
    document.getElementById('s1_p_t').style.display = "block";
}
function cambiar3(){
    document.getElementById('matrix').src="./imagenes/ingenieria.png";
    document.getElementById('s1_p_stem').style.display = "none";
    document.getElementById('s1_p_e').style.display = "block";

}
function cambiar4(){
    document.getElementById('matrix').src="./imagenes/matematica.png";
    document.getElementById('s1_p_stem').style.display = "none";
    document.getElementById('s1_p_m').style.display = "block";
}
//funciones sección 2//

//botones//


//pruebas d3//

d3.select("body").transition()
    .style("background-color", "black");