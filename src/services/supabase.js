import { createClient } from "@supabase/supabase-js";
// import key from env file
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabaseUrl = "https://cgiefdarvkmpyolygxch.supabase.co";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
