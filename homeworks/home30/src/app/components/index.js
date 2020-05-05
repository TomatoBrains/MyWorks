import $ from "jquery";

class Posts {
  constructor(object) {
    this.userId = object.userID;
    this.id = object.id;
    this.postsList = [];
    this.title = object.title;
    this.body = object.body;
    this.postsHolder = object.postsHolder;
  }
  init() {
    this.getPosts();
    this.addNewPostEvent();
  }
  getPosts() {
    const self = this;
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(function (respons) {
        if (respons.ok) {
          return respons.json();
        }
      })
      .then(function (res) {
        self.postsList = res;
        self.drawPosts(res);
        self.deletePostEvent(res);
        self.editPostEvent(res);
      });
  }
  drawPosts(posts) {
    const self = this;
    posts.map(function (item) {
      $(self.postsHolder).append(`
    <div class="post__descr-item${item.id}">
        <h1 class="post__id">User ID ${item.userId}</h1>
        <p>Post №${item.id}</p>
        <div class="post__img"><img src="img/profile.jpg" alt=""></div>
        <h2 class="post__title">${item.title}</h2>
        <p class="post__body">${item.body}</p>
        <div class="post__edit">
        <button class="post__edit-btn" data-id="${
          item.id
        }" data-userId = "${item.userId}">Edit</button>
        </div>
        <div class="post__delete">
        <button class="post__delete-btn${
          item.id
        }" data-id="${item.id + "delete-btn"}">Delete</button>
        </div>
    </div>`);
    });
  }
  deletePostEvent(posts) {
    posts.map(function (item) {
      $(`.post__delete-btn${item.id}`).on("click", function () {
        fetch("https://jsonplaceholder.typicode.com/posts/" + item.id, {
          method: "DELETE",
        }).then(function (res) {
          if (res.ok) {
            $(`.post__descr-item${item.id}`).remove();
          }
        });
      });
    });
  }
  addNewPostEvent() {
    $(".post__add--btn").on("click", function () {
      $(".post__add-modal").toggle(".showModal");
    });
    let id = 100;
    $(".post__add-submit").on("click", function () {
      let title = document.querySelector(".post__add-title").value;
      let body = document.querySelector(".post__add-body").value;
      id++;
      let postObj = function (title, body, id) {
        return {
          userId: 11,
          id: id,
          title: title,
          body: body,
        };
      };
      let postData = postObj(title, body, id);
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(postData),
      }).then(function (res) {
        if (res.ok) {
          $(".post__descr").prepend(`
    <div class="post__descr-item${postData.id}">
        <h1 class="post__id">User ID ${postData.userId}</h1>
        <p>Post №${postData.id}</p>
        <div class="post__img"><img src="img/profile.jpg" alt=""></div>
        <h2 class="post__title">${postData.title}</h2>
        <p class="post__body">${postData.body}</p>
        <div class="post__edit">
        <button class="post__edit-btn" data-id="${
          postData.id
        }" data-userId = "${postData.userId}>Edit</button>
        </div>
        <div class="post__delete">
        <button class="post__delete-btn${postData.id}" data-id="${
            postData.id + "delete-btn"
          }">Delete</button>
        </div>
    </div>`);
        }
      });
    });
  }
  editPostEvent() {
    let self = this;
    console.log(this)
    let id;
    let userId;
    $(".post__edit-btn").on("click", function (e) {
      $(".post__edit-modal").toggle("showModal");
      id = e.target.dataset.id;
      userId = e.target.dataset.userid;
      console.log(e.target);
    });
    $(".post__edit-close").on("click", function () {
      $(".post__edit-modal").toggle("showModal");
    });
    $(".post__edit-submit").on("click", function () {
      let title = document.querySelector(".post__edit-title").value;
      let body = document.querySelector(".post__edit-body").value;
      console.log(title);
      let putObj = function (userId, id, title, body) {
        return {
          userId: userId,
          id: id,
          title: title,
          body: body,
        };
      };
      let putData = putObj(userId, id, title, body);
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(putData),
      }).then(function (res) {
        if (res.ok) {
          $(".post__title").value = title;
          $(".post__body").value = body;
        }
      });
    });
  }
}
let posts = new Posts({ postsHolder: ".post__descr" });
posts.init();
