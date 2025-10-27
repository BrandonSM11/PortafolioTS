// // /app/api/contact/route.ts
// import dbConnection from "../../lib/db";
// import ContactMessageModel from "../../database/models/contact";
// import jwt from "jsonwebtoken";
// import axios from "axios";

// export async function POST(req: Request) {
//   await dbConnection();
//   const { name, email, message } = await req.json();

//   if (!name || !email || !message) {
//     return new Response(
//       JSON.stringify({ ok: false, error: "Todos los campos son obligatorios" }),
//       { status: 400 }
//     );
//   }

//   const emailRegex = /\S+@\S+\.\S+/;
//   if (!emailRegex.test(email)) {
//     return new Response(
//       JSON.stringify({ ok: false, error: "Email inválido" }),
//       { status: 400 }
//     );
//   }

//   // Guardar en MongoDB
//   const newMessage = new ContactMessageModel({ fullName: name, email, message });
//   const saved = await newMessage.save();

//   // ----------- 🔹 Enviar también a Google Sheets 🔹 -----------
//   try {
//     const SHEET_ID = process.env.GOOGLE_SHEET_ID;
//     const SHEET_NAME = process.env.GOOGLE_SHEET_NAME || "Sheet1";
//     const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
//     const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

//     if (!SHEET_ID || !GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
//       console.error("❌ Variables de entorno de Google faltantes");
//     } else {
//       const now = Math.floor(Date.now() / 1000);
//       const jwtToken = jwt.sign(
//         {
//           iss: GOOGLE_SERVICE_ACCOUNT_EMAIL,
//           scope: "https://www.googleapis.com/auth/spreadsheets",
//           aud: "https://oauth2.googleapis.com/token",
//           exp: now + 3600,
//           iat: now,
//         },
//         GOOGLE_PRIVATE_KEY,
//         { algorithm: "RS256" }
//       );

//       // Obtener token de acceso
//       const tokenRes = await axios.post(
//         "https://oauth2.googleapis.com/token",
//         new URLSearchParams({
//           grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
//           assertion: jwtToken,
//         }),
//         { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
//       );

//       const accessToken = tokenRes.data.access_token;

//       // Enviar datos a Sheets
//       const rowData = [name, email, message, new Date().toISOString()];
//       const sheetsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}!A:D:append?valueInputOption=USER_ENTERED`;

//       await axios.post(
//         sheetsUrl,
//         { values: [rowData] },
//         { headers: { Authorization: `Bearer ${accessToken}` } }
//       );
//     }
//   } catch (err: any) {
//     console.error("⚠️ Error al guardar en Google Sheets:", err.response?.data || err.message);
//   }

//   // ----------------------------------------------------------

//   return new Response(
//     JSON.stringify({ ok: true, message: "Mensaje guardado", id: saved._id }),
//     { status: 201 }
//   );
// }

// export async function GET() {
//   await dbConnection();
//   const messages = await ContactMessageModel.find().sort({ createdAt: -1 });
//   return new Response(JSON.stringify(messages), { status: 200 });
// }

// export async function DELETE(req: Request) {
//   await dbConnection();

//   const url = new URL(req.url);
//   const id = url.searchParams.get("id");

//   if (!id) {
//     return new Response(
//       JSON.stringify({ ok: false, error: "Se requiere un id" }),
//       { status: 400 }
//     );
//   }

//   const deleted = await ContactMessageModel.findByIdAndDelete(id);

//   if (!deleted) {
//     return new Response(
//       JSON.stringify({ ok: false, error: "Mensaje no encontrado" }),
//       { status: 404 }
//     );
//   }

//   return new Response(
//     JSON.stringify({ ok: true, message: "Mensaje eliminado", id: deleted._id }),
//     { status: 200 }
//   );
// }
