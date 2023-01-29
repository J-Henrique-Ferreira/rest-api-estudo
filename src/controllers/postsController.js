const posts = [
  {
    id: "dffdggda",
    title: "Teste do mural",
    description: "Descrição de teste",
  },
];

const generateId = () => {
  return Math.random().toString(36).substring(2, 9);
};

class postsController {
  static postsAll = (req, res) => {
    res.send(posts);
  };

  static newPost = (req, res) => {
    let newPostData = {
      id: generateId(),
      title: req.body.title,
      description: req.body.description,
    };

    console.log(req.body);
    posts.push(newPostData);

    res.send("Post adicionado com sucesso");
  };
}

module.exports = postsController;
