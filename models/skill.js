const skills = [
  {id: 124567, lang: 'HTML/CSS', difficulty: 'easy'},
  {id: 123566, lang: 'JS', difficulty: 'intermediate'},
  {id: 164532, lang: 'Node', difficulty: 'hard'},
  {id: 127403, lang: 'Express', difficulty: 'hard'}
];

module.exports = {
  getAll
};

function getAll() {
  return skills;
}