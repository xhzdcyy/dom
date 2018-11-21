$('#clickMe').on('click', () => {
    $('#popover').toggleClass('active');
    console.log(1);
    if ($('#popover').hasClass('active')) {
        setTimeout(() => {
            console.log('添加事件')
            $(document).one('click', () => {
                $('#popover').removeClass('active');
            })
        }, 0);
    } else{
        console.log(2);
    }
})

$('#wrapper').on('click', (e) => {
    e.stopPropagation();
})

