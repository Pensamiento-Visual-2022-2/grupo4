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
    document.getElementById('matrix').src="./imagenes/Dibujosstem-1.png";
    document.getElementById('s1_p_stem').style.display = "none";
    document.getElementById('s1_p_s').style.display = "block";
}
function volver(){
    document.getElementById('matrix').src="./imagenes/stem.png";
    document.getElementById('s1_p_stem').style.display = "block";
    document.getElementById('s1_p_s').style.display = "none";
    document.getElementById('s1_p_t').style.display = "none";
    document.getElementById('s1_p_e').style.display = "none";
    document.getElementById('s1_p_m').style.display = "none";
    document.getElementById('s1_p_porcent').style.display = "none";
}
function cambiar2(){
    document.getElementById('matrix').src="./imagenes/Dibujosstem-2.png";
    document.getElementById('s1_p_stem').style.display = "none";
    document.getElementById('s1_p_t').style.display = "block";
}
function cambiar3(){
    document.getElementById('matrix').src="./imagenes/Dibujosstem-3.png";
    document.getElementById('s1_p_stem').style.display = "none";
    document.getElementById('s1_p_e').style.display = "block";

}
function cambiar4(){
    document.getElementById('matrix').src="./imagenes/Dibujosstem-4.png";
    document.getElementById('s1_p_stem').style.display = "none";
    document.getElementById('s1_p_m').style.display = "block";
}
function cambiar2a(){
    document.getElementById('matrix2').src="./imagenes/Dibujosstem-6.jpg";
    document.getElementById('s1_p_stem').style.display = "none";
    document.getElementById('s1_p_porcent').style.display = "block";
}
function volver2a(){
    document.getElementById('matrix2').src="./imagenes/Dibujosstem-6.jpg";
}

//funciones sección periodos//
function mostrar_periodo_1(){
    document.getElementById("mujeres_logos").style.display = "block";
    document.getElementById("mujer_1").src = "./imagenes/mujer_s2.png";
    document.getElementById("mujer_2").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_3").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_4").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_5").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_6").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_7").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_8").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_9").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_10").src = "./imagenes/hombre_s2.png";
}

function mostrar_periodo_2(){
    document.getElementById("mujeres_logos").style.display = "block";
    document.getElementById("mujer_1").src = "./imagenes/mujer_s2.png";
    document.getElementById("mujer_2").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_3").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_4").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_5").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_6").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_7").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_8").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_9").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_10").src = "./imagenes/hombre_s2.png";
}

function mostrar_periodo_3(){
    document.getElementById("mujeres_logos").style.display = "block";
    document.getElementById("mujer_1").src = "./imagenes/mujer_s2.png";
    document.getElementById("mujer_2").src = "./imagenes/mujer_s2.png";
    document.getElementById("mujer_3").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_4").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_5").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_6").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_7").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_8").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_9").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_10").src = "./imagenes/hombre_s2.png";
}

function mostrar_periodo_4(){
    document.getElementById("mujeres_logos").style.display = "block";
    document.getElementById("mujer_1").src = "./imagenes/mujer_s2.png";
    document.getElementById("mujer_2").src = "./imagenes/mujer_s2.png";
    document.getElementById("mujer_3").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_4").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_5").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_6").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_7").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_8").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_9").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_10").src = "./imagenes/hombre_s2.png";
}

function mostrar_periodo_5(){
    document.getElementById("mujeres_logos").style.display = "block";
    document.getElementById("mujer_1").src = "./imagenes/mujer_s2.png";
    document.getElementById("mujer_2").src = "./imagenes/mujer_s2.png";
    document.getElementById("mujer_3").src = "./imagenes/mujer_s2.png";
    document.getElementById("mujer_4").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_5").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_6").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_7").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_8").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_9").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_10").src = "./imagenes/hombre_s2.png";

}

function mostrar_periodo_6(){
    document.getElementById("mujeres_logos").style.display = "block";
    document.getElementById("mujer_1").src = "./imagenes/mujer_s2.png";
    document.getElementById("mujer_2").src = "./imagenes/mujer_s2.png";
    document.getElementById("mujer_3").src = "./imagenes/mujer_s2.png";
    document.getElementById("mujer_4").src = "./imagenes/mujer_s2.png";
    document.getElementById("mujer_5").src = "./imagenes/mujer_s2.png";
    document.getElementById("mujer_6").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_7").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_8").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_9").src = "./imagenes/hombre_s2.png";
    document.getElementById("mujer_10").src = "./imagenes/hombre_s2.png";
}
// mujeres en stem// 
function cambiart_s(){
    document.getElementById("s4_p1").style.display = "none";
    document.getElementById("s4_ps").style.display = "block";
    document.getElementById("s4_pt").style.display = "none";
    document.getElementById("s4_pe").style.display = "none";
    document.getElementById("s4_pm").style.display = "none";
    document.getElementById("s4_o_s").style.background = "#131200";
    document.getElementById("s4_o_t").style.background = "#572364";
    document.getElementById("s4_o_e").style.background = "#572364";
    document.getElementById("s4_o_m").style.background = "#572364";


}
function cambiart_t(){
    document.getElementById("s4_p1").style.display = "none";
    document.getElementById("s4_ps").style.display = "none";
    document.getElementById("s4_pt").style.display = "block";
    document.getElementById("s4_pe").style.display = "none";
    document.getElementById("s4_pm").style.display = "none";
    document.getElementById("s4_o_s").style.background = "#572364";
    document.getElementById("s4_o_t").style.background = "#131200";
    document.getElementById("s4_o_e").style.background = "#572364";
    document.getElementById("s4_o_m").style.background = "#572364";
}

function cambiart_e(){
    document.getElementById("s4_p1").style.display = "none";
    document.getElementById("s4_ps").style.display = "none";
    document.getElementById("s4_pt").style.display = "none";
    document.getElementById("s4_pe").style.display = "block";
    document.getElementById("s4_pm").style.display = "none";
    document.getElementById("s4_o_s").style.background = "#572364";
    document.getElementById("s4_o_t").style.background = "#572364";
    document.getElementById("s4_o_e").style.background = "#131200";
    document.getElementById("s4_o_m").style.background = "#572364";
}

function cambiart_m(){
    document.getElementById("s4_p1").style.display = "none";
    document.getElementById("s4_ps").style.display = "none";
    document.getElementById("s4_pt").style.display = "none";
    document.getElementById("s4_pe").style.display = "none";
    document.getElementById("s4_pm").style.display = "block";
    document.getElementById("s4_o_s").style.background = "#572364";
    document.getElementById("s4_o_t").style.background = "#572364";
    document.getElementById("s4_o_e").style.background = "#572364";
    document.getElementById("s4_o_m").style.background = "#131200";
}
//botones//


//pruebas d3//

d3.select("body").transition()
    .style("background-color", "black");