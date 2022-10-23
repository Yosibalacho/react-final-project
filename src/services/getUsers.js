export default async function GetUsers() {
      try {
        return await fetch(
          "https://my-json-server.typicode.com/Jeck99/fake-users-api/users"
        )
          .then((res) => res.json())
      } catch (error) {
        console.log(error);
      }
      finally{
        
      }
    }
    