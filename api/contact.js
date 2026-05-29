export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, mobile } = req.body;

  console.log("New Inquiry");
  console.log({ name, mobile });

  return res.status(200).json({
    success: true,
    message: "Inquiry submitted successfully!"
  });
}
