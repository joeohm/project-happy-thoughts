// Exported helpers functions to not clutter up components

export const collectThoughts = (setLoading, setHappyThoughts) => {
  setLoading(true);
  fetch('https://project-happy-thoughts-api-rwwjpm7rkq-uc.a.run.app/thoughts')
    .then((res) => res.json())
    .then((data) => setHappyThoughts(data))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
};

export const handleLikeButtonClick = (id, setLikes) => {
  // posts a new like to the like endpoint for the current thought
  fetch(
    `https://project-happy-thoughts-api-rwwjpm7rkq-uc.a.run.app/thoughts/${id}/like`,
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: ''
    }
  )
    // then receives an updated thought
    .then((res) => res.json())
    // re-renders that thought by setting new state
    .then((updatedThought) => {
      setLikes(updatedThought.hearts);
    })
    .catch((error) => console.error(error));
};
