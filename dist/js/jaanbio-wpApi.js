function extractPostData(data) {
        var postArray=[];
        for(var i in data){
            let postId=data[i].id
            let title=data[i].title.rendered
            let category=data[i].categories[0];
            let content=data[i].content.rendered

            postArray.push([postId, category, title, content]);
        };
        console.table(postArray);
  }

  function createPostObj(data) {
    var postObj=[];
    for(var i in data){
        let postId=data[i].id
        let title=data[i].title.rendered
        let category=data[i].categories[0];
        let content=data[i].content.rendered;

        postObj.push({"postId":postId, "title":title, "category":category, "content":content})
      
    };
    console.log("Obj type: ", typeof(postObj))
    console.table('postobj is:', postObj);
    console.log('element is:', postObj[0]['postId']);
}

  
  

//--- Fetch page ----
const get_wpPosts = function (postURL) {
  fetch(postURL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.status);
    })
    .then((data) => {
        
      createPostObj(data); 
    })
    .catch((error) => {
      console.log("Error in fetch: ", error);
    });
}; //--- End Fetch posts ----


//* _embed to include the featured image source. NOTE THE UNDERSCORE */
const postURL =
  "https://jaanbio.com/wp-json/wp/v2/posts";
  get_wpPosts(postURL);

