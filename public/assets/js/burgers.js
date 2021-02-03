// add a new burger
$("#submit").on('click', function (event) {
    // get the value they entered into the input
    const submission = $('#burgerinput').val()
    console.log(submission)

    // if they dont enter anything make 'em
    if (submission == "") {
        alert("please enter submission")
        return;
    }

    // this is the JSON object we will send to our backend API
    const postData = {
        burger: submission,
        devoured: 0
    }

    // POST to backend API
    $.post('/api/burgers', postData, function (result) {
        console.log(result)
    });
});

// devour the burger
$('.eatTheBurger').on('click', function (event) {
    // get ID of new burger
    let burgerId = $(this).attr('data-id')
    console.log(burgerId)

    // POST to backend API
    $.ajax({
        url: `/api/burgers/${burgerId}`,
        type: 'PUT',
        data: { devoured: 1 },
        success: function (result) {
            console.log(result)
        }
    })
})
