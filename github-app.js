const git = new Github();
const ui = new UI();

// SEARCH iNPUT
const searchUser = document.querySelector('#searchUser');

// Search input event listener
searchUser.addEventListener('change', (e) => {
    //Get input text
    const userText = e.target.value;
    if (userText !== '') {
        // console.log(git.getUser(userText));
        git.getUser(userText)
            .then(data => {
                // console.log(data)
                if (data.profile.message === 'Not Found') {
                    //alert messageslfoo
                    // console.log('wala');
                    ui.clearProfile();
                    ui.showAlert('Wala kaming nakita', 'alert alert-danger')
                    
                }
                else{
                    //show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            });
    }
    else{
        ui.clearProfile();
    }
    // e.preventDefault();
});