function extractPostData(data) {
        var postArray=[];
        for(var i in data){
            let postId=data[i].id
            let title=data[i].title.rendered
            let category=data[i].categories[0];
            let content=data[i].content.rendered

            postArray.push([postId, category, title, content]);
        };
        console.table(postArray)
     
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
        
      extractPostData(data); 
    })
    .catch((error) => {
      console.log("Error in fetch: ", error);
    });
}; //--- End Fetch posts ----


//* _embed to include the featured image source. NOTE THE UNDERSCORE */
const postURL =
  "https://jaanbio.com/wp-json/wp/v2/posts";
get_wpPosts(postURL);

