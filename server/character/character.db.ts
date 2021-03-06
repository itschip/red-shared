import { db } from '../database/db';
import { CharacterBodyProps } from "../../shared/types";

export class _CharacterDB {
  async fetchCharacters(playerId: number): Promise<any[]> {
    const query = `SELECT id as charid, name FROM characters WHERE playerid = ?`;
    const [results] = await db.query(query, [playerId]);

    return <any[]>results;
  }

  async fetchBody(charid: number): Promise<CharacterBodyProps> {
    const query = `SELECT body FROM characters WHERE id = ?`;
    const [results] = await db.query(query, [charid]);
    const result = <any[]>results;

    return result[0].body;
  }

  async fetchClothing(charid: number): Promise<any> {
    const query = `SELECT clothes FROM characters WHERE id = ?`;
    const [results] = await db.query(query, [charid]);
    const result = <any[]>results;

    return result[0].clothes;
  }

  async updateClothing(charid: number, clothing: any): Promise<void> {
    const query = `UPDATE characters SET clothes = ? WHERE id = ?`
    await db.query(query, [clothing, charid]);
  }
}

const CharacterDB = new _CharacterDB();

export default CharacterDB;
