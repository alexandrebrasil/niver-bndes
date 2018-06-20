import './estilos.scss';

$(() => {
    $(window).on('resize', () => alturaMosaico());
    alturaMosaico();
    
    $('#popover .close a').on('click', () => {
        console.log('close');
        $('#popover').addClass('hidden')
    });
})

function alturaMosaico() {
    let mosaico = $('.mosaico'),
        altura = mosaico.height(),
        linhas = mosaico.find('.linha');
    
    if($(document).width() > 1210) {
        linhas.eq(0).css('height', `${altura * 0.57}px`);
        linhas.eq(1).css('height', `${altura * 0.43}px`);
    } else {
        linhas.css('height', '');
    }
}