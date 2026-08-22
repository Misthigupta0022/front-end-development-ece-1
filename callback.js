//Promise.resolve().then(()=>{
  //  console.log("Promise resolved");
//})
function getUser(id, callback){
    setTimeout(()=>{
        console.log("User Fetched");
        const user = {
            id: 101,
            username: "Diya"
        }
        callback(null, user)
    },1000)
}
function getProfile(id, callback){
    setTimeout(()=>{
        const profile = {
            username: "Diya",
            location: "Mathura"
        }
        callback(null, profile)
    },1000)
}
function getPosts(id, callback){
    setTimeout(()=>{
        const posts = {
            username: "Diya",
            posts: ["Post1", "Post2","Post3"]
        }
        callback(null, posts)
    },1000)
}
getUser(1, function(error, user){
    if(error){
        console.log(error);
    } else {
        console.log(user);
    }
});
getProfile(1, function(error, profile){
    if(error){
        console.log(error);
    } else {
        console.log(profile);
    }
});
getPosts(1, function(error, posts){
    if(error){
        console.log(error);
    } else {
        console.log(posts);
    }
});