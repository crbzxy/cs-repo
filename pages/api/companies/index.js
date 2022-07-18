import { pool } from '../../../config/db';

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return await getCompanies(req, res);
    case 'POST':
      return await saveCompany(req, res);
    default:
      return res.status(405).json({
        error: 'Method not allowed',
      });
  }
}
const getCompanies = async (req, res) => {
  console.log('Obteniendo empresas');
  const [result] = await pool.query('SELECT * FROM companies');
  return res.status(200).json(result);
};

const saveCompany = async (req, res) => {
  try {
    console.log('Registrando empresa');
    console.log(req.body);
    const { name, creationDate, companyType, description } = req.body;
    const [result] = await pool.query('INSERT INTO companies SET ?', {
      name,
      creationDate,
      companyType,
      description,
    });

    return res.status(200).json({
      ...req.body,
      id: result.insertId,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
