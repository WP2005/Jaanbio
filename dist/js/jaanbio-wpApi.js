import  {markup_Home} from "./jaanbio-markup-home.js"  
import  {markup_About} from "./jaanbio-markup-about.js"  

  function createPostObj(data) {
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
    return postObj;
}

function post_HomePage(postData){
  console.log("adding home markup");

  document.getElementById("markup").insertAdjacentHTML("beforeend",  markup_Home); //-- Render the home page markup (see imported function)
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

function post_AboutPage(postData){
  console.log("adding about markup");

  document.getElementById("markup").insertAdjacentHTML("beforeend",  markup_About); //-- Render the About page markup (see imported function)
  postData.forEach(item => {
    if (item.postId==342){  //--- Header Captions ----
      console.log("Post About Page")
      document.getElementById("wpApi_headerTitle").insertAdjacentHTML("beforeend",  item.title);
      document.getElementById("wpApi_headerContent").insertAdjacentHTML("beforeend",  item.content);
    };
  });
}

//--- Fetch Posts ----
const get_wpPosts = function (postURL) {
  fetch(postURL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.status);
    })
    .then((data) => {
        //--- Save post data in session to reduce fetch.
        sessionStorage.setItem('postStr',JSON.stringify(createPostObj(data)));
        if (pageName=='home'){
          post_HomePage(JSON.parse(sessionStorage.getItem('postStr')));
        }
        if (pageName=='about'){
          post_AboutPage(JSON.parse(sessionStorage.getItem('postStr')));
        }
    })
    .catch((error) => {
      console.log("Error in fetch: ", error);
    });
}; //--- End Fetch posts ----


function getQueryStringByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}









sessionStorage.clear('postStr');
var pageName = getQueryStringByName('pagename');
console.log("pageName = ", pageName)

if (!sessionStorage.getItem('postStr')){
  console.log("A: Session is empty, creating postObj")
  const postURL = "https://jaanbio.com/wp-json/wp/v2/posts?categories=10";
  get_wpPosts(postURL)
}else{
  console.log("using session: ")
  if (pageName=='home'){
    post_HomePage(JSON.parse(sessionStorage.getItem('postStr')));
  }
  if (pageName=='about'){
    post_AboutPage(JSON.parse(sessionStorage.getItem('postStr')));
  }
};
