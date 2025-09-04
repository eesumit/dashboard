export default async function Customers(){
    console.log('Fetching revenue data...');
    await new Promise((resolve) => setTimeout(resolve, 3000));
    
    return <p>Hello Customers.</p>

}