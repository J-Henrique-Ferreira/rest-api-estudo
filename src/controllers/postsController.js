const generateId = () => {
  return Math.random().toString(36).substring(2, 9);
};

const postsController = {
  posts: [
    {
      id: "dffdggda",
      title: "Teste do mural",
      descrition: "Descrição de teste",
    },
  ],

  postsAll() {
    return this.posts;
  },

  newPost(title, description) {
    id: generateId();

    this.posts.push({ id: generateId, title, description });
    return "Post adicionado com sucesso";
  },
};

module.exports = postsController;
