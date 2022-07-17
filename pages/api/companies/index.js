import { pool } from '../../../config/db';

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return get(req, res);
    case 'POST':
      console.log('Registrando empresa');
      console.log(req.body);
      const { name, creationDate, companyType, description } = req.body;
      const [result] = await pool.query('INSERT INTO companies SET ?', {
        name,
        creationDate,
        companyType,
        description,
      });
      console.log(result);
      return res.status(200).json({
        name,
        creationDate,
        companyType,
        description,
        id: result.insertId,
      });

    case 'PUT':
      return put(req, res);
    case 'DELETE':
      return del(req, res);
    default:
      return res.status(405).json({
        error: 'Method not allowed',
      });
  }
}
