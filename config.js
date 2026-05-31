export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.json({
    url: process.env.SUPABASE_URL || '',
    key: process.env.ANON_KEY || ''
  });
}
