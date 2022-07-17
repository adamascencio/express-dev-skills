const skills = [
  {id: 124567, lang: 'HTML/CSS', difficulty: 'easy'},
  {id: 123566, lang: 'JS', difficulty: 'intermediate'},
  {id: 164532, lang: 'Node', difficulty: 'hard'},
  {id: 127403, lang: 'Express', difficulty: 'hard'}
];

module.exports = {
  getAll,
  getOne,
  create,
  delete: deleteOne,
  update
};

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skills.push(skill);
}

function deleteOne(id) {
  id = parseInt(id);
  const skillIdx = skills.findIndex((s) => s.id === id);
  skills.splice(skillIdx, 1);
}

function update(id, updatedSkill) {
  id = parseInt(id);
  const skill = skills.find(skill => skill.id === id);
  Object.assign(skill, updatedSkill);
}
