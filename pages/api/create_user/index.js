export default function createUserHandler(req, res) {
  const {
    body: { firstName, lastName },
    method,
  } = req;

  if (!firstName || !lastName) {
    return res.status(400).json({ message: "Missing firstName or lastName!" });
  }

  switch (method) {
    case "POST":
      res.status(200).json({
        firstName: firstName.toUpperCase(),
        lastName: lastName.toUpperCase(),
      });
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
