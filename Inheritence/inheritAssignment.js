//assignment 
//grandparent - web
//parent - page
//child - LoginPage
//child - HomePage
//without construtor it was taking homepage element

class Web{
  constructor(){
    this.webUserCount = 0;
    this.UserCount = this.webUserCount;
  }
  className = "web";
  searchElement(){
    console.log(`${this.className} : ${this.UserCount}`);
  }
}
class Page extends Web{
  constructor(){
    super();
    this.pageUserCount = 1;
    this.UserCount = this.pageUserCount;
  }

  className = "page";

  searchElement(){
    super.searchElement();
    console.log(`${this.className} : ${this.UserCount}`);
  }
}
class HomePage extends Page{
  constructor(){
    super();
    this.homePageUserCount = 100;
    this.UserCount = this.pageUserCount;
  }
  className = "HomePage";
  searchElement(){
    super.searchElement();
    console.log(`${this.className} :  ${this.UserCount}`);
  }
}
class LoginPage extends Page{
  className = "LoginPage";
  element = "login button";
  searchElement(){
    super.searchElement();
    console.log(`${this.className} : ${this.element}`);
  }
}

export{Web,Page,LoginPage,HomePage};