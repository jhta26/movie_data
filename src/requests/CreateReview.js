const CreateReview = async (info, userId, token) => {
  let request = await fetch(
    `${env.REACT_APP_BASE_URL}/users/${userId}/ratings`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: info.userId,
        movie_id: info.movie_id,
        content: info.content,
        gender: info.gender,
        state: info.state,
        country: info.country,
        age: info.age
      })
    }
  );
  let response = await request.json();
  let id = await response.id;
  return { id: id };
};

export default CreateRatings;
