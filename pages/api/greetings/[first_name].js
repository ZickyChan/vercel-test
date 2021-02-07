export default function greetingsHandler(req, res) {
  const {
    query: { first_name },
    method,
  } = req;

  switch (method) {
    case "GET":
      res.status(200).json({ greetings: `Hello ${first_name}!` });
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
