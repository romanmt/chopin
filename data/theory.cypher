CREATE (gmaj:Chord {name: 'G', tonality: 'major'})
CREATE (amin:Chord {name: 'Am', tonality: 'minor'})
CREATE (bmin:Chord {name: 'Bm', tonality: 'minor'})
CREATE (cmaj:Chord {name: 'C', tonality: 'major'})
CREATE (dmaj:Chord {name: 'D', tonality: 'major'})
CREATE (emin:Chord {name: 'Em', tonality: 'minor'})
CREATE (fsharpDim:Chord {name: 'F#dim', tonality: 'diminished'})
CREATE (dmin:Chord {name: 'Dm', tonality: 'minor'})
CREATE (fmaj:Chord {name: 'F', tonality: 'major'})
CREATE (bdim:Chord {name: 'Bdim', tonality: 'diminished'})
CREATE (fsharpMin:Chord {name: 'F#m', tonality: 'minor'})
CREATE (amaj:Chord {name: 'A', tonality: 'major'})
CREATE (csharpDim:Chord {name: 'C#dim', tonality: 'diminished'})
CREATE (emaj:Chord {name: 'E', tonality: 'major'})
CREATE (gsharpMin:Chord {name: 'G#m', tonality: 'minor'})
CREATE (bmaj:Chord {name: 'B', tonality: 'major'})
CREATE (csharpMin:Chord {name: 'C#m', tonality: 'minor'})
CREATE (dsharpMin:Chord {name: 'D#m', tonality: 'minor'})
CREATE (fsharpMaj:Chord {name: 'F#', tonality: 'minor'})
CREATE (dsharpDim:Chord {name: 'D#dim', tonality: 'diminished'})
CREATE (gmin:Chord {name: 'Gm', tonality: 'minor'})
CREATE (bflatmin:Chord {name: 'Bbm', tonality: 'minor'})
CREATE (edim:Chord {name: 'Edim', tonality: 'diminished'})
CREATE (gsharpDim:Chord {name: 'G#dim', tonality: 'diminished'})
CREATE (asharpDim:Chord {name: 'A#dim', tonality: 'diminished'})

CREATE (amajkey:Key {name: 'A'})

CREATE (amaj)-[:BELONGS_TO {position: 1}]->(amajkey)
CREATE (bmin)-[:BELONGS_TO {position: 2}]->(amajkey)
CREATE (csharpMin)-[:BELONGS_TO {position: 3}]->(amajkey)
CREATE (dmaj)-[:BELONGS_TO {position: 4}]->(amajkey)
CREATE (emaj)-[:BELONGS_TO {position: 5}]->(amajkey)
CREATE (fsharpMin)-[:BELONGS_TO {position: 6}]->(amajkey)
CREATE (asharpDim)-[:BELONGS_TO {position: 7}]->(amajkey)

CREATE (bmajkey:Key {name: 'B'})

CREATE (bmaj)-[:BELONGS_TO {position: 1}]->(bmajkey)
CREATE (csharpMin)-[:BELONGS_TO {position: 2}]->(bmajkey)
CREATE (dsharpMin)-[:BELONGS_TO {position: 3}]->(bmajkey)
CREATE (emaj)-[:BELONGS_TO {position: 4}]->(bmajkey)
CREATE (fsharpMaj)-[:BELONGS_TO {position: 5}]->(bmajkey)
CREATE (gsharpMin)-[:BELONGS_TO {position: 6}]->(bmajkey)
CREATE (gsharpDim)-[:BELONGS_TO {position: 7}]->(bmajkey)

CREATE (cmajkey:Key {name: 'C'})

CREATE (cmaj)-[:BELONGS_TO {position: 1}]->(cmajkey)
CREATE (dmin)-[:BELONGS_TO {position: 2}]->(cmajkey)
CREATE (emin)-[:BELONGS_TO {position: 3}]->(cmajkey)
CREATE (fmaj)-[:BELONGS_TO {position: 4}]->(cmajkey)
CREATE (gmaj)-[:BELONGS_TO {position: 5}]->(cmajkey)
CREATE (amin)-[:BELONGS_TO {position: 6}]->(cmajkey)
CREATE (bdim)-[:BELONGS_TO {position: 7}]->(cmajkey)

CREATE (dmajkey:Key {name: 'D'})

CREATE (dmaj)-[:BELONGS_TO {position: 1}]->(dmajkey)
CREATE (emin)-[:BELONGS_TO {position: 2}]->(dmajkey)
CREATE (fsharpMin)-[:BELONGS_TO {position: 3}]->(dmajkey)
CREATE (gmaj)-[:BELONGS_TO {position: 4}]->(dmajkey)
CREATE (amaj)-[:BELONGS_TO {position: 5}]->(dmajkey)
CREATE (bmin)-[:BELONGS_TO {position: 6}]->(dmajkey)
CREATE (csharpDim)-[:BELONGS_TO {position: 7}]->(dmajkey)

CREATE (emajkey:Key {name: 'E'})

CREATE (emaj)-[:BELONGS_TO {position: 1}]->(emajkey)
CREATE (fsharpMin)-[:BELONGS_TO {position: 2}]->(emajkey)
CREATE (gsharpMin)-[:BELONGS_TO {position: 3}]->(emajkey)
CREATE (amaj)-[:BELONGS_TO {position: 4}]->(emajkey)
CREATE (bmaj)-[:BELONGS_TO {position: 5}]->(emajkey)
CREATE (csharpMin)-[:BELONGS_TO {position: 6}]->(emajkey)
CREATE (dsharpDim)-[:BELONGS_TO {position: 7}]->(emajkey)

CREATE (fmajkey:Key {name: 'F'})

CREATE (fmaj)-[:BELONGS_TO {position: 1}]->(fmajkey)
CREATE (gmin)-[:BELONGS_TO {position: 2}]->(fmajkey)
CREATE (amin)-[:BELONGS_TO {position: 3}]->(fmajkey)
CREATE (bflatmin)-[:BELONGS_TO {position: 4}]->(fmajkey)
CREATE (cmaj)-[:BELONGS_TO {position: 5}]->(fmajkey)
CREATE (dmin)-[:BELONGS_TO {position: 6}]->(fmajkey)
CREATE (edim)-[:BELONGS_TO {position: 7}]->(fmajkey)

CREATE (gmajkey:Key {name: 'G'})

CREATE (gmaj)-[:BELONGS_TO {position: 1}]->(gmajkey)
CREATE (amin)-[:BELONGS_TO {position: 2}]->(gmajkey)
CREATE (bmin)-[:BELONGS_TO {position: 3}]->(gmajkey)
CREATE (cmaj)-[:BELONGS_TO {position: 4}]->(gmajkey)
CREATE (dmaj)-[:BELONGS_TO {position: 5}]->(gmajkey)
CREATE (emin)-[:BELONGS_TO {position: 6}]->(gmajkey)
CREATE (fsharpDim)-[:BELONGS_TO {position: 7}]->(gmajkey)
