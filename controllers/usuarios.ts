export async function getUser(id: number) {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/http://apiservicios.ecuasolmovsa.com:3009/api/Usuarios?usuario=5000&password=5000U`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    try {
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  