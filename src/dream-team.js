module.exports = function createDreamTeam(members) {
  let team = [];
  if (Array.isArray(members) != true) {
    return false;
  }
  for (var i = 0; i < members.length; i++) {
    if (typeof members[i] == 'string') {
      team.push(members[i].trim()[0].toUpperCase());
    }
  }
  return team.sort().join('');
};
