import './estilos.scss';

$(function() {
    $(window).on('resize', alturaMosaico);
    alturaMosaico();
    
    $('body').css('overflow', 'hidden');
    $('#popover .close a').on('click', fecharPopover);
    $('body').on('keydown', function(e) {
        if(e.keyCode === 27) {
            fecharPopover();
        }
    });
})

function fecharPopover() {
    $('#popover').addClass('hidden')
    $('body').css('overflow', 'auto');
}

function alturaMosaico() {
    let mosaico = $('.mosaico'),
        altura = mosaico.height(),
        linhas = mosaico.find('.linha'),
        largura = $(document).width();
    
    if(largura > 1210) {
        linhas.eq(0).css('height', `${altura * 0.57}px`);
        linhas.eq(1).css('height', `${altura * 0.43}px`);
    } else {
        linhas.css('height', '');
    }
}