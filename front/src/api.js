export fetchData = async () => {
    try {
        const response = await fetch('http://localhost:3000/phones')
        const data = await response.json();
        return data;
    } catch(error) {
        console.log(error);
    }
}