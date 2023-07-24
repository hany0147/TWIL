/**
 * Namespace
 * 
 * 현재는 안 쓰지만, 과거 코드를 다룰 때 볼 줄은 알아야하니까.
 */
namespace Home {
  class Idol {
    name: string;
    age: number;
  
    constructor(name: string, age: number){
      this.name = name;
      this.age = age;
    }
  }

  export const yujin = new Idol('안유진', 23);
}

namespace Post {
  class User{
    email: string;
    name: string;
  
    constructor(email: string, name: string){
      this.email = email;
      this.name = name;
    }
  }

  // new Idol();

  const admin = new User('admin@cod.ai', Home.yujin.name);
  console.log(admin);
}


namespace Comment {

  const name = 'comment';

  namespace Detail {
    const page = 'detail';

    console.log(name);
    console.log(page);
  }

  console.log('-----------');
  console.log(name);
  // console.log(page);
}