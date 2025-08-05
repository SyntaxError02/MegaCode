const requiredEnvVars = [
  'CONTACT_EMAIL_1',
  'CONTACT_EMAIL_2',
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'SMTP_FROM'
] as const;

export function validateEnv() {
  const missingVars: string[] = [];
  
  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      missingVars.push(envVar);
    }
  }
  
  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }
}

// Validate environment on module load
if (process.env.NODE_ENV === 'production') {
  validateEnv();
} 