//Basic Promise Creation and Handling

const myPromises = new Promise((resolve,reject) => {
    setTimeout(()  => resolve("Successed") , 2000);
});

myPromises.then((result) => console.log(result)).catch((error) => console.error(error));

//Fetch user details using Asynchronous Calls 

function fetchuserData(userId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(userId){
                resolve({id: userId, email: "john"});
            }else{
                reject("Invaild User id please provide correct Id");
            }
        },1000);
    });
}

//Fetch the posts from the userId

function fetchuserPosts(userId) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(userId) {
                resolve([
                    {id: userId, posts: "posts1"},
                    {id: userId, posts: "posts2"}
                ]);
            }else{
                reject("Invaild userid fetching posts");
            }
        },1000);
    })
}

//Fetch the posts from the userId

function fetchuserComments(userId) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(userId) {
                resolve([
                    {id: userId, comments: "comments1"},
                    {id: userId, comments: "comments2"}
                ])
            }else{
                reject("Invaild userid for fetching comments");
            }
        },1000);
    })
}

fetchuserData(123).then((user) => {
    console.log(user);
    return fetchuserData(user.id);
}).then((user) => {
    console.log(user);
    return fetchuserPosts(user.id);
}).then((posts) => {
    console.log(posts);
    return fetchuserComments(posts[0].id);
}).then((comments => {
    console.log(comments);
})).catch((error) => {console.log(error)});


// fetchuserData(123).then((user) => {console.log(user)}).catch((error) => console.error(error));
// fetchuserData(null).then((user) => {console.log(user)}).catch((error) => console.error(error));

