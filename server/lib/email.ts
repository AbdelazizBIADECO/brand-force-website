import { Resend } from 'resend';

const resend = new Resend('re_58tV6aqM_6mU3B5bdHqDFNknX9GCzUUug');

export interface AuditFormData {
  id: number;
  email: string;
  website: string;
  Description: string;
  created_at: string;
}

export async function sendAuditConfirmationEmail(formData: AuditFormData): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Audit Form Submission Confirmation</title>
        <style>
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8fafc;
          }
          .container {
            background-color: #ffffff;
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #00ff9d;
          }
          .logo {
            font-size: 24px;
            font-weight: bold;
            color: #0b0f1a;
            margin-bottom: 10px;
          }
          .title {
            font-size: 28px;
            font-weight: bold;
            color: #0b0f1a;
            margin-bottom: 10px;
          }
          .subtitle {
            font-size: 16px;
            color: #64748b;
          }
          .content {
            margin-bottom: 30px;
          }
          .form-data {
            background-color: #f1f5f9;
            border-radius: 8px;
            padding: 24px;
            margin: 20px 0;
          }
          .form-data h3 {
            color: #0b0f1a;
            margin-bottom: 16px;
            font-size: 18px;
            font-weight: 600;
          }
          .field {
            margin-bottom: 12px;
            padding: 12px;
            background-color: #ffffff;
            border-radius: 6px;
            border-left: 4px solid #00ff9d;
          }
          .field-label {
            font-weight: 600;
            color: #374151;
            font-size: 14px;
            margin-bottom: 4px;
          }
          .field-value {
            color: #0b0f1a;
            font-size: 16px;
            word-break: break-all;
          }
          .next-steps {
            background-color: #ecfdf5;
            border: 1px solid #00ff9d;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
          }
          .next-steps h3 {
            color: #065f46;
            margin-bottom: 12px;
            font-size: 18px;
          }
          .next-steps ul {
            color: #047857;
            margin: 0;
            padding-left: 20px;
          }
          .next-steps li {
            margin-bottom: 8px;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            color: #64748b;
            font-size: 14px;
          }
          .contact-info {
            background-color: #f8fafc;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            text-align: center;
          }
          .contact-info h4 {
            color: #0b0f1a;
            margin-bottom: 12px;
          }
          .contact-info p {
            margin: 4px 0;
            color: #64748b;
          }
          .highlight {
            color: #00ff9d;
            font-weight: 600;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">🧠 Brandforce.ai</div>
            <h1 class="title">Audit Request Confirmed!</h1>
            <p class="subtitle">Your SEO audit request has been successfully submitted</p>
          </div>

          <div class="content">
            <p>Thank you for requesting an SEO audit from Brandforce.ai! We've received your submission and our AI-powered analysis engine is already getting to work.</p>

            <div class="form-data">
              <h3>📋 Submission Details</h3>
              <div class="field">
                <div class="field-label">Submission ID</div>
                <div class="field-value">#${formData.id}</div>
              </div>
              <div class="field">
                <div class="field-label">Website URL</div>
                <div class="field-value">${formData.website}</div>
              </div>
              <div class="field">
                <div class="field-label">Email Address</div>
                <div class="field-value">${formData.email}</div>
              </div>
              <div class="field">
                <div class="field-label">Request Type</div>
                <div class="field-value">${formData.Description}</div>
              </div>
              <div class="field">
                <div class="field-label">Submitted On</div>
                <div class="field-value">${new Date(formData.created_at).toLocaleString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  timeZoneName: 'short'
                })}</div>
              </div>
            </div>

            <div class="next-steps">
              <h3>🚀 What Happens Next?</h3>
              <ul>
                <li><strong>AI Analysis (0-2 hours):</strong> Our AI engine will crawl and analyze your website</li>
                <li><strong>Expert Review (2-12 hours):</strong> Our SEO specialists will review the AI findings</li>
                <li><strong>Report Generation (12-24 hours):</strong> We'll compile your comprehensive audit report</li>
                <li><strong>Delivery:</strong> You'll receive your detailed SEO audit report within 24 hours</li>
              </ul>
            </div>

            <p>Your audit will include:</p>
            <ul>
              <li>🔍 <strong>Technical SEO Analysis</strong> - Site speed, mobile optimization, crawlability</li>
              <li>📊 <strong>Keyword Gap Analysis</strong> - Opportunities your competitors are missing</li>
              <li>📈 <strong>Performance Benchmarking</strong> - How you stack up against industry standards</li>
              <li>🎯 <strong>Actionable Recommendations</strong> - Prioritized list of improvements</li>
              <li>💰 <strong>ROI Projections</strong> - Expected impact of recommended changes</li>
            </ul>
          </div>

          <div class="contact-info">
            <h4>Questions? We're Here to Help!</h4>
            <p><strong>Email:</strong> hello@brandforce.ai</p>
            <p><strong>Response Time:</strong> Within 2 hours during business hours</p>
            <p><strong>Business Hours:</strong> Monday-Friday, 9 AM - 6 PM PST</p>
          </div>

          <div class="footer">
            <p>This email was sent to <span class="highlight">${formData.email}</span> because you requested an SEO audit from Brandforce.ai.</p>
            <p>© 2024 Brandforce.ai - AI-Powered SEO, Human-Level Results</p>
            <p>If you didn't request this audit, please ignore this email or contact us at hello@brandforce.ai</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Brandforce.ai <noreply@brandforce.ai>',
      to: [formData.email],
      bcc: ['abdelazizbiad1@gmail.com'],
      subject: 'Audit Form Submission Confirmation - Your SEO Analysis is Underway',
      html: htmlTemplate,
    });

    if (error) {
      console.error('Resend email error:', error);
      return { success: false, error: error.message };
    }

    console.log('Email sent successfully:', data);
    return { success: true, messageId: data?.id };

  } catch (error: any) {
    console.error('Email service error:', error);
    return { success: false, error: error.message || 'Unknown email service error' };
  }
}