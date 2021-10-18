document.getElementById('comment__btn').addEventListener('click', function () {
    
    // get value in input field
    const CommentBox = document.getElementById('commment__box');
    // create new comment
    const newComment = document.createElement('p')
    newComment.innerText = CommentBox.value;
    // appandChild
    const commentContainer = document.getElementById('comment__area');
    commentContainer.appendChild(newComment);
    // Clear comment Box
    CommentBox.value=''

})