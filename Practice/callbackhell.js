 getArticles=(20, (user) => {
    console.log("Fetch articles", user);
    getUserData(user.username, (name) => {
        console.log(name);
        getAddress(name, (item) => {
            console.log(item);
        }
        )
    })
})
