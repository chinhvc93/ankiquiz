class ExamApi {
  constructor() {
    this.url = "https://api.github.com/users/hadley/orgs";
  }

  getData() {
    console.log("ExamApi->getData", data);

    fetch(this.url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  }
}

class UserApi {
  constructor() {
    this.url = "https://vkz3yawbfkuwoy6vzsgdiulqnm0wmpls.lambda-url.ap-northeast-1.on.aws/";
  }

  getData() {
    console.log("UserApi->getData");

    fetch(this.url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  }

  saveData(data) {
    console.log("UserApi->saveData", data);

  }
}
