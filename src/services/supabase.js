import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://hwklivlobyoddlnovjfn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3a2xpdmxvYnlvZGRsbm92amZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyNzI3MTMsImV4cCI6MjA1Njg0ODcxM30.KHUqBAyoosPZYoz3M9kayMnm4dMbDebIsAWmNJXuoyk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
