export default function handler(req, res) {
  console.log(req.query);
  res.status(200).json(`Getting one company ${req.query.id}`);
}
