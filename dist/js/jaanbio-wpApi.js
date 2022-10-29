  function createPostObj(data) {
   // console.log("data is: ", data)
    var postObj=[];
    for(var i in data){
        let postId=data[i].id
        let title=data[i].title.rendered
        let category=data[i].categories[0];
        let content=data[i].content.rendered;
        let excerpt=data[i].excerpt.rendered;
        postObj.push({"postId":postId, "title":title, "category":category, "content":content, "excerpt":excerpt})
    };
    console.log("Postobj is: ", postObj)
    //console.log('element is:', postObj[0]['content']);
    return postObj;
}


function post_HomePage(postData){

  console.log("whllo", postData)
  postData.forEach(item => {
    if (item.postId==297){  //--- Header Captions ----
      document.getElementById("wpApi_headerTitle").insertAdjacentHTML("beforeend",  item.title);
      document.getElementById("wpApi_headerContent").insertAdjacentHTML("beforeend",  item.content);
    };

    if (item.postId==300){  //--- Intro paragraph
      document.getElementById("wpApi-Intro").insertAdjacentHTML("beforeend",  item.content);
    }
  
    if (item.postId==304){  //--- Objectives
      document.getElementById("wpApi-panel1-title").insertAdjacentHTML("beforeend",  item.title);
      document.getElementById("wpApi-panel1-excerpt").insertAdjacentHTML("beforeend",  item.excerpt);
    }

    if (item.postId==310){  //--- Our Teams
      document.getElementById("wpApi-panel2-title").insertAdjacentHTML("beforeend",  item.title);
      document.getElementById("wpApi-panel2-excerpt").insertAdjacentHTML("beforeend",  item.excerpt);
    }

    if (item.postId==321){  //--- Our Teams
      document.getElementById("wpApi-panel3-title").insertAdjacentHTML("beforeend",  item.title);
      document.getElementById("wpApi-panel3-excerpt").insertAdjacentHTML("beforeend",  item.excerpt);
    }

    
  });

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
      post_HomePage(createPostObj(data)); 
    })
    .catch((error) => {
      console.log("Error in fetch: ", error);
    });
}; //--- End Fetch posts ----


//* _embed to include the featured image source. NOTE THE UNDERSCORE */
const postURL =
  "https://jaanbio.com/wp-json/wp/v2/posts?categories=10";
  get_wpPosts(postURL);

