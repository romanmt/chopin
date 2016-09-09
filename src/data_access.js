import neo4j from 'neo4j'
import {map} from 'lodash'

const db = new neo4j.GraphDatabase('http://192.168.33.10:7474');

export function getChords(key, cb) {
  db.cypher({
    query: 'MATCH (c:Chord)-[r:BELONGS_TO]->(k:Key) WHERE k.name = {key} RETURN c ORDER BY r.position',
    params: {
      key: key
    }
  }, (err, results) => {

    if(err) return cb(err, null);

    cb(null, map(results, (chord) => {
      return chord.c.properties
    }))
  })
}
