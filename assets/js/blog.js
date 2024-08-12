const blogSpotEl = $('#blog-spot');
const backButtonEl = $('#back-btn');
const colorSwitchEl = $('#switch');
const body = $('<body>');



// username: ,
// title: ,
// text: 


function readLocalStorage(){
    let storedBlog = JSON.parse(localStorage.getItem('blog'));
    if(!storedBlog){
        storedBlog = [];
    }
    return storedBlog;
}

function createBlog(){

    let blog = readLocalStorage();
    if(blog.length === 0){
        return;
    }

    for(post of blog){
        const box = $('<div>')
            .addClass('box blog-post border border-danger my-3');
        
        const user = $('<h6>')
            .text(post.username);
        const title = $('<h4>')
            .text(post.title);
        const content = $('<p>')
            .text(post.text);
        
        box.append(user);
        box.append(title);
        box.append(content);

        blogSpotEl.append(box);
    }
}

function switchColorScheme(event){
    event.preventDefault();

  
    
    if(body.hasClass('light')){
        body.removeClass('light').addClass('dark');
    }
    else{
        body.removeClass('dark').addClass('light');
    }
}



$(document).ready(() =>{

    
    body.addClass('light');

    colorSwitchEl.on('click',switchColorScheme);

    backButtonEl.on('click',() =>{window.location.href = "./home.html"});

    createBlog();

});