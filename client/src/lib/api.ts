import { supabase } from "./supabase";

export interface BrandforceEmailData {
  email: string;
  website: string;
  Description?: string;
}

export async function insertBrandforceEmail(data: BrandforceEmailData) {
  // Use the backend API endpoint instead of direct Supabase call
  const response = await fetch('/api/audit-request', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: data.email,
      website: data.website,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to submit audit request');
  }

  return await response.json();
}

export async function checkEmailExists(email: string): Promise<boolean> {
  const { data, error } = await supabase
    .from('brandforce_emails')
    .select('email')
    .eq('email', email)
    .limit(1);

  if (error) {
    console.error('Error checking email:', error);
    return false;
  }

  return data && data.length > 0;
}

// Contact form functions
export interface BrandforceContactData {
  name: string;
  email: string;
  website?: string;
  message: string;
}

export async function insertBrandforceContact(data: BrandforceContactData) {
  const { data: result, error } = await supabase
    .from('brandforce_contact')
    .insert([{
      name: data.name,
      email: data.email,
      website: data.website || null,
      message: data.message
    }])
    .select()
    .single();
  const response = await fetch('https://example.com/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: data.email,
      website: data.website,
      message: data.message,
      name: data.name
    })
  });

  const res = await response.json();
  if (error) {
    throw error;
  }

  return result;
}