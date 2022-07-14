const skills = [
  {id: 124567, lang: 'HTML/CSS', difficulty: 'easy'},
  {id: 123566, lang: 'JS', difficulty: 'intermediate'},
  {id: 164532, lang: 'Node', difficulty: 'hard'},
  {id: 127403, lang: 'Express', difficulty: 'hard'}
];

module.exports = {
  getAll,
  getOne,
};

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}