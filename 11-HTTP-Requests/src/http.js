const URL = "http://localhost:3000/";
export const fetchAvailablePlaces = async () => {
  const response = await fetch(`${URL}places`);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }

  return resData.places;
};
export const fetchUserPlaces = async () => {
  const response = await fetch(`${URL}user-places`);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch user places");
  }

  return resData.places;
};
export const updateUserPlaces = async (places) => {
  const response = await fetch(`${URL}user-places`, {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Failed to update user places");
  }
  return resData.message;
};