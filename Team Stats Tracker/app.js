const team = {
  _players: [
    {
      firstName: 'Lebron',
      lastName: 'James',
      age: 40
    },
    {
      firstName: 'Luka',
      lastName: 'Dončić',
      age: 25
    },
    {
      firstName: 'Steven',
      lastName: 'Adams',
      age: 30
    }
  ],
  _games: [],

  get players() {
    return this._players;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    const newPlayer = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };

    this._players.push(newPlayer);
  },

 addGame(newOpponent, newTeamPoints, newOpponentPoints) {
  const newGame = {
    opponent: newOpponent,
    teamPoints: newTeamPoints,
    opponentPoint: newOpponentPoints
  };

  this._games.push(newGame);
 }
};

team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Lakers', 120, 105);
team.addGame('Warriors', 130, 115);
team.addGame('Titans', 100, 98);

console.log(team.players);

console.log(team._games);