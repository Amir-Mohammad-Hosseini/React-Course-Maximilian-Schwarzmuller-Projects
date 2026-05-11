export const fetchData = async (url) => {
  const response = await fetch(`http://localhost:3000/${url}`);

  if (!response.ok) {
    throw new Error("Failed to fetch Meals.");
  }
  const mealsData = await response.json();
  return mealsData;
};
export const sendOrderForm = async (url , formDatas) => {
  try {
    const response = await fetch(`http://localhost:3000/${url}` , {
      method : "POST" , 
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(formDatas) 
    })
    if(!response.ok){
     throw new Error("Failed to send Checkout")
    }
    return response
  } catch (error) {
  }
}

