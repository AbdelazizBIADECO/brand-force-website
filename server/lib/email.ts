export interface AuditFormData {
  id: number;
  email: string;
  website: string;
  Description: string;
  created_at: string;
}

export async function sendAuditConfirmationEmail(formData: AuditFormData): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
     const response = await fetch('https://brandforce-api.vercel.app/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: formData.email,
        website: formData.website,
      })
    });

    const data = await response.json();

    res.json({
      message: 'Data sent successfully',
      apiResponse: data
    });
  } catch (error: any) {
    console.error('Email service error:', error);
    return { success: false, error: error.message || 'Unknown email service error' };
  }
}

export async function sendContactEmail(formData: any): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
     const response = await fetch('https://brandforce-api.vercel.app/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: formData.email,
        website: formData.website,
        message: formData.message,
        name: formData.name,
      })
    });

    const data = await response.json();

    res.json({
      message: 'Data sent successfully',
      apiResponse: data
    });
  } catch (error: any) {
    console.error('Email service error:', error);
    return { success: false, error: error.message || 'Unknown email service error' };
  }
}